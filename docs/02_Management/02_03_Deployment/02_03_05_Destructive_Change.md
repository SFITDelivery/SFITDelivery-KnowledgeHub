---
sidebar_position: 5
title: Destructive Change
tags: [Managment, Deployment, Destructive Change]
---

**Destructive Changes** refer to the process of removing outdated metadata (such as fields, objects, classes, pages, and other components) that are no longer needed in the target environment. This is important for maintaining system cleanliness and improving performance, as it helps eliminate unused or outdated components.

Destructive changes are typically executed through a specific file, `destructiveChanges.xml`, which lists the components to be removed. This file is included in the deployment, and upon execution, the specified components are deleted from the target environment.

**Destructive Changes** can be executed in different scenarios: before the main deployment, after the main deployment, or as a separate process. The approach depends on deployment goals and the system’s change management strategy.

## Technical Implementation of Destructive Changes

The `destructive-changes` command is used as an addition to the deployment command, allowing for metadata deletion. There are two options for this:
- `--post-destructive-changes`
- `--pre-destructive-changes`

After the flag, you need to specify the path to a `package.xml` file (the filename can be customized, such as `destructiveChangesPre.xml`) containing the metadata to be deleted.

For example:<br />
`$ sf project deploy start --manifest path/to/package.xml --target-org my-org --post-destructive-changes path/to/destructiveChangesPost.xml`<br />

**Note:**  
In this command, `--manifest path/to/package.xml` can be empty, containing no metadata. In such cases, only the destructive changes will be executed.

## Executing Destructive Changes Before Deployment

Running destructive changes before the main deployment removes unnecessary components from the target environment before updating the remaining ones. This method is useful when:
- The team wants to clean the environment of outdated or conflicting components before introducing new functionality.
- Space is needed for components that will be updated or replaced in the current deployment.
- When there are dependencies on new components that need to be overridden or updated.
- In deployments with significant changes to the metadata structure, where it’s important to clear the environment of conflicting components in advance.

### Advantages
1. **Reduced Deployment Conflicts**: Removing unnecessary or conflicting components before deployment helps avoid conflicts associated with creating new versions of components.
2. **Environment Cleanliness**: Clearing outdated components before deployment keeps the environment up-to-date, simplifying metadata management.

### Disadvantages
1. **Risk of Removing Necessary Components**: There must be certainty that the components marked for deletion are no longer needed. Otherwise, essential metadata may be inadvertently removed.
2. **Complex Deployment Preparation**: Thorough testing is required to confirm that no dependencies exist that could cause failures.

## Executing Destructive Changes After Deployment

This approach involves removing components after the main deployment. It is beneficial when it’s essential to implement updates first and then remove unnecessary components to ensure the new code and metadata work correctly.
This method is useful when:
- After successful implementation of the main functionality, to ensure that component removal does not lead to system failures.
- In deployments requiring a smooth transition with the option to restore deleted components in case of unforeseen issues.
- When additional testing of the main deployment is needed before removing redundant components.

### Advantages
1. **Reduced Risk of Critical Changes**: The main deployment first updates the system, and only then are unnecessary components removed, reducing the risk if deleted components are still needed.
2. **Smoother Transition**: Executing destructive changes after deployment provides a smoother transition, as priority is given to adding new functionality rather than removing outdated parts.

### Disadvantages
1. **Potential Conflicts with Updated Components**: If destructive changes were not planned in advance, conflicts could arise after implementing new functionality.

## Destructive Changes as a Separate Process

In some cases, it makes sense to perform destructive changes as a separate process. This is justified, for example, when a large cleanup of outdated components is needed, separate from the main deployment.

### Advantages
1. **Reduced Risk to Other Processes**: Destructive changes are carried out independently, reducing the risk to the current version.
2. **Flexibility**: The team has more freedom to plan and initiate destructive changes as needed, without linking them to main releases.
3. **Simplified Testing and Control**: A separate process makes it easier to control component removal and allows for easy restoration of deleted metadata if necessary.

### Disadvantages
1. **Additional Support and Control Required**: Extra resources and time are needed to carry out destructive changes, which may prolong the environment maintenance process.
2. **Need to Track Dependencies**: Destructive changes performed separately may impact other components if strict dependency control is not ensured.

### When It’s Justified
- For routine cleanup of outdated or unnecessary components not tied to main releases.
- When there is a significant volume of destructive changes that are challenging to integrate into the main deployment.
- When changes are unrelated to new functionalities and are necessary to maintain order in the environment.