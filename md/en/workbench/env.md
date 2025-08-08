## Environment Variables

This chapter introduces the environment variable-related functionalities in `application` type projects.

### Overview  

In application-type projects, the platform allows us to implement multi-environment business/runtime differences through environment variables.  
We can manage the project's environment variables in the **Environment Variables** file in the root directory.  
![](/workbench/env.png)  

-   **Environment Variables**: In this file, we can create environment variables and assign different values to them across different environments.  
-   **Environments**: We can create multiple environments based on requirements, each with distinct configurations for environment variables. Common environments include:  
    -   **DEV (Development Environment)**: The daily coding and debugging environment for developers, emphasizing convenience for rapid iteration and code modifications. It often differs significantly from production environments.  
    -   **IT (Integration Testing Environment)**: Used for integration testing of multiple components or modules, verifying interactions and ensuring stability between subsystems.  
    -   **SIT (System Integration Testing Environment)**: Conducts full-system integration testing, validating performance, compatibility, and interactions with external systems to ensure alignment with business needs.  
    -   **UAT (User Acceptance Testing Environment)**: Allows end-users or clients to perform acceptance testing before deployment, verifying that the system meets business requirements and expectations.  
    -   **STAGING (Pre-Production Environment)**: Also known as the gray environment, closely mirroring production configurations and data, used for final validation before release to minimize risks.  
    -   **QA (Quality Assurance Environment)**: A dedicated environment for QA teams to perform functional, performance, and security testing under diverse scenarios.  
    -   **PROD (Production Environment)**: The live environment serving end-users, demanding high stability, reliability, and security.  

### Default Variables  

The platform provides essential environment variables, which cannot be deleted. Below we explain the default variables for **frontend** and **backend** projects.  

#### Frontend Projects  

| Configuration         | Meaning                | Details                                                                                                                                                                                                                 |
|----------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `requesterRoot`      | Request Base URL      | Configures the request address. The final request URL combines the `requesterRoot` and `API endpoint` (format: `requesterRoot`/`API endpoint`).                                                                         |
| `enableRequesterMock`| Enable Request Mock   | Determines whether mock responses are used instead of real API calls. Values: `true` (default, enables mocking), `false` (disables mocking).                                                                            |
| `routerRoot`         | Routing Base Path     | Configures the base path for routing. Refer to the [Routing documentation](https://front.jokers.pub/router/init) for details on the **base** routing configuration.                                                     |

#### Backend Projects  

| Configuration                | Meaning                          | Details                                                                                                                                                                                                                 |
|-----------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SERVER_NAME`               | Service Name                   | Identifies the service in clustered deployments for log differentiation.                                                                                                                              |
| `PORT`                      | Service Port                   | The port the service runs on (default: `8000`). Adjust to avoid conflicts or meet network requirements.                                                                                                                  |
| `HOST`                      | Service Host                   | The base address of the service (default: `localhost`).                                                                                                                                                                 |
| `UPLOAD_ROOT_DIR`           | File Upload Directory          | The directory for storing uploaded files (default: `./upload`). Customize as needed.                                                                                                                                     |
| `STATIC_ROOT_DIR`           | Static Resources Directory     | Serves static files (e.g., images, CSS, JS) directly from this directory.                                                                                                                                               |
| `AUTH_EXPIRES_IN`           | JWT Token Expiration           | Sets the validity period for JWT tokens (e.g., `24h` for 24 hours, `3d` for 3 days; default: 4 days).                                                                                                                  |
| `LOG_TYPE`                  | Logging Type                   | Options: `Console` (real-time logs), `File` (file-based logging with rotation), or `MongoDb` (logs stored in MongoDB).                                                                                                 |
| `LOG_MONGODB_SERVER_PATH`   | MongoDB Log Server Address     | Required if `LOG_TYPE` is `MongoDb`. Specifies the MongoDB connection for logs.                                                                                                                                         |
| `CACHE_TYPE`                | Cache Type                     | Options: `Memory` (volatile, fast) or `Redis` (persistent, distributed; default: `Memory`).                                                                                                                            |
| `CACHE_REDIS_SERVER_PATH`   | Redis Cache Server Address     | Required if `CACHE_TYPE` is `Redis`. Specifies the Redis connection.                                                                                                                                                    |
| `DB_SERVER_URL`             | Database Connection URL        | Configures the database endpoint for data operations.                                                                                                                                                                   |

### Creating Variables  

![Environment Configuration Interface](/workbench/env1.png)  

Click the **Create Environment Variable** button at the bottom of the `Environment Configuration` file to create a variable.  

![Creating an Environment Variable](/workbench/env2.png)  

#### Variable Configuration Fields  

-   **Variable Name**: The name of the environment variable.  
    -   Frontend: Use camelCase (e.g., `apiBaseUrl`).  
    -   Backend: Use UPPER_SNAKE_CASE (e.g., `API_BASE_URL`).  
-   **Title**: A human-readable label for quick reference.  
-   **Description/Note**: Detailed usage instructions.  
-   **Variable Group**: Organize variables into groups for easier management.  
-   **Allowed Values**: Specify possible values (press Enter to add multiple).  

### Creating Environments  

Click **Create Environment** in the top-right corner of the `Environment Configuration` file to add a new environment.  

![](/workbench/env3.png)  

Once created, an environment tab appears. Switch tabs to manage variables for each environment.  

![](/workbench/env4.png)  

> The **DEV** environment is mandatory and cannot be deleted. It represents the default workspace for development.  

### Using Environment Variables  

In **frontend projects**, access variables via `import.meta.define.*`:  
![](/workbench/env5.png)  

In **backend projects**, use `process.env.*`:  
![](/workbench/env6.png)  

### Environment Switching  

Two methods exist for switching environments:  

#### 1. Debug Execution  
Select the environment during [runtime debugging](/workbench/debugger):  
![](/workbench/env7.png)  

#### 2. Code Export  
During export, environment-specific configurations are generated in the root directory, with run commands in `package.json`:  
![](/workbench/env8.png)  

### Data Security  

The platform enforces strict security for environment configuration files:  
- For **public projects**, variable values are masked to prevent exposure.  
- During project cloning, sensitive data is **anonymized** to ensure protection.