# Maintenance mode

## For HTML only maintenance page

No CSS, JS, ...

Method 1 - named location

```nginx
location = @maintenance {
    root html/;
    # `break`: use this `location` block
    rewrite ^ "/maintenance.html" break;
}

location / {
    error_page 503 @maintenance;
    return 503;

    # ...
}
```

Method 2 - internal location

```nginx
location = /maintenance.html {
    internal;
    root html/;

    # if direct access this location, return 503
    error_page 404 =503 /maintenance.html;
}

location / {
    error_page 503 /maintenance.html;
    return 503;

    # ...
}
```

See also [`internal` location](./Location.md#internal-location)

### Allow specify IP address bypass

```nginx
geo $bypass_maintenance {
    # default return maintenance page
    default         0;

    # allow this to access
    10.0.0.0/24     1;
}

server {
    location = /maintenance.html {
        internal;

        # if direct access, return 503
        error_page 404 =503 /50x.html;

        root html/;
    }

    location / {
        error_page 503 /maintenance.html;
        if ($bypass_maintenance = 0) {
            return 503;
        }

        # ...
    }
}
```

See also [`internal` location](./Location.md#internal-location)

## For web page with asset file

If web page with asset file (CSS, JS, ...)

Flow:

- if URI is `/`, `return 503`
  - internal redirect to `<maintenance page>`
- if URI found in `maintenance` asset directory, return file with status `200`
- redirect all other request to `/`

```nginx
# for handle maintenance web page
server {
    listen unix:/var/run/maintenance.nginx.sock;

    # for Windows
    # listen 8000;
    
    location @index {
        # use redirect because if URI has sub-folder ($uri == /path/path/),
        # the relative path for asset file (CSS, JS, ...) will be incorrect
        rewrite ^ / redirect;
    }

    location = / {
        # maintenance page URI
        error_page 503 /maintenance.html;

        return 503;
    }

    # use RegExp because it has higher priority
    location / {
        root html/maintenance/;

        # redirect all URI to index (503) page (except asset URI),
        # asset URI still return status 200
        try_files $uri @index;
    }
}

# original server block
server {
    listen 80;
    location / {
        proxy_pass http://unix:/var/run/maintenance.nginx.sock:;

        # for Windows
        # proxy_pass http://127.0.0.1:8000;
    }

    # ...
}
```

Allow specify IP address bypass

```nginx
geo $bypass_maintenance {
    default         0;
    10.0.0.0/24     1;
}

# ...

server {
    location / {
        if ($bypass_maintenance = 0) {
            proxy_pass http://unix:/var/run/maintenance.nginx.sock:;
        }

        # ...
    }
}
```
