---
sidebar_position: 4
title: Run Tests for Deployment
tags: [Managment, Deployment, Tests]
---

Effective testing is crucial to ensuring the quality of deployed changes. Choosing the right approach for test execution helps optimize time and resource costs while minimizing risks associated with potential errors. This article examines two main approaches to test execution during deployment: running all tests (RunLocalTests) and running specific tests (RunSpecifiedTests). Each approach has its advantages and disadvantages, and the choice depends on the project’s current goals and CI/CD strategy.

## Running All Tests — RunLocalTests

Using the **RunLocalTests** parameter during deployment initiates all local tests written in the project (excluding tests in managed packages or those dependent on external packages). If tests are deployed within a package, the version from the current deployment is used. This approach ensures a high degree of code quality and system stability verification before introducing changes to the target environment.

### Technical Implementation of Tests

The technical implementation of tests is independent of the chosen deployment type. Whether you select deployment by directory, specific files, or `package.xml`, the approach remains the same.

To run all local tests (including those in the deployment), you need to specify the following option: <br />
`--test-level RunLocalTests`


For example: <br />
 `$ sf project deploy start --manifest path/to/package.xml --target-org my-org --test-level RunLocalTests`
### Advantages
1. **Maximum Confidence in Code Quality**: Running all local tests ensures that even non-obvious errors unrelated to the current changes are detected, helping to prevent issues that might otherwise go unnoticed with selective testing.
2. **System Integrity**: Running all tests before deployment confirms that new changes do not break existing functionality, supporting system integrity across all modules.
3. **Standardization of the Testing Process**: Regularly running all tests maintains high development standards and standardizes code review processes, which is particularly beneficial for large teams with varied responsibilities.
4. **Detection of Hidden Dependencies**: Running all tests highlights dependencies between modules and objects that might be affected by changes, reducing the risk of unexpected failures in the production environment.

### Disadvantages
1. **Increased Deployment Time**: Running all tests can take considerable time, especially on large projects with many classes, lengthening the delivery process, which is critical when frequent deployments or urgent releases, such as HotFixes, are required.
2. **Increased CI/CD Infrastructure Load**: Running all tests requires additional computational resources, increasing the load on the CI/CD infrastructure and potentially reducing performance for other tasks.
3. **Redundant Testing for Minor Changes**: For small or localized changes, running all tests may be excessive, as many tests are unrelated to the changes, making the deployment process less efficient.
4. **Risk of False Positives**: With a large volume of tests, the likelihood of false positives increases, requiring additional time for checking and analyzing results.

###  Running all tests with the **RunLocalTests** parameter is appropriate in the following scenarios:

- **Significant Changes or Deployment to Production**: For critical releases and deployments to production, running all tests helps ensure stability and code quality.
- **Regression Before Major Releases**: Full testing is beneficial before large releases to ensure that all aspects of the system work correctly after substantial changes.
- **Stable CI/CD Infrastructure**: If the team has a well-organized CI/CD infrastructure with sufficient resources, regularly running all tests helps maintain a high level of quality.
- **Projects with High Component Dependency**: In large projects with closely interconnected components and complex dependencies, running all tests helps identify potential issues early on.

## Running Specific Tests — RunSpecifiedTests

Using the **RunSpecifiedTests** parameter during deployment executes only specified tests, enabling the team to run only those necessary to verify specific changes. This method is particularly useful when rapid changes need to be deployed without involving the entire test suite and is preferred for optimizing CI/CD processes in projects with frequent, small updates.

### Technical Implementation of RunSpecifiedTests

Similar to `RunLocalTests`, the technical implementation of `RunSpecifiedTests` does not depend on the selected deployment type. Whether you choose deployment by directory, specific files, or `package.xml`, the approach remains the same.

To run specified tests (including those in the deployment), you need to set the option: <br />
`--test-level RunSpecifiedTests` <br />
and specify the tests using the `--tests` flag.

For example: <br />
`$ sf project deploy start --manifest path/to/package.xml --target-org my-org --test-level RunSpecifiedTests --tests MyTest1 --tests MyTest2 --tests MyTest3` <br />
Note: Only the test names should be specified—omit the `.cls` extension.
### Advantages
1. **Time Savings and Faster Deployment**: Running only necessary tests significantly reduces deployment time, especially in large projects with numerous tests where a full run could be too lengthy.
2. **Reduced CI/CD Infrastructure Load**: The **RunSpecifiedTests** parameter reduces the load on CI/CD infrastructure as it requires fewer resources than running all tests.
3. **Testing Flexibility**: The ability to select specific tests gives the team flexible control, enabling them to run only critical tests or those directly related to changes, which helps detect potential issues faster.
4. **Optimization for Urgent Fixes and Frequent Releases**: Deploying with only the necessary tests suits situations where quick fixes (such as HotFixes) are needed, avoiding the delay of running all tests and thus minimizing downtime and speeding up release.
5. **Quality Control**: This method fits well within quality control systems and automated CI/CD processes. For example, when a class is changed in a pull request to the integration branch, only related tests can be automatically triggered, allowing issues to be detected early.

### Disadvantages
1. **Risk of Missing Dependent Tests**: If modified components rely on other parts of the system, running only specific tests might not cover all possible scenarios, increasing the chance of errors that a full test run could reveal.
2. **Need to Maintain Test Lists**: Maintaining up-to-date test lists is necessary, particularly if the project is actively evolving. This may increase the team’s workload, as they must carefully select tests for each deployment and maintain systems of control, like a test coverage matrix.
3. **Risk of a False Sense of Security**: Running only selected tests may lead the team to underestimate the potential impact of changes on other parts of the system, creating a risk of unnoticed errors in other modules.

###  Running tests with the **RunSpecifiedTests** parameter is appropriate in the following scenarios:

- **Frequent and Small Changes**: If the team makes frequent but minor updates, running only necessary tests helps accelerate deployment and reduce the load on CI/CD infrastructure.
- **HotFixes and Urgent Updates**: In cases where a quick release is needed to fix an error, running only critical tests enables fast deployment, minimizing the time needed to deliver fixes.
- **Testing of Independent Components**: When changes are isolated to specific functionality, running only relevant tests allows focus on the needed areas without requiring all tests to be executed.
