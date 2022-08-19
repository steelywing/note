# `$host`

`$host` in this order of precedence (from high to low): 

- Host name from the request line
- `Host` request header field
- The server name matching a request

## Validation

### Nginx testing config

```nginx
    server {
        listen       80;
        server_name  localhost;

        location / {
            add_header "Content-Type" "text/plain";
            return 200 "[host] = $host";
        }
    }
```

### When all exist ...

`$host` = host name from the request line

```bash
curl http://127.0.0.1 -v \
  --request-target http://request.host.name/test/ \
  --path-as-is \
  -H "Host: host.header"
```

This command will

- Connect to `127.0.0.1`
- Send request path as `GET http://request.host.name/test/ HTTP/1.1`
- Set `Host` header to `Host: host.header`

```
*   Trying 127.0.0.1:80...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET http://request.host.name/test/ HTTP/1.1
> Host: header.host
> User-Agent: curl/7.68.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx/1.14.0
< Date: Fri, 19 Aug 2022 10:27:29 GMT
< Content-Type: application/octet-stream
< Content-Length: 17
< Connection: keep-alive
< Content-Type: text/plain
<
* Connection #0 to host 127.0.0.1 left intact
[host] = request.host.name
```

### When only `Host` header exist ...

`$host` = `Host` header

```bash
curl http://127.0.0.1/test/ -v \
  -H "Host: host.header"
```

```
*   Trying 127.0.0.1:80...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET /test/ HTTP/1.1
> Host: header.host
> User-Agent: curl/7.68.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx/1.14.0
< Date: Fri, 19 Aug 2022 10:35:53 GMT
< Content-Type: application/octet-stream
< Content-Length: 11
< Connection: keep-alive
< Content-Type: text/plain
<
* Connection #0 to host 127.0.0.1 left intact
[host] = header.host
```

### When none exist ...

`$host` = `server_name`

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
< Server: nginx/1.14.0
< Date: Fri, 19 Aug 2022 10:38:16 GMT
< Content-Type: application/octet-stream
< Content-Length: 9
< Connection: close
< Content-Type: text/plain
<
* Closing connection 0
[host] = localhost
```

Ref: [ngx_http_core_module](http://nginx.org/en/docs/http/ngx_http_core_module.html#var_host)
