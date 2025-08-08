## Transfer Repository Ownership

During team collaboration and project progression, transferring Repository ownership may become necessary. This chapter focuses on how to transfer Repository ownership and explains the complete process and key considerations. This action is visible and executable **only by administrators**.

### Overview

Transferring Repository ownership relocates a Repository’s ownership from one team/organization to another. This is critical for business scenarios such as when a project reaches a milestone and needs to be handed off to another team for ongoing maintenance and operations. A full transfer ensures that all source code, assets, and complete commit history move together, guaranteeing integrity and continuity of the hand-off.

### Procedure

1. **Navigate to Repository Settings**  
   Open the Repository whose ownership you wish to transfer, then navigate to its **Settings** page.

2. **Initiate the Transfer**  
   Inside **Settings**, locate the **Repository Management** menu, then click the **Transfer Repository Ownership** button to start the process.  
   ![](</portal/rep-transfer.png>)

3. **Search and Select the Target Team**  
   In the transfer interface, enter the target team’s name or email to search. Once the correct team appears, verify its details and click **Confirm**.  
   ![](</portal/rep-transfer2.png>)

4. **Complete the Transfer**  
   After confirmation, the platform automatically executes the transfer, reassigning the Repository to the chosen team.

> **Important Notes**
>
> *   Repository ownership transfers are **irreversible**—double-check every detail before proceeding.  
> *   Each team is entitled to one free Repository. If the Repository you are transferring is **Private** and the target team already has a Private Repository, the transfer will fail until the target team increases its Private Repository allowance.