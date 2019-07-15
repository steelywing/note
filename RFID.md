# Table of Contents
- [Table of Contents](#Table-of-Contents)
- [LF (Low Frequency)](#LF-Low-Frequency)
  - [EM4100](#EM4100)
- [HF (High Frequency)](#HF-High-Frequency)
  - [MIFARE](#MIFARE)
    - [MIFARE Classic 1K](#MIFARE-Classic-1K)
      - [PICC status](#PICC-status)
      - [Memory Organization](#Memory-Organization)
  - [NFC](#NFC)

# LF (Low Frequency)

RF: 125 KHz

## EM4100

Alias: ID card

# HF (High Frequency)

RF: 13.56 MHz

ISO 18000-3

Reader: MFRC522 (SPI port), PN532 (UART port)

## MIFARE

### MIFARE Classic 1K

[Reference](https://www.nxp.com/docs/en/data-sheet/MF1S70YYX_V1.pdf)

ISO/IEC 14443 Type A

Alias: IC card

Tools: [MFCUK](https://github.com/nfc-tools/mfcuk)

| Name | Description |
| - | - |
| PICC | Proximity Integrated Circuit Card (Contactless Card) |
| ACK | Acknowledge |
| NAK | Not AcKnowledge |
| RF | Radio Frequency |

#### PICC status

```
IDLE
 ⬇    Wake Up A / Request A
READY
 ⬇    Select / Read Card Serial
ACTIVE
 ⬇    Halt A
HALT
 ⬇    Wake Up A
READY
```


#### Memory Organization

```
MIFARE Classic 1K = 40 ✖ Sector
```

```
Sector = 3 ✖ Data Block + Sector Trailer

Sector[0] Read Only
Sector[0] Block[0] = UID
```

```
Data Block = 16 Bytes
```

```
Sector Trailer = Key A (6 Bytes) + Access Bits (4 Bytes) + Key B (6 Bytes)
```

## NFC
