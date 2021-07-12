(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1813],{3905:function(e,t,l){"use strict";l.d(t,{Zo:function(){return c},kt:function(){return m}});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(l),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return l?r.createElement(h,o(o({ref:t},c),{},{components:l})):r.createElement(h,o({ref:t},c))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<a;i++)o[i]=l[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},2780:function(e,t,l){"use strict";l.r(t),l.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=l(2122),n=l(9756),a=(l(7294),l(3905)),o=["components"],s={slug:".",sidebar_label:"Basic",sidebar_position:0},p="PowerShell",i={unversionedId:"Windows/PowerShell/README",id:"Windows/PowerShell/README",isDocsHomePage:!1,title:"PowerShell",description:"Help",source:"@site/docs/Windows/PowerShell/README.md",sourceDirName:"Windows/PowerShell",slug:"/Windows/PowerShell/",permalink:"/note/Windows/PowerShell/",editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/PowerShell/README.md",version:"current",sidebarPosition:0,frontMatter:{slug:".",sidebar_label:"Basic",sidebar_position:0},sidebar:"windows",previous:{title:"Network",permalink:"/note/Windows/Network"},next:{title:"Array",permalink:"/note/Windows/PowerShell/Array"}},c=[{value:"Help",id:"help",children:[]},{value:"List",id:"list",children:[]},{value:"Alias",id:"alias",children:[]},{value:"Property",id:"property",children:[]},{value:"Filter object",id:"filter-object",children:[]},{value:"PowerShell remoting",id:"powershell-remoting",children:[]},{value:"Trusted host",id:"trusted-host",children:[]},{value:"Get credential from user input",id:"get-credential-from-user-input",children:[]},{value:"PowerShell session",id:"powershell-session",children:[]},{value:"Get drive",id:"get-drive",children:[]},{value:"Run command",id:"run-command",children:[]},{value:"Execution policies",id:"execution-policies",children:[]},{value:"Unblock script",id:"unblock-script",children:[]},{value:"History",id:"history",children:[]},{value:"Hash table",id:"hash-table",children:[]},{value:"Path",id:"path",children:[]},{value:"Get system directory",id:"get-system-directory",children:[{value:"List Windows Features",id:"list-windows-features",children:[]}]},{value:"Clear MRU",id:"clear-mru",children:[]},{value:"Get route for IP address",id:"get-route-for-ip-address",children:[]}],u={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"powershell"},"PowerShell"),(0,a.kt)("h2",{id:"help"},"Help"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," equal ",(0,a.kt)("inlineCode",{parentName:"p"},"Get-Help | more")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Help [<cmdlet>]\n    [ -ShowWindow ]\n    [ -Detailed | -Full | -Examples ]\n")),(0,a.kt)("p",null,"Get command info"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Command <command>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"gcm"))),(0,a.kt)("p",null,"PowerShell version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$PSVersionTable\n")),(0,a.kt)("h2",{id:"list"},"List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"<expression>[, ...]\n")),(0,a.kt)("h2",{id:"alias"},"Alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Alias [[-Name] <alias> | -Definition <cmdlet>]\n")),(0,a.kt)("h2",{id:"property"},"Property"),(0,a.kt)("p",null,"Get the properties and methods of objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"<cmdlet> | Get-Member\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"gm"))),(0,a.kt)("p",null,"Select property"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"<command> | Select-Object [[-Property] <property[]>]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"select"))),(0,a.kt)("p",null,"Expand property"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"<command> | Select-Object -ExpandProperty <property>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"(<command>).<property>\n")),(0,a.kt)("p",null,"Create property"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'<command> | Select-Object @{N[ame]="<property name>"; E[xpression]={<expression>}}\n')),(0,a.kt)("h2",{id:"filter-object"},"Filter object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"<command> | Where-Object [-FilterScript] { <Script> }\n\n# Example\n1, 2, 3, 4, 5, 6 | ? { $_ % 2 -eq 0 }\n# 2 4 6\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"?"))),(0,a.kt)("h2",{id:"powershell-remoting"},"PowerShell remoting"),(0,a.kt)("p",null,"Enable PowerShell remoting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-PSRemoting [-SkipNetworkProfileCheck] [-Force]\n")),(0,a.kt)("h2",{id:"trusted-host"},"Trusted host"),(0,a.kt)("p",null,"Get trusted host"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"winrm get winrm/config/client\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Item WSMan:\\localhost\\Client\\TrustedHosts\n")),(0,a.kt)("p",null,"Set trusted host"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'winrm set winrm/config/client @{TrustedHosts="<host>[,<host>]"}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# <host> = <IP> | <hostname> | *\nSet-Item WSMan:\\localhost\\Client\\TrustedHosts -Value "<host>[,<host>]" [-Force]\n')),(0,a.kt)("h2",{id:"get-credential-from-user-input"},"Get credential from user input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Credential [[-UserName] <username>]\n")),(0,a.kt)("h2",{id:"powershell-session"},"PowerShell session"),(0,a.kt)("p",null,"Create PowerShell session"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$<variable> = New-PSSession\n    [[-ComputerName] <host[]>]\n    [-Credential { <user> | <credential> }]\n")),(0,a.kt)("p",null,"Connect to remote PowerShell"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Enter-PSSession\n    [-ComputerName] <host>\n    [-Credential { <user> | <credential> }]\n")),(0,a.kt)("h2",{id:"get-drive"},"Get drive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-PSDrive\n")),(0,a.kt)("h2",{id:"run-command"},"Run command"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://social.technet.microsoft.com/wiki/contents/articles/7703.powershell-running-executables.aspx#The_Call_Operator_amp"},"Referense")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-Command [[-ComputerName] <host[]>]\n    [-ScriptBlock] <ScriptBlock>\n    [-Credential <PSCredential>]\n    [-ArgumentList <argument[]>]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"& <ScriptBlock> [<argument[]>]\n")),(0,a.kt)("h2",{id:"execution-policies"},"Execution policies"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-ExecutionPolicy\nSet-ExecutionPolicy <policy>\n")),(0,a.kt)("h2",{id:"unblock-script"},"Unblock script"),(0,a.kt)("p",null,"Unblock script that was downloaded from the Internet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Unblock-File <path>\n")),(0,a.kt)("h2",{id:"history"},"History"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-History\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"history"))),(0,a.kt)("p",null,"Search history"),(0,a.kt)("kbd",null,"Ctrl + R"),(0,a.kt)("p",null,"Get all session history"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Content (Get-PSReadlineOption).HistorySavePath\n")),(0,a.kt)("h2",{id:"hash-table"},"Hash table"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_hash_tables"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$hash = @{\n    <name> = <value>;\n    [<name> = <value>] ...\n}\n")),(0,a.kt)("p",null,"List keys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$hash.Keys\n")),(0,a.kt)("p",null,"List values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$hash.Values\n")),(0,a.kt)("p",null,"Add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$hash[<key>] = <value>\n$hash.Add(<key>, <value>)\n")),(0,a.kt)("p",null,"Remove"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$hash.Remove(<key>)\n")),(0,a.kt)("h2",{id:"path"},"Path"),(0,a.kt)("p",null,"Get script path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$Script:MyInvocation.MyCommand.Path\n")),(0,a.kt)("p",null,"Get file name of path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Split-Path -Leaf <path>\n")),(0,a.kt)("p",null,"Get folder of path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Split-Path <path>\n")),(0,a.kt)("p",null,"Join path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Join-Path <path> <path> ...\n")),(0,a.kt)("h2",{id:"get-system-directory"},"Get system directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"[System.Environment]::SystemDirectory\n")),(0,a.kt)("h3",{id:"list-windows-features"},"List Windows Features"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-WindowsOptionalFeature -Online\n")),(0,a.kt)("h2",{id:"clear-mru"},"Clear MRU"),(0,a.kt)("p",null,"MRU (Most Recently Used)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'sp "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RunMRU\\" -Name MRUList -Type String -Value ""\n')),(0,a.kt)("h2",{id:"get-route-for-ip-address"},"Get route for IP address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Find-NetRoute -RemoteIPAddress <IP address>\n")))}d.isMDXComponent=!0}}]);