# ADB shell

## Settings

```sh
settings list global
settings get global <key>
settings put global <key> <value>
settings delete global <key>
```

# WiFi

## Captive portal

[Reference](https://www.noisyfox.io/android-captive-portal.html)

### Connect to WiFi but no internet

```sh
# ADB shell

# < Android 7.1.2
settings put global captive_portal_detection_enabled 0

# >= Android 7.1.2
settings put global captive_portal_mode 0
```

### Captive portal server

```sh
# ADB shell

# < Android 7.0
settings put global captive_portal_server "<URL>"

# >= Android 7.0
settings put global captive_portal_use_https {0|1}
settings put global captive_portal_http_url "<URL>"
settings put global captive_portal_https_url "<URL>"
```