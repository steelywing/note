## Test configuration file syntax

> [Reference](https://httpd.apache.org/docs/2.4/programs/apachectl.html)

```bash
sudo apachectl configtest
```

## Order

> *Deprecated* by `Require`

> [Reference](https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html)

`Order Allow, Deny`

```javascript
// Pseudo code

function isAllow(match_allow, match_deny) {
    // Default
    allow = false;

    if (match_allow) {
        allow = true;
    }

    if (match_deny) {
        allow = false;
    }

    return allow;
}
```

`Order Deny, Allow`

```javascript
// Pseudo code

function isAllow(match_allow, match_deny) {
    // Default
    allow = true;

    if (match_deny) {
        allow = false;
    }

    if (match_allow) {
        allow = true;
    }

    return allow;
}
```

## Sections order ( Priority / Precedence )

> [Reference](https://httpd.apache.org/docs/2.4/sections.html#merging)

The order of merging is

- `<Directory>`
  - Shortest to longest
- `<DirectoryMatch>` and `<Directory "~">`
- `<Files>` and `<FilesMatch>`
  - In the order in the configuration
- `<Location>` and `<LocationMatch>`
  - In the order in the configuration
- `<If>`
  - in the order in the configuration

```js
// Pseudo code

function getConfig(request) {
    var config = {};
    if (Directory.match(request)) {
        Object.assign(config, Directory.config);
    }
    if (DirectoryMatch.match(request)) {
        Object.assign(config, DirectoryMatch.config);
    }
    if (Files.match(request)) {
        Object.assign(config, Files.config);
    }
    if (Location.match(request)) {
        Object.assign(config, Location.config);
    }
    if (If.match(request)) {
        Object.assign(config, If.config);
    }
    return config;
}
```

[`Object.assign reference`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

Sections having same priority are processed in the configuration file order.

## Proxy

> [Reference](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html)

Enable proxy module

```bash
a2enmod proxy
a2enmod proxy_http
```

Proxy request to backend server

```apache
ProxyPass "/" "http://<server>/"
```

Proxy request that is start with `/api`

```apache
ProxyPass "/api" "http://<server>"
```

Modify the `Location` response header from the backend server to proxy server

> Most often required

```apache
ProxyPass "/" "http://<server>/"
ProxyPassReverse "/" "http://<server>/"
```

`ProxyPass` to a HTTPS server

```apache
SSLProxyEngine on

# Check if the host from request URI match the CN of the certificate
SSLProxyCheckPeerName { on | off }

# Checked if the remote server certificate is expired
SSLProxyCheckPeerExpire { on | off }

ProxyPass "/" "https://<server>/"
ProxyPassReverse "/" "https://<server>/"
```

## Load balancer

> Reference
> - [Reverse Proxy](https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html)
> - [Proxy Balancer](http://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html)

```apache
<Proxy "balancer://cluster">
    BalancerMember "http://<server 1>"
    BalancerMember "http://<server 2>"
</Proxy>
ProxyPass "/" "balancer://cluster/"
ProxyPassReverse "/" "balancer://cluster/"
```

Sticky session

```apache
Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED
<Proxy "balancer://cluster">
    BalancerMember "http://<server 1>" route=1
    BalancerMember "http://<server 2>" route=2
</Proxy>
ProxyPass "/" "balancer://cluster/"
ProxyPassReverse "/" "balancer://cluster/"
```

## mod_rewrite

> - [Intro](https://httpd.apache.org/docs/2.4/rewrite/intro.html)
> - [Reference](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html)

Use PCRE to rewrite URL

```apache
RewriteEngine { on | off }
RewriteCond "<test string>" "[!]<RegExp condition>" [<flags>]
RewriteCond "<test string>" "[!]=<string condition>" [<flags>]
RewriteRule "<RegExp pattern>" "<substitution>" [<flags>]
```

> [Variable](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond)

- By default, the query string is passed through unchanged
- To replace query string, append `?<query>` to `<substitution>`
- To combin original query string, use `[QSA]` flag

Redirect HTTP to HTTPS

```apache
RewriteEngine on
RewriteCond "%{HTTPS}" "=off"
RewriteRule "^/?(.*)" "https://%{HTTP_HOST}/$1" [R,L]
```

Debug

```apache
LogLevel alert rewrite:trace3
```

## Client authentication

Using certificate

> - [Reference](https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html)
> - [Reference](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html)

```apache
SSLVerifyClient require
SSLVerifyDepth 1
SSLCACertificateFile "<ca.crt>"

# Optional CRL
SSLCARevocationCheck { chain | leaf | none }
SSLCARevocationFile "<revocation.crl>"
```
