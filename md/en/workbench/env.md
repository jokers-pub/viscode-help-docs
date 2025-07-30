## Environment Variables

This chapter mainly introduces the functions related to environment variables in the "application" type projects.

### Overview

In the projects of the application type, the platform allows us to achieve business/operation differences in multiple environments through environment variables.
We can maintain the project's environment variables in the **Environment Variables** file in the root directory.
![](/workbench/env.png)

-   **Environment Variables**: We can create environment variables in this file and set different values for them in different environments.
-   **Environment**: We can create multiple environments according to our own requirements, and different values can be configured for environment variables in each environment. Generally, environments are divided into:
    -   **DEV (Development Environment)**: It is the environment where developers write code and debug programs on a daily basis. It focuses on convenient development and has significant differences from the production environment, facilitating developers to quickly iterate and modify code.
    -   **IT (Integration Testing Environment)**: It is used for integration testing of multiple components or modules, with the focus on verifying the interaction and collaboration among different modules to ensure that the system has complete and stable functions after integration and to check whether the interfaces between components are normal.
    -   **SIT (System Integration Testing Environment)**: It conducts integration testing on the entire system, integrating various subsystems and functional modules, testing the overall performance, functional compatibility of the system and its interaction with external systems to ensure that the system meets business requirements and design requirements.
    -   **UAT (User Acceptance Testing Environment)**: Before the project is delivered, it is provided for end users or customers to conduct acceptance testing, so as to verify whether the system meets business requirements and user expectations and ensure that the system obtains user approval before going online.
    -   **STAGING (Pre-release Environment)**: Also known as the gray-scale environment. Its configuration and data are very similar to those of the production environment. It is mainly used for the final integration testing, performance testing and pre-release verification before the new version is deployed to the production environment, reducing the go-live risk and ensuring the stable operation of the new version in the production environment.
    -   **QA (Quality Assurance Environment)**: It is the environment where quality assurance personnel conduct various tests, covering multiple aspects such as functionality, performance, and security. It simulates various user scenarios and data conditions to comprehensively ensure the quality and stability of the system.
    -   **PROD (Production Environment)**: It is the environment where the system is officially running and provides services to end users. Production data is processed and stored here, and it has extremely high requirements for stability, reliability, and security.

### Default Variables

The platform provides us with basic environment variables, and these variables are not allowed to be deleted. Next, we will explain the meanings of the default variables in the **front-end** and **server-side** projects respectively.

#### Front-end Projects

| Configuration Item    | Meaning                        | Detailed Description                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `requesterRoot`       | Request Root                   | It is used to configure the request address. When a request is initiated, the actual request address will be composed of the `Request Root` and the `request API address`, in the format of `Request Root`/`request API address`.                                                                                                                                                                                   |
| `enableRequesterMock` | Whether to Enable Request Mock | This configuration item determines whether to enable the request Mock function. After it is enabled, the request will not be sent to the server side, but Mock data will be used in the terminal to return the interface data. Value Explanation: - `true`: Enable the Mock function; - `false`: Disable the Mock function; - If not filled in, the default value is `true`, that is, the Mock function is enabled. |
| `routerRoot`          | Router Root                    | It can be used to configure the root of the router address. For more detailed information, you can refer to the relevant content about the **base** router root in [Routing](https://front.jokers.pub/router/init).                                                                                                                                                                                                 |

#### Server-side Project

| Configuration Item        | Meaning                                | Detailed Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `SERVER_NAME`             | Service Name                           | When the service is deployed in a cluster, the names of each service node can be configured through this property. When logging, this service name will be recorded, which facilitates the differentiation and management of logs for different service nodes.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `PORT`                    | Service Port                           | The port used by the service, with the default value of 8000. It can be modified according to actual requirements to avoid port conflicts or adapt to specific network environments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `HOST`                    | Service Root Address                   | The base address of the service, with the default value of `localhost`. It is usually used to specify the access location of the service in the network and can be adjusted according to the deployment environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `UPLOAD_ROOT_DIR`         | File Upload Directory                  | The storage directory used when uploading files. By default, it is set to the `upload` folder under the current running directory. It can be configured to other appropriate disk locations according to actual storage requirements.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `STATIC_ROOT_DIR`         | Static Resource Service File Directory | It is used to configure the storage directory of static resource files (such as pictures, CSS, JavaScript files, etc.). After configuration, when the service interface is started, this configured directory will be started as a static service, facilitating the front end to directly access these static resources.                                                                                                                                                                                                                                                                                                                                                                         |
| `AUTH_EXPIRES_IN`         | Default JWT Token Expiration Time      | The valid duration of the JWT (JSON Web Token) token can be configured, and time units can be set. For example, `24h` means 24 hours, and `3d` means 3 days. If not configured, the default expiration time is 4 days.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `LOG_TYPE`                | Logging Type                           | It is used to specify the logging method, and the optional values are as follows: - `Console`: Output the logs to the console, which is convenient for viewing log information in real time during development and debugging. - `File`: Record the logs in files, and the files will be automatically managed in slices, facilitating the storage and subsequent analysis of logs. - `MongoDb`: Use the MongoDB database to record logs, which is suitable for scenarios where a large number of logs need to be stored for a long time and complex queries are required.                                                                                                                        |
| `LOG_MONGODB_SERVER_PATH` | MongoDB Log Data Service Address       | This parameter only needs to be configured when `LOG_TYPE` is configured as `MongoDb`. It is used to specify the address of the MongoDB database service that stores log data to ensure that the logs can be correctly stored in the specified database.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `CACHE_TYPE`              | Cache Type                             | It is used to select the cache usage mode, and the optional values are as follows: - `Memory`: Use the memory mode for caching. The data is stored in the server's memory, with fast read and write speeds. However, the cached data will be lost after the server restarts. It is suitable for scenarios where high real-time requirements for cached data and a small amount of data are required. - `Redis`: Use the Redis service for caching. The data is stored in the Redis server, supporting distributed caching and persistent storage. It is suitable for scenarios where high reliability and scalability requirements for cached data are required. The default is the memory mode. |
| `CACHE_REDIS_SERVER_PATH` | Redis Cache Service Address            | This parameter only takes effect when `CACHE_TYPE` is configured as `Redis`. It is used to configure the address of the Redis service so that the service can connect to the specified Redis server for read and write operations of cached data.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `DB_SERVER_URL`           | Database Connection Address            | It is used to configure the service address of the database connected by the service. Through this configuration, the service can correctly connect to the corresponding database to implement data storage and reading operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### How to Create Variables

![Interface for Environment Configuration](/workbench/env1.png)

We can click the "Create Environment Variable" button below the content of the "Environment Configuration" file to create variables.

![Interface for Creating Environment Variables](/workbench/env2.png)

#### Explanation of Variable Configuration Items

-   **Variable Name**: It refers to the name of the environment variable. In front-end projects, it is recommended to adopt the lowerCamelCase naming convention with the first letter in lowercase; in server-side projects, it is recommended to use all uppercase letters and separate words with `_`.
-   **Title**: The title of the variable, which can help developers quickly understand the meaning of the variable.
-   **Remarks / Hint**: A detailed description of the variable, which helps developers understand the purpose of the variable in depth.
-   **Variable Group**: The platform supports group management of variables. Variables in the same group will be aggregated and displayed in the environment configuration file for easy viewing and management.
-   **Optional Values of Variable**: If the variable has optional values, they can be filled in here. Press the Enter key to add multiple optional values.

### How to Create an Environment

We can click the "Create Environment" button in the upper right corner of the "Environment Configuration" file to add different environments.

![](/workbench/env3.png)

After creation, the data label of the environment will be displayed, and you can manage the environment variables in the environment by switching environments.

![](/workbench/env4.png)

> The DEV environment is the default environment of the system and cannot be deleted. The DEV environment is the running environment of the workbench during development.

### How to Use Environment Variables

In front-end projects, we read the values of environment variables in the way of `import.meta.define.`.
![](/workbench/env5.png)

In server-side projects, we read the values of environment variables in the way of `process.env.`.
![](/workbench/env6.png)

### Environment Switching

When we have configured multiple sets of environment variables, how can we switch and use these environments? Here we provide two modes: Debugging and Running, Code Exporting.

#### Debugging and Running

We can choose an environment to run and debug when [Running and Debugging](/workbench/debugger).
![](/workbench/env7.png)

#### Code Exporting

When generating and exporting code, we will generate the configuration files of these environment variables in the root directory and provide the running commands for different environments in `package.json`.

![](/workbench/env8.png)

### Data Security

For the environment configuration files, the platform has a complete set of data security protection mechanisms. If your project is a public project, when other people access your project code, they can only see the environment variables, and the values of the environment variables will undergo data desensitization processing, thus ensuring that the values of your environment variables will not be leaked.

During the project cloning operation, the platform will also perform **desensitization** processing on important data files to fully ensure data security.
