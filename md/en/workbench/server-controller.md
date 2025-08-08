## Controller Design  

This chapter focuses on the controller, a core functional module in server-side applications that is responsible for designing API interfaces, serving as the sole entry point for requests—a design hub for server-side applications.  

### Overview  

The platform empowers users to rapidly create API interfaces for server-side applications through a visual interface. Within the `Controller` folder, developers can create different controllers based on business types, with each controller supporting multiple API methods.  
![](/workbench/back-end.png)  

The explanation of controller functionalities will follow this sequence: **API Creation → Input Parameters → API Method Parameters → API Method Return Types → Authentication**.  

### Creating an API  

In a controller file, multiple API methods can be created. Click the **Create API** button in the top-right corner to open the API editor window.  
![](/workbench/server-controller.png)  

Within this window, the following configurations can be applied to an API interface:  

- **Name**: The name of the API method. Note that this is not the final API access URL, which follows the format: `service-root`/`controller-name`/`api-name`.  
- **Alias Title**: A user-defined name for the API method to help developers quickly understand its purpose.  
- **Description**: A detailed explanation of the API method for deeper comprehension.  
- **Request Type**: Configures the allowed HTTP request method(s). Only requests matching the configured type(s) will map to this API method. Options include: **POST**, **GET**, **PUT**, **DELETE**.  
- **Authorization**: When enabled, the system validates the JWT before accessing the API. If verification fails or the JWT expires, it returns a **401** error.  
- **Input Parameters**: Configures API input parameters.  

### Input Parameter Validation  

As mentioned earlier, input parameters for API interfaces can be configured in the editor panel, following the general **Field Management** rules. Detailed documentation on this topic is available in the [Field Management](/workbench/property) section.  

Here, we highlight a special feature in **Field Management** for API input parameters: **Input Parameter Validation**.  

In the second step of the **Field Management** editor window, different data types allow for varying constraint rules.  
![](/workbench/server-controller1.png)  

Below are all validation rules, regardless of data type:  

1. **Regex Validation**: Custom regex patterns for parameter constraints.  
2. **Email Format**: Ensures input matches email format.  
3. **Phone Number Format**: Validates phone number formatting.  
4. **Alphabetic Only**: Restricts input to letters only.  
5. **Alphanumeric Only**: Allows only letters and numbers.  
6. **Numeric Only**: Permits numeric strings (for string-type fields). For numeric fields, change the type directly—this rule supplements string-type validation.  
7. **Integer Only**: Requires strict integer input (no decimals).  
8. **Contains Specific Content**: Ensures the string contains predefined content.  
9. **Value Range Restriction**: Limits values (e.g., gender selection: male/female). Supports manual enumeration or table-based enums.  
   ![](/workbench/server-controller2.png)  
10. **Length Restriction**: Limits string length (min/max or combined).  
11. **Maximum Value**: Numeric field upper limit.  
12. **Minimum Value**: Numeric field lower limit.  
13. **File Size Limit**: For **File**-type fields, restricts upload size.  
14. **File Format Limit**: For **File**-type fields, limits the number of uploads (default: 1).  
15. **File Type Limit**: Restricts allowed file types for upload (supports wildcards, e.g., `image/jpeg, image/*`, with multiple types separated by commas).  

### File Upload  

In server-side projects, the **Field Management** panel supports selecting **File** as a field type, enabling file uploads via APIs.  

Earlier sections introduced file-type constraints; here, we focus on **File**-type properties and operations.  
![](/workbench/server-controller3.png)  

If an input parameter `userImg` is created, the uploaded file can be accessed via `data.userImg` and manipulated accordingly.  

The **File** type provides the following attributes:  
| Name | Type | Description |  
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |  
| `checkMimeType` | Function | Validates file type compliance (supports wildcards, e.g., `image/*` or array of types). |  
| `checkSize` | Function | Validates file size compliance. |  
| `fileCount` | Number | Number of files. |  
| `files` | File[] | Array of all files. |  
| `save` | Function | Saves files to a specified server directory. |  

The **save** method is particularly important. Other properties are typically configured via constraints unless custom validation for file type/size is required.  

#### File Saving  

```js  
// Save directly to the default upload directory without modifications  
await data.userImg.save();  

// Full parameter example: Save to the 'user' subdirectory  
await data.userImg.save("user/", {  
    // Custom filename  
    newFileName: (file) => {  
        // Format: userId.ext (e.g., 123.jpg)  
        return userId + "." + file.ext;  
    },  
    // Disable image compression (default: false)  
    uncompressedImage: false,  
    // Image compression settings (if enabled)  
    imageCompressionOption: {  
        // Quality (0–100, default: 80)  
        quality: 80,  
        // Max width in pixels (default: unlimited)  
        maxWidth: 1000,  
        // Max height in pixels (default: unlimited)  
        maxHeight: 1000  
    }  
});  
```  

> The upload directory path can be configured via the `UPLOAD_ROOT_DIR` environment variable in server settings.  

#### Save Method Return Value  

The **save** method returns an asynchronous response as an array:  

```typescript  
{  
    success: string[];  // Array of successfully saved file paths  
    error: string[];    // Array of error messages for failed saves  
}  
```  

Usage example:  

```js  
let uploadResult = await data.userImg.save();  

if (uploadResult.error.length) {  
    // Log errors  
    return ActionError("Upload failed");  // ActionError is covered in the API Return Types section.  
}  

let userImg = uploadResult.success[0];  
```  

![](/workbench/server-controller4.png)  

### API Method Parameters  

During API logic orchestration, the platform provides commonly used parameters:  

- `data`: Input parameters (defined in API configurations).  
- `context`: Routing context data, including:  
  1. `jwt`: Decrypted JWT payload (available only if authentication is enabled).  
  2. `url`: Request URL.  
  3. `request`: Raw request object (for IP, referrer, etc.).  
  4. `logger`: Centralized logging object.  
- `logger`: For structured logging (file, console, or database), configurable in [Environment Settings](/workbench/env).  

### API Return Types  

The platform enforces a standardized response structure:  

```json  
{  
    "header": {  
        "code": "Status Code",  // "JK000000" indicates success; others denote errors.  
        "msg": "Error Message"  
    },  
    "data": {}  // Business data payload  
}  
```  

#### Helper Methods  

**Ok**  
Returns successful responses:  

```js  
return Ok(businessData);  
```  

Equivalent to the **Return Success Data** node in logic orchestration:  
![](/workbench/server-controller5.png)  

**ActionError**  
Returns error responses:  

```js  
return ActionError(errorMessage, errorCode, businessData);  
// errorCode defaults to "JK999999" if omitted.  
```  

> Custom error codes enable frontend conditional handling.  

This can also be achieved via the **Return Error Data** node:  
![](/workbench/server-controller6.png)  

#### Fallback Handling  

In controllers, returning raw data (e.g., via `return`) triggers automatic wrapping with `Ok` if the response doesn't match the standard format.  

### Authentication  

This section details JWT token configuration.  

#### Generating JWT Tokens  

Tokens are typically generated in login APIs using `generateJwtToken`:  
![](/workbench/server-controller7.png)  

Key considerations:  
- The example demonstrates user lookup and token generation.  
- Avoid storing sensitive data (e.g., passwords) in JWT payloads.  

#### Frontend Token Submission  

Frontends must include the JWT in the `sid` header.  

In the JOKER platform, `sid` can be injected globally via `transformReqData`:  
![](/workbench/server-controller8.png)  

> **Important**: For authenticated APIs, `context.jwt` provides the decoded payload. No manual `verifyJwtToken` call is needed—platform middleware handles validation. Use `verifyJwtToken` only for advanced custom validation.