"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7576],{2337:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var s=r(75366),i=r(26192);const d={},l="awk",t={id:"Linux/awk",title:"awk",description:"Ref: The GNU Awk User\u2019s Guide",source:"@site/docs/Linux/awk.md",sourceDirName:"Linux",slug:"/Linux/awk",permalink:"/note/Linux/awk",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/awk.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"at",permalink:"/note/Linux/at"},next:{title:"bash",permalink:"/note/Linux/bash"}},c={},a=[{value:"<code>&lt;program&gt;</code>",id:"program",level:2},{value:"Built-in Variable",id:"built-in-variable",level:2},{value:"Pattern",id:"pattern",level:2},{value:"Regular expression",id:"regular-expression",level:3},{value:"Expression",id:"expression",level:3},{value:"Range",id:"range",level:3},{value:"Emtpy",id:"emtpy",level:3},{value:"Assignment Expression",id:"assignment-expression",level:2},{value:"String",id:"string",level:2},{value:"<code>if</code>",id:"if",level:2},{value:"RegExp",id:"regexp",level:2},{value:"Match",id:"match",level:3},{value:"Not match",id:"not-match",level:3},{value:"Print",id:"print",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"awk",children:(0,s.jsx)(n.code,{children:"awk"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Ref: ",(0,s.jsx)(n.a,{href:"https://www.gnu.org/software/gawk/manual/gawk.html",children:"The GNU Awk User\u2019s Guide"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"awk \r\n    { '<program>' | -f '<program file>' }\r\n    [<input file> [...]]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"program",children:(0,s.jsx)(n.code,{children:"<program>"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"# A BEGIN rule is executed once only, before the first input record is read.\r\nBEGIN {\r\n    # <action>\r\n}\r\n\r\n# The BEGINFILE rules is executed just before gawk reads the first record from a file.\r\nBEGINFILE {\r\n    # <action>\r\n}\r\n\r\n# If the pattern is omitted, then the action is performed for every record.\r\n<pattern> {\r\n    # <action>\r\n}\r\n\r\n# The ENDFILE rule is called when gawk has finished processing the last record in an input file.\r\nENDFILE {\r\n    # <action>\r\n}\r\n\r\n# An END rule is executed once only, after all the input is read. \r\nEND {\r\n    # <action>\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"<action>"})," is ",(0,s.jsx)(n.code,{children:"print"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"<pattern> {\r\n    print\r\n}\r\n\r\n# equal to\r\n\r\n<pattern>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"built-in-variable",children:"Built-in Variable"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ARGC"})}),(0,s.jsx)(n.td,{children:"Argument Count"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ARGV"})}),(0,s.jsx)(n.td,{children:"Argument Value"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$0"})}),(0,s.jsx)(n.td,{children:"Current Record"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"$1"}),", ",(0,s.jsx)(n.code,{children:"$2"}),", ..., ",(0,s.jsx)(n.code,{children:"$NF"})]}),(0,s.jsx)(n.td,{children:"Field 1, Field 2, ..., Last Field"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"NF"})}),(0,s.jsx)(n.td,{children:"Number of Fields"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"NR"})}),(0,s.jsx)(n.td,{children:"Number of Records has processed"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"FS"})}),(0,s.jsx)(n.td,{children:"Field Separator"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'" "'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OFS"})}),(0,s.jsx)(n.td,{children:"Output Field Separator"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'" "'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"IGNORECASE"})}),(0,s.jsx)(n.td,{children:"Ignore Case"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RS"})}),(0,s.jsx)(n.td,{children:"Record Separator"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"\\n"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ORS"})}),(0,s.jsx)(n.td,{children:"Output Record Separator"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"\\n"'})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"pattern",children:"Pattern"}),"\n",(0,s.jsx)(n.h3,{id:"regular-expression",children:"Regular expression"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"/<regular expression>/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"expression",children:"Expression"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"<expression> == <expression>\r\n<expression> != <expression>\r\n<expression> < <expression>\r\n<expression> <= <expression>\r\n<expression> > <expression>\r\n<expression> >= <expression>\r\n\r\n# Match Reg Exp\r\n<expression> ~ /<reg exp>/\r\n\r\n# Not match Reg Exp\r\n<expression> !~ /<reg exp>/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"range",children:"Range"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"<begin pattern>,<end pattern>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"emtpy",children:"Emtpy"}),"\n",(0,s.jsx)(n.p,{children:"Match every record"}),"\n",(0,s.jsx)(n.h2,{id:"assignment-expression",children:"Assignment Expression"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"<variable> = <value>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"string",children:"String"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:'"<string>"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"if",children:(0,s.jsx)(n.code,{children:"if"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"if (<condition>) {\r\n    # <code>\r\n    # ...\r\n}\r\n\r\nif (<condition>) {\r\n    # <code>\r\n    # ...\r\n} else {\r\n    # <code>\r\n    # ...\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"regexp",children:"RegExp"}),"\n",(0,s.jsx)(n.h3,{id:"match",children:"Match"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"<value> ~ /<reg exp>/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"not-match",children:"Not match"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"<value> !~ /<reg exp>/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"<string>"})," is ",(0,s.jsx)(n.code,{children:"$0"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"/<reg exp>/\r\n\r\n# equal to\r\n\r\n$0 ~ /<reg exp>/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"print",children:"Print"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"{\r\n    print <item>[, ...]\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"<item>"})," is ",(0,s.jsx)(n.code,{children:"$0"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"{\r\n    print $0\r\n\r\n    # equal to\r\n\r\n    print\r\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},26192:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>l});var s=r(97049);const i={},d=s.createContext(i);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);