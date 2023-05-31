---
sidebar_label: ACL
---

# ACL - Linux

Access Control List

- Directory has default ACL, the ACL is applied to the file and directory created in that directory

## ACL order

> Ref: [POSIX Access Control Lists on Linux](acl.pdf)

**First matched** entry is used

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

## Group ACL entry

- Group entry is not using the first matched, each matched group entry is checked
- If any matched group entry is allow, the request is allow.

## Example

`admin` is in groups `admin` and `user`

```sh
id admin
```

```sh
uid=1000(admin) gid=1000(admin) groups=1000(admin),1001(user)
```

---

`user` is in group `user`

```sh
id user
```

```sh
uid=1001(user) gid=1001(user) groups=1001(user)
```

---

```sh
getfacl file
```

```sh
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

---

```sh
getfacl first
```

```sh
# file: first
# owner: root
# group: root
user::rw-
group::r--
user:admin:---
group:user:---
group:admin:r--
mask::r--
other::---
```

---

| User | `cat file` | `cat first` |
|-|-|-|
| `admin` | allow | deny |
| `user` | deny | deny |

---

`admin` read `file` is allow

- ```sh
  getfacl file
  ...
  group:user:---
  group:admin:r--
  mask::r--
  ```

- user `admin` is allow to access `file`
  - allow access if any group of the process is granted permission
  - even group `user` is deny

---

`admin` read `first` is deny

- ```sh
  getfacl first
  ...
  user:admin:---
  group:user:---
  group:admin:r--
  mask::r--
  ```

- user `admin` is deny access `first`
  - first matched named user ACL is used
  - even group `admin` is allow access

## Mask

> Ref: [ACL Mask Value in Linux](https://linuxdatahub.com/masks-in-acl-linux-explained-with-examples-access-control-lists-mask/)

> Ref: `man setfacl`

- Masks are the highest permission allowed for user / group
- `setfacl` auto create mask entry (union all ACL entries) by default, unless option `-n` is set
- Masks only apply to extended ACL (`setfacl`), not apply to minimal ACL

```js title="pseudo code"
function effective_permission(mask, acl_entry) {
    return mask & acl_entry;
}

function is_granted(user, operation, file_acl) {
  return 
    operation & 
    effective_permission(
      file_acl.mask,
      matched_entry(user, file_acl)
    )
    > 0;
}
```
