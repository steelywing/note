---
date: 2025-01-12
tags: [Windows]
---

# Disable **Security Warning** when run shared file in Windows

When run shared file, Windows will display **Security Warning**

![Security Warning](Security%20Warning.png)

<!-- truncate -->

To disable **Security Warning**

- Open **Internet Options** > **Security** > **Trusted sites**
  - **Sites**
    - Disable **Require server verification (https:) for all sites in this zone**
    - **Add this website to zone:**
      - `\\<Host>`
      - **Add**
  - **Custom level...**
    - **Miscellaneous** > **Launching applications and unsafe files**
      - Select **Enable**

![Internet Options](Internet%20Options.png)
