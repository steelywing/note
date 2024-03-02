"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4927],{95155:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>t,toc:()=>h});var n=s(75366),r=s(26192);const c={},i="sed",t={id:"Linux/sed",title:"sed",description:"Ref",source:"@site/docs/Linux/sed.md",sourceDirName:"Linux",slug:"/Linux/sed",permalink:"/note/Linux/sed",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/sed.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"rsync",permalink:"/note/Linux/rsync"},next:{title:"systemd",permalink:"/note/Linux/systemd"}},l={},h=[{value:"CLI Option",id:"cli-option",level:2},{value:"<code>&lt;script&gt;</code>",id:"script",level:2},{value:"Address",id:"address",level:3},{value:"Command",id:"command",level:3},{value:"RegExp flags",id:"regexp-flags",level:4},{value:"RegExp capture group",id:"regexp-capture-group",level:4}];function x(e){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"sed",children:"sed"}),"\n",(0,n.jsxs)(d.blockquote,{children:["\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"https://www.gnu.org/software/sed/manual/sed.html",children:"Ref"})}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"cli-option",children:"CLI Option"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-bash",children:"sed [<option>] '<script>' <input file> <input file> ...\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Option"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"-i[<suffix>]"})}),(0,n.jsxs)(d.td,{children:["Edit files in place (makes backup if ",(0,n.jsx)(d.code,{children:"<suffix>"})," supplied)"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"-r"})}),(0,n.jsx)(d.td,{children:"Extended regular expressions"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"script",children:(0,n.jsx)(d.code,{children:"<script>"})}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sed",children:"[<address>]<command> [; [<address>]<command> ...]\n"})}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"hold space"})," \u2248 ",(0,n.jsx)(d.code,{children:"clipboard"})]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"pattern space"})," \u2248 ",(0,n.jsx)(d.code,{children:"current record"})]}),"\n",(0,n.jsx)(d.h3,{id:"address",children:"Address"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Address"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<number>"})}),(0,n.jsx)(d.td,{children:"Line number"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"$"})}),(0,n.jsx)(d.td,{children:"Last line"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<first>,<last>"})}),(0,n.jsx)(d.td,{children:"Line number range"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<first>~<step>"})}),(0,n.jsx)(d.td,{children:"Line number step"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"/<RegExp>/"})," ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(d.code,{children:"\\<character><RegExp><character>"})]}),(0,n.jsx)(d.td,{children:"RegExp"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<address>!"})}),(0,n.jsxs)(d.td,{children:["Not matching ",(0,n.jsx)(d.code,{children:"<address>"})]})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"command",children:"Command"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Command"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"d"})}),(0,n.jsx)(d.td,{children:"Delete and go to next cycle"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"s/<RegExp>/<replacement>/[<flags]>"})}),(0,n.jsx)(d.td,{children:"Substitute RegExp"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"="})}),(0,n.jsx)(d.td,{children:"Print line number"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"h"})}),(0,n.jsxs)(d.td,{children:["Replace ",(0,n.jsx)(d.code,{children:"hold space"})," with ",(0,n.jsx)(d.code,{children:"pattern space"})]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"H"})}),(0,n.jsxs)(d.td,{children:["Append ",(0,n.jsx)(d.code,{children:"hold space"})," to ",(0,n.jsx)(d.code,{children:"pattern space"})]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"g"})}),(0,n.jsxs)(d.td,{children:["Replace ",(0,n.jsx)(d.code,{children:"pattern space"})," with ",(0,n.jsx)(d.code,{children:"hold space"})]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"G"})}),(0,n.jsxs)(d.td,{children:["Append ",(0,n.jsx)(d.code,{children:"pattern space"})," to ",(0,n.jsx)(d.code,{children:"hold space"})]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"q[<exit code>]"})}),(0,n.jsxs)(d.td,{children:["Quit with ",(0,n.jsx)(d.code,{children:"exit code"})]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"{ <command>; <command>; ... }"})}),(0,n.jsx)(d.td,{children:"Group command"})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"regexp-flags",children:"RegExp flags"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Flag"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"g"})}),(0,n.jsx)(d.td,{children:"Global, replace all matches"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<number>"})}),(0,n.jsxs)(d.td,{children:["Replace the ",(0,n.jsx)(d.strong,{children:"number"})," th match"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"p"})}),(0,n.jsx)(d.td,{children:"Print if match"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"i"})}),(0,n.jsx)(d.td,{children:"Case insensitive"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"m"})}),(0,n.jsx)(d.td,{children:"Multi-line mode"})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"regexp-capture-group",children:"RegExp capture group"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Expression"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"&"})}),(0,n.jsx)(d.td,{children:"Whole matched string"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"\\1"})," ",(0,n.jsx)(d.code,{children:"\\2"})," ..."]}),(0,n.jsx)(d.td,{children:"Capture group"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},26192:(e,d,s)=>{s.d(d,{Z:()=>t,a:()=>i});var n=s(97049);const r={},c=n.createContext(r);function i(e){const d=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(c.Provider,{value:d},e.children)}}}]);