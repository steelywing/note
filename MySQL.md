# Table of Contents
- [Table of Contents](#table-of-contents)
- [Export / Dump](#export--dump)
- [Import](#import)
- [Show tables size](#show-tables-size)
- [Calculate age](#calculate-age)
- [Find in set](#find-in-set)
- [Insert large number of row](#insert-large-number-of-row)

# Export / Dump
[Reference](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)
```sh
mysqldump -u <user> -p <database> [<table> [<table> ...]] > <file name>
```

# Import
[Reference](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)
```sh
mysql -u <user> -p <database> < <file name>
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
