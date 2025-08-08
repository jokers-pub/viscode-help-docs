## Delete Repository  

During repository management, there may be occasions when it is necessary to delete repositories that are no longer in use. This section provides a detailed explanation of the specific steps for deleting a repository, as well as the associated limitations of this operation. It is important to note that the **Delete Repository** function is only visible to administrators.  

### Accessing Repository Settings  

1. First, navigate to and open the settings page of the repository you intend to delete. Click on the **"Repository Management"** menu on this page.  
2. Select the **"Delete Repository"** button within the **"Repository Management"** menu. By clicking this button, you initiate the repository deletion process. At this stage, the system will display a warning about this irreversible operation—please confirm carefully.  

![Delete Repository Button](/portal/rep-delete.png)  

### Password Confirmation  

After clicking **"Delete Repository"**, the platform will immediately prompt a password verification window for security purposes. This step ensures that the deletion operation is indeed performed by the administrator, preventing accidental or unauthorized actions and maintaining the security and stability of repository data.  

![Password Verification Page](/portal/rep-delete2.png)  

> **Important Note**: If the repository has release versions, these may be referenced or cloned by other projects. Deleting the repository could significantly impact dependent projects; therefore, such repositories **cannot be deleted**. In this case, you may opt to **[archive the repository](/portal/rep-archive)** instead. Archived repositories remain accessible within the team as historical backups for reference and traceability, though they can no longer be modified or edited.