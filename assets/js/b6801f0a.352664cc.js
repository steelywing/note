(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3787],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3803:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),i=["components"],o={title:"C#"},s=void 0,c={unversionedId:"Programming/C-Sharp",id:"Programming/C-Sharp",isDocsHomePage:!1,title:"C#",description:".NET Platform",source:"@site/docs/Programming/C-Sharp.md",sourceDirName:"Programming",slug:"/Programming/C-Sharp",permalink:"/note/Programming/C-Sharp",editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/C-Sharp.md",version:"current",frontMatter:{title:"C#"},sidebar:"programming",previous:{title:"Programming",permalink:"/note/Programming/"},next:{title:"BrowserAutomation",permalink:"/note/Programming/JavaScript/BrowserAutomation"}},u=[{value:".NET Core",id:"net-core",children:[]},{value:".NET Framework",id:"net-framework",children:[]},{value:"Tools",id:"tools",children:[]},{value:"NameSpace",id:"namespace",children:[]},{value:"<code>typeof</code> / <code>GetType()</code> / <code>is</code>",id:"typeof--gettype--is",children:[]},{value:"<code>as</code> / Cast",id:"as--cast",children:[]},{value:"String format",id:"string-format",children:[]},{value:"Use <code>object</code> as <code>Dictionary</code> key",id:"use-object-as-dictionary-key",children:[]},{value:"Implement <code>GetHashCode()</code>",id:"implement-gethashcode",children:[]},{value:"<code>?.</code> / <code>?[]</code> Null-conditional operator",id:"---null-conditional-operator",children:[]},{value:"<code>byte[]</code> &lt;-&gt; <code>string</code>",id:"byte---string",children:[]},{value:"Compute <code>string</code> hash",id:"compute-string-hash",children:[]},{value:"Delegate",id:"delegate",children:[]},{value:"Lambda",id:"lambda",children:[]},{value:"Event",id:"event",children:[]},{value:"<code>using</code>",id:"using",children:[]},{value:"Copy files after build",id:"copy-files-after-build",children:[]},{value:"Extension",id:"extension",children:[]}],p={toc:u};function d(e){var n=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:".NET Platform",src:t(24).Z})),(0,l.kt)("h2",{id:"net-core"},".NET Core"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cross-Platform"),(0,l.kt)("li",{parentName:"ul"},"Open Source"),(0,l.kt)("li",{parentName:"ul"},"High Performance")),(0,l.kt)("h2",{id:"net-framework"},".NET Framework"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows Only"),(0,l.kt)("li",{parentName:"ul"},"Not fully Open Source")),(0,l.kt)("h2",{id:"tools"},"Tools"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jbevain/cecil"},"Mono Cecil")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Load existing managed assemblies, browse and inspect all the types, modify on the fly and save back the modified assembly.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/icsharpcode/ILSpy"},"ILSpy")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".NET Decompiler")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/dnSpy/dnSpy"},"dnSpy")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".NET Debugger"),(0,l.kt)("li",{parentName:"ul"},".NET Decompiler"),(0,l.kt)("li",{parentName:"ul"},".NET Assembly editor")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/BepInEx/BepInEx"},"BepInEx")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For Unity"),(0,l.kt)("li",{parentName:"ul"},"Included HarmonyX")),(0,l.kt)("h2",{id:"namespace"},"NameSpace"),(0,l.kt)("p",null,"\u547d\u540d\u7a7a\u9593\uff0c\u7528\u4f86\u7d44\u7e54/\u5206\u9694\u547d\u540d\uff0c\u5982\u679c\u6709\u5f88\u591a class\uff0c\u5225\u4eba\u5beb\u7684 class \u540d\u7a31\u4e5f\u53ef\u80fd\u548c\u4f60\u7684 class \u4e00\u6a23\uff0c\u53ef\u4ee5\u9632\u6b62\u540d\u7a31 conflict"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace NameSpace\n{\n    // ...\n}\n")),(0,l.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace")," \u547d\u540d\u7a7a\u9593\u88e1\u7684 class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nConsole.WriteLine("Hello, World!");\n// same as\nSystem.Console.WriteLine("Hello, World!");\n')),(0,l.kt)("p",null,"\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Generic")," (Alias) \u4f86\u5b58\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," \u547d\u540d\u7a7a\u9593"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using Generic = System.Collections.Generic;\nnew Generic::Dictionary<string, int>();\n")),(0,l.kt)("p",null,"\u5168\u57df\u547d\u540d\u7a7a\u9593 (Global / Top Level Name Space)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"global::\n")),(0,l.kt)("p",null,"\u5de2\u72c0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// N1\nnamespace N1\n{\n    // N1.C1\n    class C1\n    {\n        // N1.C1.C2\n        class C2\n        {\n        }\n    }\n    // N1.N2\n    namespace N2\n    {\n        // N1.N2.C2\n        class C2\n        {\n        }\n    }\n}\n")),(0,l.kt)("h2",{id:"typeof--gettype--is"},(0,l.kt)("inlineCode",{parentName:"h2"},"typeof")," / ",(0,l.kt)("inlineCode",{parentName:"h2"},"GetType()")," / ",(0,l.kt)("inlineCode",{parentName:"h2"},"is")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast#cast-expression"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Animal { }\n\npublic class Cat : Animal { }\n\npublic static class TypeOfExample\n{\n    public static void Main()\n    {\n        object cat = new Cat();\n        Console.WriteLine(cat is Animal);  // True\n        Console.WriteLine(cat.GetType() == typeof(Animal));  // False\n\n        Console.WriteLine(cat is Cat);  // True\n        Console.WriteLine(cat.GetType() == typeof(Cat));  // True\n    }\n}\n")),(0,l.kt)("h2",{id:"as--cast"},(0,l.kt)("inlineCode",{parentName:"h2"},"as")," / Cast"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast#cast-expression"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cast, convert E to type T\n(T) E\n\nE as T\n// same as\nE is T ? (T)(E) : (T)null\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"E")," is an expression that returns a value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"T")," is the name of a type or a type parameter")),(0,l.kt)("h2",{id:"string-format"},"String format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'string.format("{0} is a {1}", "Cat", "animal");\n// Cat is a animal\n\nvar a = "Cat";\nvar b = "animal";\n$"{a} is a {b}";\n// Cat is a animal\n')),(0,l.kt)("h2",{id:"use-object-as-dictionary-key"},"Use ",(0,l.kt)("inlineCode",{parentName:"h2"},"object")," as ",(0,l.kt)("inlineCode",{parentName:"h2"},"Dictionary")," key"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/how-to-define-value-equality-for-a-type"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class DictKey\n{\n    public int key;\n\n    public override int GetHashCode()\n    {\n        return this.key;\n    }\n\n    public override bool Equals(object obj)\n    {\n        return (obj is DictKey dictKey) &&\n            return this.key == dictKey.key;\n    }\n}\n")),(0,l.kt)("p",null,"Visual Studio has ",(0,l.kt)("strong",{parentName:"p"},"Quick Action")," to ",(0,l.kt)("strong",{parentName:"p"},"Generate Equals and GetHashCode")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/ide/reference/generate-equals-gethashcode-methods?view=vs-2019"},"Reference"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generate Equals and GetHashCode",src:t(4724).Z})),(0,l.kt)("h2",{id:"implement-gethashcode"},"Implement ",(0,l.kt)("inlineCode",{parentName:"h2"},"GetHashCode()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// .NET Core\nHashCode.Combine(value, ...);\n")),(0,l.kt)("p",null,"For Collection"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Hash\n{\n    public List<int> list;\n\n    public override int GetHashCode()\n    {\n        var hashCode = new HashCode();\n        foreach (var item in list)\n        {\n            hashCode.Add(item);\n        }\n        return hashCode.ToHashCode();\n    }\n}\n")),(0,l.kt)("h2",{id:"---null-conditional-operator"},(0,l.kt)("inlineCode",{parentName:"h2"},"?.")," / ",(0,l.kt)("inlineCode",{parentName:"h2"},"?[]")," Null-conditional operator"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"a?.x\n")),(0,l.kt)("p",null,"If a is null, the result is null, otherwise the result is a.x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"a?.x()\na?.b?.c(d);\na?.b?[c];\n")),(0,l.kt)("p",null,"If a is null, the result is null, and will not execute a.x(), otherwise the result is a.x()"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The null-conditional operators are short-circuiting. That is, if one operation in a chain of conditional member or element access operations returns null, the rest of the chain doesn't execute. ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"a?[x]\n")),(0,l.kt)("p",null,"If a is null, the result is null, otherwise the result is a","[x]"),(0,l.kt)("h2",{id:"byte---string"},(0,l.kt)("inlineCode",{parentName:"h2"},"byte[]")," <-> ",(0,l.kt)("inlineCode",{parentName:"h2"},"string")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"byte[]")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// .NET Framework\nusing System.Runtime.Remoting.Metadata.W3cXsd2001;\n\nnew SoapHexBinary(new byte[] { }).ToString();\n")),(0,l.kt)("p",null,"Pure C# implement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'private static readonly uint[] lookup = CreateLookupTable();\n\nprivate static uint[] CreateLookupTable()\n{\n    var result = new uint[256];\n    for (int i = 0; i < 256; i++)\n    {\n        string s = i.ToString("X2");\n        result[i] = ((uint)s[0]) + ((uint)s[1] << 16);\n    }\n    return result;\n}\n\npublic static string ToHex(byte[] bytes)\n{\n    var result = new char[bytes.Length * 2];\n    for (int i = 0; i < bytes.Length; i++)\n    {\n        var val = lookup[bytes[i]];\n        result[2 * i] = (char)val;\n        result[2 * i + 1] = (char)(val >> 16);\n    }\n    return new string(result);\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"byte[]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// .NET Framework\nSoapHexBinary.Parse("00aabbEEFF").Value;\n')),(0,l.kt)("h2",{id:"compute-string-hash"},"Compute ",(0,l.kt)("inlineCode",{parentName:"h2"},"string")," hash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Security.Cryptography;\n\npublic byte[] ComputeSHA1(string s)\n{\n    using (SHA1 sha1 = SHA1.Create())\n    {\n        return sha1.ComputeHash(\n            Encoding.UTF8.GetBytes(s)\n        );\n    }\n}\n")),(0,l.kt)("h2",{id:"delegate"},"Delegate"),(0,l.kt)("p",null,"A delegate is a type that represents references to methods with a particular parameter list and return type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n    // Declaration\n    public delegate int DelegateMethod(ref int x);\n\n    public static int Add1(ref int x)\n    {\n        x += 1;\n        return x;\n    }\n\n    public static int Multiple2(ref int x)\n    {\n        x *= 2;\n        return x;\n    }\n\n    static void Main(string[] args)\n    {\n        DelegateMethod calculate;\n        int x;\n\n        x = 1;\n        calculate = Add1;\n        calculate(ref x); // 1 + 1 = 2\n        Console.WriteLine(x); // 2\n\n        x = 1;\n        calculate += Multiple2; // Add other method\n        calculate(ref x); // (1 + 1) * 2 = 4\n        Console.WriteLine(x); // 4\n    }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the delegate has a return value and/or out parameters, it returns the return value and parameters of the last method invoked. "),(0,l.kt)("li",{parentName:"ul"},"Delegate can bind to instance")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'class Counter\n{\n    public int count = 0;\n\n    public void Add()\n    {\n        count += 1;\n    }\n}\n\nclass Program\n{\n\n    // Declaration\n    public delegate void DelegateMethod();\n\n    static void Main(string[] args)\n    {\n        var a = new Counter();\n        var b = new Counter();\n\n        DelegateMethod method = null;\n\n        method = a.Add;\n        // This also works\n        // method += a.Add;\n        method();\n        Console.WriteLine(a.count); // 1\n\n        method += b.Add;\n        method();\n        Console.WriteLine($"{a.count} {b.count}"); // 2 1\n    }\n}\n')),(0,l.kt)("p",null,"Anonymous"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"var delegateFunction = delegate()\n{\n    // ...\n    // return ...;\n};\n")),(0,l.kt)("p",null,"C# defined delegate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public delegate void Action();\npublic delegate void Action<in T>(T obj);\n// ...\n\npublic delegate TResult Func<out TResult>();\npublic delegate TResult Func<in T, out TResult>(T arg);\n// ...\n")),(0,l.kt)("h2",{id:"lambda"},"Lambda"),(0,l.kt)("p",null,"With return value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"Func<int, int> Add1 = (n) => n + 1;\n// same as\nFunc<int, int> Add1 = (n) => { return n + 1; };\n")),(0,l.kt)("p",null,"Without return value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'Action<string> Hi = (name) =>\n{\n    Console.WriteLine($"Hi, {name}");\n};\n')),(0,l.kt)("h2",{id:"event"},"Event"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/events/how-to-publish-events-that-conform-to-net-framework-guidelines"},"Reference"))),(0,l.kt)("h2",{id:"using"},(0,l.kt)("inlineCode",{parentName:"h2"},"using")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive"},"Reference"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"using")," static type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using static System.Console;\n\nclass Program\n{\n    static void Main()\n    {\n        WriteLine();\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"using")," alias"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using SysCon = System.Console;\nusing ListOfString = System.Collections.Generic.List<string>;\n")),(0,l.kt)("h2",{id:"copy-files-after-build"},"Copy files after build"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild-targets?view=vs-2019"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<Project ToolsVersion="15.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">\n  <Target Name="CopyFiles" AfterTargets="AfterBuild">\n    <Copy SourceFiles="<file>[;<file>...]" DestinationFolder="<folder>" />\n  </Target>\n</Project>\n')),(0,l.kt)("h2",{id:"extension"},"Extension"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace MathExtensionMethods\n{\n    public static class MathExtensions\n    {\n        public static double Power(this Double number, Double power)\n        {\n            return Math.Pow(number, power);\n        }\n    }\n}\n\n(2.0).Power(16)\n")))}d.isMDXComponent=!0},4724:function(e,n){"use strict";n.Z="data:image/png;base64,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"},24:function(e,n,t){"use strict";n.Z=t.p+"assets/images/platforms-netstandard-64d90ffd2f10f1f9b82debc321a63906.png"}}]);