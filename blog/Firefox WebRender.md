---
date: 2023-08-02
tags: [Firefox]
---

# Enable WebRender in Firefox

> [Reference](https://wiki.mozilla.org/Platform/GFX/Quantum_Render)

```ini title="about:config"
gfx.webrender.enabled = true
gfx.webrender.all = true

# On Linux, Enable hardware acceleration
layers.acceleration.force-enabled = true
```
