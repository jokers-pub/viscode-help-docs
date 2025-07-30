### Deployment

Deploying a developed project is a critical step in the project development workflow. This chapter details how to perform online builds for completed projects and deploy them to the free cloud environment provided by the Platform. The specific operations are as follows:

#### Important Note

Deployment operations are only applicable to **project-type** repositories. Other repository types are not supported.

#### Overview

The Platform provides a free cloud environment, significantly facilitating the transition from project development to launch. With this environment, you can perform online build and compilation for completed projects, then deploy them to the corresponding environment. After deployment, the Platform automatically assigns a dedicated domain name, allowing access to the deployed project via this domain name.

> The Platform also supports source code export for projects. If you prefer not to use the Platform's cloud services, you can import the code into your own environment for self-deployment. For code generation and export methods, refer to [Code Generation](workbench/generate).

After completing project development, you must first release a new version of the repository. Build and deployment apply only to released versions, so ensure the repository has at least one released version before deployment.

#### Build Panel

After releasing a version, locate the `Deploy` function panel on the repository homepage to start the version build and deployment process.

![](/workbench/deploy.png)

#### Create a Build Deployment Task

Enter the deployment panel and click the **Build Now** button in the upper-left corner to start creating a build deployment task.

![](/workbench/deploy1.png)

When creating a build deployment task, complete the following operations:

1. **Select a Version**: Choose the released version to build and deploy from the list of versions. If no versions are available here, it indicates that no released versions have been created for the repository. You must create a version before deploying the project.  
   ![](/workbench/deploy2.png)

2. **Select an Environment**: After selecting a version, the Platform automatically analyzes the environment variables maintained in the selected version. Select the desired environment variable file for building from the list.  
   ![](/workbench/deploy3.png)

    After selecting the environment file, the Platform automatically displays all **configured** environment variables in the file. Carefully verify that the environment variables match the project requirements to ensure the selected environment is correct.

#### Confirm and Execute the Task

After filling in the build task information, click the Confirm button. The system creates the task, and the Platform initiates the automated build and deployment process.

[Video](/workbench/deploy.mp4)

During the build and deployment process, you can monitor the task status in real-time to track progress. To view detailed build processes and logs, click **Task Logs** next to the task.

> To protect developers' intellectual property and sensitive data, non-team members cannot view **Task Logs**, ensuring project information security and confidentiality.

#### How to Access

After the deployment task is completed, click the **Access Deployment Environment** link on the repository page to visit the released project.

![](/workbench/deploy4.png)

Take the `joker/OfficialWebsite` repository as an example. The Platform automatically assigns a domain name following the rule `organization name + repository name`, such as [https://joker_officialwebsite.app.jokers.pub/](https://joker_officialwebsite.app.jokers.pub/).

> Note that the domain name is generated based on the repository's organization and name, with automatic DNS resolution rules created. If the repository is transferred or its name is modified in the future, the deployment access address will automatically update the resolution to ensure the project remains accessible.
