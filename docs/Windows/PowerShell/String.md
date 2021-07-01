# String

> [Reference](https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-string-substitutions?view=powershell-7.1)

## Format string

```powershell
<format> -f <value>[, ...]

$a = "Life"
$b = "great"

"{0} is {1}" -f $a, $b
"$a is $b"
"${a} is ${b}"

# Life is great
```

## Filter string

```powershell
<command> | Select-String "<pattern>"
```

## Concatenate string

```powershell
$a + ' ' + $b
"$a $b"
```

## Command execution

```powershell
"Date: $(Get-Date)"
```
