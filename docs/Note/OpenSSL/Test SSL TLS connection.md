# Test SSL/TLS connection

| Protocol | Port |
|-|-|
| HTTPS | 443 |
| IMAPS | 993 |
| IMAP STARTTLS | 143 |
| POP3S | 995 |
| SMTPS | 465 |
| SMTP STARTTLS | 587 |

| Option | Description |
|-|-|
| `-showcerts` | Show full chain certificate |
| `-servername <SNI>` | Set TLS SNI |
| `-verify_return_error` | Stop if verification errors |

```sh
openssl s_client [<options>] -connect <host>:<port>
```

## Show TLS certificate

```sh
openssl s_client -connect <host>:<port> [-servername <SNI>] | openssl x509 [-noout] [-text]
```

```sh
openssl s_client -connect example.org:443 -servername example.org | openssl x509 -noout -text
```

## Test SMTP / IMAP StartTLS

```sh
openssl s_client -starttls { smtp | imap | pop3 } -showcerts -connect <host>:<port> -servername <domain>
```

```sh
openssl s_client -starttls smtp -showcerts -connect example.org:587 -servername example.org
```
