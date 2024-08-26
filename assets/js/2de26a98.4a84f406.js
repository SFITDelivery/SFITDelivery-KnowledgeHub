"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[5207],{873:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=s(5893),a=s(1151);const t={sidebar_position:3,title:"Release on Demand",tags:["Managment","Delivery","Releases"]},l=void 0,r={id:"Management/02_01_Release/02_01_03_Release_on_Demand",title:"Release on Demand",description:"What is Release on Demand?",source:"@site/docs/02_Management/02_01_Release/02_01_03_Release_on_Demand.md",sourceDirName:"02_Management/02_01_Release",slug:"/Management/02_01_Release/02_01_03_Release_on_Demand",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_01_Release/02_01_03_Release_on_Demand",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_01_Release/02_01_03_Release_on_Demand.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Delivery",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/delivery"},{label:"Releases",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/releases"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Release on Demand",tags:["Managment","Delivery","Releases"]},sidebar:"tutorialSidebar",previous:{title:"Release Planning",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_01_Release/02_01_02_Release_Planning"},next:{title:"HotFix",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_01_Release/02_01_04_HotFix"}},o={},d=[{value:"What is Release on Demand?",id:"what-is-release-on-demand",level:3},{value:"Implementing Release on Demand - Key Steps",id:"implementing-release-on-demand---key-steps",level:3},{value:"1. Integration with CI/CD Processes",id:"1-integration-with-cicd-processes",level:4},{value:"2. Release Management with Feature Flags",id:"2-release-management-with-feature-flags",level:4},{value:"3. Phased Rollouts",id:"3-phased-rollouts",level:4},{value:"4. Rapid Incident Response",id:"4-rapid-incident-response",level:4},{value:"Benefits and Challenges of Release on Demand",id:"benefits-and-challenges-of-release-on-demand",level:3},{value:"Benefits:",id:"benefits",level:4},{value:"Challenges:",id:"challenges",level:4},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const n={h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"what-is-release-on-demand",children:"What is Release on Demand?"}),"\n",(0,i.jsxs)(n.p,{children:["Companies typically need to quickly implement new features and fixes to meet user needs and maintain competitiveness. In such conditions, ",(0,i.jsx)(n.strong,{children:"Release on Demand"})," becomes the best solution for implementing changes. This approach allows for the release of changes as they are ready, without waiting for scheduled release cycles, providing the flexibility businesses need and accelerating the delivery of value to users. It enables companies to adapt more quickly to market changes and respond promptly to user requests."]}),"\n",(0,i.jsx)(n.h3,{id:"implementing-release-on-demand---key-steps",children:"Implementing Release on Demand - Key Steps"}),"\n",(0,i.jsx)(n.p,{children:"Implementing Release on Demand requires a well-organized process and appropriate tools."}),"\n",(0,i.jsx)(n.h4,{id:"1-integration-with-cicd-processes",children:"1. Integration with CI/CD Processes"}),"\n",(0,i.jsx)(n.p,{children:"Continuous Integration and Continuous Delivery (CI/CD) play a crucial role in implementing Release on Demand. These processes automate the build, testing, and deployment of changes, enabling teams to release new versions faster and more safely."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Steps:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Setting up CI/CD tools:"})," Tools like Jenkins, GitHub Actions, GitLab CI, Gearset, or others can automate the build and deployment process. In Salesforce, it's advisable to use Salesforce DX for metadata management and deployments."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Automating Testing:"})," Automated testing within the CI/CD pipeline ensures that each change passes all necessary checks before being deployed to production."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"2-release-management-with-feature-flags",children:"2. Release Management with Feature Flags"}),"\n",(0,i.jsx)(n.p,{children:"Feature Flags are a powerful tool that allows managing the availability of new features independently of the main release. This enables deploying new functionality to production while activating it only for specific users or groups."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"How it Works:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Isolation of Changes:"})," New features are implemented using Feature Flags, isolating them from the main code and limiting their impact on users until the decision is made to activate the new functionality."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Controlled Activation:"})," Activation or deactivation of features in production is done through configuration settings, without affecting the rest of the code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"A/B Testing:"})," Feature Flags are used for A/B testing and analyzing the effectiveness of new features before their full-scale launch."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"3-phased-rollouts",children:"3. Phased Rollouts"}),"\n",(0,i.jsx)(n.p,{children:"Phased Rollouts is an approach that allows gradually implementing changes in production, starting with a small group of users. This minimizes risks and allows quickly identifying potential issues."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Steps for Implementation:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Defining User Groups:"})," Start the deployment with a limited group of users, such as internal employees or the most loyal customers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Monitoring and Analysis:"})," Track performance metrics and user feedback at each stage of the rollout to identify and address issues promptly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gradual Expansion:"})," Increase the number of users with access to the new features as confidence in the stability and quality of the release grows."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"4-rapid-incident-response",children:"4. Rapid Incident Response"}),"\n",(0,i.jsx)(n.p,{children:"In a Release on Demand scenario, it's crucial to have a clear plan for dealing with incidents. Quick responses and rollback capabilities are key elements of effective risk management."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Measures:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"System Monitoring:"})," Implement monitoring tools to track key performance and stability metrics."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Rollback Plan:"})," Prepare and regularly update a rollback strategy to minimize the impact in case of deployment failures."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"User Feedback Collection:"})," Regularly gather feedback from users post-release to ensure no new issues have arisen and that users are satisfied with the changes."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"benefits-and-challenges-of-release-on-demand",children:"Benefits and Challenges of Release on Demand"}),"\n",(0,i.jsx)(n.h4,{id:"benefits",children:"Benefits:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Flexibility and Speed:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Allows releasing new features and fixes as they are ready, accelerating value delivery to users."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Increased Competitiveness:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Companies using Release on Demand can respond faster to market changes and implement innovations more quickly."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Risk Reduction:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gradual rollouts and the use of Feature Flags help minimize risks associated with the sudden introduction of new features."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"challenges",children:"Challenges:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Automation Requirements:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Successful implementation of Release on Demand requires the adoption and maintenance of CI/CD processes and automated testing, which demands significant effort and resources."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Complexity of Management:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Frequent releases require strict coordination between teams and effective change management, which can be challenging in large organizations."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Increased Responsibility:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Frequent releases require the team to be constantly ready to respond quickly to incidents and resolve issues."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Increased Development and Testing Complexity with Feature Flags:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implementing Feature Flags requires additional abstractions in the code and their tracking, complicating development. Testing also needs to cover various feature flag settings, making the process more labor-intensive compared to regular development."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Release on Demand is a flexible release management approach that enables companies to deliver value to their users faster, without waiting for scheduled release cycles. This method requires careful process organization, automation, and continuous monitoring, but ultimately, it shortens time-to-market and enhances competitiveness. Implementing Release on Demand can be a significant advantage for companies seeking flexibility and innovation in their business."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var i=s(7294);const a={},t=i.createContext(a);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);