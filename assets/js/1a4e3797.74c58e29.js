"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7920],{8374:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(4035),r=n(1720),c=n.n(r),u=n(7294),s=n(2263),l=n(7019),o=n(2859),i=n(9960),m=n(6775),h=n(412);var f=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,s.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(22),d=n(8202),_=n(2539),E=n(726),g=n(1073),v=n(311),y=n(1029);function S(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var w="searchQueryInput_36Gj",I="searchResultItem_3Ppn",k="searchResultItemPath_DHCY",b="searchResultItemSummary__doj";function C(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,s=t.metadata,l=0===a,o=2===a,m=(l?n.b:r.b).slice(),h=o?n.s:n.t;return l||m.push(r.t),u.createElement("article",{className:I},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,_.C)(h,c):(0,E.o)(h,(0,g.m)(s,"t"),c,100)}})),m.length>0&&u.createElement("p",{className:k},m.join(" \u203a ")),o&&u.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,E.o)(n.t,(0,g.m)(s,"t"),c,100)}}))}var P=function(){var e=(0,s.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,i=(0,u.useState)(n),m=i[0],h=i[1],_=(0,u.useState)(),E=_[0],g=_[1],I=(0,u.useState)(),k=I[0],b=I[1],P=(0,u.useMemo)((function(){return m?S(y.Iz.search_results_for,{keyword:m}):y.Iz.search_the_documentation}),[m]);(0,u.useEffect)((function(){r(m),E&&(m?E(m,(function(e){b(e)})):b(void 0))}),[m,E]);var R=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==m&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var n,a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,g((function(){return(0,d.v)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(l.Z,{title:P},u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"})),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,P),u.createElement("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:R,value:m,autoComplete:"off",autoFocus:!0}),!E&&m&&u.createElement("div",null,u.createElement(v.Z,null)),k&&(k.length>0?u.createElement("p",null,S(1===k.length?y.Iz.count_documents_found:y.Iz.count_documents_found_plural,{count:k.length})):u.createElement("p",null,y.Iz.no_documents_were_found)),u.createElement("section",null,k&&k.map((function(e){return u.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);