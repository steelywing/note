# Web server

## PHP FPM

Windows

```sh
php-cgi -b [<bind IP address>:]<port>
```

```sh
php-cgi -b 9000
```

## Nginx

```nginx
server {
    root public/;

    location ~ [^/]\.php(/|$) {
        fastcgi_index index.php;
        fastcgi_split_path_info ^(.+?\.php)(/.*)$;

        try_files $fastcgi_script_name =404;

        # Mitigate https://httpoxy.org/ vulnerabilities
        fastcgi_param HTTP_PROXY "";

        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;

        fastcgi_pass 127.0.0.1:9000;
    }
}
```

Pass all **Not Found** request to PHP FPM `/index.php`

```nginx
server {
    location / {
        try_files $uri /index.php$is_args$args;
    }
}
```
