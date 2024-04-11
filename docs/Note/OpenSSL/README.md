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

```sh
openssl pkcs12 -export
  -in <cert.{crt|pem}>
  [-certfile <ca.crt>]
  -inkey <private-key.pem>
  -out <file.p12>
  [-passout "pass:<password>"]
  [-name "<name>"]
```

## Certificate signature

> Ref: [Digital signatures in SSL/TLS](./mq93.secure.pdf#unique_22)

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

```sh
openssl version
```

## Env

```sh
OPENSSL_CONF=<openssl.cnf>
```

Same as

```sh
openssl ... -config <openssl.cnf>
```

## Show version

```sh
openssl version
```
