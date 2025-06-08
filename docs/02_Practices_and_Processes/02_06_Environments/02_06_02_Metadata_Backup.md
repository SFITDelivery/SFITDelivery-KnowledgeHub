---
sidebar_position: 2
title: Metadata Backup
tags: [Managment, Environment, Backup]
---
The absence of regular metadata backups can lead to serious consequences. If the system is damaged due to human error, a failed release, or an incorrect update, restoring it to a functional state can be difficult or even impossible without a backup. The loss of critical configuration data, such as object settings, business logic, or security rules, can significantly disrupt an entire company and result in substantial reputational and financial losses.

## General Information About Metadata
Metadata is "data about data" that describes the structure, configuration, and settings of a system. In the context of a CRM platform, metadata influences how fields, objects, business processes, and the user interface are structured. Proper metadata backup and implementation ensure the ability to quickly revert changes and minimize downtime.

## Metadata in Salesforce
In Salesforce, metadata encompasses all configuration elements and settings that define the system's behavior:
- **Object Structure:** Standard and custom objects, fields, relationships between objects...
- **Application Logic:** Validation Rules, Workflows, Process Builder processes, Triggers, and Flows...
- **User Interface:** Page Layouts, Lightning components, tabs, and applications...
- **Security and Access Control:** Profiles, Permission Sets, and Roles...

Without metadata backups, failures or errors may require restoring configurations from scratch, consuming significantly more time and resources. Additionally, a well-chosen backup method simplifies error investigation when necessary. Implementing version control in a production environment enables quicker identification of incident causes and reduces resolution time.

## Types of Salesforce Backups and Their Differences
### Regular (Automatic) Backup
- **Purpose:** Protection against minor periodic errors made by administrators and managers.
- **Advantages:** Allows quick restoration of the configuration to a previous stable state when problems arise.
- **Implementation:** Typically automated using scripts or third-party solutions that schedule backups (daily/weekly).

### Pre-Deployment Backup
- **Purpose:** A safeguard before a release or major update.
- **Advantages:** Enables quick rollback if deployment issues occur.
- **Implementation:** Performed manually or automatically as part of the CI/CD pipeline right before deploying a new version to production.

### Full Snapshot
- **Purpose:** Long-term archiving and analysis of historical system versions.
- **Advantages:** Allows restoring the system to a specific date, which is useful for audits and regulatory requirements.
- **Implementation:** Conducted less frequently (e.g., quarterly or at key milestones) and involves copying the entire configuration.

## Backup Methods
### Using Built-In Salesforce Tools
**Salesforce CLI** enables automation of metadata retrieval and deployment. These tools integrate well into CI/CD processes, helping manage configuration versions centrally and simplifying team collaboration.
**Example Code (Salesforce CLI) for Retrieving Metadata Using a Manifest:**

```bash
sf project retrieve start \
  --manifest path/to/package.xml \
  --target-org my-org
```

- **--target-org my-org** — The username or alias of the target org from which metadata is retrieved.
- **--manifest path/to/package.xml** — The file path for the manifest (package.xml) specifying the components to retrieve.

Example manifest (package.xml):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Account</members>
        <members>Sales_Support__c</members>
        <members>Lead_Default__mdt</members>
        <name>CustomObject</name>
    </types>
    <types>
        <members>*</members>
        <name>Layout</name>
    </types>
    <types>
        <members>AdminPermissions</members>
        <members>UserPermissions</members>
        <name>PermissionSet</name>
    </types>
    <version>62.0</version>
</Package>
```

### Automated Solutions and Third-Party Applications
<!-- TODO: add links to examples of solutions -->
Several ready-made solutions simplify metadata backups. Examples include Own, Gearset, Flosum, AutoRABIT, Blue Canvas, and others. These tools can:

- Schedule backups (daily, weekly, etc.).
- Restore individual metadata elements.
- Send notifications and logs to administrators.
- Manage version storage and rollback options.

Such applications streamline backup processes without requiring manual scripting, which is particularly useful for smaller teams.

#### Examples of solutions  for GitLab:
```YML
# Perform the initial setup:
# - set the variable GITLAB_ACCESS_TOKEN in the CI/CD variables
# - set the variable AUTH_LINK in the CI/CD variables (you can obtain this variable using the command: "sf org display -o MyOrg --verbose" )
# - in the "git push" command, replace the URL with your project's URL
# - in the example, retrieval is done using package.xml, but you can modify it as needed.

image: salesforce/salesforcedx:7.209.6-slim  # Use the official Salesforce CLI Docker container
stages:
  - backup

# Global environment variables (configured in GitLab CI/CD settings)
variables:
  SF_ORG: "your-salesforce-alias"  # Alias of your Salesforce organization
  GIT_USER: "GitLab CI"
  GIT_EMAIL: "ci@gitlab.com"

backup_metadata:
  stage: backup
  script:
    - DATE=$(date +'%Y_%m_%d_%H-%M') # Automatically generate a date in YYYY_MM_DD format
    - echo "Authenticating with Salesforce..."
    - echo $AUTH_LINK > $HOME_OF_SCRIPT/auth_link
    - sf org login sfdx-url --sfdx-url-file $HOME_OF_SCRIPT/auth_link --alias my-org
    
    # Retrieve metadata from the Salesforce org
    - echo "Retrieving metadata..."
    - sf project retrieve start -x manifest/package.xml -o my-org
        
    # Configure Git for committing changes
    - echo "Configuring Git..."
    - git config --global user.email "$GIT_EMAIL"
    - git config --global user.name "$GIT_USER"
    
    # Ensure we are on the correct branch before committing
    - echo "Checking out main branch..."
    - git checkout main || git checkout -b main

    # Add and commit changes with the backup date
    # Check for changes before committing
    - echo "Checking for changes..."
    - if [ -n "$(git status --porcelain)" ]; then
        echo "Changes detected, committing...";
        git add .;
        git commit -m "Backup metadata $DATE";     
        git push https://oauth2:$GITLAB_ACCESS_TOKEN@gitlab.com/d2269/backup.git main; 
      else
        echo "No changes detected, skipping commit.";
      fi

  rules:
    - if: '$CI_PIPELINE_SOURCE == "schedule"'  # Runs automatically if scheduled
    - if: '$CI_PIPELINE_SOURCE == "web"'       # Allows manual trigger via GitLab UI
      when: manual  # Enables the "Play" button
```

#### Examples of solutions  for GitHub:
```YML
# Perform the initial setup:
# - GITHUB_ACCESS_TOKEN – GitHub Personal Access Token (PAT) with repo permissions
# - AUTH_LINK – Authentication output link (sf org display -o MyOrg --verbose command)
# - in the example, retrieval is done using package.xml, but you can modify it as needed
# - in the "git push" command, replace the URL with your project's URL

name: Salesforce Metadata Backup

on:
  schedule:
    - cron: "0 3 * * *"  # Run daily at 03:00 UTC
  workflow_dispatch:  # Allows manual execution via GitHub Actions UI

jobs:
  backup:
    runs-on: ubuntu-latest
    container: salesforce/salesforcedx:7.209.6-slim

    env:
      SF_ORG: "your-salesforce-alias"
      GIT_USER: "GitHub Actions"
      GIT_EMAIL: "actions@github.com"
      HOME_OF_SCRIPT: "/home/runner"

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set Commit Date
        run: echo "BACKUP_DATE=$(date +'%Y_%m_%d_%H-%M')" >> $GITHUB_ENV

      - name: Authenticate with Salesforce
        run: |
          echo "$AUTH_LINK" > $HOME/auth_link  # Используем $HOME вместо $HOME_OF_SCRIPT
          sf org login sfdx-url --sfdx-url-file $HOME/auth_link --alias my-org
        env:
          AUTH_LINK: ${{ secrets.AUTH_LINK }}

      - name: Retrieve Salesforce Metadata
        run: |
          echo "Retrieving metadata..."
          sf project retrieve start -x manifest/package.xml -o my-org

      - name: Configure Git
        run: |
          git config --global user.email "$GIT_EMAIL"
          git config --global user.name "$GIT_USER"

      - name: Mark repository as safe
        run: git config --global --add safe.directory /__w/backup_sf/backup_sf
  
      - name: Check for Changes
        id: check_changes
        run: |
          if [ -n "$(git status --porcelain)" ]; then
            echo "CHANGES=true" >> $GITHUB_ENV
          else
            echo "CHANGES=false" >> $GITHUB_ENV
          fi

      - name: Commit and Push Changes
        if: env.CHANGES == 'true'
        run: |
          git add .
          git commit -m "Backup metadata ${{ env.BACKUP_DATE }}"
          git push https://oauth2:${{ secrets.TOKEN }}@github.com/d2269/backup.git main
```

### Custom Scripts and Solutions
Organizations with programming expertise and complex requirements may develop custom scripts. Typically, these:
1. Run on a schedule (via a CI/CD system or task scheduler).
2. Use **Salesforce CLI** to retrieve metadata.
3. Store and manage versions using Git.
4. Notify the team or administrators of success or failure.

This approach requires more development and maintenance resources but provides maximum flexibility.

## Conclusion
Metadata backup is a fundamental aspect of Salesforce project management. It protects against errors and failures and ensures that, in the event of a failed release or misconfiguration, the system can be quickly restored. Key takeaways:
1. **Regularity** – Set up automatic backups to always have the latest configuration version available.
2. **Security** – Store metadata in a secure repository (e.g., Git) and restrict access.
3. **Scalability** – Using CI/CD and ready-made tools simplifies integrating backups into the overall development and release process.
4. **Completeness** – It is essential to back up not only data but the entire configuration (profiles, page layouts, business logic, etc.).
