# Sieve

dovecot / script / mail

## keep

Save the mail into main mailbox

```sieve
keep;

# equivalent to
fileinto "INBOX";
```

## discard

Cancel *implicit keep* (but not explicitly `keep`)

```sieve
discard;
```

The following script will `keep` the mail

```sieve
keep;
discard;
```

```sieve
discard;
keep;
```

## stop

Exit the script

> `stop` will not cancel *implicit keep*

```sieve
stop;
```

## require

```sieve
require "<capability>";

require ["<capability>", "<capability>"];
```

## Comment

```sieve
# <comment>
/* <comment> */
```

## fileinto

Save the mail into `<mailbox>`

> `fileinto` will cancel *implicit keep*

```sieve
require "fileinto";

fileinto "<mailbox>";

# Move to the <mailbox> under main mailbox
fileinto "INBOX.<mailbox>";
```

## redirect / forward

> [Reference](https://tools.ietf.org/html/rfc5228)

Forward to `<email address>`

> `redirect` will cancel *implicit keep*

```sieve
redirect "<email address>";
```

Redirect to multiple address

```sieve
redirect "<email address>";
redirect "<email address>";
```

> [Reference](https://tools.ietf.org/html/rfc3894)

Redirect and `keep`

```sieve
require "copy";

redirect :copy "<email address>"
```

## vacation / out of office

Auto reply mail

```sieve
require "vacation";

vacation
  # Only reply the same address again after <days>
  :days <days>
  :subject "<subject>"
  "<content>";
```
