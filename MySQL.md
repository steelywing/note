# Age
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
