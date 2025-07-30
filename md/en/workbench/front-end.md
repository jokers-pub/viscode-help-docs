## Understanding Front-end Projects

This chapter will focus on elaborating on the functions of front-end projects and their convenient development capabilities.

The JOKER platform adheres to the front-end and back-end separation development model, which endows developers with flexibility, enabling them to concentrate on the development of either front-end or back-end projects. This article focuses on the front-end part and elaborates on its functions in detail.

### Overview

The front-end project is mainly responsible for rendering pages on terminals and handling business logic, and it is a crucial presentation layer for Internet applications.

In the field of front-end development, the JOKER intelligent development platform offers an extremely flexible development experience. With the help of this platform, we can complete the development of all front-end assets in a visual way, covering aspects such as **front-end components**, **front-end methods**, and **front-end pages**.

The platform has created a complete development environment that supports various flexible development scenarios, such as **event parameter passing**, **event modifiers**, **block rendering**, **block parameter passing**, **component life cycle**, etc. On this platform, developers can have an experience similar to local development, freely display their creativity and realize various development ideas.

![](/workbench/front-end.png)

### Functional Elements

A complete front-end project (application) consists of various types of files. These files mainly include the following types:

- **Components**: As a public UI interaction area, it can be encapsulated into a component. When using it, you just need to drag it into the specified position to achieve component reference, which effectively improves code reusability and reduces development difficulty.
- **Method Sets**: They mainly carry the collection of public methods in the project. We can encapsulate method sets with different business functions according to specific business scopes and provide the ability to call methods externally. For example, common ones include time processing method sets, encryption method sets, etc.
- **Pages**: A page is essentially also a kind of component, but different from general components, its purpose is to achieve the final page rendering. It has no input parameters, but it has the function of configuring routing information. By configuring the routing information of the current page, the association relationship between the method address and the page can be established.
- **Configuration Files**: They are used to manage the public configurations in the current project, such as public styles, which components are open (for component library type projects), which method sets are open (applicable to component library and method set type projects), routing management, global variables, global methods, and NPM references.
- **Environment Variables**: This file is mainly responsible for declaring and managing variables in different environments. With the help of different environment variables, the differential running effects of the project in different environments can be achieved.
- **Request Management**: It is mainly responsible for managing all the API interfaces that can be called under the current application. Here, we can maintain the addresses, inputs, outputs, and global request configurations of APIs. The declared requests can help quickly implement interface calls in a visual way during the logic development process.

### Component/Page Development

In the front-end editor, the interface is divided into two areas on the left and right, namely the `Development Canvas Area` and the `Property Area`.

![Screenshot of the Front-end Editor](/workbench/front-end2.png)

1. **Development Canvas Area**: In this area, we can drag **components** into the working canvas to complete the addition operation of components. Meanwhile, if a component has been added, after selecting it, we can modify its properties or perform operations such as deleting the component.
2. **Property Area**: When no component is selected, the component property panel is displayed by default. Here, we can change the style file of the component or quickly import nodes through HTML. When a component is selected, the property area will display the exclusive property panel of this component, which contains three types of property configurations: `Properties`, `Events`, and `Areas`.

When we open `component` or `page` type files, we will find that there are two menus, `Component Data` and `Component Center`, displayed on the left side of the workbench.

![Related Screenshot](/workbench/front-end3.png)

- **Component Data**: With the help of this menu, we can manage all the data inside the component, covering **state data**, **logic/events**, and the layout **outline**.
- **Component Center**: With the help of the component center, we can quickly introduce third-party referenced components into our components or pages by dragging.

### Method Set Development

We can create method set files in the `Method` folder. A method set has the ability to provide multiple methods externally.

![Screenshot Related to Method Set Development](/workbench/front-end4.png)

During method development, the platform also provides unit test scripts. These scripts can assist us to effectively verify the correctness and stability of methods, ensure that each method can run as expected under various input conditions, help to discover and correct potential logical errors in a timely manner, improve code quality, and ensure the reliability and robustness of the entire method set.

### Configuration Files

There is a `Project Configuration` file in each repository, and we can configure and manage the public data of the project through this file.

![](/workbench/front-end5.png)

This file has the following capabilities (which may vary according to different repository classifications):

#### Exposing Components Externally

You can check the components that need to be exposed externally here, so that when they are referenced by other projects, they can provide corresponding component capabilities. (It only takes effect in component type projects)

![](/workbench/front-end6.png)

#### Exposing Methods Externally

You can check the methods that need to be exposed externally here, so that when they are referenced by other projects, they can provide corresponding method functions. (It only takes effect in component and method set type projects)

![](/workbench/front-end7.png)

#### Project Style Management

The platform provides us with a dedicated area for maintaining the public styles of the global application. In this area, we can centrally manage public style names and style variables. After these style names and style variables are uniformly maintained, we can quickly call them during the development of components and pages, which greatly improves the development efficiency and ensures the consistency and standardization of the style presentation of the entire application.

![](/workbench/front-end8.png)

#### NPM Package Management

The underlying dependent packages of the current project can be maintained here. By installing dependent packages, the integration of third-party functions can be achieved, and the relevant functions in the packages can be used in the project.

![](/workbench/front-end9.png)

> Different from the `Component Method Market`, what is provided here is a more underlying library reference, while the component method market is an extended reference for packaged and visualized assets.

#### Routing Management

In the front-end projects of the **application** type, we can maintain the routing information of the current project here, including: the default routing address and routing guards.

![](/workbench/front-end10.png)

#### Global Methods/Global Variables

The platform allows us to create global variables and global methods, and this function corresponds to `@Gloabl` in the front-end core.

![](/workbench/front-end11.png)

### Environment Variables

The platform provides a complete function for maintaining environment variables.

![](/workbench/front-end12.png)

The platform allows us to create multiple sets of environments inside it and also customize environment variables. The declared environment variables can be called through `import.meta.define`.

![](/workbench/front-end13.png)

### Request Management

In the front-end projects of the "application" type, the `Request Management` option will be displayed in the left menu. Through this menu, we can comprehensively maintain all the API interfaces in the current project. The platform endows powerful, complete, and rich interface processing capabilities, which are manifested as follows:

- **Configuring Request Parameters**: We can freely set the **request timeout period** to avoid long waiting times for requests due to network problems and improve the user experience; we can also customize the **request data processing** method to ensure that data is passed between interfaces in an appropriate format; at the same time, we can flexibly configure the **request aspect events** to execute specific logic before and after requests to meet diverse business needs.
- **Convenient Interface Declaration and Data Simulation**: It supports quickly importing interface declarations according to JSON, which greatly improves the efficiency of interface creation and reduces the workload of manual writing; in addition, it also has the advanced function of automatically generating MOCK data. During the development process, without relying on real back-end data, the front-end functions can be quickly debugged and developed, accelerating the project iteration speed.

![](/workbench/front-end14.png) 