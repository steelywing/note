"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2262],{2179:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var a=r(75366),d=r(26192);const t={sidebar_label:"Thread"},i="Thread - Python",o={id:"Programming/Python/Thread",title:"Thread - Python",description:"Daemon",source:"@site/docs/Programming/Python/Thread.md",sourceDirName:"Programming/Python",slug:"/Programming/Python/Thread",permalink:"/note/Programming/Python/Thread",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/Python/Thread.md",tags:[],version:"current",frontMatter:{sidebar_label:"Thread"},sidebar:"programming",previous:{title:"Logging - Python",permalink:"/note/Programming/Python/Logging"}},s={},l=[{value:"Daemon",id:"daemon",level:2},{value:"Class <code>Thread</code>",id:"class-thread",level:2},{value:"Lock",id:"lock",level:2},{value:"Thread Decorator",id:"thread-decorator",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"thread---python",children:"Thread - Python"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'from time import sleep\nfrom threading import Thread\n\n\ndef run(times):\n    for i in range(times):\n        sleep(1)\n        print(f"Thread: {i}")\n\n\n# Create new thread and start\nThread(target=run, args=(4,)).start()\n\nfor i in range(2):\n    sleep(1)\n    print(f"Main: {i}")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Thread: 0\nMain: 0\nThread: 1\nMain: 1\nThread: 2\nThread: 3\n"})}),"\n",(0,a.jsx)(n.h2,{id:"daemon",children:"Daemon"}),"\n",(0,a.jsx)(n.p,{children:"Python will not exit when there are alive non-daemon threads."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'from time import sleep\nfrom threading import Thread\n\n\ndef delay_print(delay, message):\n    sleep(delay)\n    print(message)\n\n\nThread(target=delay_print, args=(4, "daemon end"), daemon=True).start()\nThread(target=delay_print, args=(2, "non-daemon end"), daemon=False).start()\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"non-daemon end\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"class-thread",children:["Class ",(0,a.jsx)(n.code,{children:"Thread"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'from time import sleep\nfrom threading import Thread\n\n\nclass Run(Thread):\n    def __init__(self, id, delay):\n        super().__init__()\n        self.id = id\n        self.delay = delay\n\n    def run(self):\n        sleep(self.delay)\n        print(f"Thread {self.id} end")\n\n\nthreads = []\nfor i in range(5):\n    threads.append(Run(i, i))\n    threads[-1].start()\n\n# Wait all threads finish\nfor thread in threads:\n    thread.join()\n\nprint("Main end")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Thread 0 end\nThread 1 end\nThread 2 end\nThread 3 end\nThread 4 end\nMain end\n"})}),"\n",(0,a.jsx)(n.h2,{id:"lock",children:"Lock"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'from time import sleep\nfrom threading import Lock, Thread\n\n\ndef thread():\n    with lock:\n        print("Thread acquired lock")\n        sleep(4)\n    print("Thread released lock")\n\n\nlock = Lock()\nThread(target=thread).start()\n\nprint("Main waiting lock release")\nwith lock:\n    print("Main acquired lock")\nprint("Main released lock")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Thread acquired lock\nMain waiting lock\nThread released lock\nMain acquired lock\nMain released lock\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"with lock:\n    # ...\n"})}),"\n",(0,a.jsx)(n.p,{children:"is equivalent to"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"lock.acquire()\ntry:\n    # ...\nfinally:\n    lock.release()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"thread-decorator",children:"Thread Decorator"}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/note/Programming/Python/Decorator#thread-decorator",children:"Thread Decorator"})]})]})}function c(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},26192:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(97049);const d={},t=a.createContext(d);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);