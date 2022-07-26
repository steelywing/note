"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5072],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={},o="Delegate",i={unversionedId:"Programming/C-Sharp/Delegate",id:"Programming/C-Sharp/Delegate",title:"Delegate",description:"A delegate is a type that represents references to methods with a particular parameter list and return type.",source:"@site/docs/Programming/C-Sharp/Delegate.md",sourceDirName:"Programming/C-Sharp",slug:"/Programming/C-Sharp/Delegate",permalink:"/note/Programming/C-Sharp/Delegate",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/C-Sharp/Delegate.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"Async / Task",permalink:"/note/Programming/C-Sharp/Async"},next:{title:"Generic",permalink:"/note/Programming/C-Sharp/Generic"}},c={},u=[{value:"Lambda / Anonymous",id:"lambda--anonymous",level:2}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delegate"},"Delegate"),(0,a.kt)("p",null,"A delegate is a type that represents references to methods with a particular parameter list and return type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"class Program\n{\n    // Declaration\n    public delegate int DelegateMethod(ref int x);\n\n    public static int Add1(ref int x)\n    {\n        x += 1;\n        return x;\n    }\n\n    public static int Multiple2(ref int x)\n    {\n        x *= 2;\n        return x;\n    }\n\n    static void Main(string[] args)\n    {\n        DelegateMethod calculate;\n        int x;\n\n        x = 1;\n        calculate = Add1;\n        calculate?.Invoke(ref x); // 1 + 1 = 2\n        Console.WriteLine(x); // 2\n\n        x = 1;\n        calculate += Multiple2; // Add other method\n        calculate?.Invoke(ref x); // (1 + 1) * 2 = 4\n        Console.WriteLine(x); // 4\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the delegate has a return value and/or out parameters, it returns the return value and parameters of the last method invoked. "),(0,a.kt)("li",{parentName:"ul"},"Delegate can bind to instance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'class Counter\n{\n    public int count = 0;\n\n    public void Add()\n    {\n        count += 1;\n    }\n}\n\nclass Program\n{\n\n    // Declaration\n    public delegate void DelegateMethod();\n\n    static void Main(string[] args)\n    {\n        var a = new Counter();\n        var b = new Counter();\n\n        // Delegate does not need initialize, can be null\n        DelegateMethod method = null;\n\n        method = a.Add;\n        // method += a.Add;\n        // += can be use even delegate is null\n\n        // Use ?.Invoke() will check if delegate is null, call null delegate() will throw error\n        method?.Invoke();\n        Console.WriteLine(a.count); // 1\n\n        method += b.Add;\n        method?.Invoke();\n        Console.WriteLine($"{a.count} {b.count}"); // 2 1\n    }\n}\n')),(0,a.kt)("p",null,"Anonymous"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var delegateFunction = delegate()\n{\n    // ...\n    // return ...;\n};\n")),(0,a.kt)("p",null,"C# defined delegate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public delegate void Action();\npublic delegate void Action<in T>(T obj);\n// ...\n\npublic delegate TResult Func<out TResult>();\npublic delegate TResult Func<in T, out TResult>(T arg);\n// ...\n")),(0,a.kt)("h2",{id:"lambda--anonymous"},"Lambda / Anonymous"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions"},"Lambda expression"))),(0,a.kt)("p",null,"With return value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Func<int, int> Add1 = (n) => n + 1;\n// same as\nFunc<int, int> Add1 = (n) => { return n + 1; };\n")),(0,a.kt)("p",null,"Without return value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'Action<string> Hi = (name) =>\n{\n    Console.WriteLine($"Hi, {name}");\n};\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lambda is closure, that can access outer scope")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"int x = 1;\nvar doubleX = () =>\n{\n    return x * 2;\n};\nConsole.WriteLine(doubleX());\n")))}p.isMDXComponent=!0}}]);