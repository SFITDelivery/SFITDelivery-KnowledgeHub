---
sidebar_position: 5
title: Big Bang
tags: [Managment, Change]
---
**Big Bang Deployment** is a deployment strategy where all changes are implemented simultaneously in the target environment. Unlike [Phased rollouts](docs/02_Management/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts.md) or [Dark Launches](docs/02_Management/02_04_Delivery_Strategies/02_04_03_Dark_Launches.md), Big Bang Deployment involves making all new functionalities available to all users at once. This approach carries a high level of risk, as all changes become active simultaneously, and rolling back changes is typically more challenging.

In Salesforce, this approach is often used due to its simplicity.

## **Features of Big Bang Deployment**
1. **One-time Update:**  
    All changes are deployed simultaneously to the target environment (e.g., Production).
    
2. **Minimal Testing in Production:**  
    Unlike **Phased rollouts** or **Dark Launches**, new functionality is immediately available to all users, making live testing impossible before the release. As a result, releases are often scheduled during non-working hours for the users.
    
3. **Requires Careful Planning:**  
    The lack of a phased rollback option necessitates a high level of preparedness for potential issues. This strategy requires a deep understanding of dependencies and potential risks.
    
4. **Dependence on the Target Environment:**  
    The success of Big Bang Deployment directly depends on the quality of testing in pre-production environments (e.g., Full Sandbox in Salesforce).
    
5. **Need for a Robust HotFix Process:**  
    Due to the complexity of rolling back changes after deployment, a pre-developed and tested process for quick fixes is essential.
    
## **Key Points for Managing Big Bang Deployment**
1. **Thorough Preparation and Planning**    
    - The strategy requires a detailed deployment plan, including steps, timelines, and responsible individuals.
    - All changes should be thoroughly tested in environments that closely resemble Production.
    - Deployment and testing processes on the target environment must be well-prepared.
    - There must be readiness for unforeseen issues, including a mechanism for emergency fixes.
      
2. **User Training**    
    - Users must be prepared for the new changes.
    - Training sessions and the creation of instructional materials, including user guides for new features, are essential parts of the release.
    - Preferably, users should be trained in separate environments before the production release.
      
3. **Backup Plan (Rollback Plan)**    
    - A rollback strategy for critical errors post-deployment is necessary (the release team must have the tools and processes for rolling back changes or implementing HotFixes).
    - The rollback process must be carefully planned, accounting for risks and required resources.
    - It is advisable to conduct drills of the rollback strategy to ensure staff readiness and process optimization.
      
4. **Communication**    
    - All personnel involved in deployment, testing, and support should be identified and briefed.
    - The strategy requires establishing a channel for addressing issues promptly after release.
    - Stakeholder communication about the release preparations is crucial, with particular emphasis on a pre-determined group during the deployment process.
      
5. **Post-Deployment Monitoring**    
    - A monitoring system to track performance and stability is critical, as is automated testing during Big Bang deployment.
    - Quick-response channels for user-reported issues and feedback should be in place to address errors swiftly.

## Advantages and Disadvantages of Big Bang Deployment
### Advantages:
1. **Quick Deployment:**  
    All changes are implemented at once, reducing the time needed for the deployment process, which is particularly useful for urgent updates.
    
2. **Unified Update for All Users:**  
    No need to manage multiple versions of the system or isolated environments.
    
3. **Simplified Management:**  
    Fewer steps and phases compared to phased rollouts or Dark Launches.
    
### Disadvantages:
1. **High Risk:**  
    Errors discovered post-release can impact all users and the entire organization.
    
2. **Rollback Complexity:**  
    In case of critical issues, rolling back changes can be lengthy and labor-intensive for large-scale updates.
    
3. **Demanding Preparation:**  
    Extensive testing and preparation are required to avoid failures.
    
4. **Increased Load on Support Teams:**  
    After deployment, the support team may face heavy workloads managing user requests and issues.
    
## When is Big Bang Deployment Applicable?
### 1. Minimal Integration Dependencies
    - When changes minimally affect integrations with other systems.
    
### 2. Limited Feasibility for Phased Rollouts:    
    - In cases where the architecture or business processes do not support phased rollouts or Dark Launches.
      
### 3. Organizations with Low Change Criticality:
    - When system failures do not lead to significant losses or business stoppages.


