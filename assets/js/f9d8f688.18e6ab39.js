"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2262],{87485:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>u});var t=r(76687);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),p=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return r?t.createElement(h,i(i({ref:n},s),{},{components:r})):t.createElement(h,i({ref:n},s))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60786:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(76274),a=(r(76687),r(87485));const o={sidebar_label:"Thread"},i="Thread - Python",l={unversionedId:"Programming/Python/Thread",id:"Programming/Python/Thread",title:"Thread - Python",description:"Daemon",source:"@site/docs/Programming/Python/Thread.md",sourceDirName:"Programming/Python",slug:"/Programming/Python/Thread",permalink:"/note/Programming/Python/Thread",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/Python/Thread.md",tags:[],version:"current",frontMatter:{sidebar_label:"Thread"},sidebar:"programming",previous:{title:"Logging - Python",permalink:"/note/Programming/Python/Logging"},next:{title:"Programming",permalink:"/note/Programming/"}},d={},p=[{value:"Daemon",id:"daemon",level:2},{value:"Class <code>Thread</code>",id:"class-thread",level:2},{value:"Lock",id:"lock",level:2}],s={toc:p};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"thread---python"},"Thread - Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from time import sleep\nfrom threading import Thread\n\n\ndef run(times):\n    for i in range(times):\n        sleep(1)\n        print(f"Thread: {i}")\n\n\n# Create new thread and start\nThread(target=run, args=(4,)).start()\n\nfor i in range(2):\n    sleep(1)\n    print(f"Main: {i}")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thread: 0\nMain: 0\nThread: 1\nMain: 1\nThread: 2\nThread: 3\n")),(0,a.kt)("h2",{id:"daemon"},"Daemon"),(0,a.kt)("p",null,"Python will not exit when there are alive non-daemon threads."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from time import sleep\nfrom threading import Thread\n\n\ndef delay_print(delay, message):\n    sleep(delay)\n    print(message)\n\n\nThread(target=delay_print, args=(4, "daemon end"), daemon=True).start()\nThread(target=delay_print, args=(2, "non-daemon end"), daemon=False).start()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"non-daemon end\n")),(0,a.kt)("h2",{id:"class-thread"},"Class ",(0,a.kt)("inlineCode",{parentName:"h2"},"Thread")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from time import sleep\nfrom threading import Thread\n\n\nclass Run(Thread):\n    def __init__(self, id, delay):\n        super().__init__()\n        self.id = id\n        self.delay = delay\n\n    def run(self):\n        sleep(self.delay)\n        print(f"Thread {self.id} end")\n\n\nthreads = []\nfor i in range(5):\n    threads.append(Run(i, i))\n    threads[-1].start()\n\n# Wait all threads finish\nfor thread in threads:\n    thread.join()\n\nprint("Main end")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thread 0 end\nThread 1 end\nThread 2 end\nThread 3 end\nThread 4 end\nMain end\n")),(0,a.kt)("h2",{id:"lock"},"Lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from time import sleep\nfrom threading import Lock, Thread\n\n\ndef thread():\n    with lock:\n        print("Thread acquired lock")\n        sleep(4)\n    print("Thread released lock")\n\n\nlock = Lock()\nThread(target=thread).start()\n\nprint("Main waiting lock release")\nwith lock:\n    print("Main acquired lock")\nprint("Main released lock")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thread acquired lock\nMain waiting lock\nThread released lock\nMain acquired lock\nMain released lock\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"with lock:\n    # ...\n")),(0,a.kt)("p",null,"is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"lock.acquire()\ntry:\n    # ...\nfinally:\n    lock.release()\n")))}c.isMDXComponent=!0}}]);