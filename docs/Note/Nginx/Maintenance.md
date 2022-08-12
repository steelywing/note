# Maintenance mode

For HTML only (no CSS, JS, ...)

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

For HTML only, without `if`

Flow:
- `return 503`
- Match `error_page 503 @503`, `@503` is named location
- Internal redirect to `@503`

```nginx
    location @503 {
        root /usr/share/nginx/html/maintenance/;
        rewrite ^ "/503.html" break;
    }

    # use RegExp because it has higher priority
    location ~ ^ {
        error_page 503 @503;

        # return all request with status 503
        return 503;
    }
```

For HTML page with CSS, JS, ...

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
