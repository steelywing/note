# LDAP

> - [Reference](https://social.technet.microsoft.com/wiki/contents/articles/5392.active-directory-ldap-syntax-filters.aspx)
> - [Reference](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax)
> - [RFC 2254](https://www.ietf.org/rfc/rfc2254.txt)

Lightweight Directory Access Protocol

## `<filter>`

```
(<attribute><operator><value>)
```

| `<operator>` | Meaning |
| - | - |
| = | Equality |
| >= | Greater than or equal to (lexicographical) |
| <= | Less than or equal to (lexicographical) |

## not `<filter>`

```
(!<filter>)
```

## or `<filter>`
```
(|<filter><filter>...)
```

## and `<filter>`
```
(&<filter><filter>...)
```

## `<value>`

Wildcard

```
[*]<value>[*]
```

```
<text>
```

## Not empty `<attribute>`

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
