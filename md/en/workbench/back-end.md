## Understanding the Server Side

This chapter will focus on elaborating the functions of the server-side project and its convenient development capabilities.

The Joker Visual Dev Platform adheres to the front-end and back-end separation development model, endowing developers with the flexibility of independent choice. Developers can focus on the development work of the front-end or server-side projects according to their own expertise and project requirements. This article will focus on the server-side part and conduct in-depth and detailed explanations of its functions to help readers fully understand the development and application of the server side in the Joker Visual Dev Platform.

### Overview

The server-side project undertakes the important task of processing data and is an indispensable data processing layer in Internet applications. In the entire application architecture, it is like the "data steward" behind the scenes, efficiently managing and processing a large amount of data and providing stable data support for front-end applications.

In the field of server-side development, the Joker Visual Dev Platform has opened the door to flexible development for developers. Through this platform, developers can easily complete the development of all server-side assets in a visual way. For example, in terms of database table structure design, developers can plan and construct the structure of database tables intuitively like building blocks, clarify the relationships between fields, and ensure the efficiency and rationality of data storage; when designing controllers (APIs), they can conveniently define various interfaces, standardize the input and output of data, and make the data interaction between the front end and the server side smoother; in cache processing design, it can also be set visually to optimize the reading and storage speed of data and improve the overall performance of the application.

![](/workbench/back-end.png)

### Functional Elements

A complete server-side project (application) is composed of various types of files collaborating with each other. These files mainly cover the following categories in terms of types:

- **Data Model**: With the help of the visual operation interface, developers can complete the database table structure design of the project in all aspects. This function supports highly flexible independent design. Whether it is common table associations, primary key settings, or joint index configurations, etc., they can all be easily achieved, fully meeting the complex data management needs.
- **Controller**: As the key bridge for the server side to interact with the outside world, it is mainly responsible for the declaration of external interfaces (APIs) and related logic processing. Through it, we can flexibly configure a variety of API interfaces. The platform relies on `@joker.server/core` at the bottom layer to further strengthen the control ability, allowing developers to easily design interface authentication mechanisms, conduct data security checks and other functions to ensure the security and reliability of interface use.
- **Cache**: The cache mechanism plays an important role in optimizing the performance of server-side projects. It can perform efficient read and write operations on hot data, avoid repeated calculations and frequent accesses to the underlying database, thereby significantly improving the response speed of the system, effectively reducing the overall performance burden of the system, and ensuring that the server side can run stably under high-concurrency and other scenarios.
- **Configuration File**: It is used to centrally manage various public configurations in the current project. This includes public style settings, specifying which components are open in component library type projects, determining which method sets are open in component library and method set type projects, performing route management, setting global variables and global methods, and handling NPM references. Through unified management of these configurations, the standardization and efficiency of project development and operation can be ensured.
- **Environment Variable**: This file is specifically responsible for declaring and managing variables in different environments. By cleverly setting different environment variables, it is possible to achieve different running effects of the project in different environments such as development, testing, and production, meeting the specific needs of each stage for the project.

### Data Model

Click the "Database" option in the left menu of the console to open the data model design panel. On this panel, the database table structure is presented in an intuitive form, which is convenient for us to manage and maintain it.

![Screenshot of the data model design panel](/workbench/back-end2.png)

Fortunately, the platform is extremely intuitive and convenient in terms of table relationship configuration. It can automatically and completely complete the relationship binding according to type matching. Moreover, the platform has a perfect code inspection ability and can quickly help us analyze the problems existing in the table design process.

![Screenshot related to code inspection](/workbench/back-end3.png)

> **Special Note**: The database underlying layer uses the "prisma" **pgsql** method to implement database management, which not only supports the synchronization of the data table structure but also enables automated data migration, greatly improving the efficiency and convenience of database management.

### Controller

The controller file plays a key role in server-side development. It helps us complete interface declarations and can realize the internal processing of APIs in a visual way. During this process, you can either choose to directly write business logic in the controller or create a method set to conduct hierarchical management of business interfaces, making the code structure clearer and easier to maintain and expand.

![Screenshot related to the controller](/workbench/back-end4.png)

In terms of controller operations, the platform gives developers great flexibility. It not only allows us to freely configure request types but also enables us to enable JWT authentication with one click, providing a secure and reliable identity verification mechanism for interfaces. In addition, the platform also provides a visual database operation mode. Common database operations such as single-table queries, multi-table join queries, group queries, and aggregate statistical queries can all be quickly completed through the visual operation interface, greatly improving the development efficiency and making the development process more convenient and efficient.

![Screenshot of the visual database operation](/workbench/back-end5.png)

### Cache

The cache file plays a key role in optimizing the performance of the server side. It can help us perform cache processing on hot data. By caching hot data, it effectively avoids frequent accesses to the database, thereby reducing the pressure on the database service, significantly improving the server performance, and also accelerating the data access speed, greatly improving the user access efficiency.

![Screenshot related to the cache](/workbench/back-end6.png)

Currently, the platform provides rich and practical three-dimensional cache structure data, and is still continuously expanding new cache structures (the content is constantly being added):

- **Single-item Storage**: It mainly provides simple and direct value operations, including value acquisition, setting, and deletion. Through these basic operations, the cache requirements for single data can be quickly handled, which is suitable for cache management in scenarios where single data is frequently read and written.
- **Array Storage**: It provides a series of cache operations centered around the characteristics of arrays. It can not only obtain the cache length to understand the number of data items in the current cache but also perform cache insertion to dynamically add new data to the cache array; when it is necessary to clean the cache array, the cache clearing function can be used; if you want to obtain data within a specific interval range, the cache list (interval range) operation can meet the requirements; and it can accurately obtain the data in the cache according to the index, meeting the diverse access requirements for array-type cache data.
- **Object Storage**: It provides flexible cache operations based on key-value pairs. Cache can be obtained according to the Key, and it supports batch acquisition of cache data corresponding to multiple Keys, greatly improving the data acquisition efficiency; when setting the cache, batch operations are also supported, which is convenient for updating multiple cache data at one time; it can also check whether the cache of the specified Key exists, which is convenient for confirming the data state before operation; when it is necessary to clean the cache, the delete cache operation can be executed; in addition, all cache KEYs can be obtained, which is convenient for comprehensive management and maintenance of cache data, and is applicable to complex business scenarios where cache data is organized and managed in the form of objects.

### Configuration File

There is a `Project Configuration` file in each repository, and we can configure and manage the public data of the project through this file.

![](/workbench/back-end7.png)

This file has the following capabilities (which will vary according to different repository classifications):

#### NPM Package Management

The underlying dependent packages of the current project can be maintained here. By installing dependent packages, the integration of third-party functions can be achieved, and the relevant functions in the packages can be used in the project.

![](/workbench/back-end8.png)

> Different from the `Component Method Market`, what is provided here is a more underlying library reference, while the Component Method Market is an extended reference for packaged and formed visual assets.

#### Global Variables

The platform allows us to create global variables.

![](/workbench/back-end9.png)

### Environment Variable

The platform provides a complete function for maintaining environment variables.

![](/workbench/back-end10.png)

The platform allows us to create multiple sets of environments inside it and also customize environment variables. The declared environment variables can be called through `process.env`.

![](/workbench/back-end11.png) 