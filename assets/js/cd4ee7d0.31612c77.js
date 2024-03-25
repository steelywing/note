"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4892],{9916:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=d(75366),a=d(26192);const t={},s="BIND9",c={id:"Network/DNS/BIND9",title:"BIND9",description:"Berkeley Internet Name Domain",source:"@site/docs/Network/DNS/BIND9.md",sourceDirName:"Network/DNS",slug:"/Network/DNS/BIND9",permalink:"/note/Network/DNS/BIND9",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/DNS/BIND9.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"DNS",permalink:"/note/Network/DNS/"},next:{title:"FortiGate",permalink:"/note/Network/FortiGate"}},i={},l=[{value:"TSIG",id:"tsig",level:2},{value:"Generating a Shared Key",id:"generating-a-shared-key",level:3},{value:"Add TSIG key to config",id:"add-tsig-key-to-config",level:3},{value:"Check config file",id:"check-config-file",level:2},{value:"Reload",id:"reload",level:2},{value:"Dynamic Update (RFC 2136)",id:"dynamic-update-rfc-2136",level:2},{value:"Manual edit dynamic records",id:"manual-edit-dynamic-records",level:3},{value:"Update dynamic record",id:"update-dynamic-record",level:2},{value:"Re-transfer zone",id:"re-transfer-zone",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"bind9",children:"BIND9"}),"\n",(0,r.jsx)(n.p,{children:"Berkeley Internet Name Domain"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.isc.org/bind/",children:"Official"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://bind9.readthedocs.io/en/stable/",children:"Doc"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tsig",children:"TSIG"}),"\n",(0,r.jsx)(n.p,{children:"Transaction SIGnatures"}),"\n",(0,r.jsx)(n.h3,{id:"generating-a-shared-key",children:"Generating a Shared Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# tsig-keygen <key name> > <key-name.key>\ntsig-keygen ddns > /etc/bind/ddns.key\n"})}),"\n",(0,r.jsx)(n.h3,{id:"add-tsig-key-to-config",children:"Add TSIG key to config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",metastring:'title="named.conf"',children:'# include "<key-path.key>";\ninclude "/etc/bind/ddns.key";\n'})}),"\n",(0,r.jsx)(n.h2,{id:"check-config-file",children:"Check config file"}),"\n",(0,r.jsx)(n.p,{children:"Check config file syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"named-checkconf\n"})}),"\n",(0,r.jsx)(n.h2,{id:"reload",children:"Reload"}),"\n",(0,r.jsx)(n.p,{children:"Reload / Restart"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"rndc reload [<zone>]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dynamic-update-rfc-2136",children:"Dynamic Update (RFC 2136)"}),"\n",(0,r.jsx)(n.p,{children:"Enable dynamic update"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'key "ddns" {\n    algorithm hmac-sha256;\n    secret "...";\n}\n\n# context: { options | view | zone }\nallow-update {\n    # Address Match List\n    # [!] 10.0.0.1[/24]; ...\n\n    # Allow update with TSIG Key\n    key ddns;\n};\n'})}),"\n",(0,r.jsx)(n.h3,{id:"manual-edit-dynamic-records",children:"Manual edit dynamic records"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Ref: ",(0,r.jsx)(n.a,{href:"https://kb.isc.org/docs/aa-00281",children:'Why don\'t my zones reload when I do an "rndc reload"?'})]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If dynamic update is enabled, ",(0,r.jsx)(n.code,{children:"rndc reload"})," will not reload the zone file"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Stop dynamic update"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"rndc freeze\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Edit the zone file"}),"\n",(0,r.jsx)(n.li,{children:"Reload the zone file and start dynamic update"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"rndc thaw\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Ref: ",(0,r.jsx)(n.a,{href:"https://bind9.readthedocs.io/en/v9_18/reference.html#address-match-lists",children:"Address Match List"})]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Ref: ",(0,r.jsx)(n.a,{href:"https://bind9.readthedocs.io/en/v9_18/chapter6.html#dynamic-update",children:"Dynamic Update"})]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Ref: ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2136.html",children:"RFC 2136"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"update-dynamic-record",children:"Update dynamic record"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# nsupdate [-k <TSIG key file>]\nnsupdate -k ddns.key\n\n# server <DNS server IP address> [port]\n> server ns1.example.com\n\n# update add <name> <TTL time> <record type> <value>\n> update add www.example.com. 3600 A 1.1.1.1\n\n# update delete <name> <record type>\n> update delete dns.example.com. A\n\n# show what will be send\n> show\n\n> send\n"})}),"\n",(0,r.jsx)(n.h2,{id:"re-transfer-zone",children:"Re-transfer zone"}),"\n",(0,r.jsx)(n.p,{children:"Run on slave"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# rndc retransfer <zone>\nrndc retransfer example.org\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},26192:(e,n,d)=>{d.d(n,{Z:()=>c,a:()=>s});var r=d(97049);const a={},t=r.createContext(a);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);