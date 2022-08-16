# Build from source

## CentOS

```bash
# Install dependency
sudo yum -y install epel-release
sudo yum install -y make gcc perl-core perl-Text-Template zlib-devel wget

wget https://www.openssl.org/source/openssl-1.1.1q.tar.gz

tar -zxf openssl-1.1.1q.tar.gz
cd openssl-1.1.1q

./config --prefix=/usr/local/ --openssldir=/etc/ssl --libdir=lib shared zlib-dynamic
make
make test
make install
```
