# Reset password

Reset Cisco IOS Password

- Serial setting
  - 9600 baud rate
  - No parity
  - 8 data bits
  - 1 stop bit
  - No flow control 
- Hold the **Mode** button while power up the switch
- If the switch no **Mode** button...
  - Send **Break** key in 15 seconds while power up

USB to Serial (RS232) cable may be not working

> [Reference](https://www.cisco.com/c/en/us/support/docs/routers/10000-series-routers/12818-61.html)

- Serial setting
  - 1200 baud rate
  - No parity
  - 8 data bits
  - 1 stop bit
  - No flow control 
- Repeatedly press **Space** for 10~15 seconds while reboot
- Change serial setting
  - 9600 baud rate
  - No parity
  - 8 data bits
  - 1 stop bit
  - No flow control 

For Switch

```
switch: flash_init
switch: load_helper
switch: dir flash:
switch: rename flash:config.text flash:config.old
switch: boot
```

```ios
Switch# rename flash:config.old flash:config.text
Switch# copy flash:config.text system:running-config
Switch# conf t
Switch(config)# enable password <password>
```
