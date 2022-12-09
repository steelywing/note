# Access control

Nginx use the first match

```nginx
server {
    # { allow | deny } { <IP address> | <CIDR> | all }
    deny   192.168.1.1;
    allow  192.168.1.1/24;
    deny   all;

    # ...
}
```

:::note Reference

[ngx_stream_access_module](https://nginx.org/en/docs/stream/ngx_stream_access_module.html)

:::
