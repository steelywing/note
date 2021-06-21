# CLI

## Reset

```bash
hponcfg { -r | --reset }
```

## Export config to file

```bash
hponcfg { -w | --writeconfig } <file.xml>
```

## Import config from file

```bash
hponcfg { -f | --file } <file.xml>
```

## Reset password

[Reference](https://support.hpe.com/hpsc/doc/public/display?docId=emr_na-c03720020)

```xml
<!-- config.xml -->
<RIBCL VERSION="2.1">
 <LOGIN USER_LOGIN="Administrator" PASSWORD="password">
  <USER_INFO MODE="write">
    <MOD_USER USER_LOGIN="Administrator">
    <PASSWORD VALUE="<new password>"/>
    </MOD_USER>
  </USER_INFO>
 </LOGIN>
</RIBCL>
```

```bash
hponcfg -f config.xml
```

## IP Config

```xml
<!-- config.xml -->
<RIBCL VERSION="2.1">
 <LOGIN USER_LOGIN="Administrator" PASSWORD="password">
  <RIB_INFO MODE="write">
  <MOD_NETWORK_SETTINGS>
    <IP_ADDRESS VALUE = "X.X.X.X"/>
    <SUBNET_MASK VALUE = "X.X.X.X"/>
    <GATEWAY_IP_ADDRESS VALUE = "X.X.X.X"/>
    <PRIM_DNS_SERVER VALUE = "X.X.X.X"/>
    <DHCP_ENABLE VALUE = "N"/>
  </MOD_NETWORK_SETTINGS>
  </RIB_INFO>
 </LOGIN>
</RIBCL>
```

```bash
hponcfg -f config.xml
```

## License

```
34RQQ-6D5R4-G8NW3-LBMG6-MLJXR
325WC-J9QJ7-495NG-CP7WZ-7GJMM
35DPH-SVSXJ-HGBJN-C7N5R-2SS4W
```
