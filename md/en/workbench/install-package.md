## How to Install Extensions

This chapter mainly introduces how to install extensions and how to install NPM dependencies, and also elaborates on the differences and applicable scenarios between them.

### Overview

The JOKER intelligent development platform has flexible expansion capabilities and supports the introduction of third-party resources in two ways.

-   **Component Method Market**: This platform gathers a collection of visual functions created by the JOKER development platform. Here, developers can install component libraries or method sets carefully crafted by other developers. These resources have visual recognition features. After installation and reference, the visual operation resources provided by the installation packages can be intuitively viewed in the `Component Center` and the `Logic Center` in the logic orchestration panel. In this way, developers can quickly utilize these open capabilities through simple drag-and-drop operations, greatly improving development efficiency.

-   **NPM Installation**: NPM plays a significant role in the global software development field and has a huge and active ecological market. In terms of market size, the number of its open-source packages exceeds 1 million, widely covering almost all JavaScript development categories such as front-end frameworks, back-end services, and tool libraries, with weekly downloads reaching hundreds of millions. In terms of user groups, whether they are professional developers, open-source enthusiasts, or enterprise teams, they generally use NPM for project dependency management and application building. Both start-up companies and large technology enterprises rely on NPM to build the technical frameworks required by projects. In terms of industry applications, NPM is widely used in many technical fields such as web development, mobile application development, and server-side programming. Its ecosystem continues to thrive, and new packages and tools are constantly emerging, providing developers with rich and diverse resources and effectively promoting the rapid development and innovation of the entire JavaScript technology stack.

### Component Method Market

On the right side of the workbench, click the "Component Method Market" menu to open the market panel. What is displayed on this panel are all the installable extension packages that match the current repository type. If you want to quickly find a specific extension, you can use the search function to accurately locate the extension you want to integrate.

![Screenshot of the Component Method Market Panel](/workbench/install-package.png)

The component method market panel is divided into two areas from top to bottom:

-   **Recommendations**: In this area, you can find extension plugins that meet your own needs. Here, various algorithms and rules will be used to present extensions that may meet your requirements, helping you discover more useful tools.
-   **Installed**: This area is used to view the extension packages that have been installed in the current project. Moreover, you can easily update and uninstall extensions here. It is convenient for you to manage the installed extensions and ensure that the extensions used in the project are always in the best condition.

When you click on an extension in the market, you can view the detailed information of the extension, which includes key data such as the README file, release logs, and dependency references. Through this information, you can have a more comprehensive understanding of the function, usage method, update history, and dependency relationship with other components of the extension.

![Screenshot of the Extension Detailed Information](/workbench/install-package2.png)

**Special Note**: When a new version of an extension is released, when the project that references the extension opens a new project, the "Component Method Market" menu will display an icon indicating that an update is pending, which will promptly remind you to upgrade so that you can enjoy the benefits of new features, fixed issues, and performance optimization in a timely manner.

#### How to Use

After we complete the installation of an extension, we can find the capabilities provided by this extension in the work panel.

If it is a front-end component library extension, we can find the component extensions it provides in the `Component Center`. We can directly drag it into the work canvas to achieve component reference.

![](/workbench/install-package3.png)

If the extension provides method calls, we can find the methods it provides in the logic orchestration panel. We can drag it into the logic canvas to achieve method calls.

![](/workbench/install-package4.png)

### NPM

If you need to use the capabilities of NPM underlying packages, you can install and manage NPM dependencies in the `Project Configuration` file.

![Screenshot Related to NPM in the Project Configuration](/workbench/install-package5.png)

Click the `Add NPM Reference` button in the upper right corner of the panel to open the NPM market. Here, you can search for the NPM packages you want to install. Just click the plus sign on the right side of the data entry to complete the reference operation of the NPM package.

![Screenshot of the NPM Market](/workbench/install-package6.png)

**Friendly Reminder**: We have integrated many commonly used npm packages and provided references in the project. If you don't find the npm package you need, please feel free to give us feedback, and we will analyze it as soon as possible and provide the corresponding reference.

> [Feedback Link](https://viscode.jokers.pub/repository/7dcbf0e6-c3e2-4390-b233-dc53a22e3c66/issues)

#### How to Use

After completing the installation of the NPM package, if you want to call the methods it provides externally, you can operate through the corresponding NPM variables provided by the platform.

![Screenshot of Using NPM Variables](/workbench/install-package7.png)
