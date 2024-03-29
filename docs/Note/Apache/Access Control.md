# Access Control

## Require Directive

> Ref: [Require Directive](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#require)

## `Order` of `Allow` and `Deny`

:::info

*Deprecated* by `Require`

:::

```apache
Order Allow, Deny
```

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

---

```apache
Order Deny, Allow
```

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

> Ref: [Apache Module mod_access_compat](https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html)
