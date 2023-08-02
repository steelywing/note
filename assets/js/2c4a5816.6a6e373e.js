"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3744],{96661:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/Samba VFS full audit log all operations","metadata":{"permalink":"/note/blog/Samba VFS full audit log all operations","source":"@site/blog/Samba VFS full audit log all operations.md","title":"Samba VFS full audit log all operations","description":"- VFS full audit operations change in different version, even man vfsfullaudit is not updated","date":"2023-08-02T00:00:00.000Z","formattedDate":"August 2, 2023","tags":[{"label":"Samba","permalink":"/note/blog/tags/samba"},{"label":"SMB","permalink":"/note/blog/tags/smb"}],"readingTime":0.625,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2023-08-02T00:00:00.000Z","tags":["Samba","SMB"]},"nextItem":{"title":"Create shortcut .lnk in CLI","permalink":"/note/blog/Create shortcut lnk in CLI"}},"content":"- VFS full audit operations change in different version, even `man vfs_full_audit` is not updated\\n- If un-supported operation is defined, `all` is used\\n\\n\x3c!--truncate--\x3e\\n\\nFull audit config (this version does not have `chmod`)\\n\\n```ini\\n[global]\\nvfs objects = full_audit\\nmap acl inherit = yes\\nfull_audit:failure = connect disconnect chmod\\nfull_audit:success = connect disconnect chmod\\n```\\n\\nSet `full_audit` log level\\n\\n```ini\\n[global]\\nlog level = full_audit:10@/var/log/samba/audit.log\\n# log level = full_audit:10\\n```\\n\\nor set `log level` to debug\\n\\n```ini\\n[global]\\n\\nlog file = /var/log/samba/log.%m\\nlog level = 10\\n```\\n\\nAccess Samba from client, Samba will log the debug message\\n\\nFind the un-supported operations\\n\\n```sh\\ngrep -r \\"Could not find opname\\" /var/log/samba/\\n```\\n\\n> ```sh\\n> /var/log/samba/log.user-pc.old:  Could not find opname chmod, logging all\\n> ```"},{"id":"/Create shortcut lnk in CLI","metadata":{"permalink":"/note/blog/Create shortcut lnk in CLI","source":"@site/blog/Create shortcut lnk in CLI.md","title":"Create shortcut .lnk in CLI","description":"PowerShell","date":"2023-05-31T00:00:00.000Z","formattedDate":"May 31, 2023","tags":[{"label":"PowerShell","permalink":"/note/blog/tags/power-shell"},{"label":"Windows","permalink":"/note/blog/tags/windows"}],"readingTime":0.115,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2023-05-31T00:00:00.000Z","tags":["PowerShell","Windows"]},"prevItem":{"title":"Samba VFS full audit log all operations","permalink":"/note/blog/Samba VFS full audit log all operations"},"nextItem":{"title":"Auto connect OpenVPN","permalink":"/note/blog/Auto connect OpenVPN"}},"content":"PowerShell\\n\\n```powershell\\n$ws = New-Object -ComObject WScript.Shell\\n$ws.CurrentDirectory = $PWD\\n$s = $ws.CreateShortcut(\'url.lnk\')\\n$s.TargetPath = \'http://example.com\'\\n# $s.TargetPath = \'file.txt\'\\n$s.Save()\\n```\\n\\n\x3c!--truncate--\x3e"},{"id":"/Auto connect OpenVPN","metadata":{"permalink":"/note/blog/Auto connect OpenVPN","source":"@site/blog/Auto connect OpenVPN.md","title":"Auto connect OpenVPN","description":"&gt; Version 2.5","date":"2023-02-11T00:00:00.000Z","formattedDate":"February 11, 2023","tags":[{"label":"OpenVPN","permalink":"/note/blog/tags/open-vpn"},{"label":"VPN","permalink":"/note/blog/tags/vpn"},{"label":"Windows","permalink":"/note/blog/tags/windows"}],"readingTime":0.625,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2023-02-11T00:00:00.000Z","tags":["OpenVPN","VPN","Windows"]},"prevItem":{"title":"Create shortcut .lnk in CLI","permalink":"/note/blog/Create shortcut lnk in CLI"},"nextItem":{"title":"FortiGate Virtual IP","permalink":"/note/blog/FortiGate Virtual IP"}},"content":"## &gt; Version 2.5\\n\\n> Ref: [Configuring OpenVPN to run automatically on system startup](https://openvpn.net/community-resources/configuring-openvpn-to-run-automatically-on-system-startup/)\\n\\n- Put `.ovpn` config file in folder `%ProgramFiles%\\\\OpenVPN\\\\config-auto\\\\`\\n- Set **OpenVPNService** service to **Automatic**\\n\\n\x3c!--truncate--\x3e\\n\\n## Using PowerShell\\n\\n```powershell title=\\"Administrator PowerShell\\"\\n$action = New-ScheduledTaskAction -Execute \\"`\\"${env:ProgramFiles}\\\\OpenVPN\\\\bin\\\\openvpn.exe`\\"\\" -Argument \\"--config `\\"${env:UserProfile}\\\\OpenVPN\\\\config\\\\OpenVPN.ovpn`\\"\\"\\n\\n$principal = New-ScheduledTaskPrincipal -UserId SYSTEM\\n\\n$trigger = New-ScheduledTaskTrigger -AtLogOn\\n\\n$task = New-ScheduledTask -Action $action -Principal $principal -Trigger $trigger\\n\\nRegister-ScheduledTask -TaskName OpenVPN -InputObject $task\\n```\\n\\n## Using GUI\\n\\nStart **Task Scheduler**\\n\\n![Start Task Scheduler](img/Auto%20connect%20OpenVPN/Task%20Scheduler.png)\\n\\nCreate Task\\n\\n![Create Task](img/Auto%20connect%20OpenVPN/Create%20Task.png)\\n\\n**Change User or Group** to **SYSTEM**\\n\\n![Change User or Group to SYSTEM](img/Auto%20connect%20OpenVPN/Change%20User%20or%20Group%20to%20SYSTEM.png)\\n\\n**Trigger** \u25b6 **New**\\n\\n![New Trigger](img/Auto%20connect%20OpenVPN/New%20Trigger.png)\\n\\n**Begin the task** \u25b6 **At log on**\\n\\n![At log on](img/Auto%20connect%20OpenVPN/At%20log%20on.png)\\n\\n**Actions** \u25b6 **New**\\n\\n![New Action](img/Auto%20connect%20OpenVPN/New%20Action.png)\\n\\n- Set **Program** to `\\"%ProgramFiles%\\\\OpenVPN\\\\bin\\\\openvpn.exe\\"`\\n- Set **Arg** to `--config \\"<OpenVPN.ovpn path>\\"`\\n\\n![Action](img/Auto%20connect%20OpenVPN/Action.png)"},{"id":"/FortiGate Virtual IP","metadata":{"permalink":"/note/blog/FortiGate Virtual IP","source":"@site/blog/FortiGate Virtual IP.md","title":"FortiGate Virtual IP","description":"Port Forward HTTP (TCP port 80) to web server","date":"2023-01-17T00:00:00.000Z","formattedDate":"January 17, 2023","tags":[{"label":"FortiGate","permalink":"/note/blog/tags/forti-gate"},{"label":"Firewall","permalink":"/note/blog/tags/firewall"},{"label":"Network","permalink":"/note/blog/tags/network"}],"readingTime":0.66,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2023-01-17T00:00:00.000Z","tags":["FortiGate","Firewall","Network"]},"prevItem":{"title":"Auto connect OpenVPN","permalink":"/note/blog/Auto connect OpenVPN"},"nextItem":{"title":"FortiGate deep inspection","permalink":"/note/blog/FortiGate deep inspection"}},"content":"Port Forward HTTP (TCP port 80) to web server\\n\\n\x3c!--truncate--\x3e\\n\\n![Network Diagram](img/FortiGate%20Virtual%20IP.drawio.svg)\\n\\n- In **Policy & Objects** > **Virtual IPs**\\n- Click **Create New** > **Virtual IP**\\n- Set **Name** to **Web-HTTP**\\n- Set **Interface** to **any** or **WAN** interface\\n- Set **External IP Address/Range** to **1.2.3.4**\\n- Set **Mapped IP\xa0Address/Range** to **10.0.0.2**\\n- Enable **Port Forwarding**\\n- Set **Protocol** to **TCP**\\n- Set **External service port** to **80**\\n- Set **Map to port** to **80**\\n- Click **OK**\\n\\nCreate Policy\\n\\n- In **Policy & Objects** > **IPv4 Policy**\\n- Click **Create New**\\n- Set **Incoming Interface** to **WAN**\\n- Set **Outgoing Interface** to **LAN**\\n- Set **Source** to **all**\\n- Set **Destination** to **Web-HTTP**\\n- Set **Service** to **ALL** or **HTTP**\\n- For **Deep Inspection**, see [Deep Inspection](./FortiGate%20deep%20inspection.md)\\n- Click **OK**"},{"id":"/FortiGate deep inspection","metadata":{"permalink":"/note/blog/FortiGate deep inspection","source":"@site/blog/FortiGate deep inspection.md","title":"FortiGate deep inspection","description":"Deep Inspection without SSL/TLS offload","date":"2023-01-17T00:00:00.000Z","formattedDate":"January 17, 2023","tags":[{"label":"FortiGate","permalink":"/note/blog/tags/forti-gate"},{"label":"Firewall","permalink":"/note/blog/tags/firewall"},{"label":"Network","permalink":"/note/blog/tags/network"}],"readingTime":1.01,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2023-01-17T00:00:00.000Z","tags":["FortiGate","Firewall","Network"]},"prevItem":{"title":"FortiGate Virtual IP","permalink":"/note/blog/FortiGate Virtual IP"},"nextItem":{"title":"WireShark long-term traffic capture","permalink":"/note/blog/WireShark dumpcap"}},"content":"## Deep Inspection without SSL/TLS offload\\n\\n\x3c!--truncate--\x3e\\n\\nImport the Web Server TLS certificate\\n\\n- In **System** > **Certificates**\\n- Import **Certificate** and **Key**\\n\\nCreate inspection profile\\n\\n- In **Security Profiles** > **SSL/SSH Inspection**\\n- Click **Create New**\\n- Set **Name** to **HTTPS Deep Inspection**\\n- Set **Enable SSL inspection of** to **Protecting SSL Server**\\n- Set **Server certificate** to the imported certificate\\n- Enable **HTTPS** in **Protocol Port Mapping**\\n- Click **OK**\\n\\n:::info\\n\\nIf the certificate / key is not correct, FortiGate cannot decrypt the content, then FortiGate just pass the traffic\\n\\n:::\\n\\nEnable IPS in policy\\n\\n- In **Policy & Objects**\\n- Edit the port forward policy\\n- Enable **IPS**\\n- Set **SSL Inspection** to **HTTPS Deep Inspection**\\n\\n## Testing IPS\\n\\nAdd Eicar signature\\n\\n- In **Security Profiles** > **Intrusion Prevention**\\n- Edit profile\\n- Click **Create New**\\n- Set **Type** to **Signature**\\n- Set **Action** to **Block**\\n- Search **Eicar**\\n- Add **Eicar.Virus.Test.File**\\n- Click **OK**\\n\\nTrigger IPS\\n\\n- Download [Eicar test file](https://www.eicar.org/download-anti-malware-testfile/)\\n\\n``` title=\\"eicar.com.txt\\"\\nX5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*\\n```\\n\\n- Upload the Eicar test file to web server\\n- Open the Eicar test file URL in browser to trigger IPS\\n\\nCheck the log\\n\\n- See in **Log & Report** > **Intrusion Prevention**"},{"id":"/WireShark dumpcap","metadata":{"permalink":"/note/blog/WireShark dumpcap","source":"@site/blog/WireShark dumpcap.md","title":"WireShark long-term traffic capture","description":"- WireShark is slow when capture large amount of traffic","date":"2022-12-31T00:00:00.000Z","formattedDate":"December 31, 2022","tags":[{"label":"Capture","permalink":"/note/blog/tags/capture"},{"label":"Network","permalink":"/note/blog/tags/network"},{"label":"WireShark","permalink":"/note/blog/tags/wire-shark"}],"readingTime":0.475,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-31T00:00:00.000Z","tags":["Capture","Network","WireShark"]},"prevItem":{"title":"FortiGate deep inspection","permalink":"/note/blog/FortiGate deep inspection"},"nextItem":{"title":"K6 metrics","permalink":"/note/blog/K6 metrics"}},"content":"- WireShark is slow when capture large amount of traffic\\n- WireShark include `dumpcap` command to capture traffic in CLI, that is faster\\n\\n\x3c!--truncate--\x3e\\n\\n## List interfaces\\n\\n```bash\\ndumpcap -D\\n```\\n\\n## Capture\\n\\nOption | Description\\n-|-\\n`-i <interface>` | capture `<interface>`\\n`-b filesize:<size KB>` | switch to next file after `<size KB>`\\n`-b duration:<second>` | switch to next file after `<second>` seconds\\n`-b files:<total>` | replace the oldest file after `<total>` files\\n`-f <filter>` | filter packet\\n`-w <file>` | save to `<file>`\\n\\n```bash\\ndumpcap -i 1 -b filesize:1000000 -b files:2 -w capture.pcap\\n```"},{"id":"/K6 metrics","metadata":{"permalink":"/note/blog/K6 metrics","source":"@site/blog/K6 metrics.md","title":"K6 metrics","description":"Official Web","date":"2022-12-16T00:00:00.000Z","formattedDate":"December 16, 2022","tags":[{"label":"K6","permalink":"/note/blog/tags/k-6"},{"label":"Stress Test","permalink":"/note/blog/tags/stress-test"}],"readingTime":0.285,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-16T00:00:00.000Z","tags":["K6","Stress Test"]},"prevItem":{"title":"WireShark long-term traffic capture","permalink":"/note/blog/WireShark dumpcap"},"nextItem":{"title":"Mount a path to a drive on Windows","permalink":"/note/blog/Mount path to drive"}},"content":"> [Official Web](https://k6.io/)\\n\\nExplain K6 metrics\\n\\n\x3c!--truncate--\x3e\\n\\n<table className=\\"text-center\\">\\n<tbody>\\n    <tr>\\n        <td colSpan=\\"6\\">iteration_duration</td>\\n    </tr>\\n    <tr>\\n        <td colSpan=\\"6\\"><code>http_req_*</code></td>\\n    </tr>\\n    <tr>\\n        <td colSpan=\\"3\\"></td>\\n        <td colSpan=\\"3\\">duration</td>\\n    </tr>\\n    <tr>\\n        <td>blocked</td>\\n        <td>connecting</td>\\n        <td>tls_handshaking</td>\\n        <td>sending</td>\\n        <td>waiting</td>\\n        <td>receiving</td>\\n    </tr>\\n</tbody>\\n</table>\\n\\n- Unit: ms\\n\\nMetric | Description\\n-|-\\nblocked | wait TCP slot\\nconnecting | establish TCP\\nwaiting | TTFB (Time To First Byte)"},{"id":"/Mount path to drive","metadata":{"permalink":"/note/blog/Mount path to drive","source":"@site/blog/Mount path to drive.md","title":"Mount a path to a drive on Windows","description":"Ref: Symbolic link / Hard link","date":"2022-12-16T00:00:00.000Z","formattedDate":"December 16, 2022","tags":[{"label":"Windows","permalink":"/note/blog/tags/windows"},{"label":"File System","permalink":"/note/blog/tags/file-system"}],"readingTime":0.205,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-16T00:00:00.000Z","tags":["Windows","File System"]},"prevItem":{"title":"K6 metrics","permalink":"/note/blog/K6 metrics"},"nextItem":{"title":"Red Hat firewall","permalink":"/note/blog/Red Hat firewall"}},"content":"\x3c!--truncate--\x3e\\n\\n> Ref: [Symbolic link / Hard link](../Symbolic%20link%20and%20Hard%20link)\\n\\n## List `subst` drives\\n\\n```cmd\\nsubst\\n```\\n## Mount a path to a drive\\n\\n```cmd\\nsubst <drive>: <path>\\n```\\n\\n```cmd\\nsubst V: \\"C:\\\\Virtual-Drive\\\\\\"\\n```\\n\\n## Delete a drive\\n\\n```cmd\\nsubst <drive>: /d\\n```"},{"id":"/Red Hat firewall","metadata":{"permalink":"/note/blog/Red Hat firewall","source":"@site/blog/Red Hat firewall.md","title":"Red Hat firewall","description":"Ref: Working with Zones | Red Hat","date":"2022-12-16T00:00:00.000Z","formattedDate":"December 16, 2022","tags":[{"label":"Red Hat","permalink":"/note/blog/tags/red-hat"},{"label":"Firewall","permalink":"/note/blog/tags/firewall"},{"label":"Network","permalink":"/note/blog/tags/network"}],"readingTime":1.135,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-16T00:00:00.000Z","tags":["Red Hat","Firewall","Network"]},"prevItem":{"title":"Mount a path to a drive on Windows","permalink":"/note/blog/Mount path to drive"},"nextItem":{"title":"Symbolic link / Hard link on Windows","permalink":"/note/blog/Symbolic link and Hard link"}},"content":"> Ref: [Working with Zones | Red Hat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/security_guide/sec-working_with_zones)\\n\\n> Ref: [Secure your Linux network with firewall-cmd](https://www.redhat.com/sysadmin/secure-linux-network-firewall-cmd)\\n\\n- Interface can be assigned to a zone\\n- Policy (ACL) can apply to zone\\n\\n\x3c!--truncate--\x3e\\n\\n## Zone\\n\\nZone can apply to network interface or source address\\n\\n### List zones\\n\\n```sh\\nfirewall-cmd --get-zones\\n```\\n\\n### Display zone detail\\n\\nDisplay allowed service, port\\n\\n```sh\\nfirewall-cmd --list-all [--zone=<zone name>]\\n```\\n\\n### Display all zone detail\\n\\n```sh\\nfirewall-cmd --list-all-zones\\n```\\n\\n### Get default zone\\n\\n```sh\\nfirewall-cmd --get-default-zone\\n```\\n\\n### Set default zone\\n\\n```sh\\nfirewall-cmd --set-default-zone <zone name>\\n```\\n\\n### Assign interface to a zone\\n\\n```sh\\nfirewall-cmd --zone=<zone name> --change-interface=<interface name>\\n```\\n\\n## Service\\n\\nService / Rule / ACL\\n\\n### Add service / TCP / UDP port\\n\\n```sh\\nfirewall-cmd --add-service=<service> [--zone=<zone name>] [--permanent]\\n```\\n\\nOption | Description\\n-|-\\ndefault | add service to runtime, not permanent\\n`--permanent` | add service to permanent, not runtime\\n\\nAllow SSH\\n\\n```sh\\nfirewall-cmd --add-service=ssh\\n```\\n\\n### List all service\\n\\n```sh\\nfirewall-cmd --get-services\\n```\\n\\n### Add port\\n\\n```sh\\nfirewall-cmd --add-port <port>/{udp|tcp}\\n```\\n\\nAdd TCP port 8080\\n\\n```sh\\nfirewall-cmd --add-port 8080/tcp\\n\\n# save\\nfirewall-cmd --runtime-to-permanent\\n```\\n\\n### Remove port\\n\\n```sh\\nfirewall-cmd --remove-port <port>/{udp|tcp}\\n```\\n\\nRemove TCP port 8080\\n\\n```sh\\nfirewall-cmd --remove-port 8080/tcp\\n\\n# save\\nfirewall-cmd --runtime-to-permanent\\n```\\n\\n## Make runtime setting persistent\\n\\nSave runtime setting\\n\\n```sh\\nfirewall-cmd --runtime-to-permanent\\n```\\n\\n## Reload\\n\\nReload to apply permanent rule to runtime\\n\\n```sh\\nfirewall-cmd --reload\\n```"},{"id":"/Symbolic link and Hard link","metadata":{"permalink":"/note/blog/Symbolic link and Hard link","source":"@site/blog/Symbolic link and Hard link.md","title":"Symbolic link / Hard link on Windows","description":"Symbolic link","date":"2022-12-16T00:00:00.000Z","formattedDate":"December 16, 2022","tags":[{"label":"Windows","permalink":"/note/blog/tags/windows"},{"label":"File System","permalink":"/note/blog/tags/file-system"}],"readingTime":0.775,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-16T00:00:00.000Z","tags":["Windows","File System"]},"prevItem":{"title":"Red Hat firewall","permalink":"/note/blog/Red Hat firewall"},"nextItem":{"title":"Monitor process system call","permalink":"/note/blog/Monitor process system call"}},"content":"\x3c!--truncate--\x3e\\n\\n## Symbolic link\\n\\nAKA SymLink / Soft link\\n\\n- Symbolic link contains the text of target path\\n- If target move / remove, the link is broken\\n\\n## Hard link\\n\\n- Hard link is meta data of the file, that is [inode](/Linux/inode/) on Linux\\n- If target move / remove, the link is broken\\n\\n\x3c!--truncate--\x3e\\n\\n> Ref: `mklink` only available on `cmd`, not on `PowerShell`\\n\\n## Create symbolic link\\n\\n```cmd title=\\"cmd\\"\\nmklink <link> <source>\\n```\\n\\n```powershell title=\\"PowerShell\\"\\nNew-Item -ItemType SymbolicLink -Path \\"<link>\\" -Target \\"<source>\\"\\n```\\n\\n## Create symbolic link for directory\\n\\n```cmd title=\\"cmd\\"\\nmklink /d <link> <source>\\n```\\n\\n```powershell title=\\"PowerShell\\"\\nNew-Item -ItemType SymbolicLink -Path \\"<link>\\" -Target \\"<source>\\"\\n```\\n\\n## Create hard link\\n\\n```cmd title=\\"cmd\\"\\nmklink /h <link> <source>\\n```\\n\\n```powershell title=\\"PowerShell\\"\\nNew-Item -ItemType HardLink -Path \\"<link>\\" -Target \\"<source>\\"\\n```\\n\\n## Create directory junction\\n\\nHard link for directory\\n\\n```powershell title=\\"PowerShell\\"\\nNew-Item -ItemType Junction -Path \\"<link>\\" -Target \\"<source>\\"\\n```\\n\\n```cmd title=\\"cmd\\"\\nmklink /j <link> <source>\\n```"},{"id":"/Monitor process system call","metadata":{"permalink":"/note/blog/Monitor process system call","source":"@site/blog/Monitor process system call.md","title":"Monitor process system call","description":"Trace / Monitor process system call In Linux","date":"2022-12-10T00:00:00.000Z","formattedDate":"December 10, 2022","tags":[{"label":"Linux","permalink":"/note/blog/tags/linux"},{"label":"Debug","permalink":"/note/blog/tags/debug"},{"label":"Monitor","permalink":"/note/blog/tags/monitor"}],"readingTime":0.225,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-10T00:00:00.000Z","tags":["Linux","Debug","Monitor"]},"prevItem":{"title":"Symbolic link / Hard link on Windows","permalink":"/note/blog/Symbolic link and Hard link"},"nextItem":{"title":"Install / Enable Hyper-V","permalink":"/note/blog/Enable Hyper-V"}},"content":"Trace / Monitor process system call In Linux\\n\\n\x3c!--truncate--\x3e\\n\\n```bash title=\\"Syntax\\"\\n# <system call> = { open | close | read | write | ... }\\nstrace [-e trace={<system call>[,...]}] -p <PID>\\n```\\n\\nTo trace `apache2` process\\n\\n```bash title=\\"Syntax\\"\\nstrace -p $(pidof -s apache2)\\n```"},{"id":"/Enable Hyper-V","metadata":{"permalink":"/note/blog/Enable Hyper-V","source":"@site/blog/Enable Hyper-V.md","title":"Install / Enable Hyper-V","description":"Ref: Enable Hyper-V","date":"2022-12-05T00:00:00.000Z","formattedDate":"December 5, 2022","tags":[{"label":"VM","permalink":"/note/blog/tags/vm"},{"label":"Hyper-V","permalink":"/note/blog/tags/hyper-v"},{"label":"Windows","permalink":"/note/blog/tags/windows"}],"readingTime":0.205,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-05T00:00:00.000Z","tags":["VM","Hyper-V","Windows"]},"prevItem":{"title":"Monitor process system call","permalink":"/note/blog/Monitor process system call"},"nextItem":{"title":"Windows host name resolution order","permalink":"/note/blog/Windows host-name resolution order"}},"content":"\x3c!--truncate--\x3e\\n\\n> Ref: [Enable Hyper-V](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)\\n\\n## Using GUI\\n\\n- Open **Turn Windows features on or off**\\n- Enable **Hyper-V**\\n\\n![Install Hyper-V](img/Hyper-V.png)\\n\\n## Using DISM\\n\\n```cmd\\nDISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V\\n```\\n\\n## Using PowerShell\\n\\n```powershell\\nEnable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All\\n```"},{"id":"/Windows host-name resolution order","metadata":{"permalink":"/note/blog/Windows host-name resolution order","source":"@site/blog/Windows host-name resolution order.md","title":"Windows host name resolution order","description":"Ref: Microsoft TCP/IP Host Name Resolution Order","date":"2022-12-05T00:00:00.000Z","formattedDate":"December 5, 2022","tags":[{"label":"Windows","permalink":"/note/blog/tags/windows"},{"label":"Network","permalink":"/note/blog/tags/network"},{"label":"DNS","permalink":"/note/blog/tags/dns"}],"readingTime":0.15,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-05T00:00:00.000Z","tags":["Windows","Network","DNS"]},"prevItem":{"title":"Install / Enable Hyper-V","permalink":"/note/blog/Enable Hyper-V"},"nextItem":{"title":"iperf network speed test","permalink":"/note/blog/iperf"}},"content":"> Ref: [Microsoft TCP/IP Host Name Resolution Order](https://support.microsoft.com/en-au/help/172218/microsoft-tcp-ip-host-name-resolution-order)\\n\\n\x3c!--truncate--\x3e\\n\\n1. Self host name\\n2. `hosts` file (`%SystemRoot%\\\\System32\\\\drivers\\\\etc\\\\hosts`)\\n3. DNS\\n4. NBNS (NetBIOS Name Service) / LLMNR (Link-local Multicast Name Resolution)"},{"id":"/iperf","metadata":{"permalink":"/note/blog/iperf","source":"@site/blog/iperf.md","title":"iperf network speed test","description":"Use iperf to test / measure network speed / bandwidth / throughput","date":"2022-12-05T00:00:00.000Z","formattedDate":"December 5, 2022","tags":[{"label":"Speed Test","permalink":"/note/blog/tags/speed-test"},{"label":"Network","permalink":"/note/blog/tags/network"}],"readingTime":0.835,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-12-05T00:00:00.000Z","tags":["Speed Test","Network"]},"prevItem":{"title":"Windows host name resolution order","permalink":"/note/blog/Windows host-name resolution order"},"nextItem":{"title":"7z max compression","permalink":"/note/blog/7z max compression"}},"content":"Use `iperf` to test / measure network speed / bandwidth / throughput\\n\\n\x3c!--truncate--\x3e\\n\\n## `iperf2`\\n\\n[Download](https://sourceforge.net/projects/iperf2/)\\n\\n- Multi-thread\\n- Support multi-cast\\n- Official support Windows\\n\\n## `iperf3`\\n\\n[Download](https://github.com/esnet/iperf)\\n\\n- Single-thread\\n\\n## Comparison\\n\\n> [`iperf2` / `iperf3` comparison](https://fasterdata.es.net/performance-testing/network-troubleshooting-tools/iperf/)\\n\\n## Test using TCP\\n\\n```bash title=\\"Server\\"\\niperf -s -w1M -i2\\n```\\n\\n```bash title=\\"Client\\"\\niperf -c <server IP address> -w1M -i2\\n```\\n\\n## Test using UDP\\n\\n```bash title=\\"Server\\"\\niperf -u -s -w1M -i2\\n```\\n\\n```bash title=\\"Client\\"\\niperf -u -b 10M -c <server IP address> -w1M -i2\\n```\\n\\n## Syntax\\n\\n```bash\\niperf <option>\\n```\\n\\nOption | Description\\n-|-\\n`-s` | run server\\n`-D` | run server as daemon\\n`-c <host>` | run client, connect to server `<host>`\\n`-w <size>{K\xa6M}` | set TCP window size, suggest &gt; 1M\\n`-u` | use UDP\\n`-b <bandwidth>{K\xa6M}` | set bandwidth, required for UDP\\n`-p <port>` | use port `<port>`\\n`-i <second>` | show report per `<second>`\\n`-d` \xa6 `--dualtest` | bi-directional test\\n`-t <second>` | run `<second>` test\\n`--reverse` | reverse test (client receive, server send)"},{"id":"/7z max compression","metadata":{"permalink":"/note/blog/7z max compression","source":"@site/blog/7z max compression.md","title":"7z max compression","description":"7z max compression ratio","date":"2022-11-30T00:00:00.000Z","formattedDate":"November 30, 2022","tags":[{"label":"7z","permalink":"/note/blog/tags/7-z"},{"label":"Compress","permalink":"/note/blog/tags/compress"}],"readingTime":0.34,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-11-30T00:00:00.000Z","tags":["7z","Compress"]},"prevItem":{"title":"iperf network speed test","permalink":"/note/blog/iperf"},"nextItem":{"title":"GoAccess with Nginx proxy","permalink":"/note/blog/GoAccess with Nginx proxy"}},"content":"`7z` max compression ratio\\n\\n\x3c!--truncate--\x3e\\n\\n```powershell\\n# -t7z : 7z archive type\\n# -mx=9 : ultra compressing\\n# -md=1g : 1GB dictionary size\\n\\n# Default:\\n# - 7z archive type use LZMA2\\n# - Match Finder = bt4\\n\\n# bt4 memory usage\\n#   = 10.5 * <dictionary size> + 4MB\\n#   = 10.5GB RAM\\n\\n# Decompressing need <dictionary size> memory\\n\\n7z a <file.7z> -t7z -mx=9 -md=1g <file>\\n```"},{"id":"/GoAccess with Nginx proxy","metadata":{"permalink":"/note/blog/GoAccess with Nginx proxy","source":"@site/blog/GoAccess with Nginx proxy.md","title":"GoAccess with Nginx proxy","description":"Setup GoAccess WebSocket with Nginx proxy","date":"2022-11-30T00:00:00.000Z","formattedDate":"November 30, 2022","tags":[{"label":"GoAccess","permalink":"/note/blog/tags/go-access"},{"label":"Nginx","permalink":"/note/blog/tags/nginx"},{"label":"Log","permalink":"/note/blog/tags/log"},{"label":"Proxy","permalink":"/note/blog/tags/proxy"},{"label":"WebSocket","permalink":"/note/blog/tags/web-socket"}],"readingTime":0.625,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-11-30T00:00:00.000Z","tags":["GoAccess","Nginx","Log","Proxy","WebSocket"]},"prevItem":{"title":"7z max compression","permalink":"/note/blog/7z max compression"},"nextItem":{"title":"Migrate to Blog","permalink":"/note/blog/Migrate to blog"}},"content":"Setup GoAccess WebSocket with Nginx proxy\\n\\n\x3c!--truncate--\x3e\\n\\n## GoAccess\\n\\nWeb log analyzer\\n\\n## Install\\n\\nCentOS\\n\\n```bash\\n# Install dependency\\nsudo yum -y install epel-release\\nsudo yum -y update\\nsudo yum -y install ncurses-devel gcc\\n\\n# Optional dependency\\nsudo yum -y install geoip-devel tokyocabinet-devel\\n\\n# Download source\\nwget https://tar.goaccess.io/goaccess-1.6.2.tar.gz\\ntar -zxf goaccess-1.6.2.tar.gz\\n\\n# Build\\ncd goaccess-1.6.2\\n./configure --enable-utf8 --enable-geoip=mmdb\\nmake\\nmake install\\n```\\n\\n## Real-time web output\\n\\n```bash\\ngoaccess \\n    -o /var/www/html/report/index.html\\n    --log-format=COMBINED\\n    --real-time-html\\n\\n    # For WebSocket proxy\\n    --ws-url=ws://<server IP address>:80/ws/\\n\\n    /var/log/nginx/access.log\\n```\\n\\nNginx proxy\\n\\n> Ref: [Nginx WebSocket](https://www.nginx.com/blog/websocket-nginx/)\\n\\n```nginx\\nserver {\\n    listen 80;\\n    server_name example.com;\\n\\n    location / {\\n        root /usr/share/nginx/html/;\\n        # ...\\n    }\\n\\n    # Proxy WebSocket /ws/ to localhost:7890/\\n    location /ws/ {\\n        proxy_pass http://localhost:7890/;\\n        proxy_set_header Upgrade $http_upgrade;\\n        proxy_set_header Connection \\"Upgrade\\";\\n        proxy_set_header Host $host;\\n    }\\n}\\n```"},{"id":"/Migrate to blog","metadata":{"permalink":"/note/blog/Migrate to blog","source":"@site/blog/Migrate to blog.md","title":"Migrate to Blog","description":"\u81ea\u5df1\u5beb\u7684 Note \u8d8a\u4f86\u8d8a\u591a\uff0c\u76f8\u95dc\u7684\u5206\u985e\u592a\u591a\uff0c\u6709\u6642\u6574\u7406\u5f88\u4e0d\u65b9\u4fbf\uff0c\u4e5f\u5f88\u96e3\u627e\uff0c\u767c\u73fe Guide \u985e\u578b\u7684\uff0c\u7528 Blog \u7684\u5f62\u5f0f\u6703\u6bd4\u8f03\u6613\u6574\u7406\uff0c\u518d\u7528 Tags \u5206\u985e\uff0c\u6709\u6642\u9593\u6703\u5c07\u76f8\u95dc\u7684 Note \u8f49\u505a Blog","date":"2022-11-30T00:00:00.000Z","formattedDate":"November 30, 2022","tags":[{"label":"Blog","permalink":"/note/blog/tags/blog"}],"readingTime":0.315,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-11-30T00:00:00.000Z","tags":["Blog"]},"prevItem":{"title":"GoAccess with Nginx proxy","permalink":"/note/blog/GoAccess with Nginx proxy"},"nextItem":{"title":"PuTTY import / export setting","permalink":"/note/blog/PuTTY setting"}},"content":"\u81ea\u5df1\u5beb\u7684 Note \u8d8a\u4f86\u8d8a\u591a\uff0c\u76f8\u95dc\u7684\u5206\u985e\u592a\u591a\uff0c\u6709\u6642\u6574\u7406\u5f88\u4e0d\u65b9\u4fbf\uff0c\u4e5f\u5f88\u96e3\u627e\uff0c\u767c\u73fe Guide \u985e\u578b\u7684\uff0c\u7528 Blog \u7684\u5f62\u5f0f\u6703\u6bd4\u8f03\u6613\u6574\u7406\uff0c\u518d\u7528 Tags \u5206\u985e\uff0c\u6709\u6642\u9593\u6703\u5c07\u76f8\u95dc\u7684 Note \u8f49\u505a Blog\\n\\n\x3c!--truncate--\x3e"},{"id":"/PuTTY setting","metadata":{"permalink":"/note/blog/PuTTY setting","source":"@site/blog/PuTTY setting.md","title":"PuTTY import / export setting","description":"PuTTY Official","date":"2022-11-30T00:00:00.000Z","formattedDate":"November 30, 2022","tags":[{"label":"PuTTY","permalink":"/note/blog/tags/pu-tty"},{"label":"SSH","permalink":"/note/blog/tags/ssh"}],"readingTime":0.105,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-11-30T00:00:00.000Z","tags":["PuTTY","SSH"]},"prevItem":{"title":"Migrate to Blog","permalink":"/note/blog/Migrate to blog"},"nextItem":{"title":"Steam Client WebHelper use high CPU","permalink":"/note/blog/Steam high CPU"}},"content":"> [PuTTY Official](https://www.chiark.greenend.org.uk/~sgtatham/putty/)\\n\\n\x3c!--truncate--\x3e\\n\\n## Export setting\\n\\n```bat\\nreg export HKCU\\\\Software\\\\SimonTatham\\\\PuTTY PuTTY.reg\\n```\\n\\n## Import setting\\n\\n```bat\\nreg import PuTTY.reg\\n```"},{"id":"/Steam high CPU","metadata":{"permalink":"/note/blog/Steam high CPU","source":"@site/blog/Steam high CPU.md","title":"Steam Client WebHelper use high CPU","description":"Steam Client Animated Avatars use high CPU","date":"2022-11-30T00:00:00.000Z","formattedDate":"November 30, 2022","tags":[{"label":"Steam","permalink":"/note/blog/tags/steam"},{"label":"CPU","permalink":"/note/blog/tags/cpu"},{"label":"Fix","permalink":"/note/blog/tags/fix"}],"readingTime":0.155,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-11-30T00:00:00.000Z","tags":["Steam","CPU","Fix"]},"prevItem":{"title":"PuTTY import / export setting","permalink":"/note/blog/PuTTY setting"},"nextItem":{"title":"template","permalink":"/note/blog/template"}},"content":"Steam Client **Animated Avatars** use high CPU\\n\\n\x3c!--truncate--\x3e\\n\\n- **Friends List**\\n- **Settings**\\n- **Friends List**\\n- Disable **Enable Animated Avatars & Animated Avatar Frames in your Friends List and Chat**"},{"id":"/template","metadata":{"permalink":"/note/blog/template","source":"@site/blog/template.md","title":"template","description":"","date":"2022-11-30T00:00:00.000Z","formattedDate":"November 30, 2022","tags":[],"readingTime":0.005,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2022-11-30T00:00:00.000Z","tags":[]},"prevItem":{"title":"Steam Client WebHelper use high CPU","permalink":"/note/blog/Steam high CPU"}},"content":"\x3c!--truncate--\x3e"}]}')}}]);