"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5541],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8630:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={},u="What does an ideal pull request looks like?",s={unversionedId:"unpublished/misc/what-does-an-ideal-pull-request-looks-like",id:"unpublished/misc/what-does-an-ideal-pull-request-looks-like",isDocsHomePage:!1,title:"What does an ideal pull request looks like?",description:'{% hint style="info" %}',source:"@site/docs/unpublished/misc/what-does-an-ideal-pull-request-looks-like.md",sourceDirName:"unpublished/misc",slug:"/unpublished/misc/what-does-an-ideal-pull-request-looks-like",permalink:"/unpublished/misc/what-does-an-ideal-pull-request-looks-like",editUrl:"https://github.com/felvin-search/docs/edit/master/docs/unpublished/misc/what-does-an-ideal-pull-request-looks-like.md",tags:[],version:"current",frontMatter:{}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"what-does-an-ideal-pull-request-looks-like"},"What does an ideal pull request looks like?"),(0,l.kt)("h2",{id:""}),(0,l.kt)("p",null,'{% hint style="info" %}\nCommon sense trumps all guidelines. If a guideline is constantly becoming a trouble in getting things done. ',(0,l.kt)("strong",{parentName:"p"},"Call it out"),", then skip the guideline.\n{% endhint %}"),(0,l.kt)("p",null,'An ideal pull request is "atomic":'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A pull request should only do one thing, and shouldn't mix two changes where they don't belong together."),(0,l.kt)("li",{parentName:"ul"},"If the pull request is structured well, it is easy to review and merge it independently of any other pull request in the system."),(0,l.kt)("li",{parentName:"ul"},"We use ",(0,l.kt)("a",{parentName:"li",href:"https://github.blog/2016-04-01-squash-your-commits/"},'"Squash and Merge"')," in github pull requests, this creates a single commit for each pull request. This means we can undo changes of a bad merge with a single git revert."),(0,l.kt)("li",{parentName:"ul"},"If you commits are structured well, it is easy to reorder commits and revert commits without worrying about conflicts.")),(0,l.kt)("p",null,"And ideal pull request explain what are you doing and why are you doing it:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Clearly describe what are you trying to do with the pull request. Add a line a or two about why are you doing it."),(0,l.kt)("li",{parentName:"ul"},"Add a screenshot wherever applicable, especially when the change impact how things look."),(0,l.kt)("li",{parentName:"ul"},"Make it easy to test your work. If required instructions on how to run the code and how to see the expected changes."),(0,l.kt)("li",{parentName:"ul"},"NOTE: It is not necessary for you to wait for someone else to approve your pull request before you can merge it. Though by reading your pull request, everyone should be able know what's happening.")),(0,l.kt)("p",null,"Non requirements from a pull request:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'A pull request need not be correct. If it is "wrong", at max, we will call it out and not merge it. You will learn something and we will learn something.'),(0,l.kt)("li",{parentName:"ul"},'The work doesn\'t need to be "complete" to be mergable.'),(0,l.kt)("li",{parentName:"ul"},"The work doesn't have to be clean before you submit a pull request. Bad variable names, dangling comments, bad formating. They are okay while submitting a PR, though try to clean thing up before you merge the PR.")),(0,l.kt)("p",null,"Examples of good PRs:"),(0,l.kt)("p",null,"TODO"))}d.isMDXComponent=!0}}]);