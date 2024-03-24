# Character Set / Collation

Character Sets, Collations, Unicode, Encoding

## `utf8`

- **Deprecated**
- Deprecated alias for `utf8mb3`
- Doesn't include supplementary character (4 bytes)
- Maximum 3 bytes per character

## `utf8mb4`

> Ref: [The utf8mb4 Character Set](https://dev.mysql.com/doc/refman/8.3/en/charset-unicode-utf8mb4.html)

- **Recommended**
- Include all `utf8` characters
- Include supplementary character (4 bytes)
- Maximum 4 bytes per character

## `_general_ci`

> Ref: [Unicode Character Sets](https://dev.mysql.com/doc/refman/8.0/en/charset-unicode-sets.html)

- Less correct
- Faster than `_unicode_ci`

```text
Ä = A
Ö = O
Ü = U

ß = s
```

## `_unicode_ci`

- More correct
- Slower than `_general_ci`

```text
Ä = A
Ö = O
Ü = U

ß = ss
```
