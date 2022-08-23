# Variable

```nginx
$uri = "$uri" = ${uri} = "${uri}"
```

| Variable | Alias | Description |
|-|-|-|
| `$uri` | `$document_uri` | URI, exclude `$args`, change when internal redirect / using `index` |
| `$args` | `$query_string` | query string (the string after `?` in URI) |
| `$document_root` |  | `root` or `alias` value |
| `$host` |  | [`$host`](#host) |
| `$http_host` |  | `Host` request header field |
| `$request_uri` | `$request` | full original request URI (with `$args`) |
| `$remote_addr` |  | client IP address |
| `$remote_port` |  | client port |

## `$host`

In this order of precedence (from high to low)

- Host name from the request line
- `Host` request header field
- The server name matching a request

> [Validation](host.md#validation)

## `if`

| Operator | Description |
|-|-|
| | `''` == `""` |
| | `""` == `false` |
| | `"0"` == `false` |
| `=` | equal |
| `!=` | not equal |
| `~` | match RegExp (case-sensitive) |
| `~*` | match RegExp (case-insensitive) |
| `!~` | not match RegExp (case-sensitive) |
| `!~*` | not match RegExp (case-insensitive) |

## Operator `and`

Method 1

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

Method 2

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
