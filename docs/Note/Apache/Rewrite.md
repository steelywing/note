---
sidebar_label: Rewrite
---

# Rewrite / Redirect URI - Apache

> Ref: [Apache mod_rewrite Introduction](https://httpd.apache.org/docs/2.4/rewrite/intro.html)

> Ref: [Apache Module mod_rewrite](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html)

## Use PCRE to rewrite URL

- `!`: not match
- `=`: match plain string

```apacheconf
# RewriteEngine { on | off }
RewriteEngine on

# RewriteCond "<test string>" "[!]<RegExp condition>" [<flags>]
RewriteCond "%{REQUEST_URI}" "^/api/"

# RewriteCond "<test string>" "[!][<|>][=]<string condition>" [<flags>]
RewriteCond "%{REQUEST_URI}" "=/data.json" [NC]

RewriteRule "<RegExp pattern>" "<substitution>" [<flags>]
```

- By default, the query string is passed through unchanged
- To replace query string, append `?<query>` to `<substitution>`
- To combin original query string, use `[QSA]` flag

### `RewriteCond`

> Ref: [RewriteCond Directive](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond)

- `RewriteCond` only apply to the next one `RewriteRule`
- Multiple `RewriteCond` implicit AND
- Flag `[OR]` can be append to `RewriteCond`

Flags:

- `[NC]`: no case, case insensitive
- `[QSA]`: query string append
- `[OR]`: combine `RewriteCond` with OR logic
- Flags is comma-separated `[NC,QSA]`

Variables:

| Variable | Description | Value |
|-|-|-|
| `REMOTE_ADDR` | client IP address |
| `HTTPS` | https | `on` or `off` |
| `REQUEST_SCHEME` | scheme | `http` or `https` |
| `REQUEST_FILENAME` | full path of the requested file | `/var/www/data.html` |
| `REQUEST_URI` | request URI, excludes the query string | `/data.html` |
| `THE_REQUEST` | HTTP request line | `GET /data.html HTTP/1.1` |

## Redirect HTTP to HTTPS

```apacheconf
RewriteEngine on
RewriteCond "%{HTTPS}" "=off"
RewriteRule "^/?(.*)" "https://%{HTTP_HOST}/$1" [R,L]
```

See also: [HSTS](../HTTP.md#strict-transport-security)

## Debug

```apacheconf
LogLevel alert rewrite:trace3
```
