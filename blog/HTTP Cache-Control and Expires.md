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

## Cache states

Caches have 2 states:

- **fresh**: if cache age < `max-age`, the cache is valid
- **stale**: if cache age > `max-age`, the cache needs to be validated

## Validate cache when reuse

Browser will always validate cache when reuse

- If browser has a fresh cache, it will reuse it and will not send request to server

```http
Cache-Control: no-cache
```

## Disable cache

Browser will not store cache

```http
Cache-Control: no-store
```

## Clear cache

- Pressing <kbd>Ctrl</kbd> + <kbd>F5</kbd> in browser will reload current page without using cache
- Most browsers support pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Delete</kbd> to clear cache

