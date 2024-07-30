---
date: 2024-04-05
tags: [HTTP, Web]
---

# HTTP `Cache-Control` and `Expires`

<!--truncate-->

- `Cache-Control` override `Expires`
  - Ref: [RFC 9111](https://datatracker.ietf.org/doc/html/rfc9111#section-5.3-8)
- `Cache-Control` supersedes `Expires`
- `Cache-Control` offers more flexibility and options than `Expires`
- `Cache-Control` use relative amount of time (seconds)
  
  ```http
  Cache-Control: max-age=3600
  ```

- `Expires` use date format
  
  ```http
  Expires: Thu, 01 Dec 1994 16:00:00 GMT
  ```
