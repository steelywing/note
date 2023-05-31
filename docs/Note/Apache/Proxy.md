---
sidebar_label: Proxy
---

# Proxy - Apache

> Ref: [Apache Module mod_proxy](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html)

## Enable proxy module

```bash
a2enmod proxy
a2enmod proxy_http
```

## Proxy request to backend server

```apacheconf
ProxyPass "/" "http://<server>/"
```

Proxy request that is start with `/api/`

- Request `/api/get` get proxy to `http://<server>/get`

```apacheconf
ProxyPass "/api/" "http://<server>/"
```

Modify the `Location` response header from the backend server to proxy server

- Most often required

```apacheconf
ProxyPass "/" "http://<server>/"
ProxyPassReverse "/" "http://<server>/"
```

## `ProxyPass` to a HTTPS server

```apacheconf
SSLProxyEngine on

# Check if the host from request URI match the CN of the server certificate
SSLProxyCheckPeerName { on | off }

# Checked if the remote server certificate is expired
SSLProxyCheckPeerExpire { on | off }

ProxyPass "/" "https://<server>/"
ProxyPassReverse "/" "https://<server>/"
```

## `ProxyPass` in `<VirtualHost>`

```apacheconf
<VirtualHost *:443>
    SSLEngine on
    ServerName host.example.com
    ProxyPass
</VirtualHost>
```

If no `SSLEngine on`, Apache get this error

```
Oops, no RSA or DSA server certificate found for ...
```
