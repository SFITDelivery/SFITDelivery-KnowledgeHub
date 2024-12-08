"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[3565],{8883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(5893),s=n(1151);const a={sidebar_position:6,title:"Quick Deploy",tags:["Managment","Deployment"]},o=void 0,l={id:"Management/02_03_Deployment/02_03_06_Quick_Deployment",title:"Quick Deploy",description:"Quick Deploy is a Salesforce feature that speeds up the deployment process if validation with necessary test (unit tests) execution has been successfully completed beforehand. Quick Deploy is useful in situations where deployment needs to be performed at a specific time, minimizing the cost of re-testing, as testing was completed during validation. This method enables preparation for deployment in advance by validating changes, allowing deployment within a specific time window (e.g., to minimize business disruption or synchronize deployment with other events).",source:"@site/docs/02_Management/02_03_Deployment/02_03_06_Quick_Deployment.md",sourceDirName:"02_Management/02_03_Deployment",slug:"/Management/02_03_Deployment/02_03_06_Quick_Deployment",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_03_Deployment/02_03_06_Quick_Deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_03_Deployment/02_03_06_Quick_Deployment.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Deployment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/deployment"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Quick Deploy",tags:["Managment","Deployment"]},sidebar:"tutorialSidebar",previous:{title:"Destructive Change",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_03_Deployment/02_03_05_Destructive_Change"},next:{title:"Types of Packages in Salesforce",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_03_Deployment/02_03_07_Packages"}},r={},c=[{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"When It\u2019s Justified",id:"when-its-justified",level:3},{value:"Using Quick Deploy",id:"using-quick-deploy",level:3}];function d(e){const t={br:"br",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Quick Deploy"})," is a Salesforce feature that speeds up the deployment process if validation with necessary test (unit tests) execution has been successfully completed beforehand. Quick Deploy is useful in situations where deployment needs to be performed at a specific time, minimizing the cost of re-testing, as testing was completed during validation. This method enables preparation for deployment in advance by validating changes, allowing deployment within a specific time window (e.g., to minimize business disruption or synchronize deployment with other events)."]}),"\n",(0,i.jsx)(t.p,{children:'Quick Deploy is available if deployment with test execution was successful in the last few days. However, changes in the target environment can cause errors during Quick Deploy, so relying solely on a "successful" status is not always risk-free. Quick Deploy can be accessed both through the user interface and via Salesforce CLI.'}),"\n",(0,i.jsx)(t.h3,{id:"advantages",children:"Advantages"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Time Savings on Deployment"}),": Quick Deploy allows skipping test execution if validation was successful, significantly reducing overall deployment time, especially for large projects with many tests."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Preparation of Change Package"}),": Quick Deploy and prior validation provide the team with as much preparation time as needed without impacting the target environment. Successful validation allows for a subsequent fast deployment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Deployment Planning"}),": Quick Deploy allows teams to detect errors in advance and prepare changes for deployment at a scheduled time, minimizing business impact. This is particularly relevant for large-scale changes and when additional production testing is required."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Limited Usage Window"}),": Quick Deploy is only available for a few days after successful validation, requiring careful release planning, especially for projects with infrequent releases."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Risk of Outdated Test Results or Environment State"}),": Quick Deploy relies on previously executed test results. If there are untested changes in the target environment, issues may arise. Metadata changes in the target environment can also cause errors when attempting Quick Deploy."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Requirement for Prior Testing"}),": Quick Deploy requires successful validation with full testing, so it cannot be used without preliminary validation."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"when-its-justified",children:"When It\u2019s Justified"}),"\n",(0,i.jsx)(t.p,{children:"Quick Deploy is appropriate for deployments involving a large volume of changes or a substantial number of tests. Validation and subsequent Quick Deploy allow for scheduling deployment in the target environment in advance. This is especially useful if deployment timing is critical, as testing can be completed ahead of time, reducing overall deployment time within the designated timeframe."}),"\n",(0,i.jsx)(t.h3,{id:"using-quick-deploy",children:"Using Quick Deploy"}),"\n",(0,i.jsxs)(t.p,{children:["When running validation with test execution using the command: ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.code,{children:"$ sf project deploy validate --manifest <path/to/package.xml> --target-org <alias> --test-level RunSpecifiedTests --tests <test name>"})," ",(0,i.jsx)("br",{}),"\nor ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.code,{children:"$ sf project deploy validate --manifest <path/to/package.xml> --target-org <alias> --test-level RunLocalTests"})," ",(0,i.jsx)("br",{}),"\nNote: (examples provided use deployment with ",(0,i.jsx)(t.code,{children:"--manifest"}),", but ",(0,i.jsx)(t.code,{children:"--source-dir"})," can also be used)."]}),"\n",(0,i.jsxs)(t.p,{children:["You will receive a Deployment ID, and if validation is successful, you can use this ID to initiate a Quick Deploy.",(0,i.jsx)(t.br,{}),"\n","To do this, use the command: ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.code,{children:"sf project deploy quick --job-id <Deploy ID>"})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.p,{children:["You can also use the UI for a manual launch.",(0,i.jsx)(t.br,{}),"\n","To do this, go to ",(0,i.jsx)(t.code,{children:"Setup > Deployment Details"})," ",(0,i.jsx)("br",{}),"\nand click ",(0,i.jsx)(t.code,{children:"Quick Deploy"})," from the list of successful deployments/validations:\n",(0,i.jsx)(t.img,{src:n(6722).Z+"",width:"1712",height:"184"}),"\nor navigate to the deployment page itself:\n",(0,i.jsx)(t.img,{src:n(4614).Z+"",width:"2678",height:"1210"}),"\nThis will trigger a deployment with a new ID, but without running tests again."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6722:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Quick_Deployment_1-cfc1d06f98a2b96ba84762d95137bb9f.webp"},4614:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Quick_Deployment_2-94d23a5f85ee9bc51a23c69c88fc0c05.webp"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(7294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);