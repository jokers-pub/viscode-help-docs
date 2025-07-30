## Transfer Repository Ownership

In the process of team collaboration and project advancement, transferring repository ownership is sometimes a necessary operation. This chapter focuses on how to transfer repository ownership, explaining the relevant processes and key points in detail. This operation is only visible to administrators.

### Overview

Transferring repository ownership means shifting the ownership of a repository from the current team/organization to another team/organization. This operation holds significant importance in practical business scenarios. For example, when a project completes phased development and needs to be fully delivered to another team for subsequent maintenance and operation, transferring repository ownership enables a smooth transition of project ownership. This ensures all project-related code, files, historical records, etc., are transferred together, safeguarding the integrity and continuity of project delivery.

### Operation Steps

1. **Access the Repository Settings Page**: First, open the repository for which you need to transfer ownership, and find and click to enter the repository settings page.
2. **Trigger the Transfer Operation**: In the repository settings page, locate the `Repository Management` menu and click the **Transfer Repository Ownership** button under this menu to trigger the repository ownership transfer operation.  
   ![Transfer Repository Ownership Button](/portal/rep-transfer.png)
3. **Search for and Select the Target Team**: After entering the transfer operation interface, you can search for the target team receiving the repository by inputting the team name or email to accurately locate it. In the search results, confirm that the target team information is correct, then click the Confirm button.  
   ![Target Team Search Interface](/portal/rep-transfer2.png)
4. **Complete the Transfer**: After clicking Confirm, the system will automatically execute the repository ownership transfer process, changing the repository's ownership to the target team.

**Important Notes**:

-   Once repository ownership is transferred, it is **irreversible**. Please confirm the information is accurate and exercise caution before operating.
-   The platform currently provides each team with one free repository usage quota. If the repository to be transferred is a private repository and the target team already owns a private repository, the transfer operation will fail. In this case, the target team needs to increase its private repository quota first to successfully complete the repository ownership transfer.
