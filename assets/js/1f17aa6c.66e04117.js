"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6090],{87485:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(76274),r=(n(76687),n(87485));const l={},o="Suricata",i={unversionedId:"Note/IDS IPS/Suricata",id:"Note/IDS IPS/Suricata",title:"Suricata",description:"Installation",source:"@site/docs/Note/IDS IPS/Suricata.md",sourceDirName:"Note/IDS IPS",slug:"/Note/IDS IPS/Suricata",permalink:"/note/Note/IDS IPS/Suricata",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/IDS IPS/Suricata.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"IDS / IPS",permalink:"/note/Note/IDS IPS/"},next:{title:"LDAP",permalink:"/note/Note/LDAP"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"CentOS",id:"centos",level:3},{value:"Alerting",id:"alerting",level:2},{value:"Test alert",id:"test-alert",level:3},{value:"View alert log",id:"view-alert-log",level:3},{value:"<code>eve.json</code>",id:"evejson",level:2},{value:"Count <code>event_type</code> in <code>eve.json</code>",id:"count-event_type-in-evejson",level:3},{value:"Monitor <code>alert</code>",id:"monitor-alert",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"suricata"},"Suricata"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"centos"},"CentOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install epel-release yum-plugin-copr\nsudo yum copr enable @oisf/suricata-6.0\nsudo yum install suricata\n")),(0,r.kt)("p",null,"Auto start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable suricata.service\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"suricata-update")," require ",(0,r.kt)("inlineCode",{parentName:"p"},"PyYAML")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install PyYAML\n")),(0,r.kt)("p",null,"Update signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo suricata-update\n")),(0,r.kt)("p",null,"Restart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart suricata\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://suricata.readthedocs.io/en/latest/install.html"},"Installation"))),(0,r.kt)("h2",{id:"alerting"},"Alerting"),(0,r.kt)("h3",{id:"test-alert"},"Test alert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://testmynids.org/uid/index.html\n")),(0,r.kt)("h3",{id:"view-alert-log"},"View alert log"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tail /var/log/suricata/fast.log\n")),(0,r.kt)("h2",{id:"evejson"},(0,r.kt)("inlineCode",{parentName:"h2"},"eve.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="eve.json"',title:'"eve.json"'},'outputs:\n  - eve-log:\n      enabled: yes\n      filename: eve.json\n      types:\n        # Disable flow log, very large\n        # - flow\n\n        # Disable event type "fileinfo", large too\n        # - files:\n            # force-magic: no\n')),(0,r.kt)("h3",{id:"count-event_type-in-evejson"},"Count ",(0,r.kt)("inlineCode",{parentName:"h3"},"event_type")," in ",(0,r.kt)("inlineCode",{parentName:"h3"},"eve.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat eve.json | jq ".event_type" | sort | uniq -c\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      4 "alert"\n      7 "stats"\n     89 "tls"\n')),(0,r.kt)("h3",{id:"monitor-alert"},"Monitor ",(0,r.kt)("inlineCode",{parentName:"h3"},"alert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tail -f eve.json | jq 'select(.event_type==\"alert\")'\n")))}p.isMDXComponent=!0}}]);