---
sidebar_label: Array
---

# Array - PowerShell

> - [Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays)
> - `help about_Arrays`

```powershell
$array = <value>, <value>[, ...]
$array = @([<value>[, ...]])
```

## Range

```powershell
$array = <start>..<end>
```

## Count

```powershell
$array.Count
```

## Get element

```powershell
$array[<index>]
```

## Set element

```powershell
$array[<index>] = <value>
```

## Slice

```powershell
$array[<index>..<index>]
```

## Iteration

```powershell
foreach ($element in $array) {
    # $element
}

$array.ForEach({
    # $PSItem == $_ == <current element>
})
```

## Filter

```powershell
$array.Where({
    # $PSItem == $_ == <current element>
    
    # Filter out if expression is [0, "", $false, $null]
})
```
