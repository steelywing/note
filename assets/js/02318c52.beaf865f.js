"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5258],{87485:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(76687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=i(r),g=o,m=y["".concat(u,".").concat(g)]||y[g]||p[g]||l;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},50010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(76274),o=(r(76687),r(87485));const l={sidebar_label:"Log slow query"},a="Log slow query - MySQL",s={unversionedId:"Note/MySQL/LogSlowQuery",id:"Note/MySQL/LogSlowQuery",title:"Log slow query - MySQL",description:"Ref: The Slow Query Log",source:"@site/docs/Note/MySQL/LogSlowQuery.md",sourceDirName:"Note/MySQL",slug:"/Note/MySQL/LogSlowQuery",permalink:"/note/Note/MySQL/LogSlowQuery",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/MySQL/LogSlowQuery.md",tags:[],version:"current",frontMatter:{sidebar_label:"Log slow query"},sidebar:"note",previous:{title:"Dump / Export / Import",permalink:"/note/Note/MySQL/Dump"},next:{title:"User",permalink:"/note/Note/MySQL/User"}},u={},i=[{value:"Set in config",id:"set-in-config",level:2},{value:"Set on runtime",id:"set-on-runtime",level:2},{value:"Display slow query status",id:"display-slow-query-status",level:2}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log-slow-query---mysql"},"Log slow query - MySQL"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html"},"The Slow Query Log"))),(0,o.kt)("h2",{id:"set-in-config"},"Set in config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\nslow-query-log=ON\nlog_output={ FILE | TABLE }\n\n# Log file\n# Default = <data directory>/<host name>-slow.log\nslow_query_log_file=<file>\n\n# Log query longer than <seconds>\n# Default = 10\nlong_query_time=<seconds>\n\n# Log query not using index\n# Default = OFF\nlog-queries-not-using-indexes=ON\n")),(0,o.kt)("h2",{id:"set-on-runtime"},"Set on runtime"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"set global slow_query_log = 'ON';\n")),(0,o.kt)("h2",{id:"display-slow-query-status"},"Display slow query status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"show global variables like 'slow_query%';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+---------------------+-------------------------------------+\n| Variable_name       | Value                               |\n+---------------------+-------------------------------------+\n| slow_query_log      | ON                                  |\n| slow_query_log_file | /var/lib/mysql/<host name>-slow.log |\n+---------------------+-------------------------------------+\n2 rows in set (0.00 sec)\n")))}p.isMDXComponent=!0}}]);