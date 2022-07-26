"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={slug:".",sidebar_label:"Basic",sidebar_position:0},o="Python",p={unversionedId:"Programming/Python/README",id:"Programming/Python/README",title:"Python",description:"Access attribute using string",source:"@site/docs/Programming/Python/README.md",sourceDirName:"Programming/Python",slug:"/Programming/Python/",permalink:"/note/Programming/Python/",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/Python/README.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:".",sidebar_label:"Basic",sidebar_position:0},sidebar:"programming",previous:{title:"Module",permalink:"/note/Programming/JavaScript/Module"},next:{title:"Logging - Python",permalink:"/note/Programming/Python/Logging"}},i={},s=[{value:"Access attribute using string",id:"access-attribute-using-string",level:2},{value:"<code>pip</code> - PIP Installs Packages",id:"pip---pip-installs-packages",level:2},{value:"Formatter",id:"formatter",level:2},{value:"Unit test",id:"unit-test",level:2},{value:"Unit test framework",id:"unit-test-framework",level:3},{value:"Show <code>sys.path</code> (module path) in CLI",id:"show-syspath-module-path-in-cli",level:2},{value:"Pass all arguments to another function",id:"pass-all-arguments-to-another-function",level:2},{value:"Decorator",id:"decorator",level:2},{value:"Bind <code>self</code> to function",id:"bind-self-to-function",level:2},{value:"Follow file",id:"follow-file",level:2},{value:"Is iterable ?",id:"is-iterable-",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python"},"Python"),(0,r.kt)("h2",{id:"access-attribute-using-string"},"Access attribute using string"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"getattr(object, name, default=None)\nhasattr(object, name)\n")),(0,r.kt)("h2",{id:"pip---pip-installs-packages"},(0,r.kt)("inlineCode",{parentName:"h2"},"pip")," - PIP Installs Packages"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"Reference")),(0,r.kt)("p",null,"CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip\npython -m pip\n")),(0,r.kt)("p",null,"Install package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <package>\n")),(0,r.kt)("p",null,"Uninstall package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip uninstall <package>\n")),(0,r.kt)("p",null,"List installed package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip list\n")),(0,r.kt)("p",null,"Download package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip download <package>\n")),(0,r.kt)("p",null,"Install downloaded package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --no-index --find-links <directory> <package>\n")),(0,r.kt)("p",null,"Export ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip freeze > requirements.txt\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,r.kt)("p",null,"Download ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip download -r requirements.txt\n")),(0,r.kt)("h2",{id:"formatter"},"Formatter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/psf/black"},(0,r.kt)("inlineCode",{parentName:"a"},"black"))," (Recommended)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hhatto/autopep8"},(0,r.kt)("inlineCode",{parentName:"a"},"autopep8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/yapf"},(0,r.kt)("inlineCode",{parentName:"a"},"YAPF")))),(0,r.kt)("h2",{id:"unit-test"},"Unit test"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pytest.readthedocs.io/en/latest/goodpractices.html"},(0,r.kt)("inlineCode",{parentName:"a"},"pytest")," reference")," / ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/unittest.html"},"Reference")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"module/\n    lib/\n        __init__.py\n        module.py\n    tests/\n        test_module.py\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# test_module.py\n\nimport unittest\nfrom lib import module\n\nclass TestModule(unittest.TestCase):\n    def test_module(self):\n        pass\n\nif __name__ == '__main__':\n    unittest.main()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In /module/ folder\npython -m tests.test_module\n")),(0,r.kt)("h3",{id:"unit-test-framework"},"Unit test framework"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nose.readthedocs.org/en/latest/"},"nose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.nose2.io/en/latest/"},"nose2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pytest.readthedocs.io/en/latest/contents.html"},"pytest"))),(0,r.kt)("h2",{id:"show-syspath-module-path-in-cli"},"Show ",(0,r.kt)("inlineCode",{parentName:"h2"},"sys.path")," (module path) in CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -m site\n")),(0,r.kt)("h2",{id:"pass-all-arguments-to-another-function"},"Pass all arguments to another function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class List(list):\n    def append_twice(self, *args, **kwargs):\n        self.append(*args, **kwargs)\n        self.append(*args, **kwargs)\n")),(0,r.kt)("h2",{id:"decorator"},"Decorator"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0318/"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"@decorator\ndef run():\n    pass\n")),(0,r.kt)("p",null,"is equivalent to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def run():\n    pass\nrun = decorator(run)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from functools import wraps\n\ndef decorator(func):\n    # Using original func name and doc string\n    @wraps(func)\n    def wrap():\n        print("[Before]")\n        func()\n        print("[After]")\n    return wrap\n\n@decorator\ndef run():\n    print("Run")\n\nrun()\n\n# [Before]\n# Run\n# [After]\n')),(0,r.kt)("h2",{id:"bind-self-to-function"},"Bind ",(0,r.kt)("inlineCode",{parentName:"h2"},"self")," to function"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/howto/descriptor.html#functions-and-methods"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import types\n\ndef power(self, exp):\n    return pow(self, exp)\n\npower2 = types.MethodType(power, 2)\nprint(power2(8)) # 256\n")),(0,r.kt)("h2",{id:"follow-file"},"Follow file"),(0,r.kt)("p",null,"Follow file changed / appended data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from io import SEEK_CUR, SEEK_END, SEEK_SET\nfrom typing import Iterator, TextIO\nimport sys\n\n\ndef follow(file: TextIO, interval: float = 0.2) -> Iterator[str]:\n    from time import sleep\n    line = ''\n    while True:\n        new = file.readline()\n        if new == \"\":\n            sleep(interval)\n            continue\n        line += new\n        if not line.endswith(\"\\n\"):\n            continue\n        yield line[:-1]\n        line = ''\n\n\nif __name__ == '__main__':\n    with open(\"access.log\", 'r') as file:\n        file.seek(0, SEEK_END)\n        for line in follow(file):\n            print(line)\n")),(0,r.kt)("h2",{id:"is-iterable-"},"Is iterable ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from collections.abc import Iterable\n\nisinstance(e, Iterable):\n")))}c.isMDXComponent=!0}}]);