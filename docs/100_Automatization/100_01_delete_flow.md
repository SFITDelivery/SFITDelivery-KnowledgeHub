---
sidebar_position: 1
title: Flows deletion
tags: [script, apex, bash, env]
sidebar_class_name: disabled-page
---

# Mass Delete Unused Flow and Process Builder Versions in Salesforce

Many people wonder how to remove inactive versions of Flow and Process Builder.

I also faced this problem as deployments spread across the branch, and versions accumulated very quickly, especially in the integration environment.

I hope this helps you.

**Note**: The URL is the address of your org. Version restrictions are made to not touch the old versions. You can upgrade the query as you like.

## Apex script
[apex script](../../../Scripts/apex/delete_flow.apex)

```apex
String soqlQuery = 'Select ID From Flow Where (Status =  \'Obsolete\' OR Status =  \'Draft\') AND VersionNumber > 1';
String orgUrl = URL.getSalesforceBaseUrl().toExternalForm();
HttpRequest flowIdRequest = new HttpRequest();
flowIdRequest.setMethod('GET');
flowIdRequest.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId());
flowIdRequest.setEndpoint(orgUrl+'/services/data/v50.0/tooling/query?q=SELECT+id,status+FROM+Flow+Where+(+Status+=+\'Obsolete\'+OR+Status+=+\'Draft\'+)+AND+VersionNumber+>+1');
//flowIdRequest.setTimeout(120000);
Http http = new Http();
HttpResponse httpResponse = http.send(flowIdRequest);
List<Object> records = (List<Object>)((Map<String, Object>)JSON.deserializeUntyped(httpResponse.getBody())).get('records');

//get id
String[] ids = new List<String>();
for (Object variable : records) {
    String str = variable.ToString();
    String res = str.substringBefore(', Status');
    res = res.substringAfter('Id=');
    ids.add(res);
}
//delete
HttpRequest flowIdRequestDelete = new HttpRequest();
for (String idFlow : ids) {    
    flowIdRequestDelete.setMethod('DELETE');
    flowIdRequestDelete.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId());
    flowIdRequestDelete.setEndpoint(orgUrl +'/services/data/v50.0/tooling/sobjects/Flow/'+idFlow);
    Http http = new Http();
    HttpResponse httpResponseDelete = http.send(flowIdRequestDelete);
}
```

## Bash Script (Using a File):
[apex script](../../../Scripts/bash/delete_flow.sh)
```bash
#!/bin/bash

org=$1 # sandbox alias
verMin=$2 # which version of the flow does the check start with
verMaxDelta=$3 # how many versions of the flow will not be deleted counting from the active one

# get the active version of the Active flow
echo "Request for Active flow versions"
mapfile resultActive < <(sfdx force:data:soql:query --query "Select DefinitionId, VersionNumber From Flow Where Status =  'Active' AND VersionNumber > $verMin" --targetusername $org --usetoolingapi)

<< RESULT
these first two lines are excluded:
DEFINITIONID VERSIONNUMBER
────────────────── ─────────────
RESULT
let "a=${#resultActive[@]}-2"

# get the active version of Obsolete and Draft flow
echo "Request for Inactive flow versions"
mapfile resultInactive < <(sfdx force:data:soql:query --query "Select ID, DefinitionId, VersionNumber From Flow Where (Status =  'Obsolete' OR Status = 'Draft') AND VersionNumber > $verMin " --targetusername $org --usetoolingapi)
let "b=${#resultInactive[@]}-2"
declare -a flowsArr
echo "I'm starting to process the lists"
for row in "${resultInactive[@]:2:$b}";do
    IFS=' ' read -ra flowInactiv <<< "$row" # we get a string divided into an array - Inactiv flow    
    let "verInactiveFlow = ${flowInactiv[2]}" # the version of the inactive flow to check
    for value in "${resultActive[@]:2:$a}";do
        IFS=' ' read -ra flowActiv <<< "$value" # we get a string divided into an array - Activ flow
        let "verActiveFlowAndDelta = ${flowActiv[1]} - $verMaxDelta" # the version of the active flow with a delta for checking
                
        if [[ "${flowActiv[0]}" = "${flowInactiv[1]}" ]]
        then
            if (( $verInactiveFlow < $verActiveFlowAndDelta ))
            then
                echo "added for deletion ID " ${flowInactiv[0]}           
                flowsArr+=( ${flowInactiv[0]} ) #add "Select ID" form Inactive flow  
            fi          
        fi     
    done    
done

# Delete flows
echo "deletion starts "
echo ${#flowsArr[@]} " flows are removed"
con=0
for flowDelete in "${flowsArr[@]}";do
    con=$((con + 1))
    sfdx force:data:record:delete --sobjecttype Flow --sobjectid $flowDelete --targetusername $org --usetoolingapi 
    echo "there are " $((${#flowsArr[@]}-$con)) " flows left"
done
```
