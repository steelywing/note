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

## SSL offloading

[SSL offloading](Proxy.md#ssltls-offloading)
