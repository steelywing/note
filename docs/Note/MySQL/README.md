# MySQL

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

```log
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

```ini title="/etc/my.cnf"
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

# port=<port>
port=3306

# password=<password>
password=This15Password

<option>
# equivalent to "--<option>" on the command line

<option>=<value>
# equivalent to "--<option>=<value>" on the command line

!include <file>
# include config file

!includedir <dir>
# include config file "*.cnf" in <dir>
```

## Help

```sql
{ help | ? } [<command>];
```

## Explain

> [Reference](https://www.sitepoint.com/mysql-performance-indexes-explain/)

Optimizing query

```sql
explain { select ... | delete ... | ... }
```

## Database

### create database

```sql
create database <database>;
```

### drop database

```sql
drop database <database>;
```

## Table

### list tables

```sql
show tables;
```

### show table structure

```sql
describe <table>;
```

### show create table statement

```sql
show create table <table>;
```

## Display results vertically

Use `\G` instead of `;` semicolon
