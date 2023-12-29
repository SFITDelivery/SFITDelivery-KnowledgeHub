---
sidebar_position: 1
title: Deploy Custom Labels Translation
tags: [metadata, deploy]
---
# How to Deploy Custom Labels Translation

1. **Find the file** `force-app/main/default/translations/<language_code>.translation-meta.xml`.
2. **Create the file if it does not exist.**
   - You can find the language code in the ISO Language Code Table: [Salesforce Developer Documentation](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_categorynodelocalization.htm).
3. **Retrieve the file using SFDX:**
   ```bash
   sfdx force:source:retrieve -p "force-app/main/default/translations/<language_code>.translation-meta.xml" -u <Alias>
   ```
4. **Filter the retrieved data:**
   - You will receive a lot of extra data. Choose only what you need.
5. **Completion:** Once the necessary data is filtered and adjusted, the translation is ready for deployment.

