---
sidebar_label: User
---

# User - MySQL

## Parameter

```sh
# <host>
localhost | <IP address>[/<net mask>] | %
```

```sh
# <IP address>
10.0.0.1
10.0.0.0/255.255.255.0
10.0.%
```

## Create user

```sql
create user '<user>'@'<host>' identified by '<password>';
```

## Display user

```sql
select user, host from mysql.user;
```

## Drop user

```sql
drop user '<user>'@'<host>';
```

## Permission / Privilege

### Grant permission

```sql
grant all
  on {*|<database>}.{*|<table>}
  to '<user>'@'<host>';

flush privileges;
```

### Show permission

```sql
show grants [for <user>];
```
