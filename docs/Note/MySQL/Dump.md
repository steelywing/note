---
sidebar_label: Dump / Export / Import
---

# Dump / Export / Import - MySQL

## Export / Dump

:::caution

PowerShell output redirect ( `mysqldump > file.sql` ) will use UTF-16, MySQL cannot import UTF-16

:::

```bash title="CLI"
mysqldump [-u <user>] [-p]
    { --all-databases | <database> [<table> [...]] }
    [ --where="<where clause>" ]
    [ --events | --skip-events ]
    [ --routines | --skip-routines ]
    [ --triggers | --skip-triggers ]
    --result-file=<file.sql>
```

### Export with `gzip`

```bash
mysqldump <database> | gzip [-9] > <file.sql.gz>
```

> Ref: [mysqldump](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)

> Ref: [Dumping Stored Programs](https://dev.mysql.com/doc/refman/8.0/en/mysqldump-stored-programs.html)

## Import

```bash
mysql [-u <user>] [-p] <database> < <file.sql>
```

or

```sql
use <database>;
source <file>;
```
