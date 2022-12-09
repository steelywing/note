# Location

## Priority

- Test the URI against all prefix strings.
- If the exact match `=` is found, the search stops.
- If the `^~` (caret-tilde) modifier prepends the longest matching prefix string, the regular expressions are not checked.
- Store the longest matching prefix string.
- Test the URI against regular expressions.
- Stop processing when the first matching regular expression is found and use the corresponding location.
- If no regular expression matches, use the location corresponding to the stored prefix string.

:::note Reference

[Nginx Location Priority](https://docs.nginx.com/nginx/admin-guide/web-server/web-server/#nginx-location-priority)

:::

## Named location

- Named locations preserve `$uri` as it was
- Can be reached only via `error_page`, `try_files`

```nginx
location @named_location {
    # ...
}
```

:::note Reference

[Nginx FAQ](https://www.nginx.com/resources/wiki/community/faq/#what-does-this-thing-mean)

:::
