# CA

Certificate Authority

> - [Reference](https://www.openssl.org/docs/manmaster/man1/openssl-ca.html)
> - [X509 V3](https://www.openssl.org/docs/manmaster/man5/x509v3_config.html)

## Config

```ini
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

## CA certificate

[Create self signed certificate](CSR.md#self-signed-certificate)

## CA sign certificate

```bash
openssl ca
    # No prompt
    [-batch]

    [-config <ca.conf>]

    -in <request.csr>
    -out <cert.{crt|pem}>
```

## CRL

Certificate Revocation List

## Revoke signed certificate

```bash
openssl ca
    [-config <ca.conf>]
    -revoke <cert.{crt|pem}>
```

### Generate CRL file

```bash
openssl ca -gencrl
    [-config <ca.conf>]
    -out <revoked.crl>
```
