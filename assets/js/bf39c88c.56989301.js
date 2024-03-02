"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2465],{42200:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var s=r(75366),c=r(26192);const n={},i="DH",l={id:"Note/Cryptography/DH",title:"DH",description:"Diffie\u2013Hellman",source:"@site/docs/Note/Cryptography/DH.md",sourceDirName:"Note/Cryptography",slug:"/Note/Cryptography/DH",permalink:"/note/Note/Cryptography/DH",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Cryptography/DH.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"README",permalink:"/note/Note/Cryptography/"},next:{title:"Dictionary",permalink:"/note/Note/Dictionary"}},t={},h=[{value:"DH Key Exchange",id:"dh-key-exchange",level:2},{value:"\u5bc6\u9470\u4ea4\u63db\u904e\u7a0b",id:"\u5bc6\u9470\u4ea4\u63db\u904e\u7a0b",level:2},{value:"DH group",id:"dh-group",level:2}];function o(e){const d={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h1,{id:"dh",children:"DH"}),"\n",(0,s.jsx)(d.p,{children:"Diffie\u2013Hellman"}),"\n",(0,s.jsx)(d.h2,{id:"dh-key-exchange",children:"DH Key Exchange"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Variable"}),(0,s.jsx)(d.th,{children:"Description"}),(0,s.jsx)(d.th,{children:"Property"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"g"})}),(0,s.jsx)(d.td,{children:"Generator / Base"}),(0,s.jsxs)(d.td,{children:["public, ",(0,s.jsxs)(d.a,{href:"https://en.wikipedia.org/wiki/Primitive_root_modulo_n",children:["primitive root modulo ",(0,s.jsx)(d.code,{children:"p"})," (",(0,s.jsx)(d.code,{children:"p"}),"\u7684\u539f\u6839)"]})]}),(0,s.jsx)(d.td,{children:"Usually = 2, 3, 5"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"p"})}),(0,s.jsx)(d.td,{children:"Modulus"}),(0,s.jsx)(d.td,{children:"public, prime"}),(0,s.jsx)(d.td,{children:"Usually >= 1024 bits"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"a"})}),(0,s.jsx)(d.td,{children:"Alice's private key"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1 <= a <= p-1"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"b"})}),(0,s.jsx)(d.td,{children:"Bob's private key"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1 <= b <= p-1"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"A"})}),(0,s.jsx)(d.td,{children:"Alice's public key"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"A = g\u1d43 mod p"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"B"})}),(0,s.jsx)(d.td,{children:"Bob's public key"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"B = g\u1d47 mod p"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"s"})}),(0,s.jsx)(d.td,{children:"Secret key (for encrypt / decrypt)"}),(0,s.jsx)(d.td,{children:"private"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"s = g\u1d43\u1d47 mod p"})})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:["\u7b97\u6cd5\u76ee\u7684\uff1a\u627e\u4e00\u500b\u53ea\u6709 Alice \u53ca Bob \u77e5\u9053\u7684\u503c ",(0,s.jsx)(d.code,{children:"s"})]}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u53ea\u77e5\u9053\u5bc6\u9470\u4ea4\u63db\u4e2d\u50b3\u9001\u7684\u503c ",(0,s.jsx)(d.code,{children:"g"}),", ",(0,s.jsx)(d.code,{children:"p"}),", ",(0,s.jsx)(d.code,{children:"A"}),", ",(0,s.jsx)(d.code,{children:"B"}),"\uff0c\u5f88\u96e3\u8a08\u7b97\u51fa ",(0,s.jsx)(d.code,{children:"a"}),", ",(0,s.jsx)(d.code,{children:"b"}),", ",(0,s.jsx)(d.code,{children:"s"})," \u7684\u503c (Discrete logarithm \u96e2\u6563\u5c0d\u6578)"]}),"\n"]}),"\n",(0,s.jsxs)(d.p,{children:["\u5c07 ",(0,s.jsx)(d.code,{children:"s"})," \u8ce6\u503c\u70ba ",(0,s.jsx)(d.code,{children:"s = g\u1d43\u1d47 mod p"}),"\uff0c\u5247"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"s = g\u1d43\u1d47 mod p = g\u1d47\u1d43 mod p\n"})}),"\n",(0,s.jsx)(d.p,{children:"Modulo Distributive \u6a21\u9664 \u5206\u914d\u5f8b"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"s = (g\u1d43 mod p)\u1d47 mod p = (g\u1d47 mod p)\u1d43 mod p\n"})}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u5c07 ",(0,s.jsx)(d.code,{children:"A = g\u1d43 mod p"})," \u8a2d\u70ba Alice's public key"]}),"\n",(0,s.jsxs)(d.li,{children:["\u5c07 ",(0,s.jsx)(d.code,{children:"B = g\u1d47 mod p"})," \u8a2d\u70ba Bob's public key"]}),"\n",(0,s.jsxs)(d.li,{children:["\u56e0\u70ba ",(0,s.jsx)(d.code,{children:"s = A\u1d47 mod p = B\u1d43 mod p"}),"\uff0c\u6240\u4ee5","\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["Alice \u53ef\u4ee5\u7528 ",(0,s.jsx)(d.code,{children:"B"})," \u548c ",(0,s.jsx)(d.code,{children:"a"})," \u503c\u8a08\u7b97 ",(0,s.jsx)(d.code,{children:"s"})]}),"\n",(0,s.jsxs)(d.li,{children:["Bob \u53ef\u4ee5\u7528 ",(0,s.jsx)(d.code,{children:"A"})," \u548c ",(0,s.jsx)(d.code,{children:"b"})," \u503c\u8a08\u7b97 ",(0,s.jsx)(d.code,{children:"s"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\u516c\u958b\u50b3\u9001 ",(0,s.jsx)(d.code,{children:"g"}),", ",(0,s.jsx)(d.code,{children:"p"}),", ",(0,s.jsx)(d.code,{children:"A"}),", ",(0,s.jsx)(d.code,{children:"B"})," \u662f\u5b89\u5168\u7684","\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u53ea\u6709 ",(0,s.jsx)(d.code,{children:"g"}),", ",(0,s.jsx)(d.code,{children:"p"}),", ",(0,s.jsx)(d.code,{children:"A"})," \u503c\u5f88\u96e3\u8a08\u7b97\u51fa ",(0,s.jsx)(d.code,{children:"a"})," \u7684\u503c (Discrete logarithm \u96e2\u6563\u5c0d\u6578)"]}),"\n",(0,s.jsxs)(d.li,{children:["\u53ea\u6709 ",(0,s.jsx)(d.code,{children:"g"}),", ",(0,s.jsx)(d.code,{children:"p"}),", ",(0,s.jsx)(d.code,{children:"B"})," \u503c\u5f88\u96e3\u8a08\u7b97\u51fa ",(0,s.jsx)(d.code,{children:"b"})," \u7684\u503c (Discrete logarithm \u96e2\u6563\u5c0d\u6578)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u5bc6\u9470\u4ea4\u63db\u904e\u7a0b",children:"\u5bc6\u9470\u4ea4\u63db\u904e\u7a0b"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["Alice \u50b3\u9001 ",(0,s.jsx)(d.code,{children:"g"}),", ",(0,s.jsx)(d.code,{children:"p"}),", ",(0,s.jsx)(d.code,{children:"A"})," \u7684\u503c\u7d66 Bob\uff0cBob \u53ef\u4ee5\u8a08\u7b97 ",(0,s.jsx)(d.code,{children:"A\u1d47 mod p"})," \u5f97\u5230 ",(0,s.jsx)(d.code,{children:"s"})," \u503c"]}),"\n",(0,s.jsxs)(d.li,{children:["Bob \u50b3\u9001 ",(0,s.jsx)(d.code,{children:"B"})," \u503c\u7d66 Alice\uff0cAlice \u53ef\u4ee5\u8a08\u7b97 ",(0,s.jsx)(d.code,{children:"B\u1d43 mod p"})," \u5f97\u5230 ",(0,s.jsx)(d.code,{children:"s"})," \u503c"]}),"\n",(0,s.jsxs)(d.li,{children:["Alice \u548c Bob \u90fd\u53d6\u5f97\u4e86 ",(0,s.jsx)(d.code,{children:"s"})," \u503c"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"dh-group",children:"DH group"}),"\n",(0,s.jsx)(d.p,{children:"DH \u4f4d\u6578\u3001\u7b97\u6cd5\u7684 Standard"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"MODP (Modular exponentiation)"}),"\n",(0,s.jsxs)(d.li,{children:["EC2N (Elliptic Curve over GF[2^N])","\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:(0,s.jsx)(d.em,{children:"uncommon"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"DH Group"}),(0,s.jsx)(d.th,{children:"Algorithm"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc2409#section-6.1",children:"DH Group 1"})}),(0,s.jsx)(d.td,{children:"MODP 768-bit"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc2409#section-6.2",children:"DH Group 2"})}),(0,s.jsx)(d.td,{children:"MODP 1024-bit"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc2409#section-6.3",children:"DH Group 3"})}),(0,s.jsx)(d.td,{children:"EC2N group on GP[2^155]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc2409#section-6.4",children:"DH Group 4"})}),(0,s.jsx)(d.td,{children:"EC2N group on GP[2^185]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc3526#section-2",children:"DH Group 5"})}),(0,s.jsx)(d.td,{children:"MODP 1536-bit"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc3526#section-3",children:"DH Group 14"})}),(0,s.jsx)(d.td,{children:"MODP 2048-bit"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc3526#section-4",children:"DH Group 15"})}),(0,s.jsx)(d.td,{children:"MODP 3072-bit"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc3526#section-5",children:"DH Group 16"})}),(0,s.jsx)(d.td,{children:"MODP 4096-bit"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc3526#section-6",children:"DH Group 17"})}),(0,s.jsx)(d.td,{children:"MODP 6144-bit"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://tools.ietf.org/html/rfc3526#section-7",children:"DH Group 18"})}),(0,s.jsx)(d.td,{children:"MODP 8192-bit"})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,c.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},26192:(e,d,r)=>{r.d(d,{Z:()=>l,a:()=>i});var s=r(97049);const c={},n=s.createContext(c);function i(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);