# CLI

> Ref: [apachectl - Apache HTTP Server Control Interface](https://httpd.apache.org/docs/2.4/programs/apachectl.html)

## Start Apache httpd daemon

```bash
sudo apachectl start
```

## Stop Apache httpd daemon

```bash
sudo apachectl stop
```

## Restart Apache httpd daemon

Apache auto run `configtest` before restart, if `configtest` fail, Apache does not restart

```bash
sudo apachectl restart
```

## Run configuration file syntax test

```bash
sudo apachectl configtest
```
