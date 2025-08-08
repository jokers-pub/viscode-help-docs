## Understanding Frontend Projects

This chapter focuses on the functionalities of frontend projects and their convenient development capabilities.

The JOKER platform adheres to a frontend-backend separation development model, providing developers with the flexibility to concentrate on either frontend or backend project development. This article specifically addresses the frontend portion, offering a detailed explanation of its features.

### Overview

Frontend projects are primarily responsible for rendering pages and handling business logic at the terminal level, serving as the critical presentation layer of internet applications.

In the realm of frontend development, the JOKER Intelligent Development Platform offers an exceptionally flexible development experience. This platform enables us to visually develop all frontend assets, including **frontend components**, **frontend methods**, and **frontend pages**.

The platform provides a comprehensive development environment supporting diverse flexible development scenarios such as **event parameter passing**, **event modifiers**, **section rendering**, **section parameter passing**, and **component lifecycle**. Developers on this platform enjoy an experience akin to local development, unleashing their creativity to realize various development ideas.

![](/workbench/front-end.png)

### Functional Elements

A complete frontend project (application) combines various types of files, including:

-   **Components**: A public UI interaction area can be encapsulated as a component. By simply dragging it into a designated location, components can be referenced, improving code reusability and reducing development complexity.
-   **Method Sets**: Mainly host public method collections in projects. We can encapsulate method sets for specific business scopes and provide method invocation capabilities. Common examples include time-handling method sets and encryption method sets.
-   **Pages**: Essentially, a page is also a component, but unlike general components, its purpose is final page rendering. It lacks input parameters but supports routing configuration to establish relationships between method addresses and pages.
-   **Configuration Files**: Manage public configurations in the current project, such as common styles, exposed components (for component library projects), exposed method sets (for component library or method set projects), routing management, global variables, global methods, and NPM references.
-   **Environment Variables**: This file declares and manages variables across different environments, enabling projects to run with differentiated effects in various scenarios.
-   **Request Management**: Manages all API calls available for the current application. Here, we maintain API addresses, inputs and outputs, and global request configurations. Declared requests facilitate rapid visual API invocation during logic development.

### Component/Page Development

In the frontend editor, the interface divides into two areas: the `Development Canvas` and the `Properties Panel`.

![Frontend Editor Screenshot](/workbench/front-end2.png)

1. **Development Canvas**: We can drag **components** here to add them. Selected components allow property modifications or deletions.
2. **Properties Panel**: When no component is selected, the component properties panel appears by default, allowing style adjustments or HTML node imports. Selecting a component reveals its specific properties panel, including `Attributes`, `Events`, and `Section` configurations.

When opening a `Component` or `Page` file, two menus appear on the left: `Component Data` and `Component Center`.

![Related Screenshot](/workbench/front-end3.png)

-   **Component Data**: Manages all data within the component, covering **state data**, **logic/events**, and the layout **outline**.
-   **Component Center**: Allows drag-and-drop import of third-party components into our components or pages.

### Method Set Development

We can create method set files in the `Methods` folder, where each set can expose multiple methods.

![Method Set Development Screenshot](/workbench/front-end4.png)

During method development, the platform provides unit test scripts. These help verify the correctness and stability of methods, ensuring robustness across various input conditions.

### Configuration Files

Each repository includes a `Project Configuration` file for managing public project data.

![](/workbench/front-end5.png)

This file offers the following capabilities (varies by repository type):

#### Exposed Components

Components marked here become available for other projects to reference (applicable only to component-type projects).

![](/workbench/front-end6.png)

#### Exposed Methods

Selected methods here are exposed for other projects to use (applies to component and method set projects).

![](/workbench/front-end7.png)

#### Project Style Management

A dedicated area for maintaining global application styles, including style names and variables, ensuring consistency across components and pages.

![](/workbench/front-end8.png)

#### NPM Package Management

Manages project dependencies, enabling integration of third-party libraries for enhanced functionality.

![](/workbench/front-end9.png)

> Unlike the `Component Method Marketplace`, this feature handles lower-level library references, while the marketplace focuses on pre-packaged visual assets.

#### Routing Management

In **application-type** frontend projects, we can manage routing information, including default routes and route guards.

![](/workbench/front-end10.png)

#### Global Methods/Variables

The platform supports creating global variables and methods, corresponding to `@Global` in the frontend core.

![](/workbench/front-end11.png)

### Environment Variables

The platform provides comprehensive environment variable management.

![](/workbench/front-end12.png)

Multiple environments can be created, with custom variables accessible via `import.meta.define`.

![](/workbench/front-end13.png)

### Request Management

In "application-type" frontend projects, the `Request Management` menu appears, allowing full API maintenance. Key features include:

-   **Configuring Request Parameters**: Set **request timeout**, customize **data processing**, and define **request aspect events**.
-   **Efficient Interface Declaration & Data Mocking**: Supports JSON imports for quick API declaration and automated MOCK data generation for faster frontend debugging.

![](/workbench/front-end14.png)