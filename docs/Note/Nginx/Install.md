# Install - Nginx

## Nginx repository

### Nginx official repository

> [Official](http://nginx.org/en/linux_packages.html)

CentOS / Red Hat

```ini file=/etc/yum.repos.d/nginx.repo
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

Ubuntu

Method 1

```bash file=/etc/apt/sources.list.d/nginx.list
# Replace $release with your corresponding Ubuntu release.
# Ubuntu 18 = bionic
# Ubuntu 20 = focal
# Ubuntu 22 = jammy

deb https://nginx.org/packages/ubuntu/ $release nginx
deb-src https://nginx.org/packages/ubuntu/ $release nginx
```

Method 2

```bash
# Install the prerequisites
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring

# Import the GPG key
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

# Verify the GPG key
gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

# Add repository
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

sudo apt update
sudo apt install nginx
```

### CentOS EPEL repository

Less update

```bash
sudo yum install epel-release
```

## Install Nginx

Red Hat / CentOS

```bash
sudo yum install nginx
```

Ubuntu

```bash
sudo apt update
sudo apt install nginx
```

## Allow HTTP / HTTPS traffic in firewall

Red Hat / CentOS

```bash
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

## Start Nginx

```bash
sudo systemctl start nginx
```

## Auto start

```bash
sudo systemctl { enable | disable } nginx
```

## Restart Nginx

Method 1

```bash
sudo systemctl restart nginx
```

Method 2

```bash
nginx -s reload
```

## Build from source

CentOS

```bash
# Install dependency
yum install -y make gcc perl-core pcre-devel zlib-devel wget

OPENSSL=openssl-1.1.1q

# Download OpenSSL
wget https://www.openssl.org/source/$OPENSSL.tar.gz
tar -zxf $OPENSSL.tar.gz

# Download Nginx
wget http://nginx.org/download/nginx-1.22.0.tar.gz
tar -zxf nginx-1.22.0.tar.gz

# Get original Nginx config
nginx -V

cd nginx-1.22.0

# Nginx CentOS default config
./configure \
    --with-openssl="../$OPENSSL" \
    --prefix=/etc/nginx \
    --sbin-path=/usr/sbin/nginx \
    --modules-path=/usr/lib64/nginx/modules \
    --conf-path=/etc/nginx/nginx.conf \
    --error-log-path=/var/log/nginx/error.log \
    --http-log-path=/var/log/nginx/access.log \
    --pid-path=/var/run/nginx.pid \
    --lock-path=/var/run/nginx.lock \
    --http-client-body-temp-path=/var/cache/nginx/client_temp \
    --http-proxy-temp-path=/var/cache/nginx/proxy_temp \
    --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \
    --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \
    --http-scgi-temp-path=/var/cache/nginx/scgi_temp \
    --user=nginx \
    --group=nginx \
    --with-compat \
    --with-file-aio \
    --with-threads \
    --with-http_addition_module \
    --with-http_auth_request_module \
    --with-http_dav_module \
    --with-http_flv_module \
    --with-http_gunzip_module \
    --with-http_gzip_static_module \
    --with-http_mp4_module \
    --with-http_random_index_module \
    --with-http_realip_module \
    --with-http_secure_link_module \
    --with-http_slice_module \
    --with-http_ssl_module \
    --with-http_stub_status_module \
    --with-http_sub_module \
    --with-http_v2_module \
    --with-mail \
    --with-mail_ssl_module \
    --with-stream \
    --with-stream_realip_module \
    --with-stream_ssl_module \
    --with-stream_ssl_preread_module

# Build
make
sudo make install
```
