(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3943],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},681:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={},d="bash",p={unversionedId:"Linux/bash",id:"Linux/bash",isDocsHomePage:!1,title:"bash",description:"| Command | Description |",source:"@site/docs/Linux/bash.md",sourceDirName:"Linux",slug:"/Linux/bash",permalink:"/note/Linux/bash",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/bash.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"awk",permalink:"/note/Linux/awk"},next:{title:"cron",permalink:"/note/Linux/cron"}},m=[{value:"Parameter",id:"parameter",children:[]},{value:"Redirect output",id:"redirect-output",children:[]},{value:"Pipeline",id:"pipeline",children:[]},{value:"Loop / Iterate",id:"loop--iterate",children:[{value:"For each file",id:"for-each-file",children:[]},{value:"For each <code>find</code> result",id:"for-each-find-result",children:[]},{value:"For each array value",id:"for-each-array-value",children:[]}]},{value:"Command substitution",id:"command-substitution",children:[]},{value:"Process substitution",id:"process-substitution",children:[{value:"cat file",id:"cat-file",children:[]}]},{value:"Environment variable",id:"environment-variable",children:[{value:"Set variable",id:"set-variable",children:[]},{value:"Get variable",id:"get-variable",children:[]},{value:"List variable",id:"list-variable",children:[]},{value:"Export variable",id:"export-variable",children:[]}]},{value:"History",id:"history",children:[{value:"Search history",id:"search-history",children:[]},{value:"Remove current session bash history",id:"remove-current-session-bash-history",children:[]},{value:"Delete all bash history",id:"delete-all-bash-history",children:[]}]}],u={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bash"},(0,l.kt)("inlineCode",{parentName:"h1"},"bash")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Complete command")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl"),"+",(0,l.kt)("inlineCode",{parentName:"td"},"D")),(0,l.kt)("td",{parentName:"tr",align:null},"Exit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl"),"+",(0,l.kt)("inlineCode",{parentName:"td"},"L")),(0,l.kt)("td",{parentName:"tr",align:null},"Clear screen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl"),"+",(0,l.kt)("inlineCode",{parentName:"td"},"R")),(0,l.kt)("td",{parentName:"tr",align:null},"Search history")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!!")),(0,l.kt)("td",{parentName:"tr",align:null},"Previous command")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!<string>")),(0,l.kt)("td",{parentName:"tr",align:null},"Most recent command starting with ",(0,l.kt)("inlineCode",{parentName:"td"},"<string>"))))),(0,l.kt)("h2",{id:"parameter"},"Parameter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$#")),(0,l.kt)("td",{parentName:"tr",align:null},"Count of parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$0")),(0,l.kt)("td",{parentName:"tr",align:null},"The path of shell script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"basename $0")),(0,l.kt)("td",{parentName:"tr",align:null},"The file name of shell script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$1")," ",(0,l.kt)("inlineCode",{parentName:"td"},"$2")," ",(0,l.kt)("inlineCode",{parentName:"td"},"$3")," ..."),(0,l.kt)("td",{parentName:"tr",align:null},"Positional parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$*")," ",(0,l.kt)("inlineCode",{parentName:"td"},"$@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$1 $2 $3..."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"$*"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"$1$IFS$2$IFS$3..."'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"$@"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"$1" "$2" "$3"...'))))),(0,l.kt)("h2",{id:"redirect-output"},"Redirect output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"File descriptor"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stdin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stdout"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stderr"))))),(0,l.kt)("p",null,"Redirect output to file"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stdout"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stdout"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stderr"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"&")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"stderr"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<command> [1|2|&]> <file>\n")),(0,l.kt)("p",null,"Redirect ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<command> 2>&1\n")),(0,l.kt)("h2",{id:"pipeline"},"Pipeline"),(0,l.kt)("p",null,"Pipe ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," \u27a1 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<command> | <command>\n")),(0,l.kt)("p",null,"Pipe ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," \u27a1 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<command> |& <command>\n")),(0,l.kt)("h2",{id:"loop--iterate"},"Loop / Iterate"),(0,l.kt)("h3",{id:"for-each-file"},"For each file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for <file variable name> in *; do\n  <...>\ndone\n")),(0,l.kt)("h3",{id:"for-each-find-result"},"For each ",(0,l.kt)("inlineCode",{parentName:"h3"},"find")," result"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/15066129"},"Reference")," / ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/9612232/1877620"},"Reference")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"find [<expression>] -print0 | while IFS= read -r -d $'\\0' <file variable name>; do\n  <...>\ndone\n")),(0,l.kt)("h3",{id:"for-each-array-value"},"For each array value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'array=(a b c)\nfor i in "${array[@]}"; do\n  // $i == <current value>\ndone\n')),(0,l.kt)("h2",{id:"command-substitution"},"Command substitution"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$(<command>)\n`<command>`\n")),(0,l.kt)("h2",{id:"process-substitution"},"Process substitution"),(0,l.kt)("p",null,"Redirect input to ",(0,l.kt)("inlineCode",{parentName:"p"},"<input command>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"<command> <( <input command> )\n")),(0,l.kt)("p",null,"Redirect output to ",(0,l.kt)("inlineCode",{parentName:"p"},"<output command>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"<command> >( <output command> )\n")),(0,l.kt)("h3",{id:"cat-file"},"cat file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$(< <file>)\n$(cat <file>)\n")),(0,l.kt)("h2",{id:"environment-variable"},"Environment variable"),(0,l.kt)("h3",{id:"set-variable"},"Set variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"<name>=<value>\n")),(0,l.kt)("h3",{id:"get-variable"},"Get variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$<name>\n${<name>}\n")),(0,l.kt)("h3",{id:"list-variable"},"List variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"env\n")),(0,l.kt)("h3",{id:"export-variable"},"Export variable"),(0,l.kt)("p",null,"Export ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," variable to child process"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export <name>[=<value>]\n")),(0,l.kt)("h2",{id:"history"},"History"),(0,l.kt)("h3",{id:"search-history"},"Search history"),(0,l.kt)("kbd",null,"Ctrl + R"),(0,l.kt)("h3",{id:"remove-current-session-bash-history"},"Remove current session bash history"),(0,l.kt)("p",null,"Clear current history buffer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"history -c\n")),(0,l.kt)("p",null,"Don't save the history when session close"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"unset HISTFILE\n")),(0,l.kt)("p",null,"Kill bash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"## $$ == Current shell PID\nkill -9 $$\n")),(0,l.kt)("h3",{id:"delete-all-bash-history"},"Delete all bash history"),(0,l.kt)("p",null,"Empty history file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"> $HISTFILE\n")),(0,l.kt)("p",null,"Set history size to 0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HISTSIZE=0\n")))}s.isMDXComponent=!0}}]);