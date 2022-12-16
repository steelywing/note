# Login / Authenticate

Login / Authenticate / User / TelNet / SSH

## Use AAA authentication / authorization

```
Switch(config)# aaa new-model
```

## Use local user authentication

```
Switch(config)# aaa authentication login default local
Switch(config)# aaa authorization exec default local
```

## Enable console authorization

```
Switch(config)# aaa authorization console
```

## Create user

```
Switch(config)# username <username> 
    privilege <privilege level> 
    password <password>
```

## Set enable password

> Ref: Unnecessary for `privilege 15` user

```
Switch(config)# enable secret <password>
```

## Console

```
Switch(config)# line console 0
Switch(config-line)# 
```

## Telnet / SSH

```
Switch(config)# line vty 0 15
Switch(config-line)# 
```

## RSA Key

Generate RSA key (for SSH)

```
Switch(config)# crypto key generate rsa
```

Add SSH RSA public key

```
Switch(config)# ip ssh pubkey-chain
Switch(conf-ssh-pubkey)# username <username>
Switch(conf-ssh-pubkey-user)# key-string
! Must less than ~80 chars/line
Switch(conf-ssh-pubkey-data)# <public key>
Switch(conf-ssh-pubkey-data)# exit
```

## Set login password

> Ref: Unnecessary if using `login local`

```
Switch(config-line)# password <password>
```

## Use password to authenticate

```
Switch(config-line)# login
```

## Use user to authenticate

```
Switch(config-line)# login local
```

## Set timeout

```
Switch(config-line)# exec-timeout 30
```

## Encrypt password

```
Switch(config)# service password-encryption
```

## Enable TelNet / SSH

```
Switch(config-line)# transport input { all | telnet | ssh | none }
```

## Use Ctrl-C to break

```
Switch(config-line)# escape-character 3
```
