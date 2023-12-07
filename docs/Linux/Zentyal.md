# Zentyal

## Add SSL certificate

> [Reference](https://doc.zentyal.org/en/ca.html)

> Zentyal 4.0

Web Admin

- Upload certificate, key, CA (Chain) certificate, full chain certificate to `/var/lib/zentyal/conf/ssl/`
  
- Change the config file `/usr/share/zentyal/stubs/core/nginx.conf.mas` to
  
  ```nginx
  ssl_certificate <% $zentyalconfdir %>ssl/<cert.pem>;
  ssl_certificate_key <% $zentyalconfdir %>ssl/<key.pem>;
  ssl_client_certificate <% $zentyalconfdir %>ssl/<chain.pem>;
  ```

- Restart `webadmin` service

  ```sh
  /etc/init.d/zentyal webadmin restart
  ```

Mail

- Change the config file `/usr/share/zentyal/stubs/mail/main.cf.mas` to
  
  ```conf
  my $certFile = '/var/lib/zentyal/conf/ssl/<fullchain.pem>';
  my $keyFile = '/var/lib/zentyal/conf/ssl/<key.pem>';
  ```

- Change the config file `/usr/share/zentyal/stubs/mail/dovecot.conf.mas` to
  
  ```conf
  ssl_cert = </var/lib/zentyal/conf/ssl/<fullchain.pem>
  ssl_key = </var/lib/zentyal/conf/ssl/<key.pem>
  ```

- Restart `mail` service

  ```sh
  /etc/init.d/zentyal mail restart
  ```

## Module / Service

\<= Zentyal 4

```bash
/etc/init.d/zentyal <module> { start | stop | status | enabled | restart }
```

Zentyal 5

```bash
sudo zs <module> { start | stop | status | restart }
```
