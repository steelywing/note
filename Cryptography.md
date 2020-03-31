# Symmetric key

## DES (Data Encryption Standard)

*deprecated*

## 3DES (Triple Data Encryption Algorithm)

*deprecated*

## AES (Advanced Encryption Standard)

*recommended*

# Asymmetric key (public/private key)

## RSA (Rivest–Shamir–Adleman)

# DH (Diffie–Hellman) key exchange

| Variable | Description | Property | Value |
| - | - | - | - |
| `g` | Base | public, prime, usually is 2, 3, 5 |  |
| `p` | Modulus | public, prime, large |  |
| `a` | Alice's private key |  |
| `b` | Bob's private key |  |
| `A` | Alice's public key |  | `A = gᵃ mod p` |
| `B` | Bob's public key |  | `B = gᵇ mod p` |
| `s` | Shared secret key | private, use for encrypt / decrypt | `s = gᵃᵇ mod p` |

算法目的：找一個只有 Alice 及 Bob 知道的值 `s`

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

- Alice 和 Bob 公開交換 `g` 和 `p` 數值
- Alice 傳送 `A` 值給 Bob，Bob 可以計算 `Aᵇ mod p` 得到 `s`
- Bob 傳送 `B` 值給 Alice，Alic 可以計算 `Bᵃ mod p` 得到 `s`
