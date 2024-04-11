# HTTP

## No cache header

- [Reference](https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers)
- [Cache-Control](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9)
- [Pragma](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32)
- [Expires](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21)

For HTTP \<= 1.0

```http
Pragma: no-cache
```

For HTTP 1.0 proxy

```http
Expires: 0
```

For HTTP \>= 1.1

```http
Cache-Control: no-store, must-revalidate
```

## `Strict-Transport-Security`

The HSTS (HTTP Strict-Transport-Security) response header informs browsers that the site should only be accessed using HTTPS

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```
