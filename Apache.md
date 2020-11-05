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
- `<DirectoryMatch>` and `<Directory "~">`
- `<Files>` and `<FilesMatch>`
- `<Location>` and `<LocationMatch>`
- `<If>`

```js
// Pseudo code

var Config = Object.assign(
    {},
    Directory, 
    DirectoryMatch,
    Files,
    Location,
    If
)
```

[`Object.assign reference`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

Sections having same priority are processed in the configuration file order.
