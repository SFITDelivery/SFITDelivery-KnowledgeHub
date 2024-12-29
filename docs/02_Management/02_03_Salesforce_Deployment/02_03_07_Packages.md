---
sidebar_position: 7
title: Types of Packages in Salesforce
tags: [Managment, Deployment, Unlocked]
---

**Unlocked Package** — used for modular development, allowing developers to update, modify, and version packages for dependency management. Frequently utilized for internal development, it supports full CI/CD automation and enables a flexible approach to delivering solutions to users.

**Managed Package** — a controlled package intended for commercial distribution via AppExchange or for use with restrictions that protect code and allow updates.

**Unmanaged Package** — an open package allowing distribution of code and metadata without update capability or version control. It’s used for sharing templates, examples, trials, and other metadata sets that recipients can modify.

## Unlocked Packages

**Unlocked Packages** are a Salesforce feature designed for modular development, dependency management, and metadata versioning. Unlike traditional approaches, where all code is stored in a single project, unlocked packages allow functionality to be divided into independent packages that can be deployed, updated, and managed separately. This approach is especially beneficial for large projects and projects with frequent updates, as it enhances code structure, simplifies dependency management, and enables version control.

Unlocked Packages are supported in both Salesforce DX and the Salesforce CLI, allowing them to integrate into CI/CD processes and automate package management. They organize development at a higher level, providing modularity, update flexibility, and improved integration with CI/CD processes.

### Advantages
1. **Modularity and Code Structuring**: Unlocked packages allow dividing a project into independent modules, making the code more structured and enabling teams to work on different packages simultaneously, reducing conflict risk and simplifying code management.
2. **Version Control and Rollback Capabilities**: Each package can be versioned, allowing tracking changes, reverting to previous versions, and managing updates flexibly. This aids in version control and simplifies rollback processes when necessary.
3. **Flexibility in CI/CD Processes**: Unlocked packages integrate easily into CI/CD processes, enabling automated creation and deployment of packages. This facilitates releasing updates as individual packages are ready, accelerating development and improving release management.
4. **Deployment Optimization**: Since unlocked packages can be deployed independently, deployments become faster and more manageable, reducing the time for changes and the risk of dependency or code conflicts.
5. **Dependency Management**: Unlocked packages support dependency management between modules, simplifying work with large projects and preventing conflicts between components. This also improves control over change implementation as each dependency is explicitly defined.
6. **Quick Production Deployment of Changes**: Development of unlocked packages includes promotion based on successfully created versions with test runs, eliminating the need for production test execution, saving time during production deployments.
7. **Solution Scalability**: The same version of a package can be installed across various production environments, making it easy to distribute solutions within a company across different regions, for example.

### Disadvantages
1. **Complex Setup Requirements**: Implementing unlocked packages requires initial project structuring and dependency management setup. For teams unfamiliar with the modular approach, transitioning to unlocked packages may take time and require code structure adjustments.
2. **Potential Dependency Issues**: Managing dependencies requires careful oversight, especially in large projects, as numerous or improperly defined dependencies can lead to errors.
3. **Package Content Limitations**: Unlocked packages do not support certain metadata types and may have content restrictions, meaning that some functionality cannot be isolated into separate packages, leaving parts of the code outside packages. You can find the current list of supported metadata at the following - [Metadata Coverage Report](https://developer.salesforce.com/docs/metadata-coverage/62) 
4. **Version Management Complexity with Many Packages**: Managing versions across numerous unlocked packages can become challenging as each version and inter-package dependency must be tracked, increasing the team’s workload, particularly if the project evolves rapidly.
5. **Limited Adaptability for Different Production Environments**: Unlocked packages have restricted metadata modification capabilities in the environment. When installing a new version, any local metadata changes will be overwritten by the package version.

### When It’s Justified

Unlocked packages are especially useful in the following situations:

- **Large and Complex Projects**: In large projects with numerous modules, unlocked packages help structure code and manage changes by dividing the project into independent parts.
- **Frequent Updates and Parallel Development**: Unlocked packages allow teams to work on different modules simultaneously and release updates as they become ready, making development more flexible and accelerating releases.
- **Projects with Many Dependencies**: If a project involves numerous component dependencies, unlocked packages help manage these dependencies, making them explicit and controllable.
- **Need for Version Rollback**: Unlocked packages make it easy to roll back specific changes if errors or functionality issues arise, as each package has a separate version history.

[Additional article on unlocked packages](02_03_08_Unlocked_Packages.md)

## Managed Package

A **Managed Package** in Salesforce is designed for distributing applications and components via AppExchange or for internal use with the ability to update. Managed packages are created with full version control, allowing developers to release updates and patches to users without affecting their data and settings. These packages are closed for code modification, ensuring intellectual property protection and preventing functional interference.

Managed Packages are commonly used for commercial distribution when a developer wants to deliver a ready-made solution to customers via AppExchange, with update capabilities, or for projects requiring strict version control and security. These packages are developed in special DevHub and packaging organizations in Salesforce, ensuring standardization and protection.

### Advantages
1. **Intellectual Property Protection**: Code in a Managed Package is protected and inaccessible for modification by end users, allowing developers to safeguard their code and ensure functionality is used as intended without risk of alteration.
2. **Version Control and Update Support**: Managed packages have built-in versioning systems that enable releasing new versions, updating existing ones, and managing their availability for end users, facilitating easy distribution of updates and patches.
3. **Marketing and Distribution through AppExchange**: Managed packages can be distributed via AppExchange, making them an excellent solution for companies developing applications for a broad Salesforce audience. This channel simplifies marketing and extends reach for developers.
4. **Security and Functionality Control**: Managed packages allow developers to control package component access, hiding internal code and configuration from users, preventing accidental or intentional changes and ensuring application stability.
5. **Business Flexibility and License Management**: Managed packages support licensing and trial versions, enabling subscriptions, controlled distribution, and trial periods, allowing users time to explore the product.

### Disadvantages
1. **Code Closure and Limited Customization**: End users cannot modify code or internal settings in managed packages, which limits customization possibilities, posing a challenge for clients needing functional flexibility and adaptation.
2. **Complex Version Management**: Although managed packages have built-in versioning, handling multiple versions and patches requires careful oversight, as each new version must be compatibility-checked and may require extensive testing.
3. **Dependency on the Package Developer**: All updates and patches must be provided by the package developer, creating dependency on the vendor. If the developer discontinues support, clients lose access to updates or fixes.
4. **AppExchange Certification Requirements**: To list a managed package on AppExchange, it must be certified by Salesforce, which requires additional resources and time, especially for large or complex applications. Certification also mandates compliance with Salesforce security and functionality standards.
5. **Lack of Direct Access to Code for Debugging**: When issues arise, end users cannot modify managed package code for debugging, which complicates troubleshooting. Clients must rely on the developer for resolution.

### When It’s Justified

Managed packages are appropriate in the following cases:

- **Commercial Application Distribution**: Managed packages are ideal for developers and companies looking to distribute their solutions to Salesforce customers via AppExchange, offering code protection and revenue opportunities.
- **Security and Control**: Managed packages are an excellent choice for applications requiring security and control over functionality, ensuring users cannot interfere with source code or functionality, preventing errors.
- **Subscription-Based Business Models**: Managed packages support licensing and trial versions, making them suitable for subscription-based or paid applications that require access control and trial periods.
- **Need for Updates and Support**: Managed packages are suitable for projects requiring regular updates and support, as their version control system enables new feature, patch, and update releases without complex procedures.

## Unmanaged Package

An **Unmanaged Package** in Salesforce allows distributing components and metadata without version control or update capability. Unlike managed and unlocked packages, an unmanaged package provides open access to source code and configuration after installation, enabling recipients to modify and adapt package components in the target environment. This type of package is often used for templates, instructional examples, and trial solutions that do not require developer support or updates.

Unmanaged packages offer a simple, convenient way to distribute metadata and solutions that users can freely adapt and modify post-installation.

### Advantages
1. **Free Editing**: Unmanaged packages provide complete access to components post-installation, allowing users to edit and adapt them, making them suitable for customization to specific business needs.
2. **Ideal for Education and Template Distribution**: Unmanaged packages are perfect for providing educational resources, trial solutions, and templates that users can explore and adapt without requiring developer support.
3. **Ease of Use**: Since unmanaged packages do not require version control or dependency management setup, they are easy to create and convenient for quick solution distribution among users.

### Disadvantages
1. **No Version Control or Updates**: Unmanaged packages do not support versioning, so developers cannot update them post-installation. Changes to code or metadata are not propagated to already installed packages, limiting long-term use.
2. **Low Level of Code Control**: As all package components become editable, source code and configurations can be modified or deleted by the recipient, affecting the developer's original design and complicating support.
3. **Unsuitable for Large-Scale Solutions**: Unmanaged packages lack security and dependency