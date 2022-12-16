---
tags: [Nginx, Proxy, Load Balancing]
---

# Load balancing

> Ref: [Load balancer](http://nginx.org/en/docs/http/load_balancing.html)

```nginx
upstream backends {
    # Method 1 (Default)
    # round-robin

    # Method 2
    # request is assigned to least-connected server
    least_conn;

    # Method 3
    # based on the client IP address
    ip_hash;

    # default <weight> = 1
    # server <host> [weight=<weight>]

    # Every 5 requests:
    # - 4 requests redirect to 10.0.0.1:80
    # - 1 request redirect to 10.0.0.2:80
    server 10.0.0.1:80 weight=4;
    server 10.0.0.2:80;
    
    # ...
}
