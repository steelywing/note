# SSL / TLS

```nginx
server {
    listen 443 ssl;
    server_name www.example.com;

    # The certificate file
    # Support chained certificate
    ssl_certificate www.example.com.crt;

    # The private key file
    ssl_certificate_key www.example.com.key;
}
```

## DH param

Generate DH param file

```bash
openssl dhparam 4096 -out /etc/nginx/dhparam.pem
```

```bash
server {
    ssl_dhparam /etc/nginx/dhparam.pem;
}
```

## SSL offloading

[SSL offloading](Proxy.md#ssltls-offloading)

## SSL recommended config

[Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/) ([GitHub](https://github.com/mozilla/ssl-config-generator))
