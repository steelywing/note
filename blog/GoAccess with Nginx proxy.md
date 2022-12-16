---
tags: [GoAccess, Nginx, Log, Proxy, WebSocket]
---

# GoAccess with Nginx proxy

Setup GoAccess WebSocket with Nginx proxy

<!--truncate-->

## GoAccess

Web log analyzer

## Install

CentOS

```bash
# Install dependency
sudo yum -y install epel-release
sudo yum -y update
sudo yum -y install ncurses-devel gcc

# Optional dependency
sudo yum -y install geoip-devel tokyocabinet-devel

# Download source
wget https://tar.goaccess.io/goaccess-1.6.2.tar.gz
tar -zxf goaccess-1.6.2.tar.gz

# Build
cd goaccess-1.6.2
./configure --enable-utf8 --enable-geoip=mmdb
make
make install
```

## Real-time web output

```bash
goaccess 
    -o /var/www/html/report/index.html
    --log-format=COMBINED
    --real-time-html

    # For WebSocket proxy
    --ws-url=ws://<server IP address>:80/ws/

    /var/log/nginx/access.log
```

Nginx proxy

> Ref: [Nginx WebSocket](https://www.nginx.com/blog/websocket-nginx/)

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        root /usr/share/nginx/html/;
        # ...
    }

    # Proxy WebSocket /ws/ to localhost:7890/
    location /ws/ {
        proxy_pass http://localhost:7890/;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```
