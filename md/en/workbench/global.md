## Global Methods

This chapter focuses on global methods in front-end projects, which are typically used to implement shared business logic and can be quickly invoked across components or page files to provide business methods.

> Global functions enable convenient method calls during page template development, such as date formatting, currency formatting, email validation, and other common functionalities. These methods are registered in the project's main entry file via the `registerGlobalFunction` method. For detailed information, please refer to the framework's official documentation. However, global functions can only be used within **layout template syntax**.

### How to Create

In the `Global Methods` panel of the `Project Configuration` file, you can maintain the global methods for the project.

![Screenshot of the Global Methods Maintenance Panel](/workbench/global.png)

After creating a shared method, click the `Logic Orchestration` button to edit its internal method logic.

Global methods are isolated within the project and are not exposed externally. For application-type front-end projects, the platform supports importing public methods from third-party libraries via quick import.

![Screenshot of the Quick Import Interface for Third-Party Library Public Methods](/workbench/global1.png)

### How to Use

You can quickly invoke global methods in the component attribute panel of component or page resources.

![Screenshot of Invoking Global Methods in the Component Attribute Panel](/workbench/global3.png)

> Only `Application`-type projects are allowed to register global methods, which is why the `Global.` syntax appears exclusively in such projects. While component libraries and method collections cannot use global methods directly, they can provide global method logic externally and support integration into application projects via quick import.