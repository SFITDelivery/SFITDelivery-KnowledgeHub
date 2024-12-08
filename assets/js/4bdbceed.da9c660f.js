"use strict";(self.webpackChunksfit_delivery_knowledge_hub=self.webpackChunksfit_delivery_knowledge_hub||[]).push([[6103],{5454:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(5893),a=s(1151);const o={sidebar_position:1,title:"Fundamentals of Deployment in Salesforce",tags:["Managment","Deployment","Base"]},i=void 0,r={id:"Management/02_03_Deployment/02_03_01_Fundamentals_of_Deployment",title:"Fundamentals of Deployment in Salesforce",description:"Deployment is an essential stage in the Software Development Lifecycle (SDLC), ensuring the delivery of a finished product to users. This process includes code transfer and environment setup and can be performed manually or automatically. A well-structured deployment process helps avoid errors, minimize implementation time, and ensure system stability.",source:"@site/docs/02_Management/02_03_Deployment/02_03_01_Fundamentals_of_Deployment.md",sourceDirName:"02_Management/02_03_Deployment",slug:"/Management/02_03_Deployment/02_03_01_Fundamentals_of_Deployment",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_03_Deployment/02_03_01_Fundamentals_of_Deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Management/02_03_Deployment/02_03_01_Fundamentals_of_Deployment.md",tags:[{label:"Managment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/managment"},{label:"Deployment",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/deployment"},{label:"Base",permalink:"/SFITDelivery-KnowledgeHub/docs/tags/base"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Fundamentals of Deployment in Salesforce",tags:["Managment","Deployment","Base"]},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/SFITDelivery-KnowledgeHub/docs/category/deployment"},next:{title:"Automation of Deployment",permalink:"/SFITDelivery-KnowledgeHub/docs/Management/02_03_Deployment/02_03_02_Automation_of_Deployment"}},l={},c=[{value:"Difference Between Release and Deployment",id:"difference-between-release-and-deployment",level:2},{value:"Sources of Truth for Deployment in Salesforce",id:"sources-of-truth-for-deployment-in-salesforce",level:2},{value:"1. Git as the Source of Truth",id:"1-git-as-the-source-of-truth",level:3},{value:"2. Salesforce Org as the Source of Truth",id:"2-salesforce-org-as-the-source-of-truth",level:3},{value:"The Role of Manual Changes",id:"the-role-of-manual-changes",level:2},{value:"Risks and Best Practices to Minimize Manual Interventions",id:"risks-and-best-practices-to-minimize-manual-interventions",level:3},{value:"Tools for Documenting and Tracking Manual Changes",id:"tools-for-documenting-and-tracking-manual-changes",level:3},{value:"Data Delivery Methods",id:"data-delivery-methods",level:2},{value:"Source of Truth: Environment",id:"source-of-truth-environment",level:3},{value:"Managed Package",id:"managed-package",level:4},{value:"Unmanaged Package",id:"unmanaged-package",level:4},{value:"Change Set",id:"change-set",level:4},{value:"Source of Truth: Git",id:"source-of-truth-git",level:3},{value:"Unlocked Package",id:"unlocked-package",level:4},{value:"Metadata API Project (Metadata Format)",id:"metadata-api-project-metadata-format",level:4},{value:"Salesforce DX Project (Source Format)",id:"salesforce-dx-project-source-format",level:4}];function d(e){const n={a:"a",br:"br",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Deployment is an essential stage in the Software Development Lifecycle (SDLC), ensuring the delivery of a finished product to users. This process includes code transfer and environment setup and can be performed manually or automatically. A well-structured deployment process helps avoid errors, minimize implementation time, and ensure system stability."}),"\n",(0,t.jsx)(n.h2,{id:"difference-between-release-and-deployment",children:"Difference Between Release and Deployment"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8971).Z+"",width:"1362",height:"278"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Release"})," is the process of officially announcing and providing a new software version to end users. A release includes not only deployment but also user communication, documentation updates, marketing efforts, and support. It marks the point when a new version becomes available to the broader audience, and users can start using it."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/SFITDelivery-KnowledgeHub/docs/Management/02_01_Release/02_01_01_Release_Management",children:"Release management is discussed in a separate section of the portal"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Deployment"})," is the process of delivering changes to the environment. At this point, the code becomes available for use, but not necessarily to all users. Access to deployed solutions is managed within the release process."]}),"\n",(0,t.jsx)(n.p,{children:"Thus, deployment is the technical stage of updating a solution in the environment, but it doesn\u2019t always mean it\u2019s available to end users. A release is a broader process that includes deployment and other activities related to the new version\u2019s launch for users."}),"\n",(0,t.jsx)(n.p,{children:"Understanding the distinction between release and deployment is important as it allows for better planning and risk management. Releases require detailed planning and coordination, while deployment can be a more routine and regular process. Confusing these concepts may hinder the proper organization of the change process and increase business risks."}),"\n",(0,t.jsx)(n.h2,{id:"sources-of-truth-for-deployment-in-salesforce",children:"Sources of Truth for Deployment in Salesforce"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5856).Z+"",width:"1670",height:"872"})}),"\n",(0,t.jsxs)(n.p,{children:["When deploying changes in Salesforce, there are two main approaches to selecting the ",(0,t.jsx)(n.strong,{children:"Source of Truth"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Git as the source of truth"})," \u2014 this is the most advanced and recommended approach for teams wanting to implement CI/CD processes. All changes are committed to Git, which is used for deployment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Salesforce Org as the source of truth"})," \u2014 this is the traditional approach where deployment is done directly between environments without using Git, which may be convenient for smaller projects."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"1-git-as-the-source-of-truth",children:"1. Git as the Source of Truth"}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.strong,{children:"Git"})," as the primary source of truth is an approach that is becoming increasingly popular, especially in teams implementing CI/CD processes. All changes, whether code or metadata, are stored in a ",(0,t.jsx)(n.strong,{children:"Git repository"}),", and deployment is based on this data."]}),"\n",(0,t.jsx)(n.p,{children:"Git enables tracking changes in code and configurations, managing versions, and facilitating collaborative work among multiple developers on a single project. In the context of Salesforce, using Git helps organize the deployment and release processes and maintain a history of changes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/SFITDelivery-KnowledgeHub/docs/Management/02_02_Git/02_02_01_Strategies",children:"Git management is discussed in a separate section of the portal"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Advantages"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Versioning"}),": Ability to track every change, use branches for new features, and revert to previous versions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automation"}),": Easily integrates with CI/CD tools for automatic deployment, testing, and releases."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quality Control"}),": Code reviews during repository merging help ensure that only vetted changes are deployed to target environments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Change Control"}),": Integration of Git with task management systems helps control changes and manage releases."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplified Rollback"}),": If a deployment fails, reverting to a previous version is quick."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Collaboration"}),": Multiple developers can work on a single project without risking data loss."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tools"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Salesforce CLI (SFDX)"}),": For working with Salesforce metadata and managing the deployment process through Git."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CI/CD Systems"}),": For example, Jenkins, GitHub Actions, and GitLab CI for automating deployments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Salesforce-Specific Tools"}),": Salesforce DevOps Center, Gearset, Copado, etc., which provide user-friendly interfaces for Git interaction, branch management, and CI/CD setup. These tools often offer additional features like backups, quality gates, and testing."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-salesforce-org-as-the-source-of-truth",children:"2. Salesforce Org as the Source of Truth"}),"\n",(0,t.jsxs)(n.p,{children:["Before the widespread adoption of DevOps practices and Git, the primary approach was to use the ",(0,t.jsx)(n.strong,{children:"Salesforce environment (Org)"})," as the source of truth. This is where changes are made directly in one environment and then deployed to other environments (including Production)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Advantages"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplicity"}),": Suitable for small teams and administrators who often use a no-code approach and don\u2019t need complex change management processes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Immediate Testing"}),": Changes can be tested in the same environment where they were made."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Disadvantages"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lack of Versioning"}),": Tracking changes is not as efficient as with Git."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automation Challenges"}),": Automating deployments and testing requires more effort."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Limited Change Control"}),": Lack of integration between changes in environments and task management systems makes release management a challenge."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tools"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Change Sets"}),": A Salesforce tool for transferring changes between environments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Salesforce CLI and Ant Migration Tool"}),": Used to extract metadata from one org and deploy it to another. These tools allow for direct deployment without using Git."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"the-role-of-manual-changes",children:"The Role of Manual Changes"}),"\n",(0,t.jsxs)(n.p,{children:["Manual changes may be necessary in situations where automation is impossible, too complex, or impractical. For example, manual steps are often needed for activating specific Flow versions, creating or modifying custom labels, executing Apex scripts, activating/deactivating bots, or making data changes.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://developer.salesforce.com/docs/metadata-coverage/62",children:"Here you can find possible deployment options for different metadata"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"risks-and-best-practices-to-minimize-manual-interventions",children:"Risks and Best Practices to Minimize Manual Interventions"}),"\n",(0,t.jsx)(n.p,{children:"The primary risk of manual changes is the potential for errors. To minimize these risks:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Document all manual changes."}),"\n",(0,t.jsx)(n.li,{children:"Manual steps should be clear and detailed."}),"\n",(0,t.jsx)(n.li,{children:"A project policy for recording manual steps should be developed and implemented."}),"\n",(0,t.jsx)(n.li,{children:"Automate manual steps whenever possible."}),"\n",(0,t.jsx)(n.li,{children:"Perform testing before changes are implemented."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tools-for-documenting-and-tracking-manual-changes",children:"Tools for Documenting and Tracking Manual Changes"}),"\n",(0,t.jsx)(n.p,{children:"For documenting and tracking manual changes, you can use tools like Jira, Confluence, or simple text files in the repository. It is important that the entire team has access to these documents, can view the history of changes, and adheres to consistent rules for documenting manual steps."}),"\n",(0,t.jsx)(n.h2,{id:"data-delivery-methods",children:"Data Delivery Methods"}),"\n",(0,t.jsx)(n.p,{children:"In Salesforce, there are two main ways to transfer changes based on the source of truth. One method uses the environment as the source of truth, while the other uses a version control system (Git)."}),"\n",(0,t.jsx)(n.h3,{id:"source-of-truth-environment",children:"Source of Truth: Environment"}),"\n",(0,t.jsx)(n.h4,{id:"managed-package",children:"Managed Package"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Features"}),": A Managed Package is a method for distributing and delivering applications and changes in the form of a managed package that can be installed in other Salesforce organizations. Managed packages protect the developer\u2019s source code and data from changes, making them ideal for third-party developers and ISVs (Independent Software Vendors) who want to distribute their products on the AppExchange platform."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pros and Cons"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pros"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures version control, making it easy to release new versions and updates without user intervention."}),"\n",(0,t.jsx)(n.li,{children:"Supports automatic updates for clients, simplifying the distribution of changes."}),"\n",(0,t.jsx)(n.li,{children:"Protects code and data from unauthorized access."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cons"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Less flexible for customization in client organizations, as code and settings changes are restricted."}),"\n",(0,t.jsx)(n.li,{children:"Managing individual components can be challenging due to the need for strict version control."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Commands and Documentation"}),": Key commands and instructions for creating and managing Managed Packages can be found in ",(0,t.jsx)(n.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/packaging_packageable_components.htm",children:"Salesforce documentation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"unmanaged-package",children:"Unmanaged Package"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Features"}),": Unmanaged Packages allow for distributing changes in a package that can be installed in other Salesforce organizations, but unlike a managed package, components can be changed after installation. This is suitable for sharing templates, demo solutions, or internal use where changes and settings can be tailored to client needs."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pros and Cons"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pros"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Allows for component changes after installation, providing high flexibility for users."}),"\n",(0,t.jsx)(n.li,{children:"Suitable for distributing learning materials, templates, and demo solutions."}),"\n",(0,t.jsx)(n.li,{children:"Simple to create and install, without strict version control requirements."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cons"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No version control, making it impossible to manage updates or patches centrally."}),"\n",(0,t.jsx)(n.li,{children:"Open code and components can be modified or deleted in the client organization."}),"\n",(0,t.jsx)(n.li,{children:"No automatic updates, making it difficult to manage further changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Commands and Documentation"}),": More information about working with Unmanaged Packages can be found in ",(0,t.jsx)(n.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/packaging_packageable_components.htm",children:"Salesforce documentation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"change-set",children:"Change Set"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Features"}),": Change Set is a built-in Salesforce tool for transferring metadata between related orgs (e.g., from sandbox to production). Change Set provides a user-friendly graphical interface for selecting and sending components. However, Change Set does not support versioning of metadata, meaning that once deployed, components do not retain information about previous versions."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pros and Cons"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pros"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Easy to use: does not require programming skills."}),"\n",(0,t.jsx)(n.li,{children:"Allows transferring selected components through the standard Salesforce interface."}),"\n",(0,t.jsx)(n.li,{children:"Supports transfers between related organizations (e.g., sandbox -> production)."}),"\n",(0,t.jsx)(n.li,{children:"Easy to track the status of a change set (sent, under review, deployed)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cons"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lack of metadata versioning: once deployed, components cannot be rolled back."}),"\n",(0,t.jsx)(n.li,{children:"Limited to related organizations: cannot send changes to unrelated orgs or other Salesforce instances."}),"\n",(0,t.jsx)(n.li,{children:"Does not support integration with deployment automation tools (e.g., CI/CD)."}),"\n",(0,t.jsx)(n.li,{children:"Does not support transferring all types of metadata, which may require the use of other tools."}),"\n",(0,t.jsx)(n.li,{children:"Limited flexibility in managing component dependencies."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Commands and Documentation"}),": The description of working with Change Sets can be found in ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.changesets.htm&type=5",children:"official documentation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"source-of-truth-git",children:"Source of Truth: Git"}),"\n",(0,t.jsx)(n.h4,{id:"unlocked-package",children:"Unlocked Package"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Features"}),": Unlocked Packages were introduced as part of the new Salesforce DX architecture. Using Unlocked Packages allows for more flexible change management compared to Unmanaged Packages. The main purpose of Unlocked Packages is to manage components during development and deliver changes with a more controlled structure, including support for CI/CD processes."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pros and Cons"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pros"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Easier to update and manage compared to Unmanaged Packages."}),"\n",(0,t.jsx)(n.li,{children:"Supports versioning and integration with CI/CD processes."}),"\n",(0,t.jsx)(n.li,{children:"Suitable for internal use and development, especially for creating modular packages."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cons"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"More complex to set up and manage for beginners compared to Unmanaged Packages."}),"\n",(0,t.jsx)(n.li,{children:"Does not protect code like a Managed Package."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Commands and Documentation"}),":  Salesforce DX Developer Guide ",(0,t.jsx)(n.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm",children:"Unlocked Packages"})]}),"\n",(0,t.jsx)(n.h4,{id:"metadata-api-project-metadata-format",children:"Metadata API Project (Metadata Format)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Features"}),": The ",(0,t.jsx)(n.strong,{children:"Metadata API Project"})," (or Metadata Format) is the format used when working with Salesforce metadata through the ",(0,t.jsx)(n.strong,{children:"Salesforce Metadata API"}),". This approach allows exporting, modifying, and deploying metadata outside Salesforce in the form of files and folders. The Metadata API is used to transfer and manage metadata between Salesforce orgs or integrate with external systems through automation tools (e.g., CI/CD). This format is particularly useful for more complex development scenarios when managing large projects and using version control systems like Git."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pros and Cons"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pros"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Versioning support: easily integrates with version control systems (e.g., Git), allowing you to track and manage changes."}),"\n",(0,t.jsx)(n.li,{children:"Supports many types of metadata not available through other methods (e.g., Change Set)."}),"\n",(0,t.jsx)(n.li,{children:"Ideal for complex projects, teamwork, and CI/CD integration."}),"\n",(0,t.jsx)(n.li,{children:"Allows automating change transfer using scripts or specialized tools (e.g., Jenkins or GitLab CI)."}),"\n",(0,t.jsx)(n.li,{children:"Full control over exporting and deploying metadata."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cons"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"More complex to set up and use compared to Change Sets and requires knowledge of working with APIs and external tools."}),"\n",(0,t.jsx)(n.li,{children:"Deployment through the Metadata API can be slow, especially for large metadata sets."}),"\n",(0,t.jsx)(n.li,{children:"Labor-intensive for small changes, as it requires careful control of component dependencies."}),"\n",(0,t.jsx)(n.li,{children:"Deployment errors can be difficult to diagnose, especially in complex projects."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Commands and Documentation"}),": Description of working with Metadata API is available in ",(0,t.jsx)(n.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm",children:"Salesforce documentation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"salesforce-dx-project-source-format",children:"Salesforce DX Project (Source Format)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Features"}),": ",(0,t.jsx)(n.strong,{children:"Salesforce DX Project (Source Format)"})," is a format for organizing source code and metadata, introduced with Salesforce DX (Developer Experience). Unlike ",(0,t.jsx)(n.strong,{children:"Metadata API Format"}),", ",(0,t.jsx)(n.strong,{children:"Source Format"})," organizes metadata more modularly and structurally. This format is designed for easy version control integration, modular development support, and improved teamwork. It is especially useful for managing metadata within CI/CD processes."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pros and Cons"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pros"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Supports modular development: source code and metadata are broken into smaller parts, making them easier to manage."}),"\n",(0,t.jsx)(n.li,{children:"Full integration with version control systems (e.g., Git), improving change tracking and collaboration."}),"\n",(0,t.jsx)(n.li,{children:"Supports CI/CD processes and deployment automation."}),"\n",(0,t.jsx)(n.li,{children:"Simplifies working with packages, allowing easier management of component dependencies and versions."}),"\n",(0,t.jsx)(n.li,{children:"Allows working with a local version of the project, making development and testing more flexible."}),"\n",(0,t.jsxs)(n.li,{children:["Easily converts to ",(0,t.jsx)(n.strong,{children:"Metadata Format"})," for subsequent deployment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cons"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Requires a higher technical skill level for setup and use compared to traditional tools like Change Set."}),"\n",(0,t.jsx)(n.li,{children:"Can be complex for small projects where CI/CD or team collaboration is unnecessary."}),"\n",(0,t.jsxs)(n.li,{children:["Requires using ",(0,t.jsx)(n.strong,{children:"Salesforce CLI"})," and additional tools, which may be unfamiliar to developers previously using only Salesforce\u2019s standard interfaces."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Commands and Documentation"}),": Detailed information about Salesforce DX can be found in ",(0,t.jsx)(n.a,{href:"https://developer.salesforce.com/tools/sfdxcli",children:"Salesforce DX documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8971:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Deployment_Release_and_Deployment-8d666ab41fa7dc8331c318d06e3bca86.webp"},5856:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Deployment_Sources_of_Truth-3a729066cb78aa1671c622c99da6c57c.webp"},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var t=s(7294);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);