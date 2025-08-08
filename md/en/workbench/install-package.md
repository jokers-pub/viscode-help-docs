## How to Install Extensions  

This chapter primarily explains how to install extensions and NPM dependencies, while clarifying their differences and applicable scenarios.  

### Overview  

The JOKER Intelligent Development Platform offers flexible scalability by supporting the integration of third-party resources through two methods:  

-   **Component & Method Marketplace**: This platform aggregates a collection of visually functional modules created by the JOKER development ecosystem. Here, developers can install carefully crafted component libraries or method sets created by other developers. These resources are visually identifiable, meaning that after installation and reference, they can be directly viewed in the `Component Center` and the `Logic Center` within the logic orchestration panel. Thus, developers can quickly utilize these open capabilities through simple drag-and-drop operations, significantly improving development efficiency.  

-   **NPM Installation**: NPM holds a pivotal position in the global software development landscape, boasting a vast and active ecosystem. In terms of scale, its repository contains over 1 million open-source packages, covering nearly all aspects of JavaScript development, including frontend frameworks, backend services, and utility libraries, with billions of weekly downloads. Its user base spans professional developers, open-source enthusiasts, and enterprise teams, all of whom rely on NPM for dependency management and application building. Whether for startups or large tech corporations, NPM serves as the backbone for project scaffolding. Across industries, NPM is widely used in web development, mobile app development, server-side programming, and numerous other technical domains. Its ecosystem continues to flourish, with new packages and tools emerging rapidly, providing developers with a wealth of resources and driving innovation in the JavaScript technology stack.  

### Component & Method Marketplace  

On the right side of the workspace, click the "Component & Method Marketplace" menu to open the marketplace panel. The panel displays installable extension packages compatible with the current Repository type. If you need to quickly locate a specific extension, use the search feature to pinpoint the one you wish to integrate.  

![Component & Method Marketplace Panel Screenshot](/workbench/install-package.png)  

The marketplace panel is divided into two sections:  

-   **Recommended**: This Section helps you discover extensions tailored to your needs. It employs algorithms and rules to showcase potentially useful extensions, assisting you in finding practical tools.  
-   **Installed**: This Section allows you to view, update, or uninstall extensions currently installed in your project. It provides a straightforward way to manage your extensions, ensuring they remain up to date.  

Clicking on an extension in the marketplace reveals its detailed information, including the README, changelog, dependencies, and other critical data. These details help you comprehensively understand the extension’s functionality, usage, update history, and dependency relationships.  

![Extension Details Screenshot](/workbench/install-package2.png)  

In the extension details panel, you can view its `Basic Information`, `Public Functions`, `Changelog`, and `Dependencies`. The **Functions** tab allows you to preview the plugin’s publicly available capabilities without installing it:  

![](/workbench/install-package8.png)  

**Important Note**: When an extension releases a new version, projects referencing it will display an update notification icon on the "Component & Method Marketplace" menu upon opening. This ensures you can promptly upgrade to benefit from new features, bug fixes, and performance improvements.  

> **What Can I Use?** The plugins visible in the `Component & Method Marketplace` include **publicly released** versions as well as **internal team-only** releases. This means the platform permits the publication of private component libraries for team use. However, non-team members cannot reference non-public extensions, ensuring resource security and team development independence.  

#### How to Use  

After installing an extension, its functionalities become accessible in the workspace.  

For frontend component libraries, you can locate their components in the `Component Center` and drag them directly onto the canvas for integration.  

![](/workbench/install-package3.png)  

For method-based extensions, their exposed methods will appear in the logic orchestration panel. These can be dragged into the logic canvas for invocation.  

![](/workbench/install-package4.png)  

### NPM  

For leveraging core NPM packages, you can install and manage NPM dependencies in the `Project Configuration` file.  

![NPM-Related Screenshot in Project Configuration](/workbench/install-package5.png)  

Click the `Add NPM Reference` button at the top-right of the panel to open the NPM marketplace. Here, you can search for the desired NPM package and click the "+" icon to complete the installation.  

![NPM Marketplace Screenshot](/workbench/install-package6.png)  

**Note**: We have integrated many commonly used npm packages into the platform for direct project use. If a required package is missing, feel free to submit feedback, and we will analyze and provide its reference as soon as possible.  

> [Feedback Link](https://viscode.jokers.pub/repository/7dcbf0e6-c3e2-4390-b233-dc53a22e3c66/issues)  

#### How to Use  

After installing an NPM package, you can invoke its methods via the platform’s designated NPM variables.  

![NPM Variable Usage Screenshot](/workbench/install-package7.png)