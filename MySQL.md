```mysql
-- Age
select timeStampDiff(year, '1980-01-01', curDate()) AS age;

-- find_in_set()
select find_in_set('B', 'A,B,C'), find_in_set('D', 'A,B,C'); -- Return 2, 0
```
