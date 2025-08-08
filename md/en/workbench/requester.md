## Request Management  

This chapter primarily explains how to manage API interfaces in front-end application projects and how to quickly implement requests through a visual approach.  

### Overview  

The Request Management feature is only available in repositories of the **Frontend - Application** type. As an actual implementation project, it allows for the unified management and maintenance of API interfaces.  

You can open this feature by clicking the **Service Interfaces** menu in the right-side panel.  

![](/workbench/requester.png)  

### Create/Edit an Interface  

On the Request Management page, you can create a new service interface by clicking the **New Interface** button in the **top-right corner** or edit an existing one by clicking the **Edit** button in the interface list.  

![](/workbench/requester1.png)  

When the interface editing window opens, the following elements need to be maintained:  

![](/workbench/requester2.png)  

1. **Interface URL**: Enter the interface URL here. Do not include the domain name—the request base URL can be configured in environment variables.  
2. **Request Type**: Click the dropdown before the URL input field to switch the request type (currently supports **POST** and **GET**).  
3. **Title**: A brief title helps developers quickly understand the interface's purpose.  
4. **Description**: Detailed interface information to help developers gain a deeper understanding.  
5. **Input Fields**: Click **Add Parameter** or edit an existing input parameter.  
6. **Output Fields**: Click **Add Parameter** or edit an existing output parameter.  

> Once an interface is created, the platform automatically categorizes it based on the file hierarchy for better management.  
> For multi-environment base URL configuration, refer to the **requesterRoot** variable in the [Environment Variables](/workbench/env) documentation.  

### Import/Update  

The platform provides a quick interface import/update feature, allowing you to rapidly import all API interfaces from existing, accessible backend projects.  

![](/workbench/requester11.png)  

Click the **Import/Update** button in the top-right corner to open the import panel. Enter the name of the backend repository to search for the target project.  

![](/workbench/requester12.png)  

Only backend projects accessible to the current user will be displayed. After selecting a backend project, you can choose a version (e.g., the **DEV** development version).  

Once selected, you can click **Import/Update** to import individual interfaces or controllers, or use the **Sync All** button to synchronize all backend interfaces.  

> If the imported interface URL already exists, it will only update the input/output fields without modifying **MOCK** data. If the data structure changes, update the MOCK data promptly.  

### Interface Input  

Click **Add Parameter** to define input fields:  

![](/workbench/requester3.png)  

For detailed field creation, refer to: [Field Maintenance](/workbench/property)  

### Interface Output  

The output section defines the data structure returned by an interface. Click the **Output** tab to manage output fields.  

![](/workbench/requester4.png)  

For detailed field creation, refer to: [Field Maintenance](/workbench/property)  

Beyond manual field creation, the platform supports **JSON auto-parsing**. Simply paste a sample JSON response, and the system will automatically extract the fields.  

[video](/workbench/requester5.mp4)  

### MOCK Data  

The JOKER development platform includes MOCK capabilities, enabling realistic test data generation using Mock.js syntax.  

![Interface showing Mock syntax for test data generation](/workbench/requester6.png)  

In addition to Mock.js syntax, manual MOCK data customization is supported, along with **conditional branching** for advanced use cases.  

![Interface for manual MOCK data and conditional branching](/workbench/requester7.png)  

> Condition-based MOCK data allows you to control data variability based on specific logic (e.g., simulating success/failure responses).  

### Global Request Management  

Click the **Global Request Management** tab in the request editor to configure:  

![Screenshot of Global Request Management](/workbench/requester8.png)  

Key configurations:  

- **Timeout**: Default is 10s (override per request if needed).  
- **Data Transformation**: Modify request/response formats to adapt to different backend standards.  
- **Status Validation**: (Recommended) Define logic to distinguish between business success/failure. If unset, all non-network errors are treated as successes.  
- **Global Error Handling**: (Recommended) Centralize error handling (e.g., showing error popups). Return `true` in the `Error` method to bypass this.  
- **Custom Configs**: Add specialized options (e.g., enabling loading animations).  
- **Request Interceptors**: Use pre/post/error hooks for tasks like displaying loading states.  

### How to Call an Interface  

After defining an interface, use the **Data Request** node in any method editor to invoke it:  

![](/workbench/requester9.png)  

Customize request parameters during invocation:  

![](/workbench/requester10.png)