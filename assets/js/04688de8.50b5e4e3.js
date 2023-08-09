"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7056],{87485:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(76274),r=(n(76687),n(87485));const l={id:"index",slug:".",sidebar_position:0},o="Windows",i={unversionedId:"Windows/index",id:"Windows/index",title:"Windows",description:"Recovery",source:"@site/docs/Windows/README.md",sourceDirName:"Windows",slug:"/Windows/",permalink:"/note/Windows/",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/README.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",slug:".",sidebar_position:0},sidebar:"windows",next:{title:"ACL",permalink:"/note/Windows/ACL"}},s={},p=[{value:"Recovery",id:"recovery",level:2},{value:"WinRE (Windows Recovery Environment)",id:"winre-windows-recovery-environment",level:3},{value:"System image",id:"system-image",level:3},{value:"Control panel",id:"control-panel",level:2},{value:"Startup",id:"startup",level:2},{value:"User Startup folder",id:"user-startup-folder",level:3},{value:"All Users Startup folder",id:"all-users-startup-folder",level:3},{value:"User",id:"user",level:2},{value:"User Account Management / Auto Login",id:"user-account-management--auto-login",level:3},{value:"Computer Management / Local User",id:"computer-management--local-user",level:3},{value:"Create User",id:"create-user",level:3},{value:"Delete User",id:"delete-user",level:3},{value:"Make password never expire",id:"make-password-never-expire",level:3},{value:"Group Policy",id:"group-policy",level:2},{value:"Remote Desktop",id:"remote-desktop",level:2},{value:"Hibernate",id:"hibernate",level:2},{value:"<code>.cab</code> file",id:"cab-file",level:2},{value:"Cortana",id:"cortana",level:2},{value:"Allow input unicode with <kbd>Alt</kbd> + <kbd>+&lt;Code&gt;</kbd>",id:"allow-input-unicode-with-alt--code",level:2},{value:"Enable / Disable the Local Built-In Administrator Account",id:"enable--disable-the-local-built-in-administrator-account",level:2},{value:"Get OS Architecture (32-bit / 64-bit)",id:"get-os-architecture-32-bit--64-bit",level:2},{value:"SLP (System Locked Pre-installation) / SLIC (System License Internal Code)",id:"slp-system-locked-pre-installation--slic-system-license-internal-code",level:2},{value:"Code page",id:"code-page",level:2},{value:"Cleanup",id:"cleanup",level:2},{value:"Cleanup WinSxS",id:"cleanup-winsxs",level:3},{value:"Cleanup hibernate",id:"cleanup-hibernate",level:3},{value:"Disable USB storage",id:"disable-usb-storage",level:2},{value:"Windows Features",id:"windows-features",level:2},{value:"Install Windows Sandbox",id:"install-windows-sandbox",level:3},{value:"Windows 11 Processor Requirements",id:"windows-11-processor-requirements",level:2},{value:"&quot;Print to PDF&quot; printer",id:"print-to-pdf-printer",level:2},{value:"Mount a drive in a folder",id:"mount-a-drive-in-a-folder",level:2},{value:"Mount a folder as a drive",id:"mount-a-folder-as-a-drive",level:2},{value:"Event",id:"event",level:2}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"windows"},"Windows"),(0,r.kt)("h2",{id:"recovery"},"Recovery"),(0,r.kt)("h3",{id:"winre-windows-recovery-environment"},"WinRE (Windows Recovery Environment)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/12415"},"Recovery options in Windows"))),(0,r.kt)("kbd",null,"Shift")," + Restart",(0,r.kt)("h3",{id:"system-image"},"System image"),(0,r.kt)("p",null,"Use to backup / restore OS"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"System image",src:n(86864).Z,width:"1056",height:"509"})),(0,r.kt)("h2",{id:"control-panel"},"Control panel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input ",(0,r.kt)("inlineCode",{parentName:"li"},"control panel")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Start")," search"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"control"))),(0,r.kt)("h2",{id:"startup"},"Startup"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/4026268/windows-10-change-startup-apps"},"Change which apps run automatically at startup in Windows"))),(0,r.kt)("h3",{id:"user-startup-folder"},"User Startup folder"),(0,r.kt)("p",null,"Open in ",(0,r.kt)("inlineCode",{parentName:"p"},"Run")," or Explorer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shell:startup\n")),(0,r.kt)("p",null,"Open in command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"start shell:startup\n")),(0,r.kt)("h3",{id:"all-users-startup-folder"},"All Users Startup folder"),(0,r.kt)("p",null,"Open in ",(0,r.kt)("inlineCode",{parentName:"p"},"Run")," or Explorer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shell:common startup\n")),(0,r.kt)("p",null,"Open in PowerShell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'start "shell:common startup"\n')),(0,r.kt)("h2",{id:"user"},"User"),(0,r.kt)("h3",{id:"user-account-management--auto-login"},"User Account Management / Auto Login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"netplwiz.exe\n")),(0,r.kt)("h3",{id:"computer-management--local-user"},"Computer Management / Local User"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"lusrmgr.msc\n")),(0,r.kt)("h3",{id:"create-user"},"Create User"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"net user <user name> [<password>] /add\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# PowerShell\nNew-LocalUser <user name> [-Password (Read-Host -AsSecureString) | -NoPassword]\n")),(0,r.kt)("h3",{id:"delete-user"},"Delete User"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"net user <user name> /delete\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# PowerShell\nRemove-LocalUser <user name>\n")),(0,r.kt)("h3",{id:"make-password-never-expire"},"Make password never expire"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"wmic UserAccount [where Name=<user name>] set PasswordExpires={True|False}\n")),(0,r.kt)("p",null,"Using group policy"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Computer Configuration")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows Settings")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Security Settings")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Password Policy")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Maximum password age")," > Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("h2",{id:"group-policy"},"Group Policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"gpedit.msc\n")),(0,r.kt)("h2",{id:"remote-desktop"},"Remote Desktop"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connect to remote"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mstsc [/v:<host>[:<port>]]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Toggle full screen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"Alt")," + ",(0,r.kt)("kbd",null,"Break"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List remote desktop session"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"query session"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attach remote desktop session to console (Screen)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tscon <session ID> /dest:console"))))),(0,r.kt)("h2",{id:"hibernate"},"Hibernate"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/920730/how-to-disable-and-re-enable-hibernation-on-a-computer-that-is-running"},"How to disable and re-enable hibernation on a computer that is running Windows"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options"},"Powercfg command-line options"))),(0,r.kt)("p",null,"Enable / Disable hibernate (remove ",(0,r.kt)("inlineCode",{parentName:"p"},"hiberfil.sys")," file)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"powercfg { /hibernate | /h } [ on | off ]\npowercfg { /hibernate | /h } /size <percent size>\npowercfg { /hibernate | /h } /type { reduced | full }\n")),(0,r.kt)("h2",{id:"cab-file"},(0,r.kt)("inlineCode",{parentName:"h2"},".cab")," file"),(0,r.kt)("p",null,"Extract ",(0,r.kt)("inlineCode",{parentName:"p"},".cab")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"expand <file.cab>\n")),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},".cab")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"makecab <file> <file.cab>\n")),(0,r.kt)("h2",{id:"cortana"},"Cortana"),(0,r.kt)("p",null,"Disable Cortana in Windows 10"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v "AllowCortana" /t REG_DWORD /d 0 /f\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'## PowerShell\nNew-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" -Name "AllowCortana" -PropertyType DWord -Value 0 -Force\n')),(0,r.kt)("p",null,"Enable Cortana in Windows 10"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'reg delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v "AllowCortana" /f\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'## PowerShell\nRemove-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" -Name "AllowCortana"\n')),(0,r.kt)("h2",{id:"allow-input-unicode-with-alt--code"},"Allow input unicode with ",(0,r.kt)("kbd",null,"Alt")," + ",(0,r.kt)("kbd",null,"+\\<Code",">")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"http://www.fileformat.info/tip/microsoft/enter_unicode.htm"},"How to enter Unicode characters in Microsoft Windows"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'reg add "HKCU\\Control Panel\\Input Method" /v "EnableHexNumpad" /t REG_SZ /d 1 /f\n')),(0,r.kt)("h2",{id:"enable--disable-the-local-built-in-administrator-account"},"Enable / Disable the Local Built-In Administrator Account"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://social.technet.microsoft.com/wiki/contents/articles/3040.windows-7-enable-disable-the-local-built-in-administrator-account.aspx"},"Windows 7: Enable / Disable the Local Built-In Administrator Account"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"net user administrator /active:{yes|no}\n")),(0,r.kt)("h2",{id:"get-os-architecture-32-bit--64-bit"},"Get OS Architecture (32-bit / 64-bit)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://www.lisenet.com/2014/get-windows-system-information-via-wmi-command-line-wmic/"},"Get Windows System Information via WMI Command-line"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"wmic OS get OSArchitecture\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"## PowerShell\n(Get-CimInstance Win32_OperatingSystem).OSArchitecture\n")),(0,r.kt)("h2",{id:"slp-system-locked-pre-installation--slic-system-license-internal-code"},"SLP (System Locked Pre-installation) / SLIC (System License Internal Code)"),(0,r.kt)("p",null,"Install license"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"slmgr.vbs -ilc <path>\n")),(0,r.kt)("p",null,"Install product key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"slmgr.vbs -ipk <product key>\n")),(0,r.kt)("h2",{id:"code-page"},"Code page"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/chcp"},"chcp"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"chcp <code page>\n")),(0,r.kt)("p",null,"Change active code page to UTF-8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"chcp 65001\n")),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("h3",{id:"cleanup-winsxs"},"Cleanup WinSxS"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/clean-up-the-winsxs-folder"},"Clean Up the WinSxS Folder"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase\nDism.exe /online /Cleanup-Image /SPSuperseded\n")),(0,r.kt)("h3",{id:"cleanup-hibernate"},(0,r.kt)("a",{parentName:"h3",href:"#hibernate"},"Cleanup hibernate")),(0,r.kt)("h2",{id:"disable-usb-storage"},"Disable USB storage"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-ie/help/823732/how-can-i-prevent-users-from-connecting-to-a-usb-storage-device"},"How can I prevent users from connecting to a USB storage device?"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ItemProperty -Path HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR\\ -Name Start -Value 4\n")),(0,r.kt)("p",null,"Enable USB storage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ItemProperty -Path HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR\\ -Name Start -Value 3\n")),(0,r.kt)("h2",{id:"windows-features"},"Windows Features"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'& ([System.Environment]::SystemDirectory + "\\OptionalFeatures.exe")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Windows Features",src:n(99396).Z,width:"555",height:"1002"})),(0,r.kt)("h3",{id:"install-windows-sandbox"},"Install Windows Sandbox"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"#windows-features"},"Windows Features")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -All -FeatureName Containers-DisposableClientVM\n")),(0,r.kt)("h2",{id:"windows-11-processor-requirements"},"Windows 11 Processor Requirements"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-hardware/design/minimum/windows-processor-requirements"},"Windows Processor Requirements"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-supported-intel-processors"},"Supported Intel Processors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-supported-amd-processors"},"Supported AMD Processors"))),(0,r.kt)("h2",{id:"print-to-pdf-printer"},'"Print to PDF" printer'),(0,r.kt)("p",null,"For Windows 10"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add print to PDF printer",src:n(98786).Z,width:"555",height:"492"})),(0,r.kt)("h2",{id:"mount-a-drive-in-a-folder"},"Mount a drive in a folder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Disk Management")," ",(0,r.kt)("inlineCode",{parentName:"li"},"diskmgmt.msc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Change Drive Letter and Paths")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mount in the following empty NTFS folder"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps1"},"diskpart\nlist volume\nselect volume <number>\nassign [mount=<path>]\n")),(0,r.kt)("h2",{id:"mount-a-folder-as-a-drive"},"Mount a folder as a drive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps1"},"subst X: <path>\n")),(0,r.kt)("p",null,"Remove substituted"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps1"},"subst X: /D\n")),(0,r.kt)("h2",{id:"event"},"Event"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power On"),(0,r.kt)("td",{parentName:"tr",align:null},"6005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power Off"),(0,r.kt)("td",{parentName:"tr",align:null},"6006")))))}u.isMDXComponent=!0},98786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/print-to-pdf-317a213ffd710a05f974c31815d2ffde.png"},86864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/system-image-50bf41cc74b20cf0ba6f990de67de904.png"},99396:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/windows-features-e8054548b1b9ffc24f9f07f20be7ae2a.png"}}]);