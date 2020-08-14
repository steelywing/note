## Table of Contents
- [Table of Contents](#table-of-contents)
- [File format](#file-format)
  - [PEM (Privacy-Enhanced Mail)](#pem-privacy-enhanced-mail)
  - [PKCS #12 (`.p12`)](#pkcs-12-p12)
- [Option](#option)
- [Version](#version)
- [RSA key](#rsa-key)
- [X509 (TLS/SSL certificate)](#x509-tlsssl-certificate)
- [CSR (Certificate Signing Request)](#csr-certificate-signing-request)
- [Full chain certificate](#full-chain-certificate)
- [Test SSL/TLS connection](#test-ssltls-connection)

## File format

### PEM (Privacy-Enhanced Mail)

[RFC 1421](https://tools.ietf.org/html/rfc1421)

Use to store

- X509 certificate (`.crt`)
- Public / private key (`.key`)
- Certificate signing request (`.csr`)

### PKCS #12 (`.p12`)

[RFC 7292](https://tools.ietf.org/html/rfc7292)

Bundle X509 full chain certificate, private key

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

## X509 (TLS/SSL certificate)

[Reference](https://www.openssl.org/docs/man1.1.1/man1/x509.html)

Self signed certificate

```bash
openssl x509 
    -req 
    -in <request.csr> 
    -days <days>
    -signkey <private.key> 
    -out <cert.{crt|pem}> 
```

| Option | Description |
| - | - |
| `-req` | Use CSR as input (default is CRT) |

CA (Certificate Authority) sign certificate

```bash
openssl x509 
    -req 
    -in <request.csr> 
    -days <days> 
    -CA <ca.crt> 
    -CAkey <ca.key> 
    { -CAcreateserial | -set_serial <serial> } 
    -out <cert.{crt|pem}>
```

Display the contents of certificate (`.crt`)

```bash
openssl x509 -in <cert.{crt|pem}> -text -noout
```

## CSR (Certificate Signing Request)

- [Reference](https://www.digicert.com/ssl-support/openssl-quick-reference-guide.htm)
- [Reference](https://www.openssl.org/docs/man1.1.1/man1/openssl-req.html)
- [RFC 2986](https://tools.ietf.org/html/rfc2986)

Creating CSR

```bash
# <subject> = "/C=<country>/ST=<state>/L=<locality>/O=<organization>/OU=<organizational unit>/CN=<common name>/emailAddress=<email>"
openssl req -new 
  { -newkey rsa[:<bits>] [-nodes] | -key <private.key> }
  -out <request.csr>
  [-subj <subject>]
  [-config <config.ini>]
```

| Option | Description |
| - | - |
| `-nodes` | Don't encrypt private key |

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
# <country> = US / HK / MO / ...
countryName = <country>
# ST=
stateOrProvinceName = <state>
# L=
localityName = <city>
# O=
organizationName = <company>
# OU=
organizationalUnitName = <departement>
# CN=
# For wildcard: *.domain.com
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

## Full chain certificate

```bash
cat <cert.crt> <chain.crt> > <fullchain.crt>
```

## Test SSL/TLS connection

```bash
openssl s_client -connect <host>:<port>
```
