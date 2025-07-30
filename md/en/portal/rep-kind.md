## Repository Types

This chapter focuses on explaining the differences between different repository types and their applicable scenarios.

The JOKER Intelligent Development Platform follows a **front-end and back-end separation** development model, which grants developers greater flexibility. They can independently complete visual rapid development for front-end projects or server-side projects. Meanwhile, even when front-end and back-end development are in the same team, the platform provides API quick association functions to ensure seamless synchronization between front-end and back-end.

### Front-end

Front-end projects generally refer to projects, components, or method-related projects that can run on terminals.

#### Categories

Front-end projects can be subdivided into three types: Applications, UI Components, and Method Sets.

1. **Application**: Application-type repositories are mainly used to store projects that finally run for users. When creating practical projects such as a `lucky draw application`, `form collection application`, or `mall application`, you should select the `Application` category. In this type of repository, you can create various resources such as `Components`, `Method Sets`, `Pages`, and `Interfaces` to fully meet the operational needs of the project.  
   ![Repository Type Selection Interface](/portal/rep-kind.png)

2. **Component Library**: The Component Library aims to provide a complete set of UI component libraries externally. If you choose this type of repository, you can create resources like `Components`, `Method Sets`, and `Style Variables/Public Styles` in the Workbench, which is conducive to centralized management and reuse of UI-related resources.  
   ![Component Library Repository Interface](/portal/rep-kind2.png)

3. **Method Set**: A Method Set generally cannot be deployed independently. It exists mainly as a collection of methods and class libraries to provide public method calls externally. After selecting a repository of this category, you can only create `Method`-type resources in the Workbench.  
   ![Method Set Repository Interface](/portal/rep-kind3.png)

> **Special Note**: Except for `Application`-type repositories, UI Component Libraries and Method Sets can be **referenced** by other repositories after version release. When an Application project **references** a Component Library or Method Set project, it can call the components or methods therein. `Application`-type repositories are not allowed to be referenced, but after version release, they can be cloned as project templates for secondary development.

#### Running Platform

Configure the current repository's running platform here. The current options are **PC 端 (PC 端)**, **移动端 (Mobile 端)**, and **不限 (Unlimited)**. Accurately selecting based on the project's actual running environment helps optimize the project's performance on different platforms.

> If you want to develop an application that can adaptively run on both PC and mobile ends, you can choose **不限 (Unlimited)**.

> Please carefully select the running platform, as it will affect the display of panels in the Workbench and the recommendation and filtering of the Extension Market in the Workbench.

### Server-side

1. **Application**: Application-type repositories are mainly used to store projects that finally run for users. When creating practical projects such as a `lucky draw application`, `form collection application`, or `mall application`, you should select the `Application` category. In this type of repository, you can create various resources such as `Controllers`, `Databases`, `Caches`, and `Method Sets` to fully meet the operational needs of the project.  
   ![Server-side Application Repository Interface](/portal/rep-kind4.png)

2. **Method Set**: A Method Set generally cannot be deployed independently. It exists mainly as a collection of methods and class libraries to provide public method calls externally. After selecting a repository of this category, you can only create `Method`-type resources in the Workbench.  
   ![Method Set Repository Interface](/portal/rep-kind3.png)
