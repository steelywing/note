# Install Nginx

## Nginx repository

### Nginx official repository

> [Official wiki](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)

Red Hat

```ini file=/etc/yum.repos.d/nginx.repo
[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/rhel/$releasever/$basearch/
gpgcheck=0
enabled=1
```

CentOS

```ini file=/etc/yum.repos.d/nginx.repo
[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

Ubuntu

```bash file=/etc/apt/sources.list.d/nginx.list
# Replace $release with your corresponding Ubuntu release.
# Ubuntu 18 = bionic
# Ubuntu 20 = focal
# Ubuntu 22 = jammy

deb https://nginx.org/packages/ubuntu/ $release nginx
deb-src https://nginx.org/packages/ubuntu/ $release nginx
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
