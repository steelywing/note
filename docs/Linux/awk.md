# awk

[Reference](https://www.gnu.org/software/gawk/manual/gawk.html)

```bash
awk '<program>' [<input file> [<input file>]]
awk -f '<program file>' [<input file> [<input file>]]
```

## `<program>`

```awk
# A BEGIN rule is executed once only, before the first input record is read.
BEGIN {
    # <action>
}

# If the pattern is omitted, then the action is performed for every record.
<pattern> {
    # <action>
}

# An END rule is executed once only, after all the input is read. 
END {
    # <action>
}
```

Default `<action>` is `print`

```awk
<pattern> {
    print
}

# equal to

<pattern>
```

## Built-in Variable

| Name | Description | Default |
| - | - | - |
| `ARGC` | Argument Count | |
| `ARGV` | Argument Value | |
| `$0` | Current Record | |
| `$1`, `$2`, ..., `$NF` | Field 1, Field 2, ..., Last Field | |
| `NF` | Number of Fields | |
| `NR` | Number of Records has processed | |
| `FS` | Field Separator | `" "` |
| `OFS` | Output Field Separator | `" "` |
| `IGNORECASE` | Ignore Case | |
| `RS` | Record Separator | `"\n"` |
| `ORS` | Output Record Separator | `"\n"` |

## RegExp

### Match

```awk
<string> ~ /<regexp>/
```

### Not match

```awk
<string> !~ /<regexp>/
```

Default `<string>` is `$0`
```awk
/<regexp>/

# equal to

$0 ~ /<regexp>/
```

## Print

```awk
{
    print <item>, ...
}
```

Default `<item>` is `$0`

```awk
{
    print $0

    # equal to

    print
}
```
