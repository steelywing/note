# Table of Contents
- [Table of Contents](#Table-of-Contents)
- [Export / Dump](#Export--Dump)
- [Import](#Import)
- [Show tables size](#Show-tables-size)
- [Calculate age](#Calculate-age)
- [Find in set](#Find-in-set)
- [Insert large number of row](#Insert-large-number-of-row)
- [Recovery](#Recovery)
  - [Check tables](#Check-tables)
  - [Repair tables](#Repair-tables)
  - [Rebuild / Reorganize index](#Rebuild--Reorganize-index)

# Export / Dump
[Reference](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)

Output redirect (`mysqldump > file.sql`) will use UTF-16 on PowerShell, MySQL cannot import UTF-16

```sh
mysqldump [-u <user>] [-p] { --all-databases | <database> [<table> [...]] } --result-file=<file.sql>
```

Export with `gzip`
```sh
mysqldump <database> | gzip [-9] > <file.sql.gz>
```

# Import
[Reference](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)
```sh
mysql [-u <user>] [-p] <database> < <file.sql>
```

or
```sql
mysql> use <database>;
mysql> source <file>;
```

# Show tables size
```sql
select 
    table_schema as `Database`, 
    table_name as `Table`, 
    round(((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024), 2) `Size (MiB)` 
from INFORMATION_SCHEMA.TABLES;
```

# Calculate age
```sql
-- <birth> = YYYY-MM-DD
select timeStampDiff(year, <birth>, curDate()) as age;
```

# Find in set
```sql
select find_in_set('B', 'A,B,C'), find_in_set('D', 'A,B,C'); -- Return 2, 0
```

# Insert large number of row

[Reference](https://dev.mysql.com/doc/refman/5.6/en/optimizing-innodb-transaction-management.html)

Use `START TRANSACTION` and `COMMIT`

# Recovery

[Reference](https://dev.mysql.com/doc/refman/5.5/en/forcing-innodb-recovery.html)

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

## Check tables
```sh
mysqlcheck [{ -c | --check }] [-u <user>] [-p] <database> [<table> [...]]
```

or

```sql
check table <table> [, ...]
```

## Repair tables

```sh
mysqlcheck [{ -r | --repair }] [-u <user>] [-p] <database> [<table> [...]]
```

## Rebuild / Reorganize index

```sql
optimize table <table> [, ...];
```
