## Member Management

This chapter elaborates on the management methods for team members, covering aspects such as applying to join a team, inviting members, and the specific management and role configuration of team members.

### Applying to Join a Team

On the team settings page, you can decide whether to accept applications from external developers to join the team by configuring the "Whether to Open Applications" option.
![Interface related to opening applications on the team settings page](/portal/org-member.png)

If you choose to open applications, when non-team members visit the team home page, a "Apply to Join" button will be displayed on the page. Clicking this button allows you to submit an application to join the team.
![Interface of the "Apply to Join" button on the team home page](/portal/org-member2.png)

When a member submits an application to join the team, the platform will send an internal message reminder. You can also click on the "Application Management" menu on the team settings page and enter the team application management page to view the application list.
![Team application management page](/portal/org-member3.png)

In the application list, you can click the **Approve** or **Reject** button to decide whether to approve the member's application to join the team.

### Inviting Members

In addition to waiting for members to apply to join, you can also take the initiative to invite members to join the team. The specific operations are as follows: Open the "Member Management" page, click the **Invite Members** button, and an invite members panel will pop up. In this panel, you can search for the developers you want to invite by using information such as user email addresses and account numbers. After finding the target person, click the add button, and the system will send an invitation message. Once the other party accepts the invitation, they will automatically join the current team.
![Interface for the operation of inviting members](/portal/org-member4.png)

### Member Management

On the "Member Management" page, you can manage the existing members of the team, including deleting members and setting member permissions. Currently, team member permissions are divided into the following categories:

- **Owner**: Holds the highest permissions of the team, usually the creator of the team.
- **Administrator**: Can modify the basic information of the team and has daily management permissions such as adding members, handling the issue status of team repositories, and releasing versions.
- **Developer**: Only has the permission to modify the code in the repositories within the team.

![Member Management page](/portal/org-member5.png)

> New members joining the team will have the default identity of "Developer" by default. It should be noted that administrators can handle team applications, invite members, and delete members, but they cannot operate on member permissions or handle the information of members with the same or higher identities as themselves. 