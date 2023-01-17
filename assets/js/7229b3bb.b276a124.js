"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[652],{87485:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},$=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),$=p(r),m=a,f=$["".concat(l,".").concat(m)]||$[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=$;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}$.displayName="MDXCreateElement"},72414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(76274),a=(r(76687),r(87485));const o={},i="LDAP sort",s={unversionedId:"Programming/PHP/LDAP-Sort",id:"Programming/PHP/LDAP-Sort",title:"LDAP sort",description:"PHP ldap_sort() is deprecated, this is pure PHP implement",source:"@site/docs/Programming/PHP/LDAP-Sort.md",sourceDirName:"Programming/PHP",slug:"/Programming/PHP/LDAP-Sort",permalink:"/note/Programming/PHP/LDAP-Sort",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/PHP/LDAP-Sort.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"PHP issue",permalink:"/note/Programming/PHP/Issue"},next:{title:"Upload file",permalink:"/note/Programming/PHP/UploadFile"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ldap-sort"},"LDAP sort"),(0,a.kt)("p",null,"PHP ",(0,a.kt)("inlineCode",{parentName:"p"},"ldap_sort()")," is deprecated, this is pure PHP implement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// because PHP usort() cannot iterate using $array['count'], so need implement this quicksort()\nfunction quickSort(&$array, $compare, $start, $end)\n{\n    $partition = function (&$array, $start, $end) use (&$partition, $compare) {\n        if ($start >= $end) {\n            return;\n        }\n        $pivot = $array[$start];\n        $left = $start;\n        $right = $end;\n        while ($left <= $right) {\n            while ($compare($array[$left], $pivot) < 0) {\n                $left += 1;\n            }\n            while ($compare($array[$right], $pivot) > 0) {\n                $right -= 1;\n            }\n            if ($left > $right) {\n                break;\n            }\n            list($array[$left], $array[$right]) = [$array[$right], $array[$left]];\n            $left += 1;\n            $right -= 1;\n        }\n        $partition($array, $start, $right);\n        $partition($array, $left, $end);\n    };\n\n    $partition($array, $start, $end);\n}\n\n\nfunction ldapSort(array &$entries, $key)\n{\n    $SORT_KEY = 'SortValue';\n\n    $key = strtolower($key);\n\n    for ($i = 0; $i < $entries['count']; $i++) {\n        $entry = &$entries[$i];\n        $attributes = array_change_key_case($entry, CASE_LOWER);\n\n        $entry[$SORT_KEY] = isset($attributes[$key][0]) ?\n            $attributes[$key][0] : null;\n    }\n    unset($entry);\n\n    quickSort(\n        $entries,\n        function ($a, $b) use ($SORT_KEY) {\n            $a = $a[$SORT_KEY];\n            $b = $b[$SORT_KEY];\n            if ($a == $b) {\n                return 0;\n            }\n            return ($a < $b) ? -1 : 1;\n        },\n        0, // start\n        $entries['count'] - 1 // end\n    );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$entries = ldap_get_entries($ldap, $result);\nldapSort($entries, 'displayname');\n")))}u.isMDXComponent=!0}}]);