---
sidebar_position: 4
title: System Overview
tags: [Managment, Environment, Monitoring]
---
Salesforce operates in the cloud and uses distributed computing, which imposes restrictions on resource consumption. Efficient management of system resources in solutions like Salesforce is critically important. Without resource management, system stability will eventually be compromised, leading to critical errors that can have serious consequences for the business.

Examples of consequences that may arise if resource usage is not controlled using [**System Overview**](https://help.salesforce.com/s/articleView?id=xcloud.dev_force_com_system_overview_page.htm&type=5):

- **Exceeding API limits** – integrations will stop working.
- **Data storage overflow** – users will be unable to upload new records.

**Note:** System Overview is not designed for monitoring page performance or detecting errors in automation processes—other specialized Salesforce tools are used for those purposes, which are covered in other articles.

## Salesforce System Overview
**Salesforce System Overview** is a built-in Salesforce tool designed to monitor and track critical parameters and limits of an organization.

System Overview allows you to effectively track resource consumption, such as:
- API requests (daily API call limits).
- The amount of used data storage.
- The total number of licenses and used objects.

**Important:** Although System Overview allows you to track current resource usage metrics, it does not provide automatic notifications when limits are approached by default. Therefore, it is recommended to set up automation to send such notifications, using, for example, Salesforce CLI.

## How to Use Salesforce System Overview Effectively?
Salesforce System Overview is available to all Salesforce administrators through the Setup interface. However, deeper automation is often required to receive timely notifications and analyze metrics.

### 1. Regular Monitoring via the Salesforce Interface
Go to Setup -> Quick Find -> enter "System Overview":

Here, you will find a visual dashboard displaying the current status of key limits and their consumption.

### 2. Automating Monitoring and Notifications
For mission-critical systems, it is recommended to automate monitoring:
- Configure automatic notifications (such as email alerts or messages in the necessary messenger) when approaching the API request limit or exhausting available storage space.
- Use Salesforce CLI or third-party CI/CD tools to automatically export reports on limit and resource consumption to Git or external storage.

Example Salesforce CLI command to retrieve API limit information:

```bash
sf limits api display --target-org my-org
```

This command can be integrated into a daily cron script or CI/CD pipeline to regularly monitor resource consumption and send notifications to responsible personnel through the necessary channels.

## Recommendations for Using Salesforce System Overview
- Regularly check System Overview in the Salesforce interface, especially before and after releases, integrations, or data migrations.
- Set up automatic notifications for critical limit thresholds.
- Use Salesforce CLI and CI/CD automation for daily monitoring of limits and resource consumption.
- Store monitoring history and resource consumption data in Git or external systems to track trends and predict risks.

## Conclusion
Regular and automated monitoring of Salesforce using the System Overview tool is a crucial step in ensuring system stability. Timely detection of approaching resource limits and prompt responses to these events help prevent problems efficiently and ensure business process continuity.

