## Controller Design

This chapter mainly elaborates on controller-related content. The controller, as the core functional module of server-side applications, undertakes the important task of designing application API interfaces and can be regarded as the design hub for the only request entry of server-side applications.

### Overview

The platform enables us to quickly create API interfaces for server-side applications in a visual way. We can create different controllers according to business types in the `Controllers` folder, and multiple API methods can be created under each controller.

![](/workbench/back-end.png)

Next, we will explain in detail the various functions of the controller in the order of "API Creation -> Input Parameters -> API Method Parameters -> API Method Return Value Types -> Authorization".

### Create API

Multiple API methods can be created in the controller file. Click the **Create API** button in the upper right corner to open the API editor window.

![](/workbench/server-controller.png)

In this window, the following information of the API interface can be configured:

- **Name**: This is the name of the API method of the interface. It should be noted that this is not the final API access address. The format of the API access address is `Service Root`/`Controller Name`/`API Name`.
- **Remarks Title**: Configure an alias for the API method to help developers quickly understand the meaning of the API.
- **Description**: Write detailed description information for the API method to facilitate developers' in-depth understanding.
- **Request Type**: Multiple request types can be configured here. Only requests that match the configured request type will be mapped to this API method. The optional values include: **POST**, **GET**, **PUT**, **DELETE**.
- **Authorization Authentication**: If this function is enabled, the system will authenticate the JWT before accessing the API interface. Once the JWT verification fails or expires, a 401 error will be directly returned.
- **Input Parameters**: The input parameters of the API can be configured here.

### Input Parameter Validation

As mentioned earlier, we can create the input parameters of the API interface in the API interface editing panel, and their creation follows the general `Field Maintenance` rules. For detailed content, please refer to the [Field Maintenance](/workbench/property) chapter.

Here, we mainly explain a special function of API input parameters in field maintenance: **Input Parameter Validation**.

In the second step of the **Field Maintenance** editing window, different field restriction rules can be configured by selecting different data types.

![](/workbench/server-controller1.png)

The following is an introduction to all validation rules without considering data types:

1. **Regular Expression Validation**: Allows customizing regular expressions to constrain the content of input parameters.
2. **Whether it is an Email**: Used to verify whether the input content is in the email format.
3. **Whether it is a Telephone**: Judges whether the input content conforms to the telephone format.
4. **Only Letters**: Ensures that the input content contains only letters.
5. **Only Letters and Numbers**: Limits the input content to only letters and numbers.
6. **Only Numbers**: Only allows the input of numbers (string type numbers). If the field itself is of the number type, the field type can be directly changed; this rule only provides a supplementary number format validation for the string type.
7. **Whether it is an Integer**: Requires the input to be an integer and does not allow floating-point numbers.
8. **Contains Specific Content**: The string must contain specific content.
9. **Limit the Value Range**: Limits the range of values. For example, gender can only be male/female, and enumeration values can be manually maintained or selected from the data table.
![](/workbench/server-controller2.png)
10. **Length Limit**: Limits the length of the string. The maximum or minimum value can be configured separately, or the limits can be combined simultaneously.
11. **Maximum Value**: For fields of the number type, the maximum value limit can be configured.
12. **Minimum Value**: For fields of the number type, the minimum value limit can be configured.
13. **File Size Limit**: When the field type is **File**, the size of the uploaded file can be limited by this constraint.
14. **File Quantity Limit**: When the field type is **File**, the maximum number of uploaded files can be limited. By default, only one file is allowed to be uploaded.
15. **File Type Limit**: When the field type is **File**, the accepted types of uploaded files can be limited, and wildcards are supported. For example, for images (image/jpeg, image/*), the "*" wildcard is supported. If multiple types need to be limited, they can be separated by ",".

### File Upload

In server-side projects, the `Field Maintenance` panel supports selecting the field type as the `File` file type. With this function, we can implement file upload in the API interface.

The above has mentioned the configuration of the constraint conditions for file types. Here, we will focus on the attributes and operation methods of the File type.

![](/workbench/server-controller3.png)

Suppose an input parameter `userImg` is created, and the uploaded file can be obtained and operated through the way of `data.userImg`.

The data of the file type provides us with the following attributes:

| Name | Type | Description |
| ---- | ---- | ---- |
| checkMimeType | Function | Checks whether it meets the file type requirements and supports wildcards. For example, for images (image/jpeg, image/*), the "*" wildcard is supported. If multiple types are limited, it can be a single string or an array of strings. |
| checkSize | Function | Checks whether it meets the file size limit. |
| fileCount | Number | The number of files. |
| files | File[] | All files. |
| save | Function | Through this method, the file can be saved to the specified directory on the server side. |

Here, we will focus on the **save** file saving method. Other attributes can usually be configured in the input item condition constraints. Unless there are special requirements, custom methods will be considered to judge the file format and file size.

#### File Saving

```js
// Save directly to the project upload directory without any adjustment
await data.userImg.save();

// Complete parameter example, save the file to the user folder in the upload directory.
await data.userImg.save("user/", {
    // Customize the saved file name
    newFileName: (file) => {
        // Name it in the format of userId.ext, where file.ext is the extension of the uploaded file
        return userId + "." + file.ext;
    },
    // Whether to not compress the image. The default here is false. By default, the platform will compress the uploaded image resources at the bottom layer. If you don't want to compress it, you can configure it as true.
    uncompressedImage: false,
    // Image compression processing configuration, which only takes effect when image compression is enabled
    imageCompressionOption: {
        // Image compression ratio 0 - 100, default 80
        quality: 80,
        // Maximum width of the image, not limited by default, in pixels. If the configured value is less than the actual image value, it will be scaled proportionally.
        maxWidth: 1000,
        // Maximum height of the image, not limited by default, in pixels. If the configured value is less than the actual image value, it will be scaled proportionally.
        maxHeight: 1000
    }
});
```

> The project upload directory can be configured through **UPLOAD_ROOT_DIR** in the server-side environment variables.

#### Save Return Value

The call of the **save** method is an asynchronous operation, and its return value is an array:

```typescript
{
    // List of successfully saved files, with the value being the saved path
    success: string[];
    // List of error messages for failed saves
    error: string[];
}
```

Complete example:

```js
// Save directly to the project upload directory without any adjustment
let uploadResult = await data.userImg.save();

if (uploadResult.error.length) {
    // TODO: Record the log
    return ActionError("Save failed"); // ActionError is introduced in the API return value type.
}

let userImg = uploadResult.success[0];
```

![](/workbench/server-controller4.png)

### API Method Parameters

In API logic orchestration, the platform provides us with commonly used data parameters.

- **data**: Input parameters, and the type can be designed and maintained in the API interface input parameters.
- **context**: Routing context, which is the routing context data processed by the API interface and contains:
    1. **jwt**: Authentication token content. The `jwt` property will only exist if the current controller has enabled **Authorization**. The token value has been parsed, and internal properties can be directly obtained.
    2. **url**: Request address
    3. **request**: Underlying request object. We can obtain data such as the request IP and source address through it.
    4. **logger**: Log processing object, which can help us achieve centralized log output and collection.
- **logger**: Log processing object, which can help us achieve centralized log output and collection. It is different from `console` in that it is a centralized log collector, and it allows us to use file logs, console logs, and database logs. Different requirements can be configured in [Environment Configuration](/workbench/env).

### API Return Value Types

The platform provides us with a unified data return structure, as shown below:

```json
{
    "header": {
        "code": "Status Code", // When JK000000 is returned, it represents business success, and all others are business exceptions.
        "msg": "Error Message"
    },
    "data": {} // Returned business data
}
```

The platform also provides a method for quickly creating the interface return value:

#### Ok

Used to return correct business data. The sample code is as follows:

```js
return Ok(业务数据);
```

Of course, in the logic orchestration panel, you can also use the **Return Success Data** node to return the correct business data.

![](/workbench/server-controller5.png)

#### ActionError

Used to return abnormal business data. The sample code is as follows:

```js
return ActionError(错误信息, 错误码, 业务数据);
// Among them, the error message is a required item. If the error code is not configured, the general exception code JK999999 will be used.
```

> Developers can configure different error codes so that the front end can implement different business processing branches according to the status code when the request is abnormal.

Similarly, in the logic orchestration panel, you can also use the **Return Failure Data** node to return abnormal business data.

![](/workbench/server-controller6.png)

#### Data Fallback

In the controller, we can directly return business data through `return`. The platform will judge at the bottom layer. If the returned data meets the required API data format, it will be returned according to the return value; otherwise, it will be automatically wrapped with the `Ok` method and returned as correct data.

### Authorization Authentication

Next, we will explain in detail how to configure the JWT token function of the project.

#### How to Generate a JWT Token

A JWT token can be generated in a certain API interface and returned to the front end, usually completed in the login interface.

The `generateJwtToken` method can be used to generate the token.

![](/workbench/server-controller7.png)

From the logic in the above figure, first query user information according to the interface input items. If the user information is queried, use this information to generate JWT and return `Ok`; if the user information is not queried, return `ActionError`.

> The above content is only an example. It is especially reminded that sensitive data such as passwords should not be stored in the JWT content.

#### How the Front End Sends the JWT Token

The front end needs to send the JWT token through **sid** in the interface request header `header`.

In the JOKER visual platform, the `sid` can be uniformly injected in the `transformReqData` data request conversion method.

![](/workbench/server-controller8.png)

> It should be noted here that if the API has enabled the **Authorization** function, the value obtained through `context.jwt` in the API method is the `payload` of the JWT. At this time, there is no need to use the `verifyJwtToken` method to verify the legality of the token, because the platform will pre-judge whether the token is legal in the routing aspect. If the token is invalid, the logic in the API will not be executed. The `verifyJwtToken` method is only used for advanced and complex custom verification scenarios to provide token parsing operations. 