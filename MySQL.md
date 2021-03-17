## Table of Contents
- [Table of Contents](#table-of-contents)
- [Export / Dump](#export--dump)
- [Import](#import)
- [Show tables size](#show-tables-size)
- [Calculate age](#calculate-age)
- [Find in set](#find-in-set)
- [Insert large number of row](#insert-large-number-of-row)
- [Recovery](#recovery)
  - [Check tables](#check-tables)
  - [Repair tables](#repair-tables)
  - [Rebuild / Reorganize index](#rebuild--reorganize-index)
- [Config file](#config-file)
- [Help](#help)
- [Slow query log](#slow-query-log)
- [Explain](#explain)
- [Create database](#create-database)
- [Drop database](#drop-database)
- [User](#user)
  - [Create user](#create-user)
  - [Grant permission](#grant-permission)

## Export / Dump

> [Reference](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html) / [Reference](https://dev.mysql.com/doc/refman/8.0/en/mysqldump-stored-programs.html)

> PowerShell output redirect ( `mysqldump > file.sql` ) will use UTF-16, MySQL cannot import UTF-16

```bash
mysqldump [-u <user>] [-p]
    { --all-databases | <database> [<table> [...]] }
    [ --events | --skip-events ]
    [ --routines | --skip-routines ]
    [ --triggers | --skip-triggers ]
    --result-file=<file.sql>
```

Export with `gzip`
```bash
mysqldump <database> | gzip [-9] > <file.sql.gz>
```

## Import

> [Reference](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)
```bash
mysql [-u <user>] [-p] <database> < <file.sql>
```

or
```sql
mysql> use <database>;
mysql> source <file>;
```

## Show tables size

```sql
select 
    table_schema as `Database`, 
    table_name as `Table`, 
    round(((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024), 2) `Size (MiB)` 
from INFORMATION_SCHEMA.TABLES;
```

## Calculate age

```sql
-- <birth> = YYYY-MM-DD
select timeStampDiff(year, <birth>, curDate()) as age;
```

## Find in set

```sql
select 
  find_in_set('B', 'A,B,C'), 
  find_in_set('D', 'A,B,C'); 
-- Return 2, 0
```

## Insert large number of row

> [Reference](https://dev.mysql.com/doc/refman/5.6/en/optimizing-innodb-transaction-management.html)

Use `START TRANSACTION` and `COMMIT`

## Recovery

> [Reference](https://dev.mysql.com/doc/refman/5.5/en/forcing-innodb-recovery.html)

Edit option file

```ini
[mysqld]
innodb_force_recovery = 1
```

If the log loops with

```
InnoDB: Waiting for the background threads to start
```

Edit option file

```ini
[mysqld]
innodb_purge_threads = 0
```

### Check tables

```bash
mysqlcheck [{ -c | --check }] [-u <user>] [-p] <database> [<table> [...]]
```

or

```sql
check table <table> [, ...]
```

### Repair tables

```bash
mysqlcheck [{ -r | --repair }] [-u <user>] [-p] <database> [<table> [...]]
```

### Rebuild / Reorganize index

```sql
optimize table <table> [, ...];
```

## Config file

> [Reference](https://dev.mysql.com/doc/refman/8.0/en/option-files.html)

`/etc/my.cnf`

```ini
# <comment>
; <comment>

[<group>]

[mysqld]
# Option for mysqld command

[mysql]
# Option for mysql command

[mysqladmin]
# Option for mysqladmin command

[client]
# Option for client (mysql, mysqldump, ...)
port=<port>
password=<password>

<option>
# This is equivalent to --<option> on the command line

<option>=<value>
# This is equivalent to --<option>=<value> on the command line

!include <file>
# include config file

!includedir <dir>
# include config file "*.cnf" in <dir>
```

## Help

```sql
mysql> { help | ? } [<command>];
```

## Slow query log

> [Reference](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_slow_query_log)

```ini
[mysqld]
slow-query-log=ON
log_output={ FILE | TABLE }

# Default = <data directory>/<host name>-slow.log
slow_query_log_file=<file>

# Log query longer than <seconds>, default = 10
long_query_time=<seconds>

# Log query not using index
log-queries-not-using-indexes=ON
```

Set on runtime

```sql
mysql> set global slow_query_log = 'ON';
```

Show slow query status

```sql
mysql> show global variables like 'slow_query%';
+---------------------+-------------------------------------+
| Variable_name       | Value                               |
+---------------------+-------------------------------------+
| slow_query_log      | ON                                  |
| slow_query_log_file | /var/lib/mysql/<host name>-slow.log |
+---------------------+-------------------------------------+
2 rows in set (0.00 sec)
```

## Explain

> [Reference](https://www.sitepoint.com/mysql-performance-indexes-explain/)

Optimizing query

```sql
mysql> explain { select ... | delete ... | ... }
```

## Create database

```sql
mysql> create database <database>;
```

## Drop database

```sql
mysql> drop database <database>;
```

## User

### Create user

```sql
create user '<user>'@'{localhost|<IP address>|*}' identified by '<password>';
```

### Grant permission
```sql
grant all
  on {*|<database>}.{*|<table>}
  to '<user>'@'{localhost|<IP address>|*};

flush privileges;
```
