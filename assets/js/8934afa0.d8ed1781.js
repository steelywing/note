"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2264],{7485:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(6687);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(6274),l=(n(6687),n(7485));const r={},o=void 0,s={unversionedId:"Note/MySQL",id:"Note/MySQL",title:"MySQL",description:"Export / Dump",source:"@site/docs/Note/MySQL.md",sourceDirName:"Note",slug:"/Note/MySQL",permalink:"/note/Note/MySQL",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/MySQL.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Mobile",permalink:"/note/Note/Mobile"},next:{title:"Access control",permalink:"/note/Note/Nginx/AccessControl"}},i={},p=[{value:"Export / Dump",id:"export--dump",level:2},{value:"Import",id:"import",level:2},{value:"Show tables size",id:"show-tables-size",level:2},{value:"Calculate age",id:"calculate-age",level:2},{value:"Find in set",id:"find-in-set",level:2},{value:"Insert large number of row",id:"insert-large-number-of-row",level:2},{value:"Recovery",id:"recovery",level:2},{value:"Check tables",id:"check-tables",level:3},{value:"Repair tables",id:"repair-tables",level:3},{value:"Rebuild / Reorganize index",id:"rebuild--reorganize-index",level:3},{value:"Config file",id:"config-file",level:2},{value:"Help",id:"help",level:2},{value:"Slow query log",id:"slow-query-log",level:2},{value:"Explain",id:"explain",level:2},{value:"Create database",id:"create-database",level:2},{value:"Drop database",id:"drop-database",level:2},{value:"User",id:"user",level:2},{value:"Create user",id:"create-user",level:3},{value:"Show user",id:"show-user",level:3},{value:"Permission / Privilege",id:"permission--privilege",level:2},{value:"Grant permission",id:"grant-permission",level:3},{value:"Show permission",id:"show-permission",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"export--dump"},"Export / Dump"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html"},"Doc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/mysqldump-stored-programs.html"},"Doc")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"PowerShell output redirect ( ",(0,l.kt)("inlineCode",{parentName:"p"},"mysqldump > file.sql")," ) will use UTF-16, MySQL cannot import UTF-16")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump [-u <user>] [-p]\n    { --all-databases | <database> [<table> [...]] }\n    [ --events | --skip-events ]\n    [ --routines | --skip-routines ]\n    [ --triggers | --skip-triggers ]\n    --result-file=<file.sql>\n")),(0,l.kt)("p",null,"Export with ",(0,l.kt)("inlineCode",{parentName:"p"},"gzip")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump <database> | gzip [-9] > <file.sql.gz>\n")),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html"},"Doc"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql [-u <user>] [-p] <database> < <file.sql>\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"use <database>;\nsource <file>;\n")),(0,l.kt)("h2",{id:"show-tables-size"},"Show tables size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    table_schema as `Database`, \n    table_name as `Table`, \n    round(((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024), 2) `Size (MiB)` \nfrom INFORMATION_SCHEMA.TABLES;\n")),(0,l.kt)("h2",{id:"calculate-age"},"Calculate age"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- <birth> = YYYY-MM-DD\nselect timeStampDiff(year, <birth>, curDate()) as age;\n")),(0,l.kt)("h2",{id:"find-in-set"},"Find in set"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n  find_in_set('B', 'A,B,C'), \n  find_in_set('D', 'A,B,C'); \n-- Return 2, 0\n")),(0,l.kt)("h2",{id:"insert-large-number-of-row"},"Insert large number of row"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/optimizing-innodb-transaction-management.html"},"Reference"))),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"START TRANSACTION")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"COMMIT")),(0,l.kt)("h2",{id:"recovery"},"Recovery"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.5/en/forcing-innodb-recovery.html"},"Reference"))),(0,l.kt)("p",null,"Edit option file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\ninnodb_force_recovery = 1\n")),(0,l.kt)("p",null,"If the log loops with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"InnoDB: Waiting for the background threads to start\n")),(0,l.kt)("p",null,"Edit option file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\ninnodb_purge_threads = 0\n")),(0,l.kt)("h3",{id:"check-tables"},"Check tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqlcheck [{ -c | --check }] [-u <user>] [-p] <database> [<table> [...]]\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"check table <table> [, ...]\n")),(0,l.kt)("h3",{id:"repair-tables"},"Repair tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqlcheck [{ -r | --repair }] [-u <user>] [-p] <database> [<table> [...]]\n")),(0,l.kt)("h3",{id:"rebuild--reorganize-index"},"Rebuild / Reorganize index"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"optimize table <table> [, ...];\n")),(0,l.kt)("h2",{id:"config-file"},"Config file"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/option-files.html"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="/etc/my.cnf"',title:'"/etc/my.cnf"'},'# <comment>\n; <comment>\n\n[<group>]\n\n[mysqld]\n# Option for mysqld command\n\n[mysql]\n# Option for mysql command\n\n[mysqladmin]\n# Option for mysqladmin command\n\n[client]\n# Option for client (mysql, mysqldump, ...)\nport=<port>\npassword=<password>\n\n<option>\n# This is equivalent to --<option> on the command line\n\n<option>=<value>\n# This is equivalent to --<option>=<value> on the command line\n\n!include <file>\n# include config file\n\n!includedir <dir>\n# include config file "*.cnf" in <dir>\n')),(0,l.kt)("h2",{id:"help"},"Help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"{ help | ? } [<command>];\n")),(0,l.kt)("h2",{id:"slow-query-log"},"Slow query log"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html"},"Doc"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\nslow-query-log=ON\nlog_output={ FILE | TABLE }\n\n# Log file\n# Default = <data directory>/<host name>-slow.log\nslow_query_log_file=<file>\n\n# Log query longer than <seconds>\n# Default = 10\nlong_query_time=<seconds>\n\n# Log query not using index\n# Default = OFF\nlog-queries-not-using-indexes=ON\n")),(0,l.kt)("p",null,"Set on runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set global slow_query_log = 'ON';\n")),(0,l.kt)("p",null,"Show slow query status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show global variables like 'slow_query%';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+---------------------+-------------------------------------+\n| Variable_name       | Value                               |\n+---------------------+-------------------------------------+\n| slow_query_log      | ON                                  |\n| slow_query_log_file | /var/lib/mysql/<host name>-slow.log |\n+---------------------+-------------------------------------+\n2 rows in set (0.00 sec)\n")),(0,l.kt)("h2",{id:"explain"},"Explain"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/mysql-performance-indexes-explain/"},"Reference"))),(0,l.kt)("p",null,"Optimizing query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"explain { select ... | delete ... | ... }\n")),(0,l.kt)("h2",{id:"create-database"},"Create database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create database <database>;\n")),(0,l.kt)("h2",{id:"drop-database"},"Drop database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"drop database <database>;\n")),(0,l.kt)("h2",{id:"user"},"User"),(0,l.kt)("h3",{id:"create-user"},"Create user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create user '<user>'@'{localhost|<IP address>|*}' identified by '<password>';\n")),(0,l.kt)("h3",{id:"show-user"},"Show user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT user, host FROM mysql.user;\n")),(0,l.kt)("h2",{id:"permission--privilege"},"Permission / Privilege"),(0,l.kt)("h3",{id:"grant-permission"},"Grant permission"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"grant all\n  on {*|<database>}.{*|<table>}\n  to '<user>'@'{localhost|<IP address>|*};\n\nflush privileges;\n")),(0,l.kt)("h3",{id:"show-permission"},"Show permission"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show grants [for <user>];\n")))}c.isMDXComponent=!0}}]);