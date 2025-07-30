## Global Methods

This chapter mainly focuses on the global methods in front-end projects. Global methods are usually used to implement public business logic and can quickly call the provided business methods across component or page files.

> Global functions can provide convenient global method calls during page template development, such as functions like date formatting, amount formatting, and email verification. They will be registered through the `registerGlobalFunction` method in the main entry file of the project. For detailed information, you can refer to the official help documentation of the framework. However, global functions are only allowed to be used in the **layout template syntax**.

### How to Create

The global methods of the project can be maintained in the `Global Methods` panel of the `Project Configuration` file.

![Screenshot of the Global Methods Maintenance Panel](/workbench/global.png)

After creating the public methods, click the `Logic Orchestration` button to edit the internal method logic.

Global methods are isolated from each other within the project and will not be exposed externally. In front-end projects of the application type, the platform supports the introduction of public methods in third-party libraries through the quick import method.

![Screenshot of the Interface for Quickly Importing Public Methods of Third-Party Libraries](/workbench/global1.png)

### How to Use

Global methods can be quickly called in the component property panel of component or page resources.

![Screenshot of the Interface for Calling Global Methods in the Component Property Panel](/workbench/global3.png)

> Since only projects of the `application` type are allowed to register global methods, the syntax like `Global.` will only appear in projects of the application type. Although component libraries and method sets cannot use global methods, they can provide global method logic externally and support integration in application projects through the quick import method. 