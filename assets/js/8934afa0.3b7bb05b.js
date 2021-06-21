(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2264],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},269:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),o=["components"],s={},i={unversionedId:"Note/MySQL",id:"Note/MySQL",isDocsHomePage:!1,title:"MySQL",description:"Export / Dump",source:"@site/docs/Note/MySQL.md",sourceDirName:"Note",slug:"/Note/MySQL",permalink:"/note/Note/MySQL",editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/MySQL.md",version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Mobile",permalink:"/note/Note/Mobile"},next:{title:"Nginx",permalink:"/note/Note/Nginx"}},p=[{value:"Export / Dump",id:"export--dump",children:[]},{value:"Import",id:"import",children:[]},{value:"Show tables size",id:"show-tables-size",children:[]},{value:"Calculate age",id:"calculate-age",children:[]},{value:"Find in set",id:"find-in-set",children:[]},{value:"Insert large number of row",id:"insert-large-number-of-row",children:[]},{value:"Recovery",id:"recovery",children:[{value:"Check tables",id:"check-tables",children:[]},{value:"Repair tables",id:"repair-tables",children:[]},{value:"Rebuild / Reorganize index",id:"rebuild--reorganize-index",children:[]}]},{value:"Config file",id:"config-file",children:[]},{value:"Help",id:"help",children:[]},{value:"Slow query log",id:"slow-query-log",children:[]},{value:"Explain",id:"explain",children:[]},{value:"Create database",id:"create-database",children:[]},{value:"Drop database",id:"drop-database",children:[]},{value:"User",id:"user",children:[{value:"Create user",id:"create-user",children:[]},{value:"Grant permission",id:"grant-permission",children:[]}]}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"export--dump"},"Export / Dump"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html"},"Reference")," / ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/mysqldump-stored-programs.html"},"Reference"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"PowerShell output redirect ( ",(0,l.kt)("inlineCode",{parentName:"p"},"mysqldump > file.sql")," ) will use UTF-16, MySQL cannot import UTF-16")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump [-u <user>] [-p]\n    { --all-databases | <database> [<table> [...]] }\n    [ --events | --skip-events ]\n    [ --routines | --skip-routines ]\n    [ --triggers | --skip-triggers ]\n    --result-file=<file.sql>\n")),(0,l.kt)("p",null,"Export with ",(0,l.kt)("inlineCode",{parentName:"p"},"gzip")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump <database> | gzip [-9] > <file.sql.gz>\n")),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html"},"Reference")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql [-u <user>] [-p] <database> < <file.sql>\n"))),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> use <database>;\nmysql> source <file>;\n")),(0,l.kt)("h2",{id:"show-tables-size"},"Show tables size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    table_schema as `Database`, \n    table_name as `Table`, \n    round(((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024), 2) `Size (MiB)` \nfrom INFORMATION_SCHEMA.TABLES;\n")),(0,l.kt)("h2",{id:"calculate-age"},"Calculate age"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- <birth> = YYYY-MM-DD\nselect timeStampDiff(year, <birth>, curDate()) as age;\n")),(0,l.kt)("h2",{id:"find-in-set"},"Find in set"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n  find_in_set('B', 'A,B,C'), \n  find_in_set('D', 'A,B,C'); \n-- Return 2, 0\n")),(0,l.kt)("h2",{id:"insert-large-number-of-row"},"Insert large number of row"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/optimizing-innodb-transaction-management.html"},"Reference"))),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"START TRANSACTION")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"COMMIT")),(0,l.kt)("h2",{id:"recovery"},"Recovery"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.5/en/forcing-innodb-recovery.html"},"Reference"))),(0,l.kt)("p",null,"Edit option file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\ninnodb_force_recovery = 1\n")),(0,l.kt)("p",null,"If the log loops with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"InnoDB: Waiting for the background threads to start\n")),(0,l.kt)("p",null,"Edit option file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\ninnodb_purge_threads = 0\n")),(0,l.kt)("h3",{id:"check-tables"},"Check tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqlcheck [{ -c | --check }] [-u <user>] [-p] <database> [<table> [...]]\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"check table <table> [, ...]\n")),(0,l.kt)("h3",{id:"repair-tables"},"Repair tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqlcheck [{ -r | --repair }] [-u <user>] [-p] <database> [<table> [...]]\n")),(0,l.kt)("h3",{id:"rebuild--reorganize-index"},"Rebuild / Reorganize index"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"optimize table <table> [, ...];\n")),(0,l.kt)("h2",{id:"config-file"},"Config file"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/option-files.html"},"Reference"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/etc/my.cnf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'# <comment>\n; <comment>\n\n[<group>]\n\n[mysqld]\n# Option for mysqld command\n\n[mysql]\n# Option for mysql command\n\n[mysqladmin]\n# Option for mysqladmin command\n\n[client]\n# Option for client (mysql, mysqldump, ...)\nport=<port>\npassword=<password>\n\n<option>\n# This is equivalent to --<option> on the command line\n\n<option>=<value>\n# This is equivalent to --<option>=<value> on the command line\n\n!include <file>\n# include config file\n\n!includedir <dir>\n# include config file "*.cnf" in <dir>\n')),(0,l.kt)("h2",{id:"help"},"Help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> { help | ? } [<command>];\n")),(0,l.kt)("h2",{id:"slow-query-log"},"Slow query log"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_slow_query_log"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\nslow-query-log=ON\nlog_output={ FILE | TABLE }\n\n# Default = <data directory>/<host name>-slow.log\nslow_query_log_file=<file>\n\n# Log query longer than <seconds>, default = 10\nlong_query_time=<seconds>\n\n# Log query not using index\nlog-queries-not-using-indexes=ON\n")),(0,l.kt)("p",null,"Set on runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> set global slow_query_log = 'ON';\n")),(0,l.kt)("p",null,"Show slow query status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show global variables like 'slow_query%';\n+---------------------+-------------------------------------+\n| Variable_name       | Value                               |\n+---------------------+-------------------------------------+\n| slow_query_log      | ON                                  |\n| slow_query_log_file | /var/lib/mysql/<host name>-slow.log |\n+---------------------+-------------------------------------+\n2 rows in set (0.00 sec)\n")),(0,l.kt)("h2",{id:"explain"},"Explain"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/mysql-performance-indexes-explain/"},"Reference"))),(0,l.kt)("p",null,"Optimizing query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> explain { select ... | delete ... | ... }\n")),(0,l.kt)("h2",{id:"create-database"},"Create database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> create database <database>;\n")),(0,l.kt)("h2",{id:"drop-database"},"Drop database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> drop database <database>;\n")),(0,l.kt)("h2",{id:"user"},"User"),(0,l.kt)("h3",{id:"create-user"},"Create user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create user '<user>'@'{localhost|<IP address>|*}' identified by '<password>';\n")),(0,l.kt)("h3",{id:"grant-permission"},"Grant permission"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"grant all\n  on {*|<database>}.{*|<table>}\n  to '<user>'@'{localhost|<IP address>|*};\n\nflush privileges;\n")))}c.isMDXComponent=!0}}]);