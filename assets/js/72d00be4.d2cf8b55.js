"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[4271],{2782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(5893),o=n(1151);const a={sidebar_position:9,title:"HotFix",tags:["Managment","Git","HotFix"]},r=void 0,s={id:"Management/02_02_Git/02_02_09_HotFix",title:"HotFix",description:"The Hotfix Git Strategy aims to deliver fixes to the production environment as quickly and reliably as possible. The hotfix strategy is an integral part of the overall change management and deployment strategy adopted for the project.",source:"@site/docs/02_Management/02_02_Git/02_02_09_HotFix.md",sourceDirName:"02_Management/02_02_Git",slug:"/Management/02_02_Git/02_02_09_HotFix",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_09_HotFix",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_02_Git/02_02_09_HotFix.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Git",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/git"},{label:"HotFix",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/hot-fix"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"HotFix",tags:["Managment","Git","HotFix"]},sidebar:"tutorialSidebar",previous:{title:"Feature Branch",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_08_Feature_Branch"},next:{title:"Anti-patterns",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_10_Anti_patterns"}},l={},c=[{value:"Implementation Examples",id:"implementation-examples",level:2},{value:"Features",id:"features",level:2}];function h(e){const t={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Hotfix Git Strategy"})," aims to deliver fixes to the production environment as quickly and reliably as possible. The hotfix strategy is an integral part of the overall change management and deployment strategy adopted for the project."]}),"\n",(0,i.jsx)(t.p,{children:"Hotfix strategies can be divided into two types:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Requiring Backpromotion"}),": This type of strategy is used when the project has multiple branches. In this case, the hotfix is made in the branch closest to the production state. After deploying the changes to production, the backpromotion (promotion of changes) is performed to the remaining active branches of the project."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Not Requiring Backpromotion"}),": This type of strategy is used when the main development branch and the production state do not differ (trunk-based development) or when the differences are minimal (small projects with a relatively short development cycle and a small number of teams). In this case, changes are made to the main development branch and, if necessary, transferred to the branch corresponding to the production state using cherry-pick or merge."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"implementation-examples",children:"Implementation Examples"}),"\n",(0,i.jsx)(t.p,{children:"1a, 1b - Strategies with backpromotion\n2a, 2b - Strategies without backpromotion"}),"\n",(0,i.jsxs)(t.p,{children:["It is important to note that the approach is flexible, and hotfixes can occur both in separate branches and in the most suitable branches for this purpose.\n",(0,i.jsx)(t.img,{src:n(6139).Z+"",width:"1144",height:"1674"})]}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(t.p,{children:"The main factor in choosing whether to use backpromotion or not is the size of the project and the Git strategy."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Hotfix with Backpromotion"}),"\nOn projects with a large number of teams and a long development and delivery cycle, it is more appropriate to make changes in the branch corresponding to the production state, and then promote the changes to the developer branches. This minimizes the time required to deliver the fix to the production environment. Further promotion of the fix to the developer branches may lead to conflicts, which there will be sufficient time to resolve."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Hotfix without Backpromotion"}),"\nIf the development and delivery cycle on the project is short, it usually makes sense to use the regular development cycle for hotfixes. The likelihood of conflicts when transferring changes to the release branch in this case is minimal. The absence of the need for backpromotion reduces the complexity of branch management and simplifies the development process."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6139:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Git_HotFix-7536997a23a652f3b5520ab799af82ec.webp"},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(7294);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);