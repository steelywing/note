# Variable

```nginx
$uri = "$uri" = ${uri} = "${uri}"
```

> [Var Index](https://nginx.org/en/docs/varindex.html)

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
