"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[4902],{564:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(5893),t=n(1151);const a={sidebar_position:2,title:"Phased Rollouts",tags:["Managment","Change"]},l=void 0,o={id:"Management/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts",title:"Phased Rollouts",description:"Phased Rollouts, or phased deployment, is a general term that describes strategies for implementing changes through gradual scaling. In this approach, new features or updates are introduced to specific groups of users or environments to minimize risks and manage workload effectively.",source:"@site/docs/02_Management/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts.md",sourceDirName:"02_Management/02_04_Delivery_Strategies",slug:"/Management/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Change",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/change"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Phased Rollouts",tags:["Managment","Change"]},sidebar:"tutorialSidebar",previous:{title:"Fundamentals of Delivery Strategies",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_04_Delivery_Strategies/02_04_01_Fundamentals_of_Delivery_Strategies"},next:{title:"Dark Launches",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_04_Delivery_Strategies/02_04_03_Dark_Launches"}},r={},d=[{value:"Key Points for Managing Phased Rollouts",id:"key-points-for-managing-phased-rollouts",level:2},{value:"Implementing Phased Rollouts in Salesforce",id:"implementing-phased-rollouts-in-salesforce",level:2},{value:"Possible Implementation Methods",id:"possible-implementation-methods",level:3},{value:"Advantages and Disadvantages of Phased Rollouts",id:"advantages-and-disadvantages-of-phased-rollouts",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"When Phased Rollouts Are Especially Effective",id:"when-phased-rollouts-are-especially-effective",level:2}];function c(e){const s={br:"br",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Phased Rollouts"}),", or phased deployment, is a general term that describes strategies for implementing changes through gradual scaling. In this approach, new features or updates are introduced to specific groups of users or environments to minimize risks and manage workload effectively."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(6).Z+"",width:"1566",height:"996"})}),"\n",(0,i.jsxs)(s.p,{children:["A specific example of ",(0,i.jsx)(s.strong,{children:"Phased Rollouts"})," is a ",(0,i.jsx)(s.strong,{children:"canary release"}),", which can also be part of Phased Rollouts. This method involves launching new functionality for a small group of users to test its performance and identify potential issues before a full-scale rollout."]}),"\n",(0,i.jsx)(s.p,{children:"Example: Instead of rolling out a new feature to the entire organization at once, you first enable it for a small group of users, test its stability and performance, collect data and feedback, address any identified issues, and then gradually scale up."}),"\n",(0,i.jsx)(s.p,{children:"Phased Rollouts are a powerful change management tool, especially for large and complex projects. They allow you to minimize risks, gather feedback, and improve system stability, ensuring a smooth transition to new functionality. However, the success of phased rollouts depends on thorough planning, monitoring, and engagement with users at every stage."}),"\n",(0,i.jsx)(s.h2,{id:"key-points-for-managing-phased-rollouts",children:"Key Points for Managing Phased Rollouts"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Phase Planning"}),(0,i.jsx)(s.br,{}),"\n","Define the number of phases, user groups, and criteria for transitioning from one phase to the next."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Defining Success Metrics"}),(0,i.jsx)(s.br,{}),"\n","Establish key performance indicators (KPIs) for each phase. Determine what metrics will signal readiness to move to the next phase."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Monitoring and Feedback"}),(0,i.jsx)(s.br,{}),"\n","Collect data on system performance and progress, monitor for errors, and actively communicate with users involved in the phase."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Risk Management"}),(0,i.jsx)(s.br,{}),"\n","If issues are detected in a phase, halt or roll back changes to minimize business impact."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"implementing-phased-rollouts-in-salesforce",children:"Implementing Phased Rollouts in Salesforce"}),"\n",(0,i.jsx)(s.h3,{id:"possible-implementation-methods",children:"Possible Implementation Methods"}),"\n",(0,i.jsx)(s.p,{children:"The core idea of Phased Rollouts is deploying changes to limited groups of users. Salesforce offers several tools to facilitate Phased Rollouts, ensuring the process is smooth, efficient, and safe. You can implement this mechanism using various features, such as:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Permission Sets and Custom Permissions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.strong,{children:"Permission Sets"})," or ",(0,i.jsx)(s.strong,{children:"Custom Permissions"})," to manage access to new features depending on the rollout phase."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"User Segmentation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Segment users into groups, such as with ",(0,i.jsx)(s.strong,{children:"Public Groups"})," or ",(0,i.jsx)(s.strong,{children:"Roles"}),", to grant access to features or data only to selected audiences."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Validation Rules and Flows"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Configure ",(0,i.jsx)(s.strong,{children:"Validation Rules"})," or ",(0,i.jsx)(s.strong,{children:"Flows"})," to restrict access or visibility of new objects, records, or fields for users not yet involved in the new phase."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Multi-org Rollout"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"For companies with multiple Salesforce orgs (e.g., for regional divisions), deploy changes one org at a time, starting with less critical ones."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"advantages-and-disadvantages-of-phased-rollouts",children:"Advantages and Disadvantages of Phased Rollouts"}),"\n",(0,i.jsx)(s.h3,{id:"advantages",children:"Advantages"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Risk Management"}),(0,i.jsx)(s.br,{}),"\n","Early detection and resolution of issues minimize the impact on end users."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Feedback Collection"}),(0,i.jsx)(s.br,{}),"\n","Gathering feedback from initial users helps improve functionality before a full release."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"System Resilience"}),(0,i.jsx)(s.br,{}),"\n","Gradual deployment reduces load and minimizes the risk of failures."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Flexibility in Management"}),(0,i.jsx)(s.br,{}),"\n","It\u2019s easier to roll back changes when they\u2019re deployed to a limited audience. You can respond more flexibly and quickly to business feedback."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Complexity and Resource Intensity"}),(0,i.jsx)(s.br,{}),"\n","Requires meticulous planning, monitoring, and communication with teams at every stage, demanding more resources compared to a one-time rollout."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Extended Implementation Time"}),(0,i.jsx)(s.br,{}),"\n","The phased approach often takes longer than a single deployment."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Duplication of Efforts"}),(0,i.jsx)(s.br,{}),"\n","Developers and administrators may need to repeat tasks for each phase."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"when-phased-rollouts-are-especially-effective",children:"When Phased Rollouts Are Especially Effective"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Large-Scale Deployments"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"For example, launching a new solution, significantly updating an old one, or making substantial process changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Critical Changes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If the changes impact key business processes, phased rollouts help minimize risks."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Organizations with Large User Bases"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"In organizations with many users, as is often the case with Salesforce, testing performance and user experience on smaller groups is crucial."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Multi-Regional Projects"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If a company has multiple production environments (e.g., for different regions), phased rollouts allow gradual deployment in each environment."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Projects with High Automation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"For teams using CI/CD pipelines, automating phase management simplifies the implementation of Phased Rollouts."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/Phased_Rollouts-7c0c6fd89bf8419630a5000c98392728.webp"},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>l});var i=n(7294);const t={},a=i.createContext(t);function l(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);