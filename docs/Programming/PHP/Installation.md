# Installation - PHP

## CentOS

### Using `mod_php`

Install the Software Collection repository

```bash
yum -y install centos-release-scl
```

Install the PHP 7.0

```bash
yum -y install rh-php70 rh-php70-php rh-php70-php-fpm
```

Find out `rh-php70-php` (`mod_php`) installed files

```bash
repoquery -l rh-php70-php
```

List SCL packages

```bash
scl -l
```

Enable PHP 7.0 on current shell session

```bash
scl enable rh-php70-php
```

Enable `mod_php`

```bash
ln -s /opt/rh/httpd24/root/etc/httpd/conf.d/rh-php70-php.conf /etc/httpd/conf.d/

ln -s /opt/rh/httpd24/root/etc/httpd/conf.modules.d/15-rh-php70-php.conf /etc/httpd/conf.modules.d/

ln -s /opt/rh/httpd24/root/etc/httpd/modules/librh-php70-php7.so /etc/httpd/modules/
```

Restart Apache

```bash
systemctl restart httpd
```

> Ref: [CentOS WiKi](https://wiki.centos.org/HowTos/php7)

> Ref: [NextCloud manual](https://docs.nextcloud.com/server/13.0.0/admin_manual/installation/php_70_installation.html)

### Using PHP FPM

```bash
yum -y install rh-php70-php-fpm
```

Allow on SELinux

```bash
semanage port -a -t http_port_t -p tcp 9000
```

Enable PHP FPM service

```bash
systemctl enable rh-php70-php-fpm
systemctl start rh-php70-php-fpm
```

> Ref: [Apache PHP FPM](https://cwiki.apache.org/confluence/display/HTTPD/PHP-FPM)
