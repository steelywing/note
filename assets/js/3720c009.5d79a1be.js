"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3751],{4942:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(6687),r=a(4923),n=a(858),c=a(4227),s=a(7862),m=a(7663),o=a(2063),u=a(8935);function i(e){let{tags:t}=e;const a=(0,n.M)();return l.createElement(c.FG,{className:(0,r.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(u.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(o.Z,{tags:t}))))))}},6600:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(6687),r=a(4923),n=a(2928);const c="tag_K39a",s="tagRegular_rMdj",m="tagWithCount_hjCA";function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(c,o?m:s)},a,o&&l.createElement("span",null,o))}},2063:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(6687),r=a(858),n=a(6600);const c="tag_R37p";function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(n.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},858:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>n});var l=a(8287);const r=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);