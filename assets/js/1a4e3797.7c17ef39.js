"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7920],{3504:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(6687),r=n(7068);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}},6205:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(6687),r=n(7068),l=n(3023),s=n(5241),c=n(5376),o=n(7012),u=n(9539),m=n(5803),i=n(3504),h=n(9370),p=n(4347),d=n(5470);const g=function(){const e=(0,p.k6)(),t=(0,p.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:d.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var f=n(880),E=n(8958),y=n(303),S=n(7896),w=n(8873),I=n(2541),b=n(4596),v=n(2658);const P="searchQueryInput__5Js",R="searchResultItem_Mqny",F="searchResultItemPath_rnU2",_="searchResultItemSummary_EW1v";function k(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,h.gA)();let n=e;try{const{preferredVersion:e}=(0,u.J)((null==t?void 0:t.pluginId)??v.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(k){if(v.l9&&!(k instanceof m.i6))throw k}const{selectMessage:l}=(0,i.c)(),{searchValue:c,updateSearchPath:p}=g(),[d,y]=(0,a.useState)(c),[S,w]=(0,a.useState)(),[b,R]=(0,a.useState)(),F=(0,a.useMemo)((()=>d?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:d}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[d]);(0,a.useEffect)((()=>{p(d),S&&(d?S(d,(e=>{R(e)})):R(void 0))}),[d,S]);const _=(0,a.useCallback)((e=>{y(e.target.value)}),[]);return(0,a.useEffect)((()=>{c&&c!==d&&y(c)}),[c]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,f.w)(n);w((()=>(0,E.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,F)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,F),a.createElement("input",{type:"search",name:"q",className:P,"aria-label":"Search",onChange:_,value:d,autoComplete:"off",autoFocus:!0}),!S&&d&&a.createElement("div",null,a.createElement(I.Z,null)),b&&(b.length>0?a.createElement("p",null,l(b.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:b.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,b&&b.map((e=>a.createElement(q,{key:e.document.i,searchResult:e}))))))}function q(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:R},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,y.C)(i,l):(0,S.o)(i,(0,w.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:F},(0,b.e)(m)),u&&a.createElement("p",{className:_,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,w.m)(s,"t"),l,100)}}))}const C=function(){return a.createElement(l.Z,null,a.createElement(k,null))}}}]);