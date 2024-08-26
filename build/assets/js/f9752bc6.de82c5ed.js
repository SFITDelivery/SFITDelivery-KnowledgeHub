"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[528],{339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(5893),s=n(1151);const o={sidebar_position:1,title:"Deploy Custom Labels Translation",tags:["metadata","deploy","FAQ"]},l="How to Deploy Custom Labels Translation",i={id:"020 Technical part/Deployments/Custom Labels Translation",title:"Deploy Custom Labels Translation",description:"1. Find the file force-app/main/default/translations/.translation-meta.xml.",source:"@site/docs/020 Technical part/Deployments/Custom Labels Translation.md",sourceDirName:"020 Technical part/Deployments",slug:"/020 Technical part/Deployments/Custom Labels Translation",permalink:"/SFITDelivery-KnowledgeHub/docs/020 Technical part/Deployments/Custom Labels Translation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/020 Technical part/Deployments/Custom Labels Translation.md",tags:[{label:"metadata",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/metadata"},{label:"deploy",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/deploy"},{label:"FAQ",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/faq"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Deploy Custom Labels Translation",tags:["metadata","deploy","FAQ"]},sidebar:"tutorialSidebar",previous:{title:"Deployments peculiarities",permalink:"/SFITDelivery-KnowledgeHub/docs/category/deployments-peculiarities"},next:{title:"Scripts",permalink:"/SFITDelivery-KnowledgeHub/docs/category/scripts"}},r={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-deploy-custom-labels-translation",children:"How to Deploy Custom Labels Translation"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Find the file"})," ",(0,a.jsx)(t.code,{children:"force-app/main/default/translations/<language_code>.translation-meta.xml"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Create the file if it does not exist."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You can find the language code in the ISO Language Code Table: ",(0,a.jsx)(t.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_categorynodelocalization.htm",children:"Salesforce Developer Documentation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Retrieve the file using SFDX:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'sfdx force:source:retrieve -p "force-app/main/default/translations/<language_code>.translation-meta.xml" -u <Alias>\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Filter the retrieved data:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You will receive a lot of extra data. Choose only what you need."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Completion:"})," Once the necessary data is filtered and adjusted, the translation is ready for deployment."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var a=n(7294);const s={},o=a.createContext(s);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);