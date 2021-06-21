## No cache header

- [Reference](https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers)
- [Cache-Control](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9)
- [Pragma](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32)
- [Expires](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21)

For HTTP <= 1.0

```
Pragma: no-cache
```

For HTTP 1.0 proxy

```
Expires: 0
```

For HTTP >= 1.1

```
Cache-Control: no-store, must-revalidate
```
