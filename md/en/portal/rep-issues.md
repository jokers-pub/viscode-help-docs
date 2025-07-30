## Issues

This chapter mainly introduces operations related to Issues in repositories.

### Overview

In our platform, the Issues function serves as a practical tool to facilitate repository optimization. When issues occur in a repository, such as code errors, functional abnormalities, or improvement suggestions like optimizing code structure or enhancing operational efficiency, team members can create Issues for feedback. In an Issue, the problem phenomenon, expected results, and relevant suggestions should be elaborated in detail.

Issues have a status tracking function, clearly displaying the processing progress from "New" to "In Progress" and then to "Resolved," enabling team members to understand the advancement conveniently. Members can also comment and communicate under Issues to jointly discuss solutions, promoting rapid problem resolution and ensuring stable repository operation.

![Issue Management Interface](/portal/rep-info4.png)

### Create an Issue

When you discover problems in the repository or need to provide development suggestions, you can click the `New Issue` button on the Issues list page to create an Issue.

![New Issue Button](/portal/rep-issues.png)

After opening the New Issue pop-up window, you can fill in the Issue title and content here, then click the Submit button to complete the creation of an Issue.

![New Issue Form](/portal/rep-issues2.png)

> When you are a manager of the repository, upon receiving a new Issue, administrators will be notified via internal messages, allowing you to collect repository problems and suggestions in a timely manner.

### Comment on Issues

When you enter an Issue to view details, the platform provides comment and reply functions for Issues, where you can communicate about the problem.

![Issue Comment Interface](/portal/rep-issues3.png)

### Issue Status

As a repository administrator, you can change the status of Issues. The status transition of Issues helps problem submitters and managers quickly understand the current problem situation of the repository.

The lifecycle of an Issue can be divided into:

1. **Open**: This status indicates that the Issue has just been created, and whether to modify it has not been confirmed yet. In this stage, managers can assign Issues by designating responsible persons on the detail page of Open Issues for follow-up processing.  
   ![Open Issue Status](/portal/rep-issues4.png)
2. **In Progress**: It means the Issue has been confirmed for modification, the responsible person is assigned, and it is under tracking and processing, with solutions being implemented in an orderly manner.
3. **Pending Release**: It represents that the problems related to the Issue have been fixed and optimized. However, since the current version has not been released, it needs to wait for creating a Release version to formally complete the entire Issue resolution process and present the fixes.
4. **Completed**: It indicates that the problems involved in the Issue have been successfully fixed, and the optimization or fix content can be clearly seen in the new version, marking the successful completion of the entire Issue processing flow.
5. **Closed**: It means the Issue was not adopted, no longer under tracking management, and has been formally closed, excluding it from subsequent work items.

It should be noted that under normal circumstances, the Issue transition process should follow the above order. However, for Issues that are suggestions or other non-code-related problems, the platform allows directly changing their status from **In Progress** to **Completed**, but a warning confirmation prompt will pop up when performing this operation to avoid misoperations.

In addition, the platform grants administrators the permission to **roll back the status** of Issues at different status nodes, facilitating flexible adjustment of the Issue processing flow to meet diversified management needs.  
![Issue Status Management Interface](/portal/rep-issues5.png)
