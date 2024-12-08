"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[2614],{6360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(5893),s=a(1151);const o={sidebar_position:1,title:"Deploy Custom Labels Translation",tags:["metadata","deploy","FAQ"],sidebar_class_name:"disabled-page"},l="How to Deploy Custom Labels Translation",r={id:"Management/02_03_Deployment/02_03_100_Metadata_Features/02_03_100_01_Custom_Labels_Translation copy",title:"Deploy Custom Labels Translation",description:"1. Find the file force-app/main/default/translations/.translation-meta.xml.",source:"@site/docs/02_Management/02_03_Deployment/02_03_100_Metadata_Features/02_03_100_01_Custom_Labels_Translation copy.md",sourceDirName:"02_Management/02_03_Deployment/02_03_100_Metadata_Features",slug:"/Management/02_03_Deployment/02_03_100_Metadata_Features/02_03_100_01_Custom_Labels_Translation copy",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_03_Deployment/02_03_100_Metadata_Features/02_03_100_01_Custom_Labels_Translation copy",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_03_Deployment/02_03_100_Metadata_Features/02_03_100_01_Custom_Labels_Translation copy.md",tags:[{label:"metadata",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/metadata"},{label:"deploy",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/deploy"},{label:"FAQ",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/faq"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Deploy Custom Labels Translation",tags:["metadata","deploy","FAQ"],sidebar_class_name:"disabled-page"},sidebar:"tutorialSidebar",previous:{title:"Metadata - Deployment Features",permalink:"/SFITDelivery-KnowledgeHub/docs/category/metadata---deployment-features"},next:{title:"Deploy Custom Label",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_03_Deployment/02_03_100_Metadata_Features/02_03_100_02_Custom_Label"}},i={},d=[];function c(e){const t={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-deploy-custom-labels-translation",children:"How to Deploy Custom Labels Translation"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Find the file"})," ",(0,n.jsx)(t.code,{children:"force-app/main/default/translations/<language_code>.translation-meta.xml"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Create the file if it does not exist."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["You can find the language code in the ISO Language Code Table: ",(0,n.jsx)(t.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_categorynodelocalization.htm",children:"Salesforce Developer Documentation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Retrieve the file using SFDX:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'sfdx force:source:retrieve -p "force-app/main/default/translations/<language_code>.translation-meta.xml" -u <Alias>\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Filter the retrieved data:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You will receive a lot of extra data. Choose only what you need."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Completion:"})," Once the necessary data is filtered and adjusted, the translation is ready for deployment."]}),"\n"]})]})}function _(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>l});var n=a(7294);const s={},o=n.createContext(s);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);