# Maintenance mode

## HTML only

No CSS, JS, ...

Flow:

- `return 503`
- Match `error_page 503 <URI>`
- Internal redirect to `<URI>`

```nginx
    # use RegExp because it has higher priority
    location ~ ^ {
        root /usr/share/nginx/html/maintenance/;
        error_page 503 /503.html;

        # return all request with status 503
        # use the `if ($status != 503)` to check if it is internal redirect
        if ($status != 503) {
            return 503;
        }
    }
```

## For HTML only, without `if`

Flow:

- `return 503`
- Match `error_page 503 @503`, `@503` is named location
- Internal redirect to `@503`

```nginx
    location @503 {
        root /usr/share/nginx/html/maintenance/;

        # `break` will stop internal redirect, just return the "/503.html"
        rewrite ^ "/503.html" break;
    }

    # use RegExp because it has higher priority
    location ~ ^ {
        error_page 503 @503;

        # return all request with status 503
        return 503;
    }
```

### Allow specify IP address bypass

```nginx
geo $bypass_maintenance {
    default         0;
    10.0.0.0/24     1;
}

server {
    location @503 {
        root /usr/share/nginx/html/maintenance/;
        rewrite ^ "/503.html" break;
    }

    location / {
        root /usr/share/nginx/html/;
        error_page 503 @503;

        # if client IP not allow bypass, return 503 page
        if ($bypass_maintenance = 0) {
            return 503;
        }
    }
}
```

## For web page with static conten

HTML page with CSS, JS, ...

Flow:
- If URI is `/`, `return 503`
  - Match `error_page 503 <503 page>`
  - Internal redirect to `<503 page>`
- If URI found in `root`, return file with status 200
- If URI not found, redirect to `/`

```nginx
    location @index {
        # use redirect because if URI has sub-folder ($uri == /path/path/),
        # the relative path for static contents (CSS, JS, ...) will be incorrect
        absolute_redirect off;
        rewrite ^ "/" redirect;
    }

    # use RegExp because it has higher priority
    location ~ ^ {
        root /usr/share/nginx/html/maintenance/;

        # 503 page URI
        error_page 503 /503.html;

        # if URI is index page, return 503
        if ($uri = "/") {
            return 503;
        }

        # redirect all URI to index (503) page (except static contents)
        # static contents still return status 200
        try_files $uri @index;
    }
```

### Allow specify IP address bypass

```nginx
geo $bypass_maintenance {
    default         0;
    10.0.0.0/24     1;
}

server {
    listen 80;
    location / {
        if ($bypass_maintenance = 0) {
            proxy_pass http://unix:/var/run/maintenance.nginx.sock:;
            # proxy_pass http://127.0.0.1:8000;
        }

        # ...
    }
}

server {
    listen unix:/var/run/maintenance.nginx.sock;
    # listen 127.0.0.1:8000;

    location @index {
        absolute_redirect off;
        rewrite ^ "/" redirect;
    }

    location / {
        root /usr/share/nginx/html/maintenance/;

        error_page 503 /503.html;
        if ($uri = "/") {
            return 503;
        }

        try_files $uri @index;
    }
}
```
