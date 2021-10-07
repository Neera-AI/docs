"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3901],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7853:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Getting Started",description:"Get started by creating your first instant app"},p=void 0,l={unversionedId:"instant-apps/getting-started",id:"instant-apps/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Get started by creating your first instant app",source:"@site/docs/instant-apps/getting-started.md",sourceDirName:"instant-apps",slug:"/instant-apps/getting-started",permalink:"/instant-apps/getting-started",editUrl:"https://github.com/felvin-search/docs/edit/master/docs/instant-apps/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",description:"Get started by creating your first instant app"},sidebar:"mySidebar",previous:{title:"Profiles",permalink:"/profiles/overview"},next:{title:"Architecture",permalink:"/instant-apps/architecture"}},u=[{value:"Step 1: Search Queries",id:"step-1-search-queries",children:[]},{value:"Step 2: Convert Query into Data",id:"step-2-convert-query-into-data",children:[]},{value:"Step 3: Display the Data",id:"step-3-display-the-data",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Read here to get an ",(0,i.kt)("a",{parentName:"p",href:"/instant-apps/overview"},"overview of Instant Apps"),".")),(0,i.kt)("p",null,"This page explains how you should think about creating a new Instant App. Also check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/instant-apps/blob/master/CONTRIBUTING.md"},"CONTRIBUTING.md")," for more technical complementary instructions."),(0,i.kt)("p",null,"There are three main steps involved in creating a new app"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Target search queries for your app")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Convert the query into some data")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Render the data in a UI component"))),(0,i.kt)("h2",{id:"step-1-search-queries"},"Step 1: Search Queries"),(0,i.kt)("p",null,"Start by thinking about what search queries your app should render for. The most common use case is to narrow down a list of ",(0,i.kt)("strong",{parentName:"p"},"trigger keywords"),"."),(0,i.kt)("p",null,'For example, if you are creating an app which shows weather information, you would want to target search queries which contain "weather" or "temperature" or queries like "will it rain today".\nIf you want to create an app which shows football scores, you may want to target search queries containing names of top leagues or clubs.'),(0,i.kt)("p",null,"Once you have narrowed down the queries, start writing your app's ",(0,i.kt)("inlineCode",{parentName:"p"},"queryToData")," function."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example, this is the definition of the dictionary app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// File: https://github.com/felvin-search/instant-apps/blob/master/src/apps/DictionaryApp.tsx\n\nconst DictionaryApp = {\n  name: "Dictionary App",\n  description: "A simple dictionary app to define an english word.",\n  queryToData,\n  Component,\n};\n\nexport default DictionaryApp;\n'))),(0,i.kt)("h2",{id:"step-2-convert-query-into-data"},"Step 2: Convert Query into Data"),(0,i.kt)("p",null,"Whenever a user searches something on felvin.com, the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryToData")," function of all the instant apps available is called with the query. Hence, the first thing your app should do is return a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Falsy"},"falsy value")," (undefined, null, false) if the query does not match the pattern your app is looking for."),(0,i.kt)("p",null,"Next step, try converting the query into some data which can be displayed on the web. This step can involve making external API requests or using some library to process the query."),(0,i.kt)("p",null,"Once you have done so, return the data."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example, `queryToData` function of the dictionary app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// File: https://github.com/felvin-search/instant-apps/blob/master/src/apps/DictionaryApp.tsx\nasync function queryToData({ query }): {\n  // If the query does not contain the following words, do not trigger the app\n  // `define`, `meaning`\n  let triggered = false;\n  ['define', 'meaning'].forEach((word) => {\n    if (query.toLowerCase().split(\" \").includes(word)) {\n      triggered = true;\n    }\n  });\n\n  if (!triggered) {\n    return undefined;\n  }\n\n  // Extract the word from the query by removing the trigger keyword\n  const cleanedQuery = cleanQuery(query);\n  const response = await fetch(\n    `https://api.dictionaryapi.dev/api/v2/entries/en_US/${cleanedQuery}`\n  );\n  const data = await response.json();\n  if (data && Array.isArray(data) && data.length > 0) {\n    return data[0];\n  }\n}\n"))),(0,i.kt)("h2",{id:"step-3-display-the-data"},"Step 3: Display the Data"),(0,i.kt)("p",null,"Felvin takes the data returned by your ",(0,i.kt)("inlineCode",{parentName:"p"},"queryToData")," function and passes it as a React prop to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Component")," of your app."),(0,i.kt)("p",null,"Use a simple JSX syntax or return a complex React app to render the data, however you want to!"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example, `Components` of the simple dictionary app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'// File: https://github.com/felvin-search/instant-apps/blob/master/src/apps/DictionaryApp.tsx\n\n// Another functional component used in main Component of the app\nfunction Definition(props) {\n  const definition = props.data;\n  return (\n    <DefinitionContainer>\n      <div>{definition.definition}</div>\n      {definition.synonyms && (\n        <div>\n          Synonyms: &thinsp;\n          <em>{definition.synonyms.join(", ")}</em>\n        </div>\n      )}\n    </DefinitionContainer>\n  );\n}\n\n// The UI logic of the app\nfunction Component(props) {\n  const data = props.data;\n\n  return (\n    <div>\n      <h1>{data.word}</h1>\n      {data.meanings.map((m, index) => {\n        return (\n          <div key={index}>\n            <em>{m.partOfSpeech}</em>\n            {m.definitions.map((d) => (\n              <Definition data={d} key={d} />\n            ))}\n          </div>\n        );\n      })}\n    </div>\n  );\n}\n'))),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/instant-apps/overview"},"Overview of instant apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/felvin-search/instant-apps/blob/master/CONTRIBUTING.md"},"Contributing guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/instant-apps/api-spec"},"API Spec of an instant app"))))}d.isMDXComponent=!0}}]);