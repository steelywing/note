## Order

[Reference](https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html)

``Order Allow, Deny``

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

``Order Deny, Allow``

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

[Reference](https://httpd.apache.org/docs/2.4/sections.html#merging)

- ``<Directory>``
- ``<DirectoryMatch>`` and ``<Directory "~">``
- ``<Files>`` and ``<FilesMatch>``
- ``<Location>`` and ``<LocationMatch>``
- ``<If>``

Sections having same priority are processed in the configuration file order.
