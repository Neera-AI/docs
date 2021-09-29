"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3771],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return p}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(o),p=r,h=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return o?n.createElement(h,u(u({ref:t},s),{},{components:o})):n.createElement(h,u({ref:t},s))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,u=new Array(i);u[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var l=2;l<i;l++)u[l]=o[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1014:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),u=["components"],a={},c="RFC",l={unversionedId:"rfcs/README",id:"rfcs/README",isDocsHomePage:!1,title:"RFC",description:"Use RFC to:",source:"@site/docs/rfcs/README.md",sourceDirName:"rfcs",slug:"/rfcs/README",permalink:"/rfcs/README",editUrl:"https://github.com/felvin-search/docs/edit/master/docs/rfcs/README.md",tags:[],version:"current",frontMatter:{}},s=[{value:"How big should be the RFC document?",id:"how-big-should-be-the-rfc-document",children:[]},{value:"How often should I write RFC?",id:"how-often-should-i-write-rfc",children:[]},{value:"Should I wait for the RFC process to be completed before I code things out?",id:"should-i-wait-for-the-rfc-process-to-be-completed-before-i-code-things-out",children:[]}],d={toc:s};function f(e){var t=e.components,o=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rfc"},"RFC"),(0,i.kt)("h1",{id:"good-ways-to-use-rfc"},"Good ways to use RFC"),(0,i.kt)("p",null,"Use RFC to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clarify your thinking."),(0,i.kt)("li",{parentName:"ul"},"Communicate what you want to do, with the team and the outside world."),(0,i.kt)("li",{parentName:"ul"},"Invite comments on how to do it better.")),(0,i.kt)("p",null,"Tips:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there is something specific you want people to comment on, mention it explicity."),(0,i.kt)("li",{parentName:"ul"},'Explaining "What are we doing?", "Why are we doing it?" and then "How?" is a good structure. Though feel free to use your own.')),(0,i.kt)("h1",{id:"not-so-good-uses-of-rfc"},"Not so good uses of RFC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use RFC to build concensus. It's good if people are onboard, its okay if they are not."),(0,i.kt)("li",{parentName:"ul"},"Use RFC to overthink. Details are important, but you don't know which ones. A lot of times you'll know what's important and what's not only after you code it and ship it to the customer. So think, but don't overthink.\nWhen in doubt, use your best judgement and move forward. You are part of the team, we trust you!")),(0,i.kt)("h1",{id:"faq"},"FAQ?"),(0,i.kt)("h2",{id:"how-big-should-be-the-rfc-document"},"How big should be the RFC document?"),(0,i.kt)("p",null,"As long as it needs to be."),(0,i.kt)("h2",{id:"how-often-should-i-write-rfc"},"How often should I write RFC?"),(0,i.kt)("p",null,"Do it often, its good to think about what are you doing before you do it."),(0,i.kt)("h2",{id:"should-i-wait-for-the-rfc-process-to-be-completed-before-i-code-things-out"},"Should I wait for the RFC process to be completed before I code things out?"),(0,i.kt)("p",null,"No. Do it as soon as you think its time."))}f.isMDXComponent=!0}}]);