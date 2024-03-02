---
sidebar_label: User
---

# User - MySQL

`<host>`

```sql
localhost | <IP address>[/<net mask>] | %
```

`<IP address>[/<net mask>]`

```sql
10.0.0.1
10.0.0.0/255.255.255.0
10.0.%
```

- `%` is wildcard

## Create user

```sql
create user '<user>'@'<host>' identified by '<password>';
```

```sql
create user alice@localhost identified by 'password';
```

## Display user

```sql
select user, host from mysql.user;
```

```sql
select * from mysql.user \G
```

## Drop user

```sql
drop user '<user>'@'<host>';
```

```sql
drop user alice@localhost;
```

## Allow **root** login with password

```sql
ALTER USER '<user>'@'<host>'
    IDENTIFIED WITH { mysql_native_password | caching_sha2_password }
    BY '<password>';
```

- `caching_sha2_password` is added in MySQL 8

```sql
ALTER USER root@localhost
    IDENTIFIED WITH mysql_native_password
    BY 'password';
```
