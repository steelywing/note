---
sidebar_label: Troubleshooting
---

# Troubleshooting - MySQL

## Compatibility

- PHP before 7.2.4 PDO will fail to connect with `default_authentication_plugin=caching_sha2_password` even if `caching_sha2_password` is not used
- MySQL client before 8.0

> Ref: [caching_sha2_password Compatibility Issues and Solutions](https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password)

```ini
[mysqld]
default_authentication_plugin=mysql_native_password
```
