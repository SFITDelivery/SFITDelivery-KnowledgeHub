---
sidebar_position: 3
title: Deployment Options for Metadata
tags: [Managment, Deployment, Metadata]
---

The efficiency of delivering changes directly depends on the choice of code deployment methods to different environments. An incorrect choice can lead to excessive time and resource expenditures, slowing down the process, reducing efficiency, and increasing development costs.

This article discusses key approaches to deploying metadata to target environments in DX Project (source format), which is widely used in development.

## Full Metadata Deployment

This method is typical for projects with a less developed CI/CD culture and is often found in smaller projects where resources or opportunities to engage CI/CD specialists are limited. A full deployment takes more time as it involves deploying all metadata and running all tests.

Large projects generally favor more flexible deployment methods where only the modified metadata is deployed, saving resources and shortening delivery timelines while maintaining reliability and consistency.

### Technical Implementation
The implementation is carried out using basic commands: <br />
`$ sf project deploy start --source-dir force-app --target-org my-org` <br />
where `force-app` can contain all project files.  

Alternatively, deployment can be performed using: <br />
`$ sf project deploy start --manifest path/to/package.xml --target-org my-org` <br />
In this case, the `package.xml` file must specify all project metadata.
### Advantages
1. **Simplified Deployment Process**: Full deployment from a single directory allows for easy automation, as all metadata objects are gathered in one place, reducing the need for complex configurations for selective deployment.
2. **Environment Integrity**: Deploying all metadata at once reduces the risk of incomplete deployment. The entire structure and dependencies between components are deployed simultaneously, minimizing the likelihood of errors.
3. **Version Stability**: Full deployment ensures that changes made by developers are synchronized, preventing conflicts. This is especially crucial for large teams where uncoordinated configuration changes can lead to version incompatibilities.
4. **Simplified Dependency Management**: With full deployment, there is no need to track dependencies, as all objects are deployed together, reducing the risk of missing required components (such as triggers requiring Apex classes).
5. **Minimal Configuration for Selective Deployment**: Deploying from `force-app/main/default` removes the need for additional setup for deploying individual files, simplifying CI/CD configuration.

### Disadvantages
1. **Deployment of Unnecessary Changes**: The project may contain components that do not require updates. Full deployment may include them, leading to unintended changes and making rollbacks or conflict resolution with other developers more complex.
2. **Increased Deployment Time**: Full deployment takes longer than selective deployment of modified components, which is particularly critical for large projects where every additional operation slows the process.
3. **Potential Environmental Conflicts**: Deploying all metadata, especially with varying configurations (e.g., environment variables), can create conflicts in the target environment.
4. **Risk of Overwriting Custom Settings**: Full deployment can inadvertently overwrite configurations manually set in the target environment. For instance, production profile changes might be reset. This risk can be mitigated by configuring the `forceignore` file.
5. **Version Control Challenges**: Full deployment makes it harder to track changes in code and metadata. Without strict version control, issues with rollback and restoration may arise.
6. **CI/CD Process Inefficiency**: Full deployment requires CI/CD to process all metadata, even if only one component has changed, reducing efficiency and increasing testing load.

### Full deployment may be justified in the following cases:

- Small projects or projects with minimal metadata, where deployment time is not critical.
- Early development stages when the system structure is still unstable and most metadata is subject to change.
- Projects requiring complete environment consistency, where any deviation from the full version may cause errors.

## Partial Metadata Deployment (Delta Deployment)

Delta deployment is a method in which only modified metadata is updated, leaving the rest of the structure untouched. This approach is often used in projects with mature CI/CD processes, where minimizing deployment time and reducing the risks associated with accidental changes or overwriting settings is essential. While delta deployment requires more complex setup, its advantages make it preferable for large projects with active development and robust version control.

### Technical Implementation

The command for deploying only specific parts of metadata is similar to deploying the entire metadata set. However, in this case, you need to specify the directory or individual metadata components that you want to deploy.

For example:<br />
`$ sf project deploy start --source-dir force-app/main/default/classes/MyClass.cls --source-dir force-app/main/default/flows/MyFlow.flow-meta.xml --source-dir force-app/main/default/permissionsets/My.permissionset-meta.xml --target-org my-org`

Alternatively, you can use deployment with `package.xml`: <br />
`$ sf project deploy start --manifest path/to/package.xml --target-org my-org` <br />
In this case, however, your package should include only the modified metadata.  
Automation tools can be used to generate such specific packages.

### Advantages

1. **Time and Resource Savings**: Delta deployment reduces deployment time by updating only modified metadata, which is crucial for large projects where full deployment can be time-consuming.
2. **Reduced Risk of Overwriting Settings**: Delta deployment minimizes the chance of accidental changes to user settings in the target environment, as only modified components are updated.
3. **Flexibility and Modularity in CI/CD**: Delta deployment supports flexible CI/CD pipelines, enabling deployment at the component level and allowing for staged deployment phases.
4. **Version Management Ease**: Deploying only modified metadata simplifies tracking and managing changes in version control systems (such as Git), easing rollback and restoration of specific component versions.
5. **Testing Optimization**: Reducing the deployment scope allows for testing only the modified components, lessening the load on the test environment and speeding up the CI/CD process.
6. **Improved Delivery Efficiency**: Delta deployment at every stage of CI/CD accelerates the release of changes, especially on large projects.
7. **Enhanced Quality Control**: Delta deployment enables detailed quality checks at various delivery stages, as only modified components are deployed.

### Disadvantages
1. **Complex Configuration**: Delta deployment requires careful configuration, including lists of modified components, dependency tracking, and testing setup for only the modified parts.
2. **Risk of Missing Dependencies**: Changes in one component may necessitate updates to other components. With complex dependencies, there is a risk of overlooking them, potentially causing errors.
3. **Version Control System Requirements**: Delta deployment requires a reliable version control system to accurately track and manage changes.
4. **Limited Applicability in Early Development Stages**: During active development, when the project structure is unstable, delta deployment can complicate the process due to frequent updates across multiple components.
5. **Challenges in Testing Isolated Changes**: Some tests may depend on components that have not been modified, requiring complex testing logic to maintain system integrity.


### Delta deployment is suitable for the following situations:
- **Large Projects with Extensive Metadata**: It helps significantly reduce load and speed up the release process.
- **Projects with Frequent, Minor Changes**: For projects with regular updates, delta deployment ensures efficient updates.
- **Stable Architecture**: If the system structure is stable and dependencies between components are well-understood, delta deployment minimizes risks.
- **High Level of CI/CD Automation**: Delta deployment is most effective in projects with advanced CI/CD automation, where automatic tracking and deployment of only modified components are possible.