---
date: 2023-02-01
tags: [Hardware]
---

# SoC

System on a Chip

<!--truncate-->

- Atmel (Microchip)
  - AVR
    - ATtiny85
      - DigiSpark
- STMicroelectronics
- Espressif
  - ESP8266 (WiFi)
    - ESP-01
    - ESP-02
    - ...
    - ESP-12
  - ESP8285 = ESP8266 + 1MiB Flash
  - ESP32 (WiFi + Bluetooth)

## Development board

### Arduino

- IDE: [Arduino](https://www.arduino.cc/), [PlatformIO](https://platformio.org/)

### STM

### Espressif

| | | |
|-|-|-|
| ESP8266 | WiFi | ESP-01 ~ ESP-12 |
| ESP32 | WiFi + Bluetooth |  |

- IDE: [Arduino](https://www.arduino.cc/), [PlatformIO](https://platformio.org/)
- PCB: [AI-Thinker](http://www.ai-thinker.com/)

### [Raspberry Pi](../Note/RaspberryPi.md)

- System: Linux

## USB to UART

- [WCH CH340](http://www.wch.cn/products/CH340.html)
  - *Popular*
  - UART
- [WCH CH341](http://www.wch.cn/products/CH341.html)
  - *Popular*
  - UART, I2C, SPI
- Prolific PL2303
  - Many fake
  - Fake version need [driver version 3.3.2.102](http://www.ifamilysoftware.com/Prolific_PL-2303_Code_10_Fix.html)
- Silicon CP2102
- FTDI232
  - Expensive

## Interface

- UART (Universal Asynchronous Receiver Transmitter)
  - TTL (Transistor–Transistor Logic)
    - TTL to [RS-232](https://en.wikipedia.org/wiki/RS-232)
- SPI (Serial Peripheral Interface)
- I²C / I2C (Inter-Integrated Circuit)
