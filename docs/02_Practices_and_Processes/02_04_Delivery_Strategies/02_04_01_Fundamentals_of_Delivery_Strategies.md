---
sidebar_position: 1
title: Fundamentals of Delivery Strategies
tags: [Managment, Delivery, Base]
---
In modern change management, the key task is to minimize risks when deploying new features while ensuring system stability. Deployment methods such as [Big Bang](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_05_Big_Bang.md), [Phased Rollouts](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts.md), [Dark Launches](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_03_Dark_Launches.md), [Blue-Green Deployment](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_04_Blue_Green.md), and [A/B Testing](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_06_A_B_Testing.md) allow for a flexible approach to implementing changes depending on the context and business goals.

Deployment methods are not just technical tools but also a crucial part of a change management strategy. Understanding the pros and cons of each approach, as well as their interconnections, helps choose the optimal strategy, minimizing risks and increasing user satisfaction.

## Why Is It Important to Know Deployment Methods?
Choosing the right deployment method depends on the task at hand and can:
- Reduce risks associated with deployment errors.
- Improve system stability and performance.
- Collect feedback and metrics to optimize changes.
- Quickly respond to unforeseen issues through flexible process management.

Incorrect strategy selection can lead to disruptions and financial losses.  
This topic is also closely related to [Release Management](docs/02_Practices_and_Processes/02_01_Release/02_01_01_Release_Management.md).

Examples of well-known issues caused by incorrect releases:
- **GitLab (2017):** A production database error and the lack of proper backups caused the company to lose a significant amount of data.
- **Facebook (2019):** A failed server configuration update led to a global outage of Facebook, Instagram, and WhatsApp.
- **Slack (2019):** Introducing a new feature without adequate testing caused disruptions in message delivery and service connectivity.

**It is important to remember that no one is completely immune to failures. The more complex a system, the higher the risk of errors. Release, change, and deployment management help control these risks.**

## Who Is Responsible for Choosing the Strategy?
The selection of a deployment strategy is typically the responsibility of a cross-functional team that includes:
- **Project Managers:** To align business goals with technical solutions.
- **DevOps Engineers:** To implement the chosen strategy in practice.
- **Testers:** To verify the stability of new features.
- **Business Representatives:** To assess the impact of changes on end users.

## Types of Delivery in Change Management and Factors Influencing Strategy Selection
Smaller projects typically rely on a single delivery type that meets basic project needs. However, using only one delivery type can indicate immature delivery processes. As the project grows and business requirements for systems and processes increase, it makes sense to implement three types of delivery (change management) based on the type of change, in accordance with ITIL’s change classification:
- **Standard Changes:** Routine, low-risk changes (e.g., adding users to the system or enabling/disabling temporary features). These are often pre-approved, and a list of changes is accessible to stakeholders.
- **Normal Changes:** Require planning, risk analysis, and approval (e.g., configuring and updating APIs for system interaction or implementing a new version of software or a module).
- **Emergency Changes:** Urgent changes to resolve high-priority incidents (e.g., security patches or hotfixes).

For each type of change, it is essential to predefine the delivery approach. This allows for a timely and appropriate response to circumstances.

## Factors Influencing Strategy Selection
The choice of strategy depends on the following factors:
1. **Size and Complexity of Changes:** Small changes can be deployed using Big Bang, while larger ones require Phased Rollouts or Blue-Green Deployment.
2. **Business Risks:** If system failures are critical, strategies with minimal risk (e.g., Dark Launches or Blue-Green Deployment) are preferable.
3. **User Base:** For a large audience, gradual rollout methods like Phased Rollouts is important.
4. **Integrations:** Complex systems with integrations require thorough testing, making Dark Launches or Blue-Green Deployment more suitable.

Defining a clear approach to changes helps minimize risks and respond effectively to emerging issues.

## A Brief Analysis of Methods
Below are the advantages and disadvantages of each approach.

|**Method**|**Advantages**|**Disadvantages**|
|---|---|---|
|[**Big Bang Deployment**](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_05_Big_Bang.md)|Fast deployment, unified system version.|High risk, rollback complexity, support load.|
|[**Phased Rollouts**](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts.md)|Risk minimization, feedback collection, management flexibility.|Long deployment, resource management challenges.|
|[**Dark Launches**](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_03_Dark_Launches.md)|Real-world testing, risk minimization, support for A/B testing.|Setup complexity, hidden functionality management.|
|[**Blue-Green Deployment**](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_04_Blue_Green.md)|Minimal downtime, quick rollback, system stability.|High infrastructure costs, complex data and version management.|

## Summary Table for Strategy Selection
To better characterize strategies based on delivery process requirements, the following table has been created:

|**Conditions**|**Recommended Strategies**|
|---|---|
|**Small Volume of Changes**|[Big Bang Deployment](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_05_Big_Bang.md)|
|**High Business Risks**|[Phased Rollouts](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts.md), [Dark Launches](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_03_Dark_Launches.md), [Blue-Green Deployment](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_04_Blue_Green.md)|
|**Large User Base**|[Phased Rollouts](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_02_Phased_Rollouts.md)|
|**Integration with Other Systems**|[Dark Launches](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_03_Dark_Launches.md), [Blue-Green Deployment](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_04_Blue_Green.md)|
|**Testing New Features**|[A/B Testing](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_06_A_B_Testing.md), [Dark Launches](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_03_Dark_Launches.md)|
|**Minimal Downtime and Fast Backup Requirements**|[Blue-Green Deployment](docs/02_Practices_and_Processes/02_04_Delivery_Strategies/02_04_04_Blue_Green.md)|
