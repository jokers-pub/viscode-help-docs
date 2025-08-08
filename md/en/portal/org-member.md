## Member Management

This chapter details the methods for managing team members, including applying to join a team, inviting members, and configuring member roles and permissions.

### Applying to Join a Team

On the team settings page, you can configure the `Allow Applications` option to determine whether external developers can submit join requests.  
![Team Settings Interface for Application Management](/portal/org-member.png)

If applications are enabled, non-team members visiting the team homepage will see an `Apply to Join` button. Clicking this button allows them to submit a join request.  
![Team Homepage with Apply Button](/portal/org-member2.png)

When a member submits an application, the platform sends an internal notification. You can also navigate to the `Application Management` section in the team settings to view pending requests.  
![Application Management Page](/portal/org-member3.png)

In the application list, you can click **Approve** or **Reject** to accept or decline the join request.

### Inviting Members

In addition to accepting applications, you can proactively invite members to join the team. Follow these steps:  
1. Open the `Member Management` page and click the **Invite Member** button to open the invitation panel.  
2. Search for developers by email, username, or other criteria.  
3. Click the add button to send an invitation. Once accepted, the member will automatically join the team.  
![Invite Member Interface](/portal/org-member4.png)

### Member Management

On the `Member Management` page, you can manage existing team members, including removing members and configuring their permissions. Current team roles include:  

- **Owner**: Holds the highest permissions, typically the team creator.  
- **Administrator**: Can edit team information, manage members, handle Repository issues, and perform daily operations like version releases.  
- **Developer**: Has only code modification permissions for team Repositories.  

![Member Management Page](/portal/org-member5.png)  

> New members are assigned the `Developer` role by default. Note: Administrators can manage applications and invitations but cannot modify permissions for members of equal or higher roles.