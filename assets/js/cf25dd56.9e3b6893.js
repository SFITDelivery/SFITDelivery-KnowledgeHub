"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[7568],{3195:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(5893),s=i(1151);const o={sidebar_position:4,title:"System Overview",tags:["Managment","Environment","Monitoring"]},r=void 0,a={id:"Management/02_06_Environments/02_06_04_SF_System_Overview",title:"System Overview",description:"Salesforce operates in the cloud and uses distributed computing, which imposes restrictions on resource consumption. Efficient management of system resources in solutions like Salesforce is critically important. Without resource management, system stability will eventually be compromised, leading to critical errors that can have serious consequences for the business.",source:"@site/docs/02_Management/02_06_Environments/02_06_04_SF_System_Overview.md",sourceDirName:"02_Management/02_06_Environments",slug:"/Management/02_06_Environments/02_06_04_SF_System_Overview",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_06_Environments/02_06_04_SF_System_Overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_06_Environments/02_06_04_SF_System_Overview.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Environment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/environment"},{label:"Monitoring",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/monitoring"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"System Overview",tags:["Managment","Environment","Monitoring"]},sidebar:"tutorialSidebar",previous:{title:"Data Backup",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_06_Environments/02_06_03_Data_Backup"},next:{title:"Event Monitoring",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_06_Environments/02_06_05_SF_Event_Monitoring"}},l={},c=[{value:"Salesforce System Overview",id:"salesforce-system-overview",level:2},{value:"How to Use Salesforce System Overview Effectively?",id:"how-to-use-salesforce-system-overview-effectively",level:2},{value:"1. Regular Monitoring via the Salesforce Interface",id:"1-regular-monitoring-via-the-salesforce-interface",level:3},{value:"2. Automating Monitoring and Notifications",id:"2-automating-monitoring-and-notifications",level:3},{value:"Recommendations for Using Salesforce System Overview",id:"recommendations-for-using-salesforce-system-overview",level:2},{value:"Conclusion",id:"conclusion",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Salesforce operates in the cloud and uses distributed computing, which imposes restrictions on resource consumption. Efficient management of system resources in solutions like Salesforce is critically important. Without resource management, system stability will eventually be compromised, leading to critical errors that can have serious consequences for the business."}),"\n",(0,t.jsxs)(n.p,{children:["Examples of consequences that may arise if resource usage is not controlled using ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=xcloud.dev_force_com_system_overview_page.htm&type=5",children:(0,t.jsx)(n.strong,{children:"System Overview"})}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Exceeding API limits"})," \u2013 integrations will stop working."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data storage overflow"})," \u2013 users will be unable to upload new records."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," System Overview is not designed for monitoring page performance or detecting errors in automation processes\u2014other specialized Salesforce tools are used for those purposes, which are covered in other articles."]}),"\n",(0,t.jsx)(n.h2,{id:"salesforce-system-overview",children:"Salesforce System Overview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Salesforce System Overview"})," is a built-in Salesforce tool designed to monitor and track critical parameters and limits of an organization."]}),"\n",(0,t.jsx)(n.p,{children:"System Overview allows you to effectively track resource consumption, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"API requests (daily API call limits)."}),"\n",(0,t.jsx)(n.li,{children:"The amount of used data storage."}),"\n",(0,t.jsx)(n.li,{children:"The total number of licenses and used objects."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important:"})," Although System Overview allows you to track current resource usage metrics, it does not provide automatic notifications when limits are approached by default. Therefore, it is recommended to set up automation to send such notifications, using, for example, Salesforce CLI."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use-salesforce-system-overview-effectively",children:"How to Use Salesforce System Overview Effectively?"}),"\n",(0,t.jsx)(n.p,{children:"Salesforce System Overview is available to all Salesforce administrators through the Setup interface. However, deeper automation is often required to receive timely notifications and analyze metrics."}),"\n",(0,t.jsx)(n.h3,{id:"1-regular-monitoring-via-the-salesforce-interface",children:"1. Regular Monitoring via the Salesforce Interface"}),"\n",(0,t.jsx)(n.p,{children:'Go to Setup -> Quick Find -> enter "System Overview":'}),"\n",(0,t.jsx)(n.p,{children:"Here, you will find a visual dashboard displaying the current status of key limits and their consumption."}),"\n",(0,t.jsx)(n.h3,{id:"2-automating-monitoring-and-notifications",children:"2. Automating Monitoring and Notifications"}),"\n",(0,t.jsx)(n.p,{children:"For mission-critical systems, it is recommended to automate monitoring:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configure automatic notifications (such as email alerts or messages in the necessary messenger) when approaching the API request limit or exhausting available storage space."}),"\n",(0,t.jsx)(n.li,{children:"Use Salesforce CLI or third-party CI/CD tools to automatically export reports on limit and resource consumption to Git or external storage."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example Salesforce CLI command to retrieve API limit information:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sf limits api display --target-org my-org\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command can be integrated into a daily cron script or CI/CD pipeline to regularly monitor resource consumption and send notifications to responsible personnel through the necessary channels."}),"\n",(0,t.jsx)(n.h2,{id:"recommendations-for-using-salesforce-system-overview",children:"Recommendations for Using Salesforce System Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Regularly check System Overview in the Salesforce interface, especially before and after releases, integrations, or data migrations."}),"\n",(0,t.jsx)(n.li,{children:"Set up automatic notifications for critical limit thresholds."}),"\n",(0,t.jsx)(n.li,{children:"Use Salesforce CLI and CI/CD automation for daily monitoring of limits and resource consumption."}),"\n",(0,t.jsx)(n.li,{children:"Store monitoring history and resource consumption data in Git or external systems to track trends and predict risks."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Regular and automated monitoring of Salesforce using the System Overview tool is a crucial step in ensuring system stability. Timely detection of approaching resource limits and prompt responses to these events help prevent problems efficiently and ensure business process continuity."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);