# Table of Contents
- [Table of Contents](#Table-of-Contents)
- [Version](#Version)
- [RSA key](#RSA-key)
  - [Generating RSA key](#Generating-RSA-key)
  - [View RSA key file](#View-RSA-key-file)
  - [Extracting RSA public key](#Extracting-RSA-public-key)
- [CSR (Certificate Signing Request)](#CSR-Certificate-Signing-Request)
  - [Creating CSR](#Creating-CSR)
  - [CSR config](#CSR-config)
  - [Verify CSR](#Verify-CSR)

# Version
```sh
openssl version
```

# RSA key

## Generating RSA key

```sh
# Default key lenght = 2048
openssl genrsa [-out <file.key>] [<key length>]
```

## View RSA key file

```sh
openssl rsa -text -in <file.key> [-noout]
```

## Extracting RSA public key

```sh
openssl rsa -in <file.key> -pubout -out <public.key>
```

# CSR (Certificate Signing Request)

[Reference](https://www.digicert.com/ssl-support/openssl-quick-reference-guide.htm)

[Reference](https://www.openssl.org/docs/manmaster/man1/req.html)

## Creating CSR

```sh
# <subject> = "/C=<country>/ST=<state>/L=<locality>/O=<organization>/OU=<organizational unit>/CN=<common name>/emailAddress=<email>"
openssl req -new -key <file.key> -out <file.csr> [-subj <subject>] [-config <config.ini>]
```

## CSR config

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
# Reference: https://www.openssl.org/docs/manmaster/man5/x509v3_config.html#Subject-Alternative-Name
# subjectAltName=DNS:<domain>,DNS:<domain>...
subjectAltName = @alt_section

[ alt_section ]
DNS.1 = <domain>
DNS.2 = <domain>
# ...
```

## Verify CSR

```sh
openssl req -text -in <file.csr> -noout -verify
```
