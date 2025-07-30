## Delete Repository

In the process of repository management, there may be occasions when you need to delete unused repositories. This chapter details the specific steps for deleting a repository and the restrictive conditions involved in this operation. It should be noted that the repository deletion operation is only visible to administrators.

### Access Repository Settings

1. First, locate and open the settings page of the repository you plan to delete. Click the "Repository Management" menu on this page.
2. Click the "Delete Repository" button in the "Repository Management" menu, which officially initiates the repository deletion process. At this point, the system will prompt you that an irreversible deletion operation is about to be performed—please confirm carefully.

![Delete Repository Button](/portal/rep-delete.png)

### Confirm Password

After clicking the "Delete Repository" button, for security considerations, the platform will immediately pop up a password verification window, requiring you to enter your account password. This step aims to confirm that the deletion operation is performed by the administrator himself, effectively preventing misoperations or illegal actions to ensure the security and stability of repository data.

![Password Verification Page](/portal/rep-delete2.png)

> **Important Note**: If a repository has existing release versions, since these versions may have been referenced or cloned by other projects, deleting the repository will cause serious impacts on projects dependent on these versions. Therefore, such a repository **cannot be deleted**. In this case, you can choose to [archive the repository](/portal/rep-archive). Although an archived repository can no longer be modified or edited, it will remain in the team as a backup of historical data for future reference and traceability.
