## Creating a Repository

This chapter provides a detailed guide on the specific steps to create a repository and how to appropriately select repository types, helping you get started quickly and successfully set up the repository required for your project.

### How to Create a Repository

Creating a repository is a straightforward process, and below are the methods you can use:

-   On the "My Team" homepage, locate the repository panel and find the option to create a repository.
-   In the "My Repositories" panel on the portal homepage, click the **plus sign** to quickly navigate to the repository creation page.

> **Important Note:** Since every repository must belong to a team or organization, ensure that you have successfully created a team/organization or joined an existing one before creating a repository. If you are unfamiliar with the organization creation process, click here [Create Team](/portal/create-org) for detailed instructions.

![](/portal/create-rep.png)

### Enter Repository Information

After navigating to the repository creation page, you will need to fill in the essential details for the repository. These details are critical for the accurate creation and subsequent usage of the repository. The required information includes:

-   **Team/Organization Ownership**: From the dropdown menu, select the team or organization under which the repository will be created. If you don’t have a suitable team/organization yet, click the `Create Organization` button next to the dropdown to quickly set one up. Note that the dropdown only displays teams where you have `Owner` or `Admin` permissions. This ensures repository management is standardized and secure, as only administrators and owners have the authority to create repositories within a team.

-   **Repository Name**: Enter an English name for the repository. This name will serve as the unique identifier within the team, so choose something distinctive and easily recognizable for team members to locate and manage it efficiently.

-   **Repository Type**: Based on development needs, select either a `Server-Side` or `Client-Side` repository. The platform currently employs a frontend-backend separation model, allowing developers to independently work on server-side or frontend projects. Additionally, the platform provides API rapid association functionality for seamless integration between frontend and backend when needed.

-   **Repository Category**: After selecting the repository type, specify its category. Available categories include:  
    1. **Application**: Application repositories are typically used for hosting finalized projects. Choose this category if you are developing a deployable project, such as a `Lottery Application`, `Form Collection App`, or `E-Commerce App`. Within such repositories, you can create various resources like `Components`, `Method Sets`, `Pages`, and `APIs` to meet diverse project requirements.  
    2. **Component Library**: Component libraries are designed to provide a suite of UI components. Selecting this category allows you to create resources like `Components`, `Method Sets`, and `Style Variables/Global Styles` in the workspace, facilitating centralized management and reuse of UI assets.  
    3. **Method Set**: Method sets cannot be deployed independently; they primarily serve as collections of methods or libraries for external method invocation. This category allows only the creation of `Method` resources in the workspace.

-   **Target Platform**: Configure the runtime platform for the repository. Current options include **PC**, **Mobile**, and **Platform-Agnostic**. Selecting the appropriate option based on the project’s runtime environment helps optimize performance across different platforms.

-   **Repository Description**: Provide a brief description of the repository’s purpose and functionalities. This helps other developers quickly understand its core features and assists in search functionality for precise indexing. Additionally, the repository description serves as the basis for SEO optimization during code generation, so ensure it is detailed and accurate.

-   **Private Repository**: Determine the repository’s access permissions—either public or private. If selected as private, only team members can view its contents, while non-members can only see basic information (with code hidden). Private repositories also do not appear on the platform’s homepage recommendation list, ensuring content privacy and security by restricting access to internal team members.

-   **Official Templates**: If you check "Use Official Templates," the system will automatically provide an official demo example after repository creation. These well-designed demos help you quickly grasp development workflows and get started efficiently. If you’re already familiar or prefer to build your project from scratch, leave this unchecked to create an empty project for customized development.

![](/portal/create-rep2.png)

> **Critical Note:** Choices related to repository type, category, and target platform are permanent once confirmed. Therefore, carefully evaluate your project requirements and long-term plans before finalizing these settings to avoid hindering project progress.