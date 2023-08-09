"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[198],{87485:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(76274),o=(n(76687),n(87485));const i={},a="OpenVPN",l={unversionedId:"Network/OpenVPN/README",id:"Network/OpenVPN/README",title:"OpenVPN",description:"CCD",source:"@site/docs/Network/OpenVPN/README.md",sourceDirName:"Network/OpenVPN",slug:"/Network/OpenVPN/",permalink:"/note/Network/OpenVPN/",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/OpenVPN/README.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"Interface",permalink:"/note/Network/Interface"},next:{title:"Static Key",permalink:"/note/Network/OpenVPN/Static Key"}},p={},c=[{value:"CCD",id:"ccd",level:2},{value:"Site to Site",id:"site-to-site",level:2},{value:"Server side",id:"server-side",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openvpn"},"OpenVPN"),(0,o.kt)("h2",{id:"ccd"},"CCD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"client-config-dir <path>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client-specific configuration"),(0,o.kt)("li",{parentName:"ul"},"When client connected, OpenVPN will look in this directory for a file having the same name as the client's X509 common name, and add to server config")),(0,o.kt)("h2",{id:"site-to-site"},"Site to Site"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://community.openvpn.net/openvpn/wiki/RoutedLans"},"OpenVPN")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openwrt.org/docs/guide-user/services/vpn/openvpn/extras"},"OpenWRT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.netgate.com/pfsense/en/latest/troubleshooting/openvpn-iroute.html"},"pfSense")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server: ",(0,o.kt)("inlineCode",{parentName:"li"},"10.10.0.0/24")),(0,o.kt)("li",{parentName:"ul"},"Client 1: ",(0,o.kt)("inlineCode",{parentName:"li"},"10.10.1.0/24")),(0,o.kt)("li",{parentName:"ul"},"Client 2: ",(0,o.kt)("inlineCode",{parentName:"li"},"10.10.2.0/24"))),(0,o.kt)("h3",{id:"server-side"},"Server side"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# server.ovpn\n\n# ...\n\n# Add route to server kernel\n# Route this network from kernel to OpenVPN\nroute 10.10.1.0 255.255.255.0\nroute 10.10.2.0 255.255.255.0\n\n# Tell client to route this network over the VPN\npush "route 10.10.0.0 255.255.255.0"\npush "route 10.10.1.0 255.255.255.0"\npush "route 10.10.2.0 255.255.255.0"\n\n# Allow Client to Client\nclient-to-client\n\nclient-config-dir ccd\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use CCD to add ",(0,o.kt)("inlineCode",{parentName:"li"},"iroute")),(0,o.kt)("li",{parentName:"ul"},"Without ",(0,o.kt)("inlineCode",{parentName:"li"},"iroute"),", OpenVPN doesn't know where to forward the client network, and OpenVPN will drop the packet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"iroute")," must be in CDC context, OpenVPN need to know which client own the network"),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"iroute x.x.x.x")," match ",(0,o.kt)("inlineCode",{parentName:"li"},'push "route x.x.x.x"'),", OpenVPN will not push the route")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# ./ccd/<Client 1 X509 common name>\n\niroute 10.10.2.0 255.255.255.0\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# ./ccd/<Client 2 X509 common name>\n\niroute 10.10.3.0 255.255.255.0\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WireGuard VPN is simpler")))}s.isMDXComponent=!0}}]);