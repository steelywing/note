# LDAP (Lightweight Directory Access Protocol) Syntax

[Reference](https://social.technet.microsoft.com/wiki/contents/articles/5392.active-directory-ldap-syntax-filters.aspx)

## Filter `<clauses>`

```
(<attribute><comparison operator><value>)
```

## not `<clauses>`

```
([!]<clauses>)
```

## or `<clauses>`
```
(|<clauses><clauses>)
```

## and `<clauses>`
```
(&<clauses><clauses>)
```

## `<comparison operator>`
```
=
>=
<=
```

## `<value>`

Wildcard

```
[*]<value>[*]
```

```
<text>
```

## `<attribute>` is not empty

```
(<attribute>=*)
```

## Special Characters

Escape Characters `\<ascii code (2 digits)>`

| Character | Code |
| - | - |
| `*` | `\2A` |
| `(` | `\28` |
| `)` | `\29` |
| `\` | `\5C` |
| `Nul` | `\00` |

## `objectCategory` and `objectClass`

- `objectCategory` is both single valued and indexed
- `objectClass` is multi-valued and not indexed

| `objectCategory` | `objectClass` | Result |
| - | - | - |
| person | user | user objects |
| person |  | user and contact objects |
| person | contact | contact objects |
|  | user | user and computer objects |
| computer |  | computer objects |
| user |  | user and contact objects |
|  | contact | contact objects |
|  | computer | computer objects |
|  | person | user, computer, and contact objects |
| contact |  | user and contact objects |
| group |  | group objects |
|  | group | group objects |
| person | organizationalPerson | user and contact objects |
|  | organizationalPerson | user, computer, and contact objects |
| organizationalPerson |  | user and contact objects |
