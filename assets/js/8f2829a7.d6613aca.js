"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9255],{50008:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=d(75366),t=d(26192);const i={},s="RS-232",c={id:"Hardware/RS-232",title:"RS-232",description:"Ref: Wikipedia",source:"@site/docs/Hardware/RS-232.md",sourceDirName:"Hardware",slug:"/Hardware/RS-232",permalink:"/note/Hardware/RS-232",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Hardware/RS-232.md",tags:[],version:"current",frontMatter:{},sidebar:"hardware",previous:{title:"IR (Infrared)",permalink:"/note/Hardware/IR"},next:{title:"SoC",permalink:"/note/Hardware/SoC"}},l={},h=[{value:"Connector",id:"connector",level:2},{value:"DE-9",id:"de-9",level:3},{value:"Pin",id:"pin",level:2},{value:"Common usage",id:"common-usage",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rs-232",children:"RS-232"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Ref: ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/RS-232",children:"Wikipedia"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"RS-232 / COM port / Serial port"}),"\n",(0,r.jsx)(n.h2,{id:"connector",children:"Connector"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DB-25"}),"\n",(0,r.jsx)(n.li,{children:"DE-9 (AKA DB-9)"}),"\n",(0,r.jsx)(n.li,{children:"Usually use DE-9"}),"\n",(0,r.jsx)(n.li,{children:"DTE (male)"}),"\n",(0,r.jsx)(n.li,{children:"DCE (female)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"de-9",children:"DE-9"}),"\n",(0,r.jsx)(n.p,{children:"DE-9 is correct name, but usually name DB-9"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Ref: ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/D-subminiature#DE-9",children:"D-subminiature"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pin",children:"Pin"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pin"}),(0,r.jsx)(n.th,{children:"SIG"}),(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"DTE (male)"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"DCD"}),(0,r.jsx)(n.td,{children:"Data Carrier Detect"}),(0,r.jsx)(n.td,{children:"in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"RXD"}),(0,r.jsx)(n.td,{children:"Receive Data"}),(0,r.jsx)(n.td,{children:"in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"TXD"}),(0,r.jsx)(n.td,{children:"Transmit Data"}),(0,r.jsx)(n.td,{children:"out"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"DTR"}),(0,r.jsx)(n.td,{children:"Data Terminal Ready"}),(0,r.jsx)(n.td,{children:"out"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"GND"}),(0,r.jsx)(n.td,{children:"Signal Ground"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"DSR"}),(0,r.jsx)(n.td,{children:"Data Set Ready"}),(0,r.jsx)(n.td,{children:"in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"RTS"}),(0,r.jsx)(n.td,{children:"Request To Send"}),(0,r.jsx)(n.td,{children:"out"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"CTS"}),(0,r.jsx)(n.td,{children:"Clear To Send"}),(0,r.jsx)(n.td,{children:"in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:"RI"}),(0,r.jsx)(n.td,{children:"Ring Indicator"}),(0,r.jsx)(n.td,{children:"in"})]})]})]}),"\n",(0,r.jsx)(n.mermaid,{value:"graph LR\n  txd[TXD] --\x3e rxd[RXD]\n  rts[RTS] --\x3e cts[CTS]\n  dtr[DTR] --\x3e dcd[DCD]"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"DB-9 pinout",src:d(75513).Z+"",width:"377",height:"364"})}),"\n",(0,r.jsx)(n.h3,{id:"common-usage",children:"Common usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RXD"})," ",(0,r.jsx)(n.code,{children:"TXD"})," ",(0,r.jsx)(n.code,{children:"GND"})]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},75513:(e,n,d)=>{d.d(n,{Z:()=>r});const r=d.p+"assets/images/db9-pinout-88a35096516210867bc3b0e3a51ab157.gif"},26192:(e,n,d)=>{d.d(n,{Z:()=>c,a:()=>s});var r=d(97049);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);