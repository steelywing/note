# Table of Contents
- [Table of Contents](#table-of-contents)
- [Version](#version)
- [RSA key](#rsa-key)
  - [Generating RSA key](#generating-rsa-key)
  - [View RSA key file](#view-rsa-key-file)
  - [Extracting RSA public key](#extracting-rsa-public-key)
- [CSR (Certificate Signing Request)](#csr-certificate-signing-request)
  - [Creating CSR](#creating-csr)
  - [CSR config](#csr-config)

# Version
```sh
openssl version
```

# RSA key

## Generating RSA key

```sh
# Default key lenght = 2048
openssl genrsa [-out <file>] [<key length>]
```

## View RSA key file

```sh
openssl rsa -text -in <key file> [-noout]
```

## Extracting RSA public key

```sh
openssl rsa -in <key file> -pubout -out <public key file>
```

# CSR (Certificate Signing Request)

[Reference](https://www.digicert.com/ssl-support/openssl-quick-reference-guide.htm)

[Reference](https://www.openssl.org/docs/manmaster/man1/req.html)

## Creating CSR

```sh
# <subject> = "/C=<country>/ST=<state>/L=<locality>/O=<organization>/OU=<organizational unit>/CN=<common name>/emailAddress=<email>"
openssl req -new -key <key file> -out <CSR file> [-subj <subject>] [-config <config file>]
```

## CSR config

```ini
[ req ]
# <key length> = 2048 / 4096 / ...
default_bits            = <key length>
default_keyfile         = <key file>
distinguished_name      = req_distinguished_name
prompt                  = no
encrypt_key             = no
req_extensions          = req_ext

[ req_distinguished_name ]
# C=
# <country> = US / HK / MO / ...
countryName             = <country>
# ST=
stateOrProvinceName     = <state>
# L=
localityName            = <city>
# O=
organizationName        = <company>
# OU=
organizationalUnitName  = <departement>
# CN=
# For wildcard: *.domain.com
commonName              = <domain>

emailAddress            = <email>

[ req_ext ]
# Reference: https://www.openssl.org/docs/manmaster/man5/x509v3_config.html#Subject-Alternative-Name
# subjectAltName=DNS:<domain>,DNS:<domain>...
subjectAltName = @alt_section

[ alt_section ]
DNS.1 = <domain>
DNS.2 = <domain>
# ...
```
