# Table of Contents
- [Table of Contents](#Table-of-Contents)
- [LF (Low Frequency)](#LF-Low-Frequency)
  - [EM4100](#EM4100)
- [HF (High Frequency)](#HF-High-Frequency)
  - [MiFare](#MiFare)
    - [MiFare Classic](#MiFare-Classic)
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

## MiFare

### MiFare Classic

[MiFare Classic 1K Reference](https://www.nxp.com/docs/en/data-sheet/MF1S50YYX_V1.pdf)

[MiFare Classic 4K Reference](https://www.nxp.com/docs/en/data-sheet/MF1S70YYX_V1.pdf)

ISO/IEC 14443 Type A

Alias: IC card

[MiFare Classic Offline Cracker](https://github.com/nfc-tools/mfoc)

[MiFare Classic Universal toolKit](https://github.com/nfc-tools/mfcuk)

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
MiFare Classic 1K = 40 ✖ Sector = 64 ✖ Block
Sector = 3 ✖ Data Block + Sector Trailer

MiFare Classic 4K = 
  32 ✖ Sector ( 3 ✖ Block + Sector Trailer) + 
   8 ✖ Sector (15 ✖ Block + Sector Trailer)
    = 256 ✖ Block
```

```
Sector[0] Read Only
Sector[0] Block[0] = 4 ✖ UID + Manufacturer Data
```

```
Data Block = 16 Bytes
```

```
Sector Trailer = Key A (6 Bytes) + Access Bits (4 Bytes) + Key B (6 Bytes)
```

## NFC
