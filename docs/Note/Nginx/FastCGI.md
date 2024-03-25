---
date: 2024-03-10
tags: [Nginx, FastCGI, PHP]
sidebar_label: PHP FastCGI
---

# PHP FastCGI - Nginx

Setting for pass request to PHP-FPM (FastCGI Process Manager)

<!--truncate-->

## Run PHP-FPM

On Windows, start PHP-FPM with

```sh
php-cgi.exe -b 127.0.0.1:9000
```

On Linux, use `php-fpm` service

## Nginx config

```nginx
http {
    server {
        root "/var/www/html";

        location / {
            index index.php index.html index.htm;
        }

        location ~* \.php$ {
            # check if PHP file exists
            try_files $fastcgi_script_name =404;

            # when PHP-FPM listen on Unix socket
            fastcgi_pass    unix:/var/run/php-fpm.sock;

            # when PHP-FPM listen on TCP
            fastcgi_pass    127.0.0.1:9000;

            fastcgi_param   SCRIPT_FILENAME     $document_root$fastcgi_script_name;
            include         fastcgi_params;
        }
    }
}
```

File `fastcgi_params` is exist by default in Nginx

```nginx title="fastcgi_params"
fastcgi_param  QUERY_STRING       $query_string;
fastcgi_param  REQUEST_METHOD     $request_method;
fastcgi_param  CONTENT_TYPE       $content_type;
fastcgi_param  CONTENT_LENGTH     $content_length;

fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;
fastcgi_param  REQUEST_URI        $request_uri;
fastcgi_param  DOCUMENT_URI       $document_uri;
fastcgi_param  DOCUMENT_ROOT      $document_root;
fastcgi_param  SERVER_PROTOCOL    $server_protocol;
fastcgi_param  REQUEST_SCHEME     $scheme;
fastcgi_param  HTTPS              $https if_not_empty;

fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;

fastcgi_param  REMOTE_ADDR        $remote_addr;
fastcgi_param  REMOTE_PORT        $remote_port;
fastcgi_param  SERVER_ADDR        $server_addr;
fastcgi_param  SERVER_PORT        $server_port;
fastcgi_param  SERVER_NAME        $server_name;

# PHP only, required if PHP was built with --enable-force-cgi-redirect
fastcgi_param  REDIRECT_STATUS    200;
```

## `PATH_INFO`

To support URI like `/index.php/data`

```nginx
server {
    location ~* \.php(/|$) {
        fastcgi_pass    127.0.0.1:9000;

        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        fastcgi_param   SCRIPT_FILENAME $document_root$fastcgi_script_name;
        # NOTE: most PHP frameworks does not need PATH_INFO
        fastcgi_param   PATH_INFO   $fastcgi_path_info;

        include fastcgi_params;
    }
}
```

> Ref: [`fastcgi_split_path_info`](https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_split_path_info)

## Send all requests to a single PHP file

Most PHP frameworks process requests from a single entry PHP file

```nginx
server {
    location / {
        # pass all requests to index.php if the URI file does not exist
        try_files $uri /index.php$is_args$args;
    }

    location ~* \.php$ {
        # deny direct access PHP files
        internal;

        try_files $fastcgi_script_name =404;

        fastcgi_pass    127.0.0.1:9000;
        fastcgi_param   SCRIPT_FILENAME $document_root$fastcgi_script_name;

        include fastcgi_params;
    }
}
```

## Note

> Ref: [Embedded Variables - Module `ngx_http_fastcgi_module`](https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#variables)

- `$fastcgi_script_name = $uri`
- if `$fastcgi_script_name` end with `/`, value of `fastcgi_index` will be appended to `$fastcgi_script_name`
