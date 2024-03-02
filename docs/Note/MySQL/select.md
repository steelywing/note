---
sidebar_label: `select`
---

# `select` in MySQL

## Select `date` from `datetime` with index

```sql
select * from data
where datetime >= '2000-01-01' and datetime < '2000-01-02'
```

or

```sql
select * from data
where datetime >= '2000-01-01' and datetime < date_add('2000-01-01', interval 1 day)
```

or

```sql
select * from data
where datetime between '2000-01-01 00:00:00' and '2000-01-01 23:59:59'
```

:::caution

- `date(datetime)` cannot use index, that calculate `date()` of all rows first
- `datetime like '2000-01-01%'` cannot use index, that check all rows if the pattern matching first

:::
