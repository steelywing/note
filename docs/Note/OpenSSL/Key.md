# OpenSSL Key

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
