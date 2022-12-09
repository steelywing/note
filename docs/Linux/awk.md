# `awk`

:::note Reference

[The GNU Awk User’s Guide](https://www.gnu.org/software/gawk/manual/gawk.html)

:::

```bash
awk 
    { '<program>' | -f '<program file>' }
    [<input file> [...]]
```

## `<program>`

```awk
# A BEGIN rule is executed once only, before the first input record is read.
BEGIN {
    # <action>
}

# The BEGINFILE rules is executed just before gawk reads the first record from a file.
BEGINFILE {
    # <action>
}

# If the pattern is omitted, then the action is performed for every record.
<pattern> {
    # <action>
}

# The ENDFILE rule is called when gawk has finished processing the last record in an input file.
ENDFILE {
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

## Pattern

### Regular expression

```awk
/<regular expression>/
```

### Expression

```awk
<expression> == <expression>
<expression> != <expression>
<expression> < <expression>
<expression> <= <expression>
<expression> > <expression>
<expression> >= <expression>

# Match Reg Exp
<expression> ~ /<reg exp>/

# Not match Reg Exp
<expression> !~ /<reg exp>/
```

### Range

```awk
<begin pattern>,<end pattern>
```

### Emtpy

Match every record

## Assignment Expression

```awk
<variable> = <value>
```

## String

```awk
"<string>"
```

## `if`

```awk
if (<condition>) {
    # <code>
    # ...
}

if (<condition>) {
    # <code>
    # ...
} else {
    # <code>
    # ...
}
```

## RegExp

### Match

```awk
<value> ~ /<reg exp>/
```

### Not match

```awk
<value> !~ /<reg exp>/
```

Default `<string>` is `$0`
```awk
/<reg exp>/

# equal to

$0 ~ /<reg exp>/
```

## Print

```awk
{
    print <item>[, ...]
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
