"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2584],{79847:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var r=o(75366),g=o(26192);const t={},l="Logging - Python",a={id:"Programming/Python/Logging",title:"Logging - Python",description:"How To",source:"@site/docs/Programming/Python/Logging.md",sourceDirName:"Programming/Python",slug:"/Programming/Python/Logging",permalink:"/note/Programming/Python/Logging",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/Python/Logging.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"Function - Python",permalink:"/note/Programming/Python/Function"},next:{title:"Thread",permalink:"/note/Programming/Python/Thread"}},s={},i=[{value:"Color Logging",id:"color-logging",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,g.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"logging---python",children:"Logging - Python"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.python.org/3/howto/logging.html",children:"How To"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'import logging\n\nLOG_FILE = "/var/log/python.log"\n\n# get a module-level logger\nlogger = logging.getLogger(__name__)\n\n# get the root logger\nlogger = logging.getLogger()\n\n# specifies the lowest-severity the logger will handle\n# DEBUG < INFO < WARNING < ERROR < CRITICAL\nlogger.setLevel(logging.DEBUG)\n\n# output log to console\nhandler = logging.StreamHandler()\nhandler.setFormatter(logging.Formatter("%(message)s"))\nlogger.addHandler(handler)\n\n# output log to file\nhandler = logging.FileHandler(LOG_FILE)\nhandler.setFormatter(logging.Formatter("%(asctime)s %(message)s"))\nlogger.addHandler(handler)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"import logging\n\nlogger = logging.getLogger()\n\nlogger.debug('debug message')\nlogger.info('info message')\nlogger.warning('warn message')\nlogger.error('error message')\nlogger.critical('critical message')\n"})}),"\n",(0,r.jsx)(n.h2,{id:"color-logging",children:"Color Logging"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/a/56944256",children:"Reference"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ColorFormatter.py"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'import logging\n\nclass ColorFormatter(logging.Formatter):\n    """Color logging.Formatter"""\n\n    COLORS = {\n        # Blue\n        logging.INFO: "\\033[34m",\n        # Yellow\n        logging.WARNING: "\\033[33m",\n        # Red\n        logging.ERROR: "\\033[31m",\n        # Red\n        logging.CRITICAL: "\\033[31m",\n    }\n    RESET = "\\033[0m"\n\n    def __init__(self, fmt=None, *args, **kwargs):\n        super().__init__(fmt, *args, **kwargs)\n        self.formatters = {}\n        # Create formatters for each level\n        for level, color in self.COLORS.items():\n            self.formatters[level] = logging.Formatter(\n                "{}{}{}".format(color, fmt, self.RESET),\n                *args,\n                **kwargs\n            )\n\n    def format(self, record):\n        if record.levelno in self.formatters:\n            return self.formatters[record.levelno].format(record)\n        return super().format(record)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'import logging\nfrom ColorFormatter import ColorFormatter\n\nlogger = logging.getLogger()\nlogger.setLevel(logging.DEBUG)\n\nhandler = logging.StreamHandler()\nhandler.setFormatter(ColorFormatter("%(message)s"))\nlogger.addHandler(handler)\n'})})]})}function m(e={}){const{wrapper:n}={...(0,g.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},26192:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>l});var r=o(97049);const g={},t=r.createContext(g);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(g):e.components||g:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);