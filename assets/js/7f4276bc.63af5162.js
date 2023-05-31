"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3397],{87485:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(76274),a=(n(76687),n(87485));const i={},c="X509",l={unversionedId:"Note/OpenSSL/X509",id:"Note/OpenSSL/X509",title:"X509",description:"TLS/SSL certificate",source:"@site/docs/Note/OpenSSL/X509.md",sourceDirName:"Note/OpenSSL",slug:"/Note/OpenSSL/X509",permalink:"/note/Note/OpenSSL/X509",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/OpenSSL/X509.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Key",permalink:"/note/Note/OpenSSL/Key"},next:{title:"RFID",permalink:"/note/Note/RFID"}},o={},s=[{value:"Certificate display and signing",id:"certificate-display-and-signing",level:2},{value:"Self signed certificate using existing key",id:"self-signed-certificate-using-existing-key",level:2},{value:"Display the contents of certificate",id:"display-the-contents-of-certificate",level:2},{value:"Verify if a private key matches a certificate",id:"verify-if-a-private-key-matches-a-certificate",level:2},{value:"Full chain certificate",id:"full-chain-certificate",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"x509"},"X509"),(0,a.kt)("p",null,"TLS/SSL certificate"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/man1.1.1/man1/x509.html"},"Reference"))),(0,a.kt)("h2",{id:"certificate-display-and-signing"},"Certificate display and signing"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/note/Note/OpenSSL/CSR#self-signed-certificate"},"Self signed certificate with new key")),(0,a.kt)("h2",{id:"self-signed-certificate-using-existing-key"},"Self signed certificate using existing key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 \n    # By default input is CRT (certificate)\n    # Use CSR as input\n    -req\n    -in <request.csr> \n\n    -days <days>\n    # Private key use for signing\n\n    -signkey <key.pem> \n\n    -out <cert.{crt|pem}> \n")),(0,a.kt)("p",null,"CA (Certificate Authority) sign certificate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 \n    -req \n    -in <request.csr> \n\n    -days <days> \n\n    # CA certificate\n    -CA <ca.crt> \n    # CA private key\n    -CAkey <ca.key> \n\n    # Recommended practice\n    # Create serial number file\n    # If the serial number file does not exist, random number is generated\n    [-CAcreateserial]\n\n    # Specify serial number, Decimal 01 02..., Hex 0x1 0x2...\n    [-set_serial <serial>]\n\n    # Specify serial number file, `$(basename <ca.crt> .crt).srl` by default\n    [-CAserial <filename>]\n\n    -out <cert.{crt|pem}>\n")),(0,a.kt)("h2",{id:"display-the-contents-of-certificate"},"Display the contents of certificate"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-dates")),(0,a.kt)("td",{parentName:"tr",align:null},"Print the start and expiry dates")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -in <cert.{crt|pem}> [-dates] -text -noout\n")),(0,a.kt)("h2",{id:"verify-if-a-private-key-matches-a-certificate"},"Verify if a private key matches a certificate"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/pages/how-verify-if-private-key-matches-certificate"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -noout -modulus -in <cert.crt> | openssl md5\nopenssl rsa -noout -modulus -in <private-key.pem> | openssl md5\nopenssl req -noout -modulus -in <csr.pem> | openssl md5\n")),(0,a.kt)("h2",{id:"full-chain-certificate"},"Full chain certificate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CA = Chain")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat <cert.crt> <chain.crt> > <fullchain.crt>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\ncert.crt\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\nCA.crt\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\nTrustedRoot.crt\n-----END CERTIFICATE----- \n")))}u.isMDXComponent=!0}}]);