## Issues  

This chapter introduces operations related to Issues in the repository.

### Overview  

On our platform, the Issue feature serves as a practical tool for optimizing repositories. When issues arise, such as code errors, functional anomalies, or suggestions for improvements—like optimizing code structure or enhancing runtime efficiency—members can create Issues to provide feedback. In an Issue, members can elaborate on problem symptoms, expected outcomes, and relevant suggestions.  

Issues come with status tracking, transitioning from **Open** to **In Progress**, and then to **Resolved**, clearly showcasing the progress of issue resolution. This helps team members stay informed. Members can also comment under Issues to discuss solutions collaboratively, ensuring quick resolution and maintaining repository stability.  

![](/portal/rep-info4.png)  

### Creating an Issue  

When encountering a problem in the repository or wanting to propose development suggestions, we can click the **New Issue** button on the Issues page to create one.  

![](/portal/rep-issues.png)  

Upon opening the **New Issue** dialog, we can fill in the title and description, then click **Submit** to finalize the Issue creation.  

![](/portal/rep-issues2.png)  

> If we are administrators of the repository, we’ll receive platform notifications for new Issues, allowing us to immediately gather feedback or identify problems.  

### Commenting on an Issue  

When viewing Issue details, the platform provides commenting and reply functionality for collaborative discussions.  

![](/portal/rep-issues3.png)  

### Issue Status  

For repository administrators, it’s possible to update Issue statuses to help track and manage progress.  

An Issue’s lifecycle consists of the following stages:  

1. **Open**—This status indicates the Issue has just been created, pending confirmation on whether it will be addressed.  
   - Administrators can assign the Issue to a responsible member at this stage for follow-up.  
   ![](/portal/rep-issues4.png)  
2. **In Progress**—Confirms the Issue is being actively worked on by the assigned owner.  
3. **Pending Release**—The fix is complete, but pending release in the next version.  
4. **Resolved**—The Issue is fully addressed, with optimizations visible in the latest release.  
5. **Closed**—The Issue was rejected and will no longer be tracked.  

By default, Issues follow the above workflow. However, for non-code-related suggestions, administrators can directly transition an Issue from **In Progress** to **Resolved**, though a confirmation warning will appear to prevent mistakes.  

Additionally, administrators can **revert statuses** when necessary for flexible workflow adjustments.  
![](/portal/rep-issues5.png)