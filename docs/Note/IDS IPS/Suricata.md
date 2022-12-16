# Suricata

## Installation

### CentOS

```bash
sudo yum install epel-release yum-plugin-copr
sudo yum copr enable @oisf/suricata-6.0
sudo yum install suricata
```

Auto start

```bash
sudo systemctl enable suricata.service
```

`suricata-update` require `PyYAML`

```bash
sudo yum install PyYAML
```

Update signatures

```bash
sudo suricata-update
```

Restart

```bash
sudo systemctl restart suricata
```

> Ref: [Installation](https://suricata.readthedocs.io/en/latest/install.html)

## Alerting

### Test alert

```bash
curl http://testmynids.org/uid/index.html
```

### View alert log

```bash
sudo tail /var/log/suricata/fast.log
```

## `eve.json`

```yaml title="eve.json"
outputs:
  - eve-log:
      enabled: yes
      filename: eve.json
      types:
        # Disable flow log, very large
        # - flow

        # Disable event type "fileinfo", large too
        # - files:
            # force-magic: no
```

### Count `event_type` in `eve.json`

```bash
cat eve.json | jq ".event_type" | sort | uniq -c
```

```
      4 "alert"
      7 "stats"
     89 "tls"
```

### Monitor `alert`

```bash
tail -f eve.json | jq 'select(.event_type=="alert")'
```
