## Table of Contents
- [Table of Contents](#table-of-contents)
- [File format](#file-format)
  - [PEM](#pem)
  - [PKCS #12 (`.p12`)](#pkcs-12-p12)
- [Version](#version)
- [X509 (TLS/SSL certificate)](#x509-tlsssl-certificate)
- [CSR (Certificate Signing Request)](#csr-certificate-signing-request)
- [RSA key](#rsa-key)

## File format

### PEM

[RFC 1421](https://tools.ietf.org/html/rfc1421)

Use to store X509 certificate (`.crt`), public / private key (`.key`), certificate signing request (`.csr`)

### PKCS #12 (`.p12`)

[RFC 7292](https://tools.ietf.org/html/rfc7292)

Bundle X509 full chain certificate, private key

## Version

```bash
openssl version
```

## X509 (TLS/SSL certificate)

[Reference](https://www.openssl.org/docs/man1.1.1/man1/x509.html)

Self signed certificate

```bash
openssl x509 
    -req 
    -in <file.csr> 
    -days <days>
    -signkey <file.key> 
    -out <file.crt> 
```

CA (Certificate Authority) sign certificate

```bash
openssl x509 
    -req 
    -in <file.csr> 
    -days <days> 
    -CA <ca.crt> 
    -CAkey <ca.key> 
    { -CAcreateserial | -set_serial <serial> } 
    -out <cert.{crt|pem}>
```

Display the contents of certificate (PEM/CRT)

```bash
openssl x509 -in <file.{pem|crt}> -text -noout
```

## CSR (Certificate Signing Request)

- [Reference](https://www.digicert.com/ssl-support/openssl-quick-reference-guide.htm)
- [Reference](https://www.openssl.org/docs/man1.1.1/man1/openssl-req.html)
- [RFC 2986](https://tools.ietf.org/html/rfc2986)

Creating CSR

```bash
# <subject> = "/C=<country>/ST=<state>/L=<locality>/O=<organization>/OU=<organizational unit>/CN=<common name>/emailAddress=<email>"
openssl req -new -key <file.key> -out <file.csr> [-subj <subject>] [-config <config.ini>]
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

Verify CSR

```bash
openssl req -text -in <file.csr> -noout -verify
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
