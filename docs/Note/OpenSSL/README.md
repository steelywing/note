# OpenSSL

## File format

### PEM (Privacy-Enhanced Mail)

> [RFC 1421](https://tools.ietf.org/html/rfc1421)

Use to store

- X509 certificate (`.crt` `.pem`)
- Public / private key (`.key` `.pem`)
- Certificate signing request (`.csr` `.pem`)

### PKCS #12 (`.p12`)

> [RFC 7292](https://tools.ietf.org/html/rfc7292)

Bundle X509 full chain certificate, private key

### Convert `.pem` to `.p12`

> [Reference](https://www.openssl.org/docs/manmaster/man1/openssl-pkcs12.html)

```bash
openssl pkcs12 -export
  -in <cert.{crt|pem}>
  [-certfile <ca.crt>]
  -inkey <private-key.pem>
  -out <file.p12>
  [-passout "pass:<password>"]
  [-name "<name>"]
```

## Certificate signature

Certificate content

- Owner DN
- Owner public key
- CA DN
- Certificate extensions
- CA signature (Append after signed)

```js
// Pseudo code
// Content exclude signature
CASignature = encrypt(hash(Content), CAPrivateKey)
```

Verify signature

```js
// Pseudo code
// Content exclude signature
decrypt(CASignature, CAPublicKey) == hash(Content)
```

## Option

| Option | Description |
| - | - |
| `-noout` | Prevents output encoded data |
| `-text` | Print the data in text form |
| `-modulus` | Print the modulus of public key |

## Version

```bash
openssl version
```

## Test SSL/TLS connection

| Protocol | Port |
| - | - |
| HTTPS | 443 |
| IMAPS | 993 |
| IMAP STARTTLS | 143 |
| POP3S | 995 |
| SMTPS | 465 |
| SMTP STARTTLS | 587 |

| Option | Description |
| - | - |
| `-showcerts` | Show full chain certificate |

```bash
openssl s_client [-showcerts] -connect <host>:<port>
```

Show SSL certificate

```bash
openssl s_client -connect <host>:<port> | openssl x509 [-noout] [-text]
```

## Test SMTP / IMAP StartTLS

```bash
openssl s_client -starttls { smtp | imap | pop3 } -showcerts -connect <host>:<port> -servername <domain>
```

## Env

```bash
OPENSSL_CONF=<openssl.cnf>
```

Same as

```bash
openssl ... -config <openssl.cnf>
```

## Show version

```bash
openssl version
```
