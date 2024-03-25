# DH

Diffie–Hellman

## DH Key Exchange

| Variable | Description | Property | Value |
| - | - | - | - |
| `g` | Generator / Base | public, [primitive root modulo `p` (`p`的原根)](https://en.wikipedia.org/wiki/Primitive_root_modulo_n) | Usually = 2, 3, 5 |
| `p` | Modulus | public, prime | Usually >= 1024 bits |
| `a` | Alice's private key | | `1 <= a <= p-1` |
| `b` | Bob's private key | | `1 <= b <= p-1` |
| `A` | Alice's public key | | `A = gᵃ mod p` |
| `B` | Bob's public key | | `B = gᵇ mod p` |
| `s` | Secret key (for encrypt / decrypt) | private | `s = gᵃᵇ mod p` |

算法目的：找一個只有 Alice 及 Bob 知道的值 `s`

- 只知道密鑰交換中傳送的值 `g`, `p`, `A`, `B`，很難計算出 `a`, `b`, `s` 的值 (Discrete logarithm 離散對數)

將 `s` 賦值為 `s = gᵃᵇ mod p`，則

```
s = gᵃᵇ mod p = gᵇᵃ mod p
```

Modulo Distributive 模除 分配律

```
s = (gᵃ mod p)ᵇ mod p = (gᵇ mod p)ᵃ mod p
```

- 將 `A = gᵃ mod p` 設為 Alice's public key
- 將 `B = gᵇ mod p` 設為 Bob's public key
- 因為 `s = Aᵇ mod p = Bᵃ mod p`，所以
  - Alice 可以用 `B` 和 `a` 值計算 `s`
  - Bob 可以用 `A` 和 `b` 值計算 `s`
- 公開傳送 `g`, `p`, `A`, `B` 是安全的
  - 只有 `g`, `p`, `A` 值很難計算出 `a` 的值 (Discrete logarithm 離散對數)
  - 只有 `g`, `p`, `B` 值很難計算出 `b` 的值 (Discrete logarithm 離散對數)

## 密鑰交換過程

- Alice 傳送 `g`, `p`, `A` 的值給 Bob，Bob 可以計算 `Aᵇ mod p` 得到 `s` 值
- Bob 傳送 `B` 值給 Alice，Alice 可以計算 `Bᵃ mod p` 得到 `s` 值
- Alice 和 Bob 都取得了 `s` 值

## DH group

DH 位數、算法的 Standard

- MODP (Modular exponentiation)
- EC2N (Elliptic Curve over GF[2^N])
  - *uncommon*

| DH Group | Algorithm |
|-|-|
| [DH Group 1](https://tools.ietf.org/html/rfc2409#section-6.1) | MODP 768-bit |
| [DH Group 2](https://tools.ietf.org/html/rfc2409#section-6.2) | MODP 1024-bit |
| [DH Group 3](https://tools.ietf.org/html/rfc2409#section-6.3) | EC2N group on GP[2^155] |
| [DH Group 4](https://tools.ietf.org/html/rfc2409#section-6.4) | EC2N group on GP[2^185] |
| [DH Group 5](https://tools.ietf.org/html/rfc3526#section-2) | MODP 1536-bit |
| [DH Group 14](https://tools.ietf.org/html/rfc3526#section-3) | MODP 2048-bit |
| [DH Group 15](https://tools.ietf.org/html/rfc3526#section-4) | MODP 3072-bit |
| [DH Group 16](https://tools.ietf.org/html/rfc3526#section-5) | MODP 4096-bit |
| [DH Group 17](https://tools.ietf.org/html/rfc3526#section-6) | MODP 6144-bit |
| [DH Group 18](https://tools.ietf.org/html/rfc3526#section-7) | MODP 8192-bit |
