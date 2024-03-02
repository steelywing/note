"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6666],{11388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=n(75366),i=n(26192);const s={},a="Virtual switch",c={id:"Windows/VirtualSwitch",title:"Virtual switch",description:"Install Hyper-V and virtual switch",source:"@site/docs/Windows/VirtualSwitch.md",sourceDirName:"Windows",slug:"/Windows/VirtualSwitch",permalink:"/note/Windows/VirtualSwitch",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/VirtualSwitch.md",tags:[],version:"current",frontMatter:{},sidebar:"windows",previous:{title:"VPN",permalink:"/note/Windows/VPN"},next:{title:"WSH",permalink:"/note/Windows/WSH"}},l={},o=[{value:"Add external virtual switch",id:"add-external-virtual-switch",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"virtual-switch",children:"Virtual switch"}),"\n",(0,r.jsx)(t.p,{children:"Install Hyper-V and virtual switch"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",children:"Enable-WindowsOptionalFeature -Online -All -FeatureName Microsoft-Hyper-V\n"})}),"\n",(0,r.jsx)(t.p,{children:"Disable Hyper-V without uninstallation"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Ref: ",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/bcdedit--set",children:"BCDEdit /set"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cmd",children:"bcdedit /set hypervisorlaunchtype { off | auto }\n"})}),"\n",(0,r.jsx)(t.p,{children:"Get current setting"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cmd",children:'bcdedit /enum "{current}"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"add-external-virtual-switch",children:"Add external virtual switch"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",children:'$ethernet = Get-NetAdapter -Name "Ethernet"\nNew-VMSwitch -Name "External Switch" -NetAdapterName $ethernet.Name -AllowManagementOS $true\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},26192:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(97049);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);