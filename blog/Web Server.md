---
date: 2023-12-05
tags: [Web, Server]
---

# Web Server

<!--truncate-->

## Apache

- Flexible config
- C10K problem
- Popular

## Nginx

- Fast
- Popular
- Conditional config not flexible
- Language: C

## Caddy

- Fast
- Language: Go
- Automatic apply TLS certification
  - Support ZeroSSL and Let's Encrypt
- Support config using API

## Simple static files web server

### For CLI

[miniserve](https://github.com/svenstaro/miniserve)

- Cross platform
- Self-contained (single executable file)
- Lightweight ( < 2MB for Windows / Linux x86 )

### For **node.js**

[vercel serve](https://github.com/vercel/serve)

- CLI
- API

[http-server](https://github.com/http-party/http-server)

- Not recommended
- Issue of lastest version (see [Version 14 has error ERR_HTTP_HEADERS_SENT](https://github.com/http-party/http-server/issues/634))

### For python

```sh
# python -m http.server [port]
python -m http.server
```

- Python built-in
- Crash if the request is not standard
