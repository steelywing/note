# inode

> [Ref](https://zh.wikipedia.org/wiki/Inode)

- inode 是 file system 中，檔案的 meta data
- 很多 file system 的 inode 總數量（可用數量）在建立時就已固定，有些新的 file system 的 inode 總數量可以動態增加
- 每個 inode 都有一個 i-number (inode number)，在同一個 file system 中是唯一的
- 存取檔案：找到 file name 所指的 inode
- Kernal 打開檔案後，就不會記住 file name，而是用 inode 存取檔案
- inode 不包含檔案名 (file name 保存在 dirent)
- defrag 時 i-number 不變，只會改變 inode meta data

## inode meta data

- inode number (i-number)
- Type
  - Regular / file
  - Directory
  - Link
  - ...
- Mode: file permissions
- Flags
- Generation
- Version
- User: 檔案 owner 的 UID
- Group: 檔案 owner 的 GID
- Project
- Size
- File ACL
- Links: 檔案的 hard links 數量
- Blockcount
- Fragment
- ctime: creation time 檔案建立的時間
- atime: access time 檔案存取的時間
- mtime: modification time 檔案修改的時間
- inode checksum

## inode used info

```bash
df -i
```

## dirent

directory entry

- directory 也是一個 "檔案"，"檔案" 內容是一個 dirent list
  - [dirent struct](https://www.kernel.org/doc/html/v5.12/filesystems/ext4/dynamic.html#linear-classic-directories):
    - i-number
    - file name ( inode 的 alias / 別名 )
  - 檔案內容包含：
    - 自己的 dirent (`.`)
    - parent 的 dirent (`..`)
    - children 的 dirent
- 刪除檔案是刪除 dirent，hard link 數量減少 1
- 檔案被開啟時也可以刪除，因為刪除檔案只是刪除 dirent，不影響 inode
- unused dirent 的 i-number = 0 ([Ref](https://www.kernel.org/doc/html/v5.12/filesystems/ext4/dynamic.html#linear-classic-directories))
- root 的 i-number = 2
- hard link 是指 dirent 指向 inode，它們之間的連結關係
- symbolic link 是一個 type 為 symbolic link 的檔案，檔案內容是所指 file 的 path (file name)

## Block size

```bash
blockdev --getbsz /dev/<device>
```

## 在檔案中建立 playground file system

```bash
truncate -s 1M fs.ext2
mkfs.ext2 -F fs.ext2
mkdir ext2
mount -o loop,rw fs.ext2 ext2
debugfs -R "stat <2>" fs.ext2
debugfs -w fs.ext2
```
