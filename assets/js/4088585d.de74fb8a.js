(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[562],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2434:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],o={},s={unversionedId:"MySQL",id:"MySQL",isDocsHomePage:!1,title:"MySQL",description:"Table of Contents",source:"@site/docs/MySQL.md",sourceDirName:".",slug:"/MySQL",permalink:"/note/MySQL",editUrl:"https://github.com/steelywing/note/edit/master/docs/MySQL.md",version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Mobile",permalink:"/note/Mobile"},next:{title:"Nginx",permalink:"/note/Nginx"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Export / Dump",id:"export--dump",children:[]},{value:"Import",id:"import",children:[]},{value:"Show tables size",id:"show-tables-size",children:[]},{value:"Calculate age",id:"calculate-age",children:[]},{value:"Find in set",id:"find-in-set",children:[]},{value:"Insert large number of row",id:"insert-large-number-of-row",children:[]},{value:"Recovery",id:"recovery",children:[{value:"Check tables",id:"check-tables",children:[]},{value:"Repair tables",id:"repair-tables",children:[]},{value:"Rebuild / Reorganize index",id:"rebuild--reorganize-index",children:[]}]},{value:"Config file",id:"config-file",children:[]},{value:"Help",id:"help",children:[]},{value:"Slow query log",id:"slow-query-log",children:[]},{value:"Explain",id:"explain",children:[]},{value:"Create database",id:"create-database",children:[]},{value:"Drop database",id:"drop-database",children:[]},{value:"User",id:"user",children:[{value:"Create user",id:"create-user",children:[]},{value:"Grant permission",id:"grant-permission",children:[]}]}],u={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#export--dump"},"Export / Dump")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#import"},"Import")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#show-tables-size"},"Show tables size")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#calculate-age"},"Calculate age")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#find-in-set"},"Find in set")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#insert-large-number-of-row"},"Insert large number of row")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#recovery"},"Recovery"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#check-tables"},"Check tables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#repair-tables"},"Repair tables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rebuild--reorganize-index"},"Rebuild / Reorganize index")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#config-file"},"Config file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#help"},"Help")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#slow-query-log"},"Slow query log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#explain"},"Explain")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-database"},"Create database")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#drop-database"},"Drop database")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#user"},"User"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-user"},"Create user")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#grant-permission"},"Grant permission"))))),(0,l.kt)("h2",{id:"export--dump"},"Export / Dump"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html"},"Reference")," / ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/mysqldump-stored-programs.html"},"Reference"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"PowerShell output redirect ( ",(0,l.kt)("inlineCode",{parentName:"p"},"mysqldump > file.sql")," ) will use UTF-16, MySQL cannot import UTF-16")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump [-u <user>] [-p]\n    { --all-databases | <database> [<table> [...]] }\n    [ --events | --skip-events ]\n    [ --routines | --skip-routines ]\n    [ --triggers | --skip-triggers ]\n    --result-file=<file.sql>\n")),(0,l.kt)("p",null,"Export with ",(0,l.kt)("inlineCode",{parentName:"p"},"gzip")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump <database> | gzip [-9] > <file.sql.gz>\n")),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html"},"Reference")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql [-u <user>] [-p] <database> < <file.sql>\n"))),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> use <database>;\nmysql> source <file>;\n")),(0,l.kt)("h2",{id:"show-tables-size"},"Show tables size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    table_schema as `Database`, \n    table_name as `Table`, \n    round(((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024), 2) `Size (MiB)` \nfrom INFORMATION_SCHEMA.TABLES;\n")),(0,l.kt)("h2",{id:"calculate-age"},"Calculate age"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- <birth> = YYYY-MM-DD\nselect timeStampDiff(year, <birth>, curDate()) as age;\n")),(0,l.kt)("h2",{id:"find-in-set"},"Find in set"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n  find_in_set('B', 'A,B,C'), \n  find_in_set('D', 'A,B,C'); \n-- Return 2, 0\n")),(0,l.kt)("h2",{id:"insert-large-number-of-row"},"Insert large number of row"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/optimizing-innodb-transaction-management.html"},"Reference"))),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"START TRANSACTION")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"COMMIT")),(0,l.kt)("h2",{id:"recovery"},"Recovery"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.5/en/forcing-innodb-recovery.html"},"Reference"))),(0,l.kt)("p",null,"Edit option file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\ninnodb_force_recovery = 1\n")),(0,l.kt)("p",null,"If the log loops with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"InnoDB: Waiting for the background threads to start\n")),(0,l.kt)("p",null,"Edit option file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\ninnodb_purge_threads = 0\n")),(0,l.kt)("h3",{id:"check-tables"},"Check tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqlcheck [{ -c | --check }] [-u <user>] [-p] <database> [<table> [...]]\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"check table <table> [, ...]\n")),(0,l.kt)("h3",{id:"repair-tables"},"Repair tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqlcheck [{ -r | --repair }] [-u <user>] [-p] <database> [<table> [...]]\n")),(0,l.kt)("h3",{id:"rebuild--reorganize-index"},"Rebuild / Reorganize index"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"optimize table <table> [, ...];\n")),(0,l.kt)("h2",{id:"config-file"},"Config file"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/option-files.html"},"Reference"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/etc/my.cnf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'# <comment>\n; <comment>\n\n[<group>]\n\n[mysqld]\n# Option for mysqld command\n\n[mysql]\n# Option for mysql command\n\n[mysqladmin]\n# Option for mysqladmin command\n\n[client]\n# Option for client (mysql, mysqldump, ...)\nport=<port>\npassword=<password>\n\n<option>\n# This is equivalent to --<option> on the command line\n\n<option>=<value>\n# This is equivalent to --<option>=<value> on the command line\n\n!include <file>\n# include config file\n\n!includedir <dir>\n# include config file "*.cnf" in <dir>\n')),(0,l.kt)("h2",{id:"help"},"Help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> { help | ? } [<command>];\n")),(0,l.kt)("h2",{id:"slow-query-log"},"Slow query log"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_slow_query_log"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\nslow-query-log=ON\nlog_output={ FILE | TABLE }\n\n# Default = <data directory>/<host name>-slow.log\nslow_query_log_file=<file>\n\n# Log query longer than <seconds>, default = 10\nlong_query_time=<seconds>\n\n# Log query not using index\nlog-queries-not-using-indexes=ON\n")),(0,l.kt)("p",null,"Set on runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> set global slow_query_log = 'ON';\n")),(0,l.kt)("p",null,"Show slow query status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show global variables like 'slow_query%';\n+---------------------+-------------------------------------+\n| Variable_name       | Value                               |\n+---------------------+-------------------------------------+\n| slow_query_log      | ON                                  |\n| slow_query_log_file | /var/lib/mysql/<host name>-slow.log |\n+---------------------+-------------------------------------+\n2 rows in set (0.00 sec)\n")),(0,l.kt)("h2",{id:"explain"},"Explain"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/mysql-performance-indexes-explain/"},"Reference"))),(0,l.kt)("p",null,"Optimizing query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> explain { select ... | delete ... | ... }\n")),(0,l.kt)("h2",{id:"create-database"},"Create database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> create database <database>;\n")),(0,l.kt)("h2",{id:"drop-database"},"Drop database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> drop database <database>;\n")),(0,l.kt)("h2",{id:"user"},"User"),(0,l.kt)("h3",{id:"create-user"},"Create user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create user '<user>'@'{localhost|<IP address>|*}' identified by '<password>';\n")),(0,l.kt)("h3",{id:"grant-permission"},"Grant permission"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"grant all\n  on {*|<database>}.{*|<table>}\n  to '<user>'@'{localhost|<IP address>|*};\n\nflush privileges;\n")))}c.isMDXComponent=!0}}]);