## Create a Repository

This chapter will introduce in detail the specific steps for creating a repository and how to reasonably choose the repository type, helping you quickly get started and smoothly set up the repository required for the project.

### How to Create a Repository

The operation of creating a repository is quite convenient. You can do it in the following ways:


-   Locate the entrance for creating a repository at the repository panel on the "My Team" home page.
-   Click the plus sign in the "My Repository" panel on the portal home page, and you will be quickly redirected to the page for creating a repository.

> Special Reminder: Since each repository must belong to a team or an organization, please make sure that you have successfully created a team/organization or have joined an existing team/organization before creating a repository. If you are not yet familiar with the process of creating an organization, you can click here[Create a Team ](/portal/create-org)，to get detailed instructions.

![](/portal/create-rep.png)

### Fill in the Repository Information

After being redirected to the repository creation page, you need to fill in various basic pieces of information about the repository here. This information is crucial for the accurate creation and subsequent use of the repository. The specific details are as follows:

-   **Team/Organization**：Select the team or organization to which the repository will belong from the dropdown menu. If you don’t have a suitable team/organization, click the Create Organization button next to the dropdown to quickly set one up. Note that the dropdown only displays teams where you have Owner or Admin privileges, as only these roles can create repositories within a team. This restriction ensures proper governance and security of team resources.
-   **Repository Name**：Enter a unique English name for the repository. This name serves as the repository's unique identifier within the selected team, so choose something descriptive and easy to recognize for your team members.
-   **Repository Type**：Choose between a Server-side or Front-end repository based on your development needs. The platform follows a front-backend separation architecture, allowing developers to work independently on server or frontend projects. Additionally, the platform provides API quick-linking capabilities to facilitate seamless integration between frontend and backend components when required.
- **Repository Classification**:
    - After selecting the repository type, you need to further set the repository classification information. The available classifications include **Applications**, **Component Libraries**, and **Method Sets**:
        1. **Applications**:
            - Application repositories are usually used to store the final running projects. When you plan to create a project that will eventually be put into use, such as `Lottery Application`, `Form Collection Application`, `Mall Application`, etc., you can choose the `Applications` classification.
            - Inside this type of repository, you can create various resources like `Components`, `Method Sets`, `Pages`, `Interfaces`, etc., to meet the diverse needs of the project's operation.
        2. **Component Libraries**:
            - Component libraries are mainly used to provide a complete set of UI component libraries externally.
            - After selecting a repository with this classification, you can create resources of the types `Components`, `Method Sets`, `Style Variables / Common Styles` in the workbench, which helps to centrally manage and reuse UI-related resources.
        3. **Method Sets**:
            - Method Sets generally cannot be deployed independently and mainly exist as a collection of methods and class libraries, used to provide public method calls externally.
            - For repositories of this classification, only resources of the `Methods` type can be created in the workbench.
- **Target Platform**:
    - Configure the running platform of the current repository here. Currently, the available options are **PC End**, **Mobile End**, and **Unrestricted**.
    - Make an accurate selection according to the actual running environment of the project, which helps to optimize the running effect of the project on different platforms.
- **Repository Introduction**:
    - Fill in the repository introduction. This content can not only help other developers quickly understand the core functions and uses of the repository, but also provide key information for the search function, facilitating the precise location of the repository.
    - In addition, the repository introduction is an important basis for SEO optimization when generating the repository code. Therefore, please describe the key points of the repository as detailed and accurate as possible.
- **Private Repository**:
    - Here, you can decide the access rights of the current repository, that is, set it as a public or private repository.
    - If you choose a private repository, non-team members can only browse the basic information of the repository, and the code inside the repository is hidden from them and cannot be viewed.
    - In addition, private repositories will not appear in the recommended list on the platform's home page, thus ensuring the privacy and security of the repository content and ensuring that only team members can operate and access the core code.
- **Official Template**:
    - If you check the option "Use Official Template", after successfully creating the repository, the system will provide an official sample DEMO by default.
    - These carefully designed DEMOs can help you quickly master the development process and get started quickly.
    - When you are proficient in the development process and want to build a project according to your own ideas, you can uncheck this option and directly create a blank project to freely start a personalized development journey. 

![](/portal/create-rep2.png)

> The selection of repository types, classifications, and target platforms is of crucial importance. Please make sure to consider it carefully. Once these key settings are confirmed and submitted, they cannot be changed later. Therefore, please make a prudent choice by combining actual needs and long-term plans to avoid affecting the smooth progress of the project. 
