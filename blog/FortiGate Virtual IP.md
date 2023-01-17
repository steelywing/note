---
tags: [FortiGate, Network]
---

# FortiGate Virtual IP

Port Forward HTTP (TCP port 80) to web server

![Network Diagram](img/FortiGate%20Virtual%20IP.drawio.svg)

- In **Policy & Objects** > **Virtual IPs**
- Click **Create New** > **Virtual IP**
- Set **Name** to **Web-HTTP**
- Set **Interface** to **any** or **WAN** interface
- Set **External IP Address/Range** to **1.2.3.4**
- Set **Mapped IP Address/Range** to **10.0.0.2**
- Enable **Port Forwarding**
- Set **Protocol** to **TCP**
- Set **External service port** to **80**
- Set **Map to port** to **80**
- Click **OK**

Create Policy

- In **Policy & Objects** > **IPv4 Policy**
- Click **Create New**
- Set **Incoming Interface** to **WAN**
- Set **Outgoing Interface** to **LAN**
- Set **Source** to **all**
- Set **Destination** to **Web-HTTP**
- Set **Service** to **ALL** or **HTTP**
- For **Deep Inspection**, see [Deep Inspection](./FortiGate%20deep%20inspection.md)
- Click **OK**
