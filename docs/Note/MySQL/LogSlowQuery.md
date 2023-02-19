---
sidebar_label: Log slow query
---

# Log slow query - MySQL

> Ref: [The Slow Query Log](https://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)

## Set in config

```ini
[mysqld]
slow-query-log=ON
log_output={ FILE | TABLE }

# Log file
# Default = <data directory>/<host name>-slow.log
slow_query_log_file=<file>

# Log query longer than <seconds>
# Default = 10
long_query_time=<seconds>

# Log query not using index
# Default = OFF
log-queries-not-using-indexes=ON
```

## Set on runtime

```sql
set global slow_query_log = 'ON';
```

## Display slow query status

```sql
show global variables like 'slow_query%';
```

```
+---------------------+-------------------------------------+
| Variable_name       | Value                               |
+---------------------+-------------------------------------+
| slow_query_log      | ON                                  |
| slow_query_log_file | /var/lib/mysql/<host name>-slow.log |
+---------------------+-------------------------------------+
2 rows in set (0.00 sec)
```
