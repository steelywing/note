# `$host`

`$host` is in this order of precedence (from high to low):

- [Host name from the request line](#host-name-from-the-request-line) (rarely used)
  ```
  GET http://example.org/test/
  ```
- `Host` request header field
- The `server_name` (in Nginx config) matching a request, even if `server_name` is wildcard (`*.example.org`)

## Host name from the request line

When open URL `http://example.org/test/` ...

Most browser send the request like this

```
GET /test/ HTTP/1.1
Host: example.org
```

Most browser doesn't send the request like this

```
GET http://example.org/test/ HTTP/1.1
```

## Validation

### Nginx testing config

```nginx
server {
    listen       80;
    server_name  *.example.org;

    location / {
        default_type "text/plain";
        return 200 "[host] = $host";
    }
}
```

### When all exist ...

`$host` = host name from the request line

```bash
curl http://127.0.0.1 -v \
  --request-target http://request.example.org/test/ \
  --path-as-is \
  -H "Host: host.example.org"
```

This command will

- Connect to `127.0.0.1`
- Send request path as `GET http://request.example.org/test/ HTTP/1.1`
- Set `Host` header to `Host: host.example.org`

```
*   Trying 127.0.0.1:80...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET http://request.example.org/test/ HTTP/1.1
> Host: host.example.org
> User-Agent: curl/7.68.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx/1.23.1
< Date: Fri, 21 Oct 2022 02:00:56 GMT
< Content-Type: text/plain
< Content-Length: 28
< Connection: keep-alive
<
* Connection #0 to host 127.0.0.1 left intact
[host] = request.example.org
```

### When only `Host` header exist ...

`$host` = `Host` header

```bash
curl http://127.0.0.1/test/ -v \
  -H "Host: host.example.org"
```

```
*   Trying 127.0.0.1:80...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET /test/ HTTP/1.1
> Host: host.example.org
> User-Agent: curl/7.68.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx/1.23.1
< Date: Fri, 21 Oct 2022 02:01:37 GMT
< Content-Type: text/plain
< Content-Length: 25
< Connection: keep-alive
<
* Connection #0 to host 127.0.0.1 left intact
[host] = host.example.org
```

### When none exist ...

`$host` = `server_name` (in Nginx config)

```bash
# HTTP 1.1 must have Host header, so use HTTP 1.0
curl http://127.0.0.1/test/ -v -H "Host:" -0
```

```
*   Trying 127.0.0.1:80...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET /test/ HTTP/1.0
> User-Agent: curl/7.68.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx/1.23.1
< Date: Fri, 21 Oct 2022 02:02:20 GMT
< Content-Type: text/plain
< Content-Length: 22
< Connection: close
<
* Closing connection 0
[host] = *.example.org
```

> Ref: [ngx_http_core_module](http://nginx.org/en/docs/http/ngx_http_core_module.html#var_host)
