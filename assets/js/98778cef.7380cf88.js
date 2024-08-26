"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[6563],{4855:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(5893),r=s(1151);const i={sidebar_position:5,title:"Parallel Releases",tags:["Managment","Git","Releases"]},t=void 0,l={id:"Management/02_02_Git/02_02_05_Parallel_Releases",title:"Parallel Releases",description:"The Parallel Release Git strategy allows managing multiple versions of a product simultaneously. Separate release branches (release-x.x) are created for each release, enabling the preparation and testing of different product versions in parallel. Feature branches can be created from release-x.x branches, which serve as develop branches for the corresponding releases. This approach helps isolate changes and manage multiple product versions simultaneously, which is especially useful for projects with long development cycles and support for older versions. However, it requires strict branch management and synchronization of changes. An important feature is the designation of major and minor releases for their sequential synchronization.",source:"@site/docs/02_Management/02_02_Git/02_02_05_Parallel_Releases.md",sourceDirName:"02_Management/02_02_Git",slug:"/Management/02_02_Git/02_02_05_Parallel_Releases",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_05_Parallel_Releases",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_02_Git/02_02_05_Parallel_Releases.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Git",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/git"},{label:"Releases",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/releases"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Parallel Releases",tags:["Managment","Git","Releases"]},sidebar:"tutorialSidebar",previous:{title:"Copado Branching Strategy",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_04_Org_Branch_Copado"},next:{title:"Git Fork Strategy",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_06_Fork_Strategy"}},o={},c=[{value:"Implementation Examples",id:"implementation-examples",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Features",id:"features",level:3},{value:"Ideal Project Profile",id:"ideal-project-profile",level:3}];function d(e){const n={code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The Parallel Release Git strategy allows managing multiple versions of a product simultaneously. Separate release branches (",(0,a.jsx)(n.code,{children:"release-x.x"}),") are created for each release, enabling the preparation and testing of different product versions in parallel. Feature branches can be created from ",(0,a.jsx)(n.code,{children:"release-x.x"})," branches, which serve as ",(0,a.jsx)(n.code,{children:"develop"})," branches for the corresponding releases. This approach helps isolate changes and manage multiple product versions simultaneously, which is especially useful for projects with long development cycles and support for older versions. However, it requires strict branch management and synchronization of changes. An important feature is the designation of major and minor releases for their sequential synchronization."]}),"\n",(0,a.jsx)(n.h3,{id:"implementation-examples",children:"Implementation Examples"}),"\n",(0,a.jsx)(n.p,{children:"The diagram shows two possible implementations of the strategy. Tags display the versioning example of the release on production: major release/minor release/fix."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The first diagram shows an example with three parallel releases. In this implementation, the release order is pre-agreed, but release development can take a long time."}),"\n",(0,a.jsx)(n.li,{children:"The second diagram shows an example with a minor and a major release. The minor release is more frequently deployed to production. The major release can take a long time."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(1704).Z+"",width:"1404",height:"1534"})}),"\n",(0,a.jsx)(n.h3,{id:"advantages",children:"Advantages"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Isolation of Changes"}),": Each product version is developed in its separate release branch, minimizing the risk of conflicts and simplifying testing."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Support for Multiple Versions"}),": The strategy allows simultaneous support and development of multiple product versions, which is especially useful for long-term projects and products with multiple active versions."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Flexibility in Release Management"}),": The ability to work on different releases in parallel allows for more flexible responses to changing requirements and priorities."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Simplification of the Release Cycle"}),": Separating branches for different releases simplifies the preparation and testing process before release."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Complexity of Branch Management"}),": Maintaining a large number of branches requires careful planning and is a labor-intensive task."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Increased Risk of Conflicts"}),": Although isolation of changes minimizes conflicts, synchronization and frequent merges between branches can still lead to conflicts that require resolution."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Increased Overhead"}),": Managing multiple release branches may require more resources and time for synchronization and testing."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Need for Strict Discipline"}),": Successful application of the strategy requires the team to strictly follow established processes and branch management rules."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Potential Complexity in Testing"}),": Testing changes in multiple parallel branches can be challenging and require additional efforts to ensure code quality."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,a.jsx)(n.p,{children:"A key feature of this strategy is the ability to develop different functionalities in parallel, allowing teams to work on different versions of the product simultaneously. This enables parallel work for a large number of teams and developers, which is especially useful for large and complex projects. Regular synchronizations and merges between branches are necessary to ensure code consistency. This requires a well-constructed release architecture and synchronization process automation. In such strategies, it is important to consider the architectural features of the solutions and ensure that synchronization and merging processes do not disrupt other teams' work. It is also necessary to implement tools for automation and monitoring to simplify the management of multiple parallel branches and minimize the risk of conflicts and errors."}),"\n",(0,a.jsx)(n.h3,{id:"ideal-project-profile",children:"Ideal Project Profile"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Large or Medium-Sized Development Team"}),": The Parallel Release strategy is especially useful for projects where multiple teams or a large number of developers are working, as it allows them to work on different features and releases simultaneously without interfering with each other."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Complex Projects with Long Development Cycles"}),": Projects that require support and development of multiple product versions simultaneously are ideal for this strategy. This includes products with long-term support, where updates and fixes for older versions need to be released while developing new features for future releases."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"High Requirements for Code Quality and Stability"}),": In projects with parallel releases, it is possible to control code quality more carefully by testing and stabilizing each release branch before merging it into the main branch. This is especially important for projects where code stability and quality are critical."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Complex Infrastructure and Multiple Environments"}),": Projects with multiple environments (development, staging, production) benefit from using parallel releases, as this allows managing different product versions and testing them in various environments without interfering with the main development process."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Frequent Releases and Updates"}),": Projects that require regular and frequent releases can effectively use this strategy to manage multiple parallel branches, allowing faster responses to changes and release updates."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Intensive Integration with CI/CD"}),": Projects that actively use continuous integration and deployment can easily integrate synchronization and testing processes for multiple branches, simplifying the management of parallel releases and improving automation."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1704:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/Git_Parallel_Releases-bf3943a2e0ed1392dff4f5eaba3ae9a2.webp"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var a=s(7294);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);