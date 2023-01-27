# Authentication

## Client certificate authentication

Using certificate

> Ref: [SSL/TLS Strong Encryption: How-To](https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html)

> Ref: [Apache Module mod_ssl](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html)

```apacheconf
SSLVerifyClient require
SSLVerifyDepth 1
SSLCACertificateFile "<ca.crt>"

# Optional CRL
SSLCARevocationCheck { chain | leaf | none }
SSLCARevocationFile "<revocation.crl>"
```
