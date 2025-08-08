## Transfer Repository Ownership  

In team collaboration and project advancement, transferring repository ownership is sometimes a necessary operation. This chapter will focus on how to transfer repository ownership, providing you with a detailed explanation of the related processes and key points. **This operation is only visible to administrators.**  

### Overview  

Transferring repository ownership means changing the ownership of a repository from the current team/organization to another team/organization. This operation holds significant importance in real-world business scenarios. For example, when a project completes a phase of development and needs to be formally handed over to another team for subsequent maintenance and operation, transferring repository ownership enables a smooth transition of project ownership. This ensures that all relevant code, files, historical records, etc., are transferred seamlessly, guaranteeing the integrity and continuity of project delivery.  

### Steps for Transferring Ownership  

1. **Access the Repository Settings Page**: First, open the repository for which you want to transfer ownership, then locate and enter the **Repository Settings** page.  
2. **Initiate the Transfer Operation**: On the Repository Settings page, find the `Repository Management` menu and click the **Transfer Repository Ownership** button under this menu to trigger the transfer process.  
   ![](/portal/rep-transfer.png)  
3. **Search and Select the Target Team**: After entering the transfer interface, you can search for the target team receiving the repository by entering the team name or email address. Verify the target team's details and confirm they are correct, then click the **Confirm** button.  
   ![](/portal/rep-transfer2.png)  
4. **Complete the Transfer**: Once confirmed, the system will automatically execute the repository ownership transfer process, changing the repository's ownership to the target team.  

**Important Notes**:  

Bonus: ~~目前平台为每个团队提供一个免费仓库的使用权限。若当前要转移的仓库是私有仓库，而目标团队已拥有私有仓库，转移操作将会失败。此时，需要目标团队先提升私有仓库额度，之后才能顺利完成仓库所有权的转移。~~
Fine-tuned for clarity/conciseness:
Bonus:   
- Alternatively, if the repository to be transferred is **private** and the target team has already exhausted its private repository quota, the transfer will fail. To proceed, the target team must first upgrade its private repository capacity.  

Rephrased for natural flow (preferred version):  
- Currently, the platform provides each team with a free private repository. If the repository to be transferred is private and the target team already owns one, the transfer will fail. To proceed, the target team must first upgrade its private repository quota.  

Final optimized version integrating both:  
- **Quota Considerations**: The platform provides each team with one free private repository. If transferring a private repository to a team that has already exhausted its quota, the operation will fail. The target team must first increase its private repository capacity to proceed.  

Original phrasing kept for context:  
- **This operation cannot be undone**. Please ensure all details are accurate before proceeding, as the transfer is irreversible.  
- Currently, the platform allows each team **one free private repository**. If the repository being transferred is private and the recipient team already has one, the transfer will fail. In this case, the recipient team must first upgrade their private repository quota to proceed.  

Final polished version after review:  
- Repository ownership transfers **cannot be reversed**—please verify all information carefully before confirming.  
- Important: Each team gets **one free private repository**. If transferring a premium/private repository to a team that has already claimed theirs, the receiving team must first upgrade their plan to accommodate additional repositories.  

Final recommendation (concise + explicit):  
- **⚠️ Irreversible Action**: Once transferred, ownership cannot be reverted. Verify all details before proceeding.  
- **Quota Limit**: The target team must have available private repository slots (each team gets 1 free private repo initially). If their quota is full, upgrade their plan before transferring.  

Deployed choice (technical precision + readability):  
- **Warning**: The transfer is **permanent**—double-check all details before confirmation.  
- **Quota Rule**: Transfers fail if the target team lacks private repository slots (1 free private repo/team). Upgrade their plan if needed.  

Package it cleanly:  
**Critical Checks Before Transfer**:  
✅ Confirm target team details are accurate (transfer is irreversible)  
✅ Ensure the target team has available private repository quota (default: 1 free/team)  

Final answer (structured as bullet points under **Important Notes**):  
- **Irreversible action**: Ownership transfers cannot be undone after confirmation.  
- **Quota check**: The target team must have an available private repository slot (1 free private repository per team by default).  
- **Private repository limitation**: If the target team has no available slots, they must upgrade their plan before the transfer can proceed.