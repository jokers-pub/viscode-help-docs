## Repository Types  

This chapter focuses on explaining the differences between various repository types and their applicable scenarios.  

The JOKER Intelligent Development Platform follows a frontend-backend separation development model, which provides developers with greater flexibility. They can independently complete the visual rapid development of frontend projects or achieve fast visual development for server-side projects. Additionally, even if frontend and backend development are handled by the same team, the platform offers API quick-association functionality to ensure seamless synchronization between the frontend and backend.  

### Frontend  

Frontend projects typically refer to projects, components, or method-related projects that can run on end-user devices.  

#### Categories  

Frontend projects can be subdivided into Applications, UI Components, and Method Libraries.  

1. **Application**: Application-type repositories are primarily used to store projects ultimately intended for end users. When creating projects such as `Lottery Application`, `Form Collection Application`, or `E-Commerce Application` that are intended for real-world use, you should select the `Application` category. In this type of repository, you can create various resources such as `Components`, `Method Libraries`, `Pages`, and `Interfaces` to comprehensively meet the diverse requirements of the project.  
   ![](/portal/rep-kind.png)  

2. **Component Library**: Component libraries aim to provide a complete set of UI components for external use. If you select this type of repository, you can create resources such as `Components`, `Method Libraries`, and `Style Variables/Common Styles` in the workspace, which facilitates centralized management and reuse of UI-related resources.  
   ![](/portal/rep-kind2.png)  

3. **Method Library**: Method libraries generally cannot be deployed independently. They primarily serve as collections of methods or class libraries designed to provide public method calls externally. After selecting this repository type, you can only create resources of the `Method` type in the workspace.  
   ![](/portal/rep-kind3.png)  

> **Special Note**: Apart from `Application`-type repositories, UI Component Libraries and Method Libraries can be **referenced** by other repositories upon version release. When an application-project **references** a component library or method library, it can access the components or methods within them. However, `Application`-type repositories cannot be referenced, though after version release, they can be cloned as project templates for secondary development.  

#### Runtime Platform  

Configure the runtime platform of the current repository here. Currently available options are **PC**, **Mobile**, and **Unrestricted**. Accurately selecting the platform based on the actual runtime environment of the project helps optimize performance across different platforms.  

> If you want to develop an application that can responsively run on both PC and mobile devices, choose **Unrestricted**.  

> Please carefully select the runtime platform, as it will affect the display of panels in the workspace and the recommendations/filtering in the extension marketplace.  

### Server-Side  

1. **Application**: Application-type repositories are primarily used to store projects ultimately intended for end users. When creating projects such as `Lottery Application`, `Form Collection Application`, or `E-Commerce Application` that are intended for real-world use, you should select the `Application` category. In this type of repository, you can create resources such as `Controllers`, `Databases`, `Caches`, and `Method Libraries` to comprehensively meet the diverse requirements of the project.  
   ![](/portal/rep-kind4.png)  

2. **Method Library**: Method libraries generally cannot be deployed independently. They primarily serve as collections of methods or class libraries designed to provide public method calls externally. After selecting this repository type, you can only create resources of the `Method` type in the workspace.  
   ![](/portal/rep-kind3.png)