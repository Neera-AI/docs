"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5426],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4427:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Technical Overview",description:"Technical overview of felvin.com, deplyoment setup and some how-to guides"},c=void 0,s={unversionedId:"team-docs/felvin.com/overview",id:"team-docs/felvin.com/overview",isDocsHomePage:!1,title:"Technical Overview",description:"Technical overview of felvin.com, deplyoment setup and some how-to guides",source:"@site/docs/team-docs/felvin.com/overview.md",sourceDirName:"team-docs/felvin.com",slug:"/team-docs/felvin.com/overview",permalink:"/team-docs/felvin.com/overview",editUrl:"https://github.com/felvin-search/docs/edit/master/docs/team-docs/felvin.com/overview.md",tags:[],version:"current",frontMatter:{title:"Technical Overview",description:"Technical overview of felvin.com, deplyoment setup and some how-to guides"},sidebar:"mySidebar",previous:{title:"Snippet Apps",permalink:"/rfcs/snippet_apps"},next:{title:"Release flow",permalink:"/team-docs/felvin.com/release-flow"}},p=[{value:"Kubernetes resources details",id:"kubernetes-resources-details",children:[{value:"Cluster",id:"cluster",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Service",id:"service",children:[]},{value:"Cheatsheet",id:"cheatsheet",children:[]}]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are using Kubernetes to deploy felvin.com website and related services. If you aren't super familiar with Kubernetes, go through their\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics"},"Intro to K8S basic tutorial")," to understand concepts like Cluster, Deployment, Service, Pods, etc."),(0,i.kt)("h2",{id:"kubernetes-resources-details"},"Kubernetes resources details"),(0,i.kt)("h3",{id:"cluster"},"Cluster"),(0,i.kt)("p",null,"We are running one Kubernetes ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/"},"cluster")," on ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"Amazon Elastic Kubernetes Service (EKS)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"eksctl get cluster\n\nNAME        REGION      EKSCTL CREATED\nfelvin-cluster  us-east-1   True\n")),(0,i.kt)("p",null,"We are using EC2 instances as the Nodes of the cluster."),(0,i.kt)("h3",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"We have created one Kubernetes deployment which takes the container for felvin.com and deploys the pods using the specified container image."),(0,i.kt)("p",null,"Source ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml"},"https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml")),(0,i.kt)("p",null,"To make a change to this deployment, update the YAML file and run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl apply -f deploy/deployment-production.yaml\n")),(0,i.kt)("h3",{id:"service"},"Service"),(0,i.kt)("p",null,"We have one ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/"},"LoadBalancer service")," which is exposed publicly and redirects traffic to felvin.com to the pods matching the selector ",(0,i.kt)("inlineCode",{parentName:"p"},"app=felvin-search"),"."),(0,i.kt)("p",null,"Source ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/felvin.com/blob/master/deploy/service-felvin-search.yaml"},"https://github.com/felvin-search/felvin.com/blob/master/deploy/service-felvin-search.yaml")),(0,i.kt)("p",null,"A service is an abstraction over pods and can be used to manage internal private microservices or public services."),(0,i.kt)("h3",{id:"cheatsheet"},"Cheatsheet"),(0,i.kt)("p",null,"Some helpful commands for our purpose. Also see ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},"https://kubernetes.io/docs/reference/kubectl/cheatsheet/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get all --all-namespaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl apply -f <yaml file>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl delete -f <yaml file>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get events --sort-by='.lastTimestamp' -A")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get events --sort-by='.metadata.creationTimestamp' -A")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl logs -f deployment/felvin-search-prod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get svc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get <any resource> -o yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eksctl get cluster"))))}m.isMDXComponent=!0}}]);