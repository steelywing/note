## ADB shell

### Settings

```bash
settings list global
settings get global <key>
settings put global <key> <value>
settings delete global <key>
```

## WiFi

### Captive portal

[Reference](https://www.noisyfox.io/android-captive-portal.html)

#### Connect to WiFi but no internet

```bash
# ADB shell

# < Android 7.1.2
settings put global captive_portal_detection_enabled 0

# >= Android 7.1.2
settings put global captive_portal_mode 0
```

#### Captive portal server

```bash
# ADB shell

# < Android 7.0
settings put global captive_portal_server "<URL>"

# >= Android 7.0
settings put global captive_portal_use_https {0|1}
settings put global captive_portal_http_url "<URL>"
settings put global captive_portal_https_url "<URL>"
```

### WiFi password file

```bash
/data/misc/wifi/wpa_supplicant.conf
/data/misc/wifi/wpa.conf
/data/wifi/bcm_supp.conf
```

## Dump / Backup partition

```bash
adb shell

# Some device already is root when connect
whoami

# Switch to root if is not root
su

cd /dev/block/by-name/
# or
# cd /dev/block/platform/<dev>/by-name/

# Show partiton
ls -l

dd if=<partition> of=/sdcard/<partition>.img
```

## Magisk bypass SafetyNet

- Install Magisk modules
  - MagiskHide Props Config
  - Busybox for Android NDK
- Open shell (ConnectBot)
  - `props`
    - `1 - Edit device fingerprint`
    - `f - Pick a certified fingerprint`
    - Select a fingerprint
