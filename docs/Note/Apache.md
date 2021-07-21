## Test configuration file syntax

> [Doc](https://httpd.apache.org/docs/2.4/programs/apachectl.html)

```bash
sudo apachectl configtest
```

## `Order` of `Allow` and `Deny`

> *Deprecated* by `Require`

> [Doc](https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html)

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

## Sections order

> [Doc](https://httpd.apache.org/docs/2.4/sections.html#merging)

The order (Priority / Precedence) of merging is

- `<Directory>`
  - Shortest to longest
- `<DirectoryMatch>` and `<Directory "~">`
- `<Files>` and `<FilesMatch>`
  - In the order in the configuration
- `<Location>` and `<LocationMatch>`
  - In the order in the configuration
- `<If>`
  - in the order in the configuration

Sections having same priority are processed in the configuration file order.

## Proxy

> [Doc](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html)

Enable proxy module

```bash
a2enmod proxy
a2enmod proxy_http
```

Proxy request to backend server

```apacheconf
ProxyPass "/" "http://<server>/"
```

Proxy request that is start with `/api`

```apacheconf
ProxyPass "/api" "http://<server>/"
```

Modify the `Location` response header from the backend server to proxy server

> Most often required

```apacheconf
ProxyPass "/" "http://<server>/"
ProxyPassReverse "/" "http://<server>/"
```

`ProxyPass` to a HTTPS server

```apacheconf
SSLProxyEngine on

# Check if the host from request URI match the CN of the server certificate
SSLProxyCheckPeerName { on | off }

# Checked if the remote server certificate is expired
SSLProxyCheckPeerExpire { on | off }

ProxyPass "/" "https://<server>/"
ProxyPassReverse "/" "https://<server>/"
```

## Load balancer

> [How To - Reverse Proxy](https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html)

> [Doc - Proxy Balancer](http://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html)

```apacheconf
<Proxy "balancer://cluster">
    BalancerMember "http://<server 1>"
    BalancerMember "http://<server 2>"
</Proxy>
ProxyPass "/" "balancer://cluster/"
ProxyPassReverse "/" "balancer://cluster/"
```

Sticky session

```apacheconf
Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED
<Proxy "balancer://cluster">
    BalancerMember "http://<server 1>" route=1
    BalancerMember "http://<server 2>" route=2
</Proxy>
ProxyPass "/" "balancer://cluster/"
ProxyPassReverse "/" "balancer://cluster/"
```

## mod_rewrite

> [Intro](https://httpd.apache.org/docs/2.4/rewrite/intro.html)

> [Doc](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html)

Use PCRE to rewrite URL

```apacheconf
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

```apacheconf
RewriteEngine on
RewriteCond "%{HTTPS}" "=off"
RewriteRule "^/?(.*)" "https://%{HTTP_HOST}/$1" [R,L]
```

Debug

```apacheconf
LogLevel alert rewrite:trace3
```

## Client authentication

Using certificate

> [How To](https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html)

> [Doc](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html)

```apacheconf
SSLVerifyClient require
SSLVerifyDepth 1
SSLCACertificateFile "<ca.crt>"

# Optional CRL
SSLCARevocationCheck { chain | leaf | none }
SSLCARevocationFile "<revocation.crl>"
```
