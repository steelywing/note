# `if`

:::caution

Nginx `if` implement is weird, see

- [Internal Implementation](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#internals)
- [If is Evil](https://www.nginx.com/resources/wiki/start/topics/depth/ifisevil/)

:::

```nginx
if ($args = "alice") {
    # ...
}
```

- The left side must be variable `$...`

Operator | Description
-|-
|| `''` same as `""`
|| `""` == `false`
|| `"0"` == `false`
`=` | equal
`!=` | not equal
`~` | match RegExp (case-sensitive)
`~*` | match RegExp (case-insensitive)
`!~` | not match RegExp (case-sensitive)
`!~*` | not match RegExp (case-insensitive)

## Flow

- Only `ngx_http_rewrite_module` directives (`break`, `if`, `return`, `rewrite`, ... ) execute as flow
- If `if` matched, Nginx change the context to the `if` block
- All support `if` context but not `ngx_http_rewrite_module` directives (`add_header`, `proxy_pass`, ...), Nginx does not execute that, Nginx will only set context block as that

### Example

Only `X-Second 2` header will be present in response

```nginx
location / {
    # 1: if this location is matched, Nginx set the config block to `location /`

    set $true 1;

    if ($true) {
        # 2: if matched, Nginx set the config block to this `if` block

        # because add_header is not ngx_http_rewrite_module directive, Nginx does not execute add_header

        add_header X-First 1;
    }

    if ($true) {
        # 3: if matched, Nginx set the config block to this `if` block

        # Finally, Nginx use this `if` block as final config block, so the response header only has `X-Second 2`

        add_header X-Second 2;
    }

    return 204;
}
```

## Operator `and`

:::caution

- Nginx change the context block when `if` matched ([If is evil](https://www.nginx.com/resources/wiki/start/topics/depth/ifisevil/))
- To avoid `if` side effect, using `map` is better

:::

Method 1

> **Recommended**

```nginx
# if ($arg_a == "alice" && $arg_b == "bob")

http {
    map $arg_a $match_a {
        default 0;
        alice 1;
    }
    map $arg_b $match_b {
        default 0;
        bob 1;
    }
    map "$match_a$match_b" $match {
        default 0;
        11 1;
    }

    server {
        if ($match) {
            # ...
        }
        # ...
    }
}
```

Method 2

```nginx
set $and 1;

if (<not condition>) {
    set $and 0;
}

if (<not condition>) {
    set $and 0;
}

if ($and) {
    # ...
}
```

Method 3

```nginx
set $and ""

if (<condition>) {
    set $and "0";
}

if (<condition>) {
    set $and "${and}1";
}

if ($and = "01") {
    # ...
}
```
