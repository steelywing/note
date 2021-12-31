## File format

### PEM (Privacy-Enhanced Mail)

[RFC 1421](https://tools.ietf.org/html/rfc1421)

Use to store

- X509 certificate (`.crt` `.pem`)
- Public / private key (`.key` `.pem`)
- Certificate signing request (`.csr` `.pem`)

### PKCS #12 (`.p12`)

[RFC 7292](https://tools.ietf.org/html/rfc7292)

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
- CA signature (Append after signed)
- Certificate extensions

```js
// Pseudo code
// Content is excluded signature
CASignature = encrypt(hash(Content), CAPrivateKey)
```

Verify signature

```js
// Pseudo code
// Content is excluded signature
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

## RSA key

Generating RSA key

```bash
# Default key lenght = 2048
openssl genrsa [-out <file.key>] [<key length>]
```

View RSA key file

```bash
openssl rsa -in <file.key> -text -noout
```

Extracting RSA public key

```bash
openssl rsa -in <file.key> -pubout -out <public.key>
```

## CSR (Certificate Signing Request)

> - [Reference](https://www.digicert.com/ssl-support/openssl-quick-reference-guide.htm)
> - [openssl req](https://www.openssl.org/docs/manmaster/man1/openssl-req.html)
> - [RFC 2986](https://tools.ietf.org/html/rfc2986)

Creating CSR

```bash
openssl req \
  -x509 \
  -new \
  # The new created private key
  -keyout <key.pem>
  -days <days>
  -out <cert.{crt|pem}>
```

```bash
openssl req -new 
  {
    # Create new private key, bits = 2048 / 4096
    -newkey rsa[:<bits>]
      # Don't encrypt private key (no password)
      [-nodes]
      # The new created private key
      [-keyout <key.pem>] |
    # Use specified private key
    -key <key.pem>
  }
  [
    # Output a CRT (certificate) instead of CSR
    -x509
    # See X509
    [<X509 options>]
    [-set_serial <number>]
    [-days <days>]
    [...]
  ]
  -out <request.csr>
  # <subject> = "/C=<country>/ST=<state>/L=<city>/O=<organization>/OU=<section>/CN=<domain>/emailAddress=<email>"
  [-subj <subject>]
  [-config <config.ini>]
```

CSR configuration file `.ini`

```ini
[ req ]
# <key length> = 2048 / 4096 / ...
default_bits = <key length>
default_keyfile = <key file>
distinguished_name = req_distinguished_name
prompt = no
encrypt_key = no
req_extensions = req_ext

[ req_distinguished_name ]

# C=
# <country> = US | HK | TW | ...
# ISO 3166-1 alpha-2
# two-letter country codes
countryName = <country>

# ST=
stateOrProvinceName = <state>

# L=
localityName = <city>

# O=
organizationName = <company>
# Multiple organization
# 1.organizationName = <company>
# 2.organizationName = <company>

# OU=
organizationalUnitName = <section / department>

# CN=
# For wildcard: *.example.com
commonName = <domain>

emailAddress = <email>

[ req_ext ]
# Reference: https://www.openssl.org/docs/man1.1.1/man5/x509v3_config.html#Subject-Alternative-Name

# subjectAltName=DNS:<domain>,DNS:<domain>...

# same as

subjectAltName = @alt_section

[ alt_section ]
DNS.1 = <domain>
DNS.2 = <domain>
# ...
```

Verify CSR signature

```bash
openssl req -text -in <file.csr> -noout -verify
```

## X509 (TLS/SSL certificate)

> [Reference](https://www.openssl.org/docs/man1.1.1/man1/x509.html)

Certificate display and signing

[Self signed certificate with new key](#csr-certificate-signing-request)

Self signed certificate using existing key

```bash
openssl x509 
    # By default input is CRT (certificate)
    # Use CSR as input
    -req
    -in <request.csr> 
    -days <days>
    # Private key use for signing
    -signkey <key.pem> 
    -out <cert.{crt|pem}> 
```

CA (Certificate Authority) sign certificate

```bash
openssl x509 
    -req 
    -in <request.csr> 
    -days <days> 
    -CA <ca.crt> 
    # CA private key
    -CAkey <ca.key> 
    {
      # Create new serial number file
      -CAcreateserial |
      # Specify serial number file, `$(basename <ca.crt> .crt).srl` by default
      -CAserial <filename> |
      # Specify serial number, Decimal 01 02..., Hex 0x1 0x2...
      -set_serial <serial>
    } 
    -out <cert.{crt|pem}>
```

Display the contents of certificate (`.crt`)

| Option | Description |
| - | - |
| `-dates` | Print the start and expiry dates |

```bash
openssl x509 -in <cert.{crt|pem}> [-dates] -text -noout
```

Verify if a private key matches a certificate

> [Reference](https://www.ibm.com/support/pages/how-verify-if-private-key-matches-certificate)

```bash
openssl x509 -noout -modulus -in <cert.crt> | openssl md5
openssl rsa -noout -modulus -in <private-key.pem> | openssl md5
openssl req -noout -modulus -in <csr.pem> | openssl md5
```

## Full chain certificate

`CA = Chain`

```bash
cat <cert.crt> <chain.crt> > <fullchain.crt>
```

```
 -----BEGIN CERTIFICATE-----
cert.crt
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
CA.crt
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
TrustedRoot.crt
-----END CERTIFICATE----- 
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

## CA (Certificate Authority)

> - [Reference](https://www.openssl.org/docs/manmaster/man1/openssl-ca.html)
> - [X509 V3](https://www.openssl.org/docs/manmaster/man5/x509v3_config.html)

Config

```properties
[ ca ]
default_ca      = CA_default

[ CA_default ]

dir             = .
database        = $dir/database.txt
new_certs_dir   = $dir/new_certs
unique_subject  = no

certificate     = $dir/ca.crt
serial          = $dir/ca.srl
# rand_serial     = yes
private_key     = $dir/private/ca.key
RANDFILE        = $dir/private/.rand

default_days    = 365000
default_crl_days= 365000
default_md      = sha256

policy          = policy_any
email_in_dn     = no

# Subject name display option
name_opt        = ca_default
# Certificate display option
cert_opt        = ca_default
copy_extensions = copy

x509_extensions = extensions
crl_extensions  = crl_exts

[ policy_any ]
countryName             = optional
stateOrProvinceName     = optional
localityName            = optional
organizationName        = supplied
organizationalUnitName  = optional
commonName              = supplied
emailAddress            = optional

[ extensions ]
# CA certificate
# basicConstraints        = critical, CA:TRUE
# basicConstraints        = critical, CA:TRUE, pathlen:1

# End-user certificate
basicConstraints        = CA:FALSE

subjectKeyIdentifier    = hash
authorityKeyIdentifier  = keyid:always, issuer:always
issuerAltName           = issuer:copy
crlDistributionPoints   = URI:http://example.com/ca.crl

[ crl_exts ]
authorityKeyIdentifier = keyid:always,issuer:always
```

### CA sign certificate

```bash
openssl ca
  [-batch] # No prompt
  [-config <ca.conf>]
  -in <request.csr>
  -out <cert.{crt|pem}>
```

## Revoke signed certificate

```bash
openssl ca
  [-config <ca.conf>]
  -revoke <cert.{crt|pem}>
```

### CRL (Certificate Revocation List)

```bash
openssl ca -gencrl
  [-config <ca.conf>]
  -out <revoked.crl>
```

## Env

```bash
OPENSSL_CONF=<openssl.cnf>
```

Same as

```bash
openssl ... -config <openssl.cnf>
```
