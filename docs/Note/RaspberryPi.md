## LED

### LED mode

|  |  |
| - | - |
| `led0` | Green LED (ACT LED) |
| `led1` | Red LED (PWR LED) |

Get current mode and list available mode

```bash
sudo cat /sys/class/leds/led{0|1}/trigger
```

Set LED mode

```bash
echo <mode> | sudo tee /sys/class/leds/led{0|1}/trigger
```

### Switch

|  |  |
| - | - |
| `0` | Off |
| `1` | On |

```bash
echo { 0 | 1 } | sudo tee /sys/class/leds/led{0|1}/brightness
```

### Disable LED

[Reference](https://github.com/raspberrypi/firmware/blob/master/boot/overlays/README)

```ini
# /boot/config.txt

dtparam=pwr_led_trigger=default-on
dtparam=pwr_led_activelow=on

dtparam=act_led_trigger=default-on
dtparam=act_led_activelow=on
```

## Auto start

> [Reference](https://wiki.lxde.org/en/LXSession#Autostarted_applications_using_lxsession)

## Disable warning

> [Reference](https://www.raspberrypi.org/documentation/configuration/config-txt/misc.md)

Disable warning symbols

![Under Voltage](img/under_volt.png)
![Over temperature](img/over_temperature_80_85.png)
![Over temperature](img/over_temperature_85.png)

```ini
# Disable warning
avoid_warnings=1

# Disable warning and allows turbo mode even when low-voltage
avoid_warnings=2
```
