"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2253],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,g=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={},p="WireGuard",u={unversionedId:"Network/WireGuard",id:"Network/WireGuard",title:"WireGuard",description:"AllowedIPs cannot overlap, WireGuard use this to choose peer",source:"@site/docs/Network/WireGuard.md",sourceDirName:"Network",slug:"/Network/WireGuard",permalink:"/note/Network/WireGuard",editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/WireGuard.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"OpenVPN",permalink:"/note/Network/OpenVPN"},next:{title:"ASA",permalink:"/note/Network/Cisco/ASA"}},c=[{value:"Key Generation",id:"key-generation",children:[],level:3},{value:"CLI",id:"cli",children:[],level:3},{value:"Config",id:"config",children:[],level:3},{value:"Show status",id:"show-status",children:[],level:3},{value:"Show config",id:"show-config",children:[],level:3},{value:"<code>wg-quick</code>",id:"wg-quick",children:[],level:2},{value:"OpenWRT",id:"openwrt",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wireguard"},"WireGuard"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"AllowedIPs")," cannot overlap, WireGuard use this to choose peer"))),(0,l.kt)("h3",{id:"key-generation"},"Key Generation"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.wireguard.com/quickstart/"},"Ref"))),(0,l.kt)("p",null,"Private Key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"umask 077\nwg genkey > private-key\n")),(0,l.kt)("p",null,"Public Key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wg pubkey < private-key > public-key\n")),(0,l.kt)("p",null,"Private and Public Key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wg genkey | tee private-key | wg pubkey > public-key\n")),(0,l.kt)("h3",{id:"cli"},"CLI"),(0,l.kt)("p",null,"Peer A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Public IP ",(0,l.kt)("inlineCode",{parentName:"li"},"1.1.1.1")),(0,l.kt)("li",{parentName:"ul"},"LAN ",(0,l.kt)("inlineCode",{parentName:"li"},"10.0.1.0/24")),(0,l.kt)("li",{parentName:"ul"},"UDP port ",(0,l.kt)("inlineCode",{parentName:"li"},"10100"))),(0,l.kt)("p",null,"Peer B"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Public IP: ",(0,l.kt)("inlineCode",{parentName:"li"},"2.2.2.2")),(0,l.kt)("li",{parentName:"ul"},"LAN: ",(0,l.kt)("inlineCode",{parentName:"li"},"10.0.2.0/24")),(0,l.kt)("li",{parentName:"ul"},"UDP port ",(0,l.kt)("inlineCode",{parentName:"li"},"random"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ip link add dev wg0 type wireguard\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Peer A\nip address add dev wg0 10.0.0.1/24\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Peer B\nip address add dev wg0 10.0.0.2/24\n")),(0,l.kt)("p",null,"If only 2 peers, peer to peer also works"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ip address add dev wg0 10.0.0.1 peer 10.0.0.2\n")),(0,l.kt)("p",null,"Use config file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wg setconf wg0 wg0.conf\n")),(0,l.kt)("p",null,"or CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Peer A\nwg set wg0 listen-port 10100 private-key /path/to/private-key peer <peer B public key> allowed-ips 10.0.0.2/32,10.0.2.0/24\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Peer B\nwg set wg0 listen-port 10100 private-key /path/to/private-key peer <peer A public key> allowed-ips 10.0.0.1/32,10.0.1.0/24 endpoint 1.1.1.1:10100\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ip link set up dev wg0\n")),(0,l.kt)("h3",{id:"config"},"Config"),(0,l.kt)("p",null,"Peer A"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[Interface]\nAddress = 10.0.0.1/24\nPrivateKey = 4IMHVUu9Ug0oujxxWdOiZXMQ74Sq5gag5ND6cbaIQX4=\nListenPort = 10100\n\n[Peer]\nPublicKey = /QgJoWF3KA2K5CHPfIc/T0KhXKuFe1k5V75mQuK5vEo=\nAllowedIPs = 10.0.0.2/32, 10.0.2.0/24\n")),(0,l.kt)("p",null,"Peer B"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[Interface]\nAddress = 10.0.0.2/24\nPrivateKey = AM/sFBkkiMGL4iGUMV1RO+cVmeaHcE5uGg/xxUoDsH0=\n\n[Peer]\nPublicKey = cWlZ8WRv4D0bGACuHwXGfmudZeMsFDYiVSmjPlVc0ko=\nAllowedIPs = 10.0.0.1/32, 10.0.1.0/24\n\n# Route all traffic to Peer A\n# AllowedIPs = 0.0.0.0/0\n")),(0,l.kt)("h3",{id:"show-status"},"Show status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wg\n")),(0,l.kt)("h3",{id:"show-config"},"Show config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wg showconf\n")),(0,l.kt)("h2",{id:"wg-quick"},(0,l.kt)("inlineCode",{parentName:"h2"},"wg-quick")),(0,l.kt)("p",null,"Setup interface using config in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/wireguard/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Use /etc/wireguard/wgnet0.conf\nwg-quick up wgnet0\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wg-quick up /path/to/wgnet0.conf\n")),(0,l.kt)("h2",{id:"openwrt"},"OpenWRT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"opkg install luci-app-wireguard\n/etc/init.d/network restart\n")))}d.isMDXComponent=!0}}]);