---
sidebar_position: 9
title: Test Coverage Matrix
tags: [Managment, Deployment, Tests]
---

The **Test Coverage Matrix** is a tool that tracks the relationship between test classes and the classes they cover, along with additional information such as coverage percentage, the date of the last test run, and comments. It is a vital tool for managing code quality, providing simplified access to test coverage data, and enabling change tracking.

The matrix is structured data that can be represented in various formats, such as XML, JSON, or YAML.

## Why Do You Need a Test Coverage Matrix?

1. **Simplifying Test Coverage Analysis**  
    The matrix offers an easy way to identify which tests cover specific classes and evaluate their coverage levels. This is particularly important for large projects with extensive codebases, where manual analysis becomes overly time-consuming.   
2. **Managing Dependencies and Testing Priorities**  
    The matrix helps efficiently manage relationships between tests and classes, allowing you to run only the necessary tests. This reduces testing time and is especially useful in scenarios requiring quick responses, such as deploying **hotfixes**.
3. **Historical Tracking and Diagnostics**  
    Storing information about the date of the last test run and coverage levels helps track the relevance of tests, identify outdated or irrelevant tests, and detect changes that have impacted coverage.
4. **Improving Coverage Data Quality**  
    The matrix compensates for the shortcomings of Salesforce’s built-in test coverage data by providing an independent and reliable source. This ensures accurate analysis and verification of data.
5. **Automating Code Quality Control**  
    The matrix supports automation of quality control processes, ensuring transparency in test coverage. This helps maintain development standards and speeds up the resolution of identified issues.
6. **Integration with DevOps and CI/CD Processes**  
    The matrix simplifies the integration of testing into CI/CD pipelines, optimizing the deployment and verification of changes. This makes processes more consistent and reliable.
7. **Accelerating Code Reviews and Audits**  
    The matrix facilitates the analysis of coverage for changes, helping reviewers and testers quickly verify code quality and identify gaps.
8. **Fostering a Culture of Test Improvement**  
    A transparent data structure in the matrix motivates teams to track testing progress. Increasing coverage percentages and clearly understanding the current state promote a culture of quality and collaboration.
    
## Key Requirements for the Matrix

1. **Developer Usability**  
    The matrix should be intuitive and accessible to all development team members. It should provide information in an easy-to-use format (e.g., JSON, XML, or YAML) and integrate seamlessly into the team's workflows. The interface or file structure should minimize time spent working with the data.
2. **Automation-Friendly**  
    The matrix should easily integrate with automation tools like CI/CD pipelines or quality control systems. Its data format should be standardized and suitable for programmatic processing, enabling scenarios like automated report generation and coverage checks during deployment.
3. **Support for Multiple Test Classes Per Class**  
    In complex projects, a single class may be covered by multiple tests. The matrix should support specifying multiple test classes for one validated class to ensure transparency and meet project coverage requirements.
4. **Ability to Add Comments**  
    The matrix should allow for adding comments to classes, tests, or their relationships. These comments could include critical information for developers, such as the reason for insufficient coverage or specific testing details. Additionally, some comments can be used in automation logic, such as skipping specific classes in tests or providing processing instructions.
5. **Data Relevance**  
    The matrix should include information about the last update of coverage for each class. This helps teams analyze the relevance of data and take timely actions to update it, avoiding the use of outdated or irrelevant information.
6. **Principle of Necessity and Sufficiency**  
    The matrix should avoid redundancy by storing only necessary and sufficient information. This means including only those tests and classes that have actual relationships and are important for coverage analysis. Excessive detail or data duplication can complicate the use of the matrix and automation processes.
    
## Example of a Test Coverage Matrix

### XML Example
```xml
<?xml version="1.0" ?>
<classes>
	<class>
		<testname>MyClassTest.cls</testname>
		<coverage>100.0%</coverage>
		<date>2023_12_31</date>
		<classname>MyClass.cls</classname>
		<description>Specific dependencies</description>
	</class>
	<class>
		<testname>MyClass2Test.cls</testname>
		<coverage>76.62%</coverage>
		<date>2023_12_31</date>
		<classname>MyClass2.cls</classname>
		<description>Note on the class</description>
	</class>
	<class>
		<testname>MyClass1Test.cls</testname>
		<testname>MyClass3Test.cls</testname>
		<coverage>91.37%</coverage>
		<date>2023_12_31</date>
		<classname>MyClass3.cls</classname>
		<description>Note on coverage</description>
	</class>
</classes>
```
### JSON Example
```json
[
    {
        "testname": "MyClassTest.cls",
        "coverage": "100.0%",
        "date": "2023_12_31",
        "classname": "MyClass.cls",
        "description": "Specific dependencies"
    },
    {
        "testname": "MyClass2Test.cls",
        "coverage": "76.62%",
        "date": "2023_12_31",
        "classname": "MyClass2.cls",
        "description": "Note on the class"
    },
    {
        "testname": [
            "MyClass1Test.cls",
            "MyClass3Test.cls"
        ],
        "coverage": "91.37%",
        "date": "2023_12_31",
        "classname": "MyClass3.cls",
        "description": "Note on coverage"
    }
]

```
### YAML Example
```YAML
- testname: MyClassTest.cls
  coverage: "100.0%"
  date: 2023_12_31
  classname: MyClass.cls
  description: Specific dependencies
- testname: MyClass2Test.cls
  coverage: "76.62%"
  date: 2023_12_31
  classname: MyClass2.cls
  description: Note on the class
- testname:
    - MyClass1Test.cls
    - MyClass3Test.cls
  coverage: "91.37%"
  date: 2023_12_31
  classname: MyClass3.cls
  description: Note on coverage
```

## How to Retrieve Data for the Matrix

To build the test coverage matrix or analyze code coverage in Salesforce, **SOQL queries** can be used via the **Tooling API**. Below are methods to extract coverage data.

### 1. Overall Coverage for Each Class or Trigger
Use this query to retrieve aggregated code coverage for each class or trigger: <br />
`SELECT ApexClassOrTrigger.Name, NumLinesUncovered, NumLinesCovered FROM ApexCodeCoverageAggregate` <br />

**Fields in the Result:**
- `ApexClassOrTrigger.Name`: The name of the class or trigger.
- `NumLinesUncovered`: The number of uncovered lines.
- `NumLinesCovered`: The number of covered lines.

This query is suitable for high-level analysis of code coverage in a project.

### 2. Coverage by Test Method
For a detailed analysis, including information about test methods, use the following query: <br />
`SELECT ApexTestClass.Name, TestMethodName, ApexClassOrTrigger.Name, NumLinesUncovered, NumLinesCovered FROM ApexCodeCoverage`<br />
**Fields in the Result:**
- `ApexTestClass.Name`: Name of the test class.
- `TestMethodName`: Name of the test method.
- `ApexClassOrTrigger.Name`: Name of the class or trigger being tested.
- `NumLinesUncovered`: Number of uncovered lines.
- `NumLinesCovered`: Number of covered lines.

This query is ideal for building a detailed matrix that shows relationships between test methods and classes.

### 3. Validating Coverage via Tests
To validate a class with specific tests, use the following command: <br />
`sf project deploy validate --source-dir <path to class> --target-org <target env> --test-level RunSpecifiedTests --tests <testname> --wait 120 --json` <br />
The command returns validation results in JSON format, including the number of lines covered and uncovered.

Alternatively, to retrieve results later:<br />
` sf project deploy report --target-org <target env> --job-id <job ID> --json` <br />

This method provides accurate coverage data but requires automation for efficiency.

## Ideal Project Profile for Using a Test Coverage Matrix

A test coverage matrix is most beneficial in projects with high code quality standards, complex structures, and frequent changes. Characteristics of such projects include:
1. **Large Projects with Extensive Codebases**  
    Necessary for projects with dozens or hundreds of classes, triggers, and tests where manual coverage analysis is impractical.
2. **Frequent Changes and Rapid Development Cycles**  
    Essential in agile or DevOps environments where changes are made daily or weekly.
3. **CI/CD and DevOps Integration**  
    The matrix fits seamlessly into automated CI/CD pipelines, accelerating deployment and minimizing risks from insufficient coverage.
4. **High Code Quality Standards**  
    Critical for projects with strict coverage requirements (e.g., 85-90%).
5. **Complex Dependency Structures**  
    Necessary for managing relationships between interdependent components.
6. **Large Development Teams**  
    Supports coordination in multi-branch development environments.
7. **Salesforce DX and Unlocked Packages**  
    Aids in managing coverage at the package level for modular projects.
8. **Multiple Production Environments**  
    Maintains consistency across regions or business units.   
9. **Transparency and Auditing Requirements**  
    Provides a clear source of coverage data for compliance and reviews.
10. **Projects involving vendors**    
    Using a matrix simplifies tracking the quality of development and adherence to standards on the project.