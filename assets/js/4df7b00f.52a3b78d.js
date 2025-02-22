"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[524],{808:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var i=s(5893),a=s(1151);const l={sidebar_position:5,title:"Big Bang",tags:["Managment","Change"]},r=void 0,t={id:"Management/02_04_Delivery_Strategies/02_04_05_Big_Bang",title:"Big Bang",description:"Big Bang Deployment is a deployment strategy where all changes are implemented simultaneously in the target environment. Unlike Phased rollouts or Dark Launches, Big Bang Deployment involves making all new functionalities available to all users at once. This approach carries a high level of risk, as all changes become active simultaneously, and rolling back changes is typically more challenging.",source:"@site/docs/02_Management/02_04_Delivery_Strategies/02_04_05_Big_Bang.md",sourceDirName:"02_Management/02_04_Delivery_Strategies",slug:"/Management/02_04_Delivery_Strategies/02_04_05_Big_Bang",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_04_Delivery_Strategies/02_04_05_Big_Bang",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_04_Delivery_Strategies/02_04_05_Big_Bang.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Change",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/change"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Big Bang",tags:["Managment","Change"]},sidebar:"tutorialSidebar",previous:{title:"Blue-Green",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_04_Delivery_Strategies/02_04_04_Blue_Green"},next:{title:"A/B Testing",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_04_Delivery_Strategies/02_04_06_A_B_Testing"}},o={},d=[{value:"<strong>Features of Big Bang Deployment</strong>",id:"features-of-big-bang-deployment",level:2},{value:"<strong>Key Points for Managing Big Bang Deployment</strong>",id:"key-points-for-managing-big-bang-deployment",level:2},{value:"Advantages and Disadvantages of Big Bang Deployment",id:"advantages-and-disadvantages-of-big-bang-deployment",level:2},{value:"Advantages:",id:"advantages",level:3},{value:"Disadvantages:",id:"disadvantages",level:3},{value:"When is Big Bang Deployment Applicable?",id:"when-is-big-bang-deployment-applicable",level:2},{value:"1. Minimal Integration Dependencies",id:"1-minimal-integration-dependencies",level:3},{value:"2. Limited Feasibility for Phased Rollouts:",id:"2-limited-feasibility-for-phased-rollouts",level:3},{value:"3. Organizations with Low Change Criticality:",id:"3-organizations-with-low-change-criticality",level:3}];function c(e){const n={a:"a",br:"br",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Big Bang Deployment"})," is a deployment strategy where all changes are implemented simultaneously in the target environment. Unlike ",(0,i.jsx)(n.a,{href:"/SFITDelivery-KnowledgeHub/docs/Management/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts",children:"Phased rollouts"})," or ",(0,i.jsx)(n.a,{href:"/SFITDelivery-KnowledgeHub/docs/Management/02_04_Delivery_Strategies/02_04_03_Dark_Launches",children:"Dark Launches"}),", Big Bang Deployment involves making all new functionalities available to all users at once. This approach carries a high level of risk, as all changes become active simultaneously, and rolling back changes is typically more challenging."]}),"\n",(0,i.jsx)(n.p,{children:"In Salesforce, this approach is often used due to its simplicity."}),"\n",(0,i.jsx)(n.h2,{id:"features-of-big-bang-deployment",children:(0,i.jsx)(n.strong,{children:"Features of Big Bang Deployment"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"One-time Update:"}),(0,i.jsx)(n.br,{}),"\n","All changes are deployed simultaneously to the target environment (e.g., Production)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Minimal Testing in Production:"}),(0,i.jsx)(n.br,{}),"\n","Unlike ",(0,i.jsx)(n.strong,{children:"Phased rollouts"})," or ",(0,i.jsx)(n.strong,{children:"Dark Launches"}),", new functionality is immediately available to all users, making live testing impossible before the release. As a result, releases are often scheduled during non-working hours for the users."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Requires Careful Planning:"}),(0,i.jsx)(n.br,{}),"\n","The lack of a phased rollback option necessitates a high level of preparedness for potential issues. This strategy requires a deep understanding of dependencies and potential risks."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dependence on the Target Environment:"}),(0,i.jsx)(n.br,{}),"\n","The success of Big Bang Deployment directly depends on the quality of testing in pre-production environments (e.g., Full Sandbox in Salesforce)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Need for a Robust HotFix Process:"}),(0,i.jsx)(n.br,{}),"\n","Due to the complexity of rolling back changes after deployment, a pre-developed and tested process for quick fixes is essential."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"key-points-for-managing-big-bang-deployment",children:(0,i.jsx)(n.strong,{children:"Key Points for Managing Big Bang Deployment"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Thorough Preparation and Planning"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The strategy requires a detailed deployment plan, including steps, timelines, and responsible individuals."}),"\n",(0,i.jsx)(n.li,{children:"All changes should be thoroughly tested in environments that closely resemble Production."}),"\n",(0,i.jsx)(n.li,{children:"Deployment and testing processes on the target environment must be well-prepared."}),"\n",(0,i.jsx)(n.li,{children:"There must be readiness for unforeseen issues, including a mechanism for emergency fixes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"User Training"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users must be prepared for the new changes."}),"\n",(0,i.jsx)(n.li,{children:"Training sessions and the creation of instructional materials, including user guides for new features, are essential parts of the release."}),"\n",(0,i.jsx)(n.li,{children:"Preferably, users should be trained in separate environments before the production release."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backup Plan (Rollback Plan)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A rollback strategy for critical errors post-deployment is necessary (the release team must have the tools and processes for rolling back changes or implementing HotFixes)."}),"\n",(0,i.jsx)(n.li,{children:"The rollback process must be carefully planned, accounting for risks and required resources."}),"\n",(0,i.jsx)(n.li,{children:"It is advisable to conduct drills of the rollback strategy to ensure staff readiness and process optimization."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Communication"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All personnel involved in deployment, testing, and support should be identified and briefed."}),"\n",(0,i.jsx)(n.li,{children:"The strategy requires establishing a channel for addressing issues promptly after release."}),"\n",(0,i.jsx)(n.li,{children:"Stakeholder communication about the release preparations is crucial, with particular emphasis on a pre-determined group during the deployment process."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Post-Deployment Monitoring"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A monitoring system to track performance and stability is critical, as is automated testing during Big Bang deployment."}),"\n",(0,i.jsx)(n.li,{children:"Quick-response channels for user-reported issues and feedback should be in place to address errors swiftly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"advantages-and-disadvantages-of-big-bang-deployment",children:"Advantages and Disadvantages of Big Bang Deployment"}),"\n",(0,i.jsx)(n.h3,{id:"advantages",children:"Advantages:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Quick Deployment:"}),(0,i.jsx)(n.br,{}),"\n","All changes are implemented at once, reducing the time needed for the deployment process, which is particularly useful for urgent updates."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Unified Update for All Users:"}),(0,i.jsx)(n.br,{}),"\n","No need to manage multiple versions of the system or isolated environments."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Simplified Management:"}),(0,i.jsx)(n.br,{}),"\n","Fewer steps and phases compared to phased rollouts or Dark Launches."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"disadvantages",children:"Disadvantages:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"High Risk:"}),(0,i.jsx)(n.br,{}),"\n","Errors discovered post-release can impact all users and the entire organization."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Rollback Complexity:"}),(0,i.jsx)(n.br,{}),"\n","In case of critical issues, rolling back changes can be lengthy and labor-intensive for large-scale updates."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Demanding Preparation:"}),(0,i.jsx)(n.br,{}),"\n","Extensive testing and preparation are required to avoid failures."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Increased Load on Support Teams:"}),(0,i.jsx)(n.br,{}),"\n","After deployment, the support team may face heavy workloads managing user requests and issues."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"when-is-big-bang-deployment-applicable",children:"When is Big Bang Deployment Applicable?"}),"\n",(0,i.jsx)(n.h3,{id:"1-minimal-integration-dependencies",children:"1. Minimal Integration Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When changes minimally affect integrations with other systems."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-limited-feasibility-for-phased-rollouts",children:"2. Limited Feasibility for Phased Rollouts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In cases where the architecture or business processes do not support phased rollouts or Dark Launches."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-organizations-with-low-change-criticality",children:"3. Organizations with Low Change Criticality:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When system failures do not lead to significant losses or business stoppages."}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>r});var i=s(7294);const a={},l=i.createContext(a);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);