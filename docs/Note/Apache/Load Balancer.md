# Load Balancer

```apacheconf
<Proxy "balancer://cluster">
    BalancerMember "http://<server 1>"
    BalancerMember "http://<server 2>"
</Proxy>
ProxyPass "/" "balancer://cluster/"
ProxyPassReverse "/" "balancer://cluster/"
```

> Ref: [Reverse Proxy Guide](https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html)

> Ref: [Apache Module mod_proxy_balancer](http://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html)

## Sticky session

```apacheconf
Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED
<Proxy "balancer://cluster">
    BalancerMember "http://<server 1>" route=1
    BalancerMember "http://<server 2>" route=2
</Proxy>
ProxyPass "/" "balancer://cluster/"
ProxyPassReverse "/" "balancer://cluster/"
```
