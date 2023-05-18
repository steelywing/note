# Linux ACL

Access Control List

- Directory has default ACL, the ACL is applied to the file and directory created in that directory

## ACL order

> Ref: [POSIX Access Control Lists on Linux](acl.pdf)

First matched entry is used

- owner
- named users
- (owning or named) groups
- others

```mermaid
flowchart TD
    matched["use matched \n ACL entry"]
    owner{{"match \n owner?"}}
    named_users{{"match \n named users?"}}
    groups{{"match \n any (owning or named) groups?"}}
    any_group{{"is any matched ACL entry \n that has granted required permission?"}}
    others["use `others` ACL entry"]
    allow["allow"]
    deny["deny"]
    owner --Y--> matched
    owner --N--> named_users
    named_users --Y--> matched
    named_users --N--> groups
    groups --Y--> any_group
    any_group --Y--> allow
    any_group --N--> deny
    groups --N--> others
```

```sh
id admin

uid=1000(admin) gid=1000(admin) groups=1000(admin),1001(user)
```

```sh
id user

uid=1001(user) gid=1001(user) groups=1001(user)
```

```sh
getfacl file

# file: file
# owner: root
# group: root
user::rw-
group::r--
group:user:---
group:admin:r--
mask::r--
other::---
```

| User | Read `file` |
|-|-|
| `admin` | allow |
| `user` | deny |

`admin` is in 2 groups `admin` and `user`, `user` group is deny access `file`, but `admin` is allow, so `admin` still allow access.

## Mask

> Ref: [ACL Mask Value in Linux](https://linuxdatahub.com/masks-in-acl-linux-explained-with-examples-access-control-lists-mask/)

> Ref: `man setfacl`

- Masks are the highest permission allowed for user / group
- `setfacl` auto create mask entry (union all ACL entries) by default, unless option `-n` is set
- Masks only apply to extended ACL (`setfacl`), not apply to minimal ACL

```js
function effective_permission(mask, acl_entry) {
    return mask & acl_entry;
}

function is_granted(user, operation, acl) {
    return 
        operation & 
        effective_permission(mask(acl) & matched_entry(user, acl))
        > 0;
}
```
