# Package management

## Install Development Tools

CentOS

```bash
# List available groups
yum group list

# Install "Development Tools"
yum group install "Development Tools"
```

Ubuntu

```bash
apt install build-essential
```

MSYS2

```bash
pacman -S base-devel
```

## Add EPEL repository to CentOS / RHEL

:::note Reference

[Extra Packages for Enterprise Linux (EPEL)](https://fedoraproject.org/wiki/EPEL)

:::

```bash
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

## Download package with dependence

For Debian

:::note Reference

[Stack Overflow](https://stackoverflow.com/a/41428445/1877620)

:::

```bash
# -i = --important : Show only Depends and Pre-Depends
apt download $(apt-cache depends --recurse -i <package> | grep -v "^[ <]")
```

Install downloaded package

```bash
# -m = --fix-missing : Ignore missing packages
sudo apt-get install -m --no-download ./*.deb
```

or

```bash
sudo dpkg -i ./*.deb
```

## List installed package

For Debian

```bash
apt list --installed [<package name pattern>]
```

or

```bash
# -l = --list
dpkg -l [<package name pattern>]
```
