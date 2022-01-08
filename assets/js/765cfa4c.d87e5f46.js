"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4220],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="AWS Deployment in brief",p={unversionedId:"unpublished/misc/aws_deployment",id:"unpublished/misc/aws_deployment",isDocsHomePage:!1,title:"AWS Deployment in brief",description:"This document contains a brief explanation on how we have setup one-click deployment. By one-click deployment, we mean by just making a triggering an action on Github like pushing to master/Pull Request(making a release in our case), the changes are deployed without any human action. Many of the items used from the AWS menu are explained below. Before that please refer the basics of Virtual Private Cloud and Subnets explained here.",source:"@site/docs/unpublished/misc/aws_deployment.md",sourceDirName:"unpublished/misc",slug:"/unpublished/misc/aws_deployment",permalink:"/unpublished/misc/aws_deployment",editUrl:"https://github.com/felvin-search/docs/edit/master/docs/unpublished/misc/aws_deployment.md",tags:[],version:"current",frontMatter:{}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-deployment-in-brief"},"AWS Deployment in brief"),(0,o.kt)("p",null,"This document contains a brief explanation on how we have setup one-click deployment. By one-click deployment, we mean by just making a triggering an action on Github like pushing to master/Pull Request(making a ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," in our case), the changes are deployed without any human action. Many of the items used from the AWS menu are explained below. Before that please refer the basics of Virtual Private Cloud and Subnets explained ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#vpc-subnet-basics"},"here"),". "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("u",null,"Docker")),": "),(0,o.kt)("p",{parentName:"li"},"Both the frontend and backend are containerized in a node-14 base image, with a Dockerfile akin to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rakaar/dockerize-react-and-express-app/blob/master/Dockerfile"},"one"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("u",null,"Github Actions")),": "),(0,o.kt)("p",{parentName:"li"},"On release, a Github Action is triggered. The YAML file action has been inspired from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lttkgp/C-3PO/blob/master/.github/workflows/deploy.yml"},"C-3PO project from LTTKGP"),". This Actions in brief do the following (The AWS terms will be explained soon)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Logging into AWS using the secrets configured via Github Secrets"),(0,o.kt)("li",{parentName:"ul"},"Builds and pushes the image to ",(0,o.kt)("strong",{parentName:"li"},"Elastic Container Registry(ECR)")),(0,o.kt)("li",{parentName:"ul"},"Deploy the image via ",(0,o.kt)("strong",{parentName:"li"},"Elastic Container Service(ECS) Fargate")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("u",null,"**Elastic Container Registry(ECR)**"),":",(0,o.kt)("p",{parentName:"li"},"AWS Service where you can store Docker Container Images. The Docker images are stored in a private repository. To look at the images in AWS, visit ECR by searching in the console. Click on the repository name. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("u",null,"Elastic Container Service(ECS) Fargate")),": "),(0,o.kt)("p",{parentName:"li"},"Once the latest image is stored in the ECR, they need to be deployed. A service by name ",(0,o.kt)("strong",{parentName:"p"},"ECS Fargate")," handles this job of deploying the docker image. ECS Fargate is configured using a JSON file present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," folder. The JSON is obtained from the AWS Console(Instructions to obtain JSON from AWS console can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/troubleshooting-and-how-tos/getting-task-def.md"),"). "),(0,o.kt)("p",{parentName:"li"},"The following are 4 important things related to ECS Fargate. The below diagram will help you get an idea of different layers of Fargate. To setup a ECS Fargate service, we need to configure the below four things."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://imgur.com/clXWtjU.png",alt:null})))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Container Defintion"),": Details of the Docker container. We need to specify the docker Image URI, which is already existing in ECR.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Task definition"),": A task definition is the recipe for running containers. It includes the image to run, constraints on CPU and Memory, Ports to be mapped externally, Environment variables to be set and so on. We select networking mode as awsvpc, since we're using Fargate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Service"),":  A Service takes a task definition and adds more details (Such as the VPC, subnets, ports, load balancers) and schedules it to be run. It also controls how many tasks will exist. The service can be of Fargate type(like ours) or EC2 type  or External type. We are using Fargate Service because on our behalf it defines resources, manages and runs the resources. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://imgur.com/XJhTotJ.png",alt:null})),(0,o.kt)("p",{parentName:"li"}," Here, we have only one Service, and we've set that service to spawn only 1 task. Our service has a Load Balancer. And the Load Balancer has a target group(Load Balancer and Target Group will be explained soon)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cluster"),": A Cluster is a logical collection of services."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("u",null,"Load Balancer and Target Groups")),": "),(0,o.kt)("p",{parentName:"li"},"After every release, Fargate creates a new task, which has a new IP Address. But to configure Domain name, we need to have a single domain address. We can't keep changing Domain Name configuration after every release."),(0,o.kt)("p",{parentName:"li"},"As per ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/ecs-fargate-static-elastic-ip-address/"},"AWS Docs"),", a Load Balancer is recommended to solve the above issue. The steps mentioned in the doc were followed to setup a Load Balancer.\nThe Load balancer is provided a target group, which is aware of the IP address where the image is deployed. After a new deployment, Fargate registers the new Task's IP Address with the Target Group."))))}m.isMDXComponent=!0}}]);