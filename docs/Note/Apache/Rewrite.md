---
sidebar_label: `Rewrite`
---

# Rewrite / Redirect URI - Apache

> Ref: [Apache mod_rewrite Introduction](https://httpd.apache.org/docs/2.4/rewrite/intro.html)

> Ref: [Apache Module mod_rewrite](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html)

Use PCRE to rewrite URL

- `!`: not match
- `=`: match plain string

```apacheconf
RewriteEngine { on | off }
RewriteCond "<test string>" "[!]<RegExp condition>" [<flags>]
RewriteCond "<test string>" "[!]=<string condition>" [<flags>]
RewriteRule "<RegExp pattern>" "<substitution>" [<flags>]
```

> Ref: [RewriteCond Directive](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond)

- By default, the query string is passed through unchanged
- To replace query string, append `?<query>` to `<substitution>`
- To combin original query string, use `[QSA]` flag

Redirect HTTP to HTTPS

```apacheconf
RewriteEngine on
RewriteCond "%{HTTPS}" "=off"
RewriteRule "^/?(.*)" "https://%{HTTP_HOST}/$1" [R,L]
```

Debug

```apacheconf
LogLevel alert rewrite:trace3
```
