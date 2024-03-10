# Location

## Priority / Flow

- Test the URI against all prefix strings.
- If the exact match `=` is found, the search stops.
- If the `^~` (caret-tilde) modifier prepends the longest matching prefix string, the regular expressions are not checked.
- Store the longest matching prefix string.
- Test the URI against regular expressions.
- Stop processing when the first matching regular expression is found and use the corresponding location.
- If no regular expression matches, use the location corresponding to the stored prefix string.

> Ref: [Nginx Location Priority](https://docs.nginx.com/nginx/admin-guide/web-server/web-server/#nginx-location-priority)

## Named location

- Named locations preserve `$uri` as it was
- Can be reached only via `error_page`, `try_files`

```nginx
location @named_location {
    # ...
}
```

> Ref: [Nginx FAQ](https://www.nginx.com/resources/wiki/community/faq/#what-does-this-thing-mean)

> Ref: [ngx_http_core_module](https://nginx.org/en/docs/http/ngx_http_core_module.html#location)

## `internal` location

```nginx
location ... {
    internal;
}
```

- `internal` only can be accessed from [internal requests](#internal-request--internal-redirect)
- return error status `404` if that is external requests

## Internal request / Internal redirect

Internal requests are requests by:

- `rewrite` directive
- `error_page`, `index`, `random_index`, and `try_files` directives
- `X-Accel-Redirect` response header field from an upstream server
- “include virtual” command of the `ngx_http_ssi_module` module, by the `ngx_http_addition_module` module directives, and by `auth_request` and `mirror` directives;
