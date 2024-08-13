"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[4860],{6837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(5893),i=t(1151);const a={sidebar_position:7,title:"Org Branch",tags:["Managment","Git","Releases"]},r=void 0,o={id:"Management/02_02_Git/02_02_07_Org_Branch",title:"Org Branch",description:"The Git Org Branch Strategy, where each branch corresponds to a specific environment (e.g., development, UAT, staging, production), is a useful concept for managing changes and deployments in corporate and large projects. This strategy is common in Salesforce projects due to licensing policies and environment setups that may not allow for full testing environments and limited use of Infrastructure as Code (IaC) approaches.",source:"@site/docs/02_Management/02_02_Git/02_02_07_Org_Branch.md",sourceDirName:"02_Management/02_02_Git",slug:"/Management/02_02_Git/02_02_07_Org_Branch",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_07_Org_Branch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_02_Git/02_02_07_Org_Branch.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Git",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/git"},{label:"Releases",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/releases"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Org Branch",tags:["Managment","Git","Releases"]},sidebar:"tutorialSidebar",previous:{title:"Git Fork Strategy",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_06_Fork_Strategy"},next:{title:"Feature Branch",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_08_Feature_Branch"}},l={},c=[{value:"Implementation Examples",id:"implementation-examples",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Features",id:"features",level:3},{value:"Ideal Project Profile",id:"ideal-project-profile",level:3}];function d(e){const n={h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Git Org Branch Strategy"}),", where each branch corresponds to a specific environment (e.g., development, UAT, staging, production), is a useful concept for managing changes and deployments in corporate and large projects. This strategy is common in Salesforce projects due to licensing policies and environment setups that may not allow for full testing environments and limited use of Infrastructure as Code (IaC) approaches."]}),"\n",(0,s.jsx)(n.h3,{id:"implementation-examples",children:"Implementation Examples"}),"\n",(0,s.jsx)(n.p,{children:"The example illustrates the strategy's implementation in a project that uses the Develop, UAT, and Staging environments."}),"\n",(0,s.jsx)(n.p,{children:"Branches/Environments:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Develop/Integration"}),": A branch for integrating changes developed by developers. This branch is used for merging all features and fixes before they are moved to testing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UAT"}),": A branch for User Acceptance Testing. In this branch, users check functionality and compliance with requirements."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Staging"}),": A branch for final testing before production. Final checks and validations take place here."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Production/Main"}),": The main branch containing stable code ready for production deployment."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(8892).Z+"",width:"1594",height:"850"})}),"\n",(0,s.jsx)(n.h3,{id:"advantages",children:"Advantages"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transparency and Control"}),": Clear separation of branches by environment provides better transparency and control over changes. Teams can more easily track which changes have been deployed to each environment and which are in testing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Risk Reduction"}),": Isolating changes in the corresponding branches minimizes deployment risks. Changes go through several stages of testing (Develop, UAT, Staging, Production) before reaching production."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Improved Testing"}),": Having separate branches for different testing stages allows for more thorough code testing at each stage. UAT and Staging branches provide the opportunity for user and final testing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Flexibility in Change Management"}),": The ability to work independently on different branches allows for more flexible change and release management. This is particularly important for urgent fixes or working on multiple features simultaneously."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Simplification of CI/CD Processes"}),": It is easier to set up and automate continuous integration and deployment processes for each environment."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Branch Management Complexity"}),": Managing a large number of branches requires careful planning and can be labor-intensive, especially for large teams and projects."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Increased Overhead"}),": Regular synchronization and management of multiple branches increase project management overhead. This may require additional efforts to automate processes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Need for Strict Discipline"}),": Successful application of the strategy requires the team to strictly follow established processes and branch management rules. Violating these rules can lead to chaos and code quality issues."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.p,{children:"The main feature of the strategy is that each branch corresponds to a specific environment, simplifying change management, tracking, and CI/CD setup. This approach ensures isolation of changes at each development and testing stage, minimizing risks and improving code stability."}),"\n",(0,s.jsx)(n.h3,{id:"ideal-project-profile",children:"Ideal Project Profile"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Large or Medium Development Team"}),": The strategy is especially useful for projects where multiple teams or a large number of developers work in parallel, allowing them to isolate their changes in corresponding branches and minimize conflicts."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Complex Projects with Long Development Cycles"}),": Ideal for complex projects that require multiple rounds of testing and stabilization at various stages before production deployment."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Projects with High Quality and Security Requirements"}),": For projects where code quality and security are critical (e.g., financial applications or medical software), this strategy allows for multi-stage verification before deployment."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Projects with Multiple Environments (Development, Staging, Production)"}),": For projects developed and tested in multiple environments, it is important to clearly isolate changes and manage code versions."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8892:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/Git_Org_Branch-1247e548a7e121b5fc51e41173600bc4.webp"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);