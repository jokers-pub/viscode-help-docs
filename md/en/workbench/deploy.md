## Deployment

In the project development workflow, deploying the completed project to production is a critical step. This section provides a detailed guide on how to perform online builds for developed projects and deploy them to the free cloud environment provided by the platform. The specific steps are as follows:

> **Important Note:** Deployment operations apply **only** to Repository of the **Project** type. Other repository types are not supported.

### Overview

The platform offers a free cloud environment, significantly streamlining the process from development to deployment. Using this environment, completed projects can be built and compiled online and then deployed to the designated environment. Upon successful deployment, the platform automatically assigns a dedicated domain name, which can be used to access the deployed project.

> The platform also supports project source code export. If you prefer not to use the platform's cloud services, you can import the code into your own environment for manual deployment. For code generation and export methods, refer to the [Code Generation](workbench/generate) guide.

Before deploying, ensure that a new version of the repository has been released. Build and deployment operations are performed on released versions only, so at least one release version must exist in the repository.

### Build Panel

After releasing a version, locate the `Deployment` panel on the repository homepage to initiate the build and deployment process.

![](/workbench/deploy.png)

### Creating a Build and Deployment Task

Navigate to the Deployment panel and click the **Build Now** button in the top-left corner to create a build and deployment task.

![](/workbench/deploy1.png)

When creating a build and deployment task, complete the following steps:

1. **Select Version**: Choose the release version to be built and deployed from the available versions. If no versions are listed, it means no release versions exist in the repository. Create a version first before proceeding with deployment.  
   ![](/workbench/deploy2.png)  
2. **Select Environment**: After selecting a version, the platform automatically analyzes the environment variables maintained for that version. From the list, select the desired environment variable file for the build.  
   ![](/workbench/deploy3.png)  
   Once the environment file is selected, the platform displays all **configured** environment variables in the file. Review these carefully to ensure they align with project requirements and confirm the selected environment.

### Confirming and Executing the Task

After filling in the build task details, click the **Confirm** button. The system will create the task, and the platform will automatically start the build and deployment process.

[video](/workbench/deploy.mp4)

During the build and deployment, you can monitor the task status and progress in real time. For detailed logs and build information, click the **Task Logs** option next to the task.

> **Security Note**: To protect intellectual property and sensitive data, task logs are only visible to team members. This ensures project information remains secure and confidential.

### Accessing the Deployed Project

Once the deployment task is complete, click the **Access Deployment Environment** link on the repository page to visit the deployed project.

![](/workbench/deploy4.png)

For example, the repository `joker/OfficialWebsite` will automatically receive a domain following the naming convention of *organization_name + repository_name*: [https://joker_officialwebsite.app.jokers.pub/](https://joker_officialwebsite.app.jokers.pub/).

> **Note:** The domain is generated based on the organization and repository name, and DNS resolution rules are automatically created. If the repository is transferred or renamed later, the deployment URL will update accordingly to ensure uninterrupted access to the project.