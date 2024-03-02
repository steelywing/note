# LDAP

> - [Reference](https://social.technet.microsoft.com/wiki/contents/articles/5392.active-directory-ldap-syntax-filters.aspx)
> - [Reference](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax)
> - [RFC 2254](https://www.ietf.org/rfc/rfc2254.txt)

Lightweight Directory Access Protocol

## DSA

Directory System Agent

Provide LDAP service

## Entry

Include

- [DN](#dn)
- Attributes
- Classes

## DN

Distinguished Name

Unique ID string of entry

## `<filter>`

```ldap
(<attribute><operator><value>)
```

> Ref: [Search Filter Syntax](https://learn.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax)

## Matching rule

```ldap
(<attribute>:<matching rule OID>:=<value>)
```

| `<operator>` | Meaning |
|-|-|
| `=` | Equality |
| `>=` | Greater than or equal to (lexicographical) |
| `<=` | Less than or equal to (lexicographical) |

not

```ldap
(!<filter>)
```

or

```ldap
(|<filter><filter>...)
```

and

```ldap
(&<filter><filter>...)
```

## `<value>`

Wildcard

```ldap
[*]<value>[*]
```

```ldap
<text>
```

## Not empty `<attribute>`

```ldap
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

- `objectCategory` is single valued and indexed
- `objectClass` is multi-valued and not indexed

| `objectCategory` | `objectClass` | Result |
| - | - | - |
| `person` | `user` | user objects |
| `person` |  | user and contact objects |
| `person` | `contact` | contact objects |
|  | `user` | user and computer objects |
| `computer` |  | computer objects |
| `user` |  | user and contact objects |
|  | `contact` | contact objects |
|  | `computer` | computer objects |
|  | `person` | user, computer, and contact objects |
| `contact` |  | user and contact objects |
| `group` |  | group objects |
|  | `group` | group objects |
| `person` | `organizationalPerson` | user and contact objects |
|  | `organizationalPerson` | user, computer, and contact objects |
| `organizationalPerson` |  | user and contact objects |
