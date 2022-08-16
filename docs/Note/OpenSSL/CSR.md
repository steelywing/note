# CSR (Certificate Signing Request)

> - [Reference](https://www.digicert.com/ssl-support/openssl-quick-reference-guide.htm)
> - [openssl req](https://www.openssl.org/docs/manmaster/man1/openssl-req.html)
> - [RFC 2986](https://tools.ietf.org/html/rfc2986)

## `<key option>`

Create new key

```bash
# Create new private key, bits = 2048 / 4096
-newkey rsa[:<bits>]
# Don't encrypt private key (no password)
[-nodes]
# The new created private key file
[-keyout <key.pem>]
```

Use exist key

```bash
# Use specified private key file
-key <key.pem>
```

## `<subject options>`

```bash
# <subject> = /C=<country>/ST=<state>/L=<city>/O=<organization>/OU=<section>/CN=<domain>/emailAddress=<email>
[-subj "<subject>"]

# <subjectAltName> = <DNS>|<IP>[,...]
# <DNS> = DNS:example.com
# <IP> = IP:10.0.0.1
[-addext "subjectAltName=<subjectAltName>"]

# Using config file
[-config <config.ini>]
```

## Creating CSR

```bash
openssl req
    <key option>

    # Create new CSR
    -new
    -out <request.csr>

    <subject options>
```

## Self signed certificate

```bash
openssl req
    <key option>

    # Create self signed CRT (certificate) instead of CSR
    -x509
    -out <cert.pem>

    # See X509
    [<X509 options>]
    [-set_serial <number>]
    [-days <days>]
    [...]

    <subject options>
```

## CSR configuration file

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

## Generate CSR from an existing certificate

```bash
openssl x509
  -in <cert.crt>
  -signkey <key.pem>
  -x509toreq
  -out <cert.csr>
```

## Verify CSR signature

```bash
openssl req -text -in <file.csr> -noout -verify
```
