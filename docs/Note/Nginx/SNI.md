# TLS SNI

TLS Server Name Indication

SNI allows browser to pass requested server name during the SSL handshake

:::info

To support multiple SSL `server_name` `server` section, Nginx version must support SNI

:::

## Check SNI support

> [Ref](http://nginx.org/en/docs/http/configuring_https_servers.html)

```bash
$ nginx -V
...
TLS SNI support enabled
...
```

Check the `error_log` that without

```
nginx was built with SNI support, however, now it is linked
dynamically to an OpenSSL library which has no tlsext support,
therefore SNI is not available
```

:::info

If Nginx does not support TLS SNI, Nginx will use default server certificate for all request

:::

## Testing

Create self signed certificate

```bash
openssl req -x509 -newkey rsa -nodes -keyout default.key -days 36500 -out default.crt -subj "/CN=example.org"

openssl req -x509 -newkey rsa -nodes -keyout a.key -days 36500 -out a.crt -subj "/CN=a.example.org"

openssl req -x509 -newkey rsa -nodes -keyout b.key -days 36500 -out b.crt -subj "/CN=b.example.org"
```

```bash
server {
    listen       443 ssl default_server;
    server_name  "";

    ssl_certificate      default.crt;
    ssl_certificate_key  default.key;

    default_type text/plain;
    return 200 "default page";
}

server {
    listen       443 ssl;
    server_name  a.example.org;

    ssl_certificate      a.crt;
    ssl_certificate_key  a.key;

    default_type text/plain;
    return 200 "a.example.org page";
}

server {
    listen       443 ssl;
    server_name  b.example.org;

    ssl_certificate      b.crt;
    ssl_certificate_key  b.key;

    default_type text/plain;
    return 200 "b.example.org page";
}
```

Test SNI

```bash
# Use -v to see the certificate

$ curl --insecure --resolve "a.example.org:443:127.0.0.1" https://a.example.org

a.example.org page

$ curl --insecure --resolve "b.example.org:443:127.0.0.1" https://b.example.org

b.example.org page

$ curl --insecure https://127.0.0.1

default page
```
