# Nginx

## Nginx version in response

Hide Nginx version in response (error page, header)

**Recommended**

```nginx
server_tokens off;
```

## Note

- `index` is using [internal redirect](./Location.md#internal-location)
- `try_files` only use [internal redirect](./Location.md#internal-location) for last paramter, other paramter is processing in current context
