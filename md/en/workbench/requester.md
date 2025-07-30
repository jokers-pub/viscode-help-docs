## Request Management

This chapter mainly describes how to manage our API interfaces in front-end application type projects and how to quickly implement a request in a visual way.

### Overview

The request management function is only provided in the `Front-end - Application` type of repositories. As an actual application implementation project, we can achieve unified management and maintenance of API interfaces within it.

We can click on the `Service Interface` menu in the right menu panel to open this function.

![](/workbench/requester.png)

### Create/Edit Interface

In the request management page, we can click the `New Interface` button in the **upper right corner** of the page to create a new service interface; we can also click the edit button in the interface list to edit the service interface.

![](/workbench/requester1.png)

After we open the interface edit window, the following content elements need to be maintained:

![](/workbench/requester2.png)

1. **Interface Address**: Here, you need to fill in the interface address. Please do not fill in the interface domain name here. The request root can be configured in the environment variables.
2. **Request Type**: Click on the request type in front of the interface address input box to allow switching of the request type. Currently, two request methods, `POST` and `GET`, are supported.
3. **Remarks Title**: The interface title can help developers quickly understand the meaning of the interface.
4. **Interface Description**: Complete interface introduction information to help developers understand the interface in depth.
5. **Input**: Interface input fields. You can click to add parameters or edit an already added interface input parameter.
6. **Output**: Interface output fields. You can click to add parameters or edit an already added interface input parameter.

> After we create a service interface, the platform will automatically categorize it according to the root level, providing better service interface management.
> For the configuration of the request root in multiple environments, please read the **requesterRoot** variable in the [Environment Variables](/workbench/env) article.

### Interface Input

We can click the `Add Parameter` button to add interface input parameters:

![](/workbench/requester3.png)

For detailed field creation help documentation, please refer to: [Field Maintenance](/workbench/property)

### Interface Output

The interface output refers to the data format type returned by an interface. We can click on the `Output` tab to maintain the interface output fields.

![](/workbench/requester4.png)

For detailed field creation help documentation, please refer to: [Field Maintenance](/workbench/property)

In addition to the traditional field creation function provided by the platform, it also provides a function of automatic recognition according to JSON content. We can directly copy the return data of the existing interface into the JSON parsing window, and the platform will automatically parse the fields.

[video](/workbench/requester5.mp4)

### MOCK Data

The JOKER intelligent development platform has the MOCK data capability. With the convenient Mock syntax, the declaration of Mock stub data for fields can be achieved.

![Interface showing the implementation of stub data declaration using Mock syntax](/workbench/requester6.png)

In addition to using the `mock.js` syntax to write stub data, the platform also supports manual maintenance of Mock data and provides an advanced stub function with conditional branches.

![Interface showing manual maintenance of Mock data and advanced stub with conditional branches](/workbench/requester7.png)

> During manual maintenance, we can set the **Condition** field to determine the hit condition of the current Mock data, so as to flexibly control the usage scenarios of Mock data.

### Request Global Management

In the request management editor, click on the `Request Global Management` tab to enable this function.

![Screenshot of the entrance to Request Global Management](/workbench/requester8.png)

This function covers the following key configuration items:

- **Request Timeout**: The default request timeout is 10 seconds. You can configure the global request timeout here. For interfaces that require long processing time, the timeout can also be set separately during the request, and the timeout configured here will be the default setting when the timeout is not specified.
- **Data Conversion Configuration**: Here, you can configure the data conversion before and after the request. Utilize this aspect event to achieve the transformation to meet different server-side interface specifications.
- **Request Status Judgment**: (Recommended configuration) After the interface responds, use this configuration to judge whether the interface data is a business success or a business failure. If not configured, except for abnormal network status, it will be regarded as a business success.
- **Global Exception Handling**: (Recommended configuration) You can configure the global common handling method for request exceptions here. For example, a unified pop-up window can be used to prompt error information after a request fails. If the `Error` method within the request returns `true`, the global exception handling will not be triggered.
- **Request Custom Configuration**: You can add some personalized configuration items here to meet personalized business needs. For example, add a parameter to determine whether to enable loading.
- **Request Guard**: Here, you can configure the request guard logic to achieve functions such as the request loading effect. The guard mainly includes the management of three aspect events: pre, post, and error.

### How to Call the Interface

After we have completed the maintenance of the interface, we can use the `Data Request` node in any method logic editor to quickly call the interface request.

![](/workbench/requester9.png)

When requesting an interface, we can also customize the configuration of the interface request.

![](/workbench/requester10.png) 