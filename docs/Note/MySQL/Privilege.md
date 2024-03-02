# Permission / Privilege

## Grant permission

```sql
grant { all | <privilege>[, ...] }
  on {*|<database>}.{*|<table>}
  to '<user>'@'<host>'
  [with grant option];

-- commit changed permission
flush privileges;
```

`<privilege>`

```sql
select | insert | update | delete | ...
```

`with grant option`

- Allow user to grant permission to other user

## Show permission

```sql
show grants [for <user>];
```
