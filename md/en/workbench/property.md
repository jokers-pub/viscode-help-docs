## Field Maintenance  

This chapter focuses on methods for adding and maintaining parameters or attributes in projects. The "Field Maintenance" feature is a highly essential and frequently used functionality in the **JOKER** development platform, serving as a critical tool for efficiently managing project fields. By leveraging this feature, developers can accurately and conveniently configure and adjust various fields in a project, ensuring data accuracy and consistency.  

### Overview  

When creating **parameters**, **response data**, **global variables** for components, or defining **parameters** and **return types** for methods, the **Field Maintenance** panel can be utilized to maintain field information.  

The **Field Maintenance** panel integrates basic field information maintenance and type design functionalities. It not only allows detailed configuration of basic field properties but also enables flexible type design to meet the diverse needs of different projects.  

Here, we explain the workflow of the property/parameter editing panel. (The creation panels for properties and parameters are largely identical, with only a few property differences. These distinctions will be explicitly noted—please read carefully.)  

### Step 1 (Basic Property Information)  

![](/workbench/component-data8.png)  

- **Property Name**: Configure the property name using English letters. The name must be unique within the current component’s scope (i.e., unique among inputs of the same type).  
- **Remark/Title**: Assign a title to the property to quickly indicate its purpose, such as "Color" or "Size."  
- **Tooltip**: Provide a detailed description of the property. Hovering over the property will display this description for reference.  
- **Category**: **Only required for parameters**. Configure the parameter category to group related properties for better user experience.  
  ![](/workbench/component-data9.png)  
- **Sort Order**: Adjust the display order of properties. A higher value will position the property closer to the top in the property panel (applicable only to input parameters).  

### Step 2 (Property Type Information)  

![](/workbench/component-data10.png)  

- **Type**: Specify the data type of the property. Below are the supported types and their use cases:  
  1. **String** (`String`): Represents textual data such as names, addresses, or descriptions (e.g., `"John Doe"`, `"123 Main St"`).  
  2. **Number** (`Number`): Stores numerical values, including integers or decimals (e.g., `25`, `9.99`).  
  3. **Boolean** (`Boolean`): Represents binary values (`true` or `false`), often used for toggle states or logical conditions.  
  4. **Array** (`Array`): Represents an ordered collection of values, which may be of different types (e.g., `["Alice", "Bob", "Charlie"]` or `[1, "apple", true]`).  
  5. **Object** (`Object`): Stores key-value pairs to organize related data (e.g., `{ name: "John", age: 30, email: "john@example.com" }`).  
  6. **Function** (`Function`): Represents a reusable block of code for specific operations (e.g., `function add(a, b) { return a + b; }`).  
  7. **Date** (`Date`): Manages date and time information, supporting creation, comparison, and formatting (e.g., `new Date()`).  
  8. **File** (`File`): **Exclusive to server-side projects**, handles file uploads such as images or documents.  
  9. **Any** (`Any`): Indicates flexibility—the property can accept any data type when the specific type is uncertain.  
- **Non-Nullable**: Configures whether the property allows empty values (`undefined`).  
- **Assignment Method**: **Only required for parameters**. Determines the interaction method for value assignment. Different data types support different assignment methods:  
  1. **Optional Values**: Provides key-value pairs for dropdown selection.  
  2. **Multi-Line Text**: Uses a multi-line text input field.  
  3. **Color Value**: Displays a color picker for quick color configuration.  
  4. **CSS Dimension Value**: Supports CSS-compliant dimension inputs (with units).  
  5. **Style Name**: Displays a style picker for selecting publicly available styles in the project.  
  6. **Image Resource Selection**: Enables quick selection of image-type static resources (with previews).  
  7. **Resource Selection**: Allows selecting general static resources.  
  8. **Style Panel**: Provides a visual editor for common style configurations.  
  9. **Expression**: Uses dynamic scripting (expressions) for value assignment by default.  
- **Default Value**: The fallback value assigned if no value is provided (for parameters) or configured (for properties).  
- **Demo Value**: **Only required for parameters**. Provides an initial value when a component is imported, improving first-time user experience. Developers can modify this value afterward.  

If the property type is set to **Array/Object**, a nested type design panel will appear in Step 2, allowing configuration of internal property types.  

![](/workbench/component-data11.png)  

#### Property Validation  

Property validation is exclusive to server-side controllers, where it validates input parameters for APIs.  

In Step 2 of the **Field Maintenance** editor, selecting different data types enables distinct validation rules.  
![](/workbench/server-controller1.png)  

Below are all supported validation rules (regardless of data type):  

1. **Regex Validation**: Custom regex patterns to constrain input values.  
2. **Email Validation**: Ensures the input matches email format.  
3. **Phone Validation**: Verifies the input matches phone number format.  
4. **Letters Only**: Restricts input to alphabetic characters.  
5. **Alphanumeric Only**: Permits only letters and numbers.  
6. **Digits Only**: For `String`-type fields, ensures numeric content only. For `Number` fields, adjust the type directly.  
7. **Integer Only**: Requires whole numbers (no decimals).  
8. **Contains Specific Text**: Mandates inclusion of specified text.  
9. **Value Range Restriction**: Defines allowed values (e.g., gender limited to "Male/Female"). Supports manual enumeration or enum values from a database.  
   ![](/workbench/server-controller2.png)  
10. **Length Restriction**: Limits string length (with min/max options).  
11. **Maximum Value**: Sets an upper bound for `Number` fields.  
12. **Minimum Value**: Sets a lower bound for `Number` fields.  
13. **File Size Limit**: For **File**-type fields, restricts the uploaded file size.  
14. **File Count Limit**: For **File**-type fields, limits the maximum number of uploads (default: 1).  
15. **File Type Restriction**: For **File**-type fields, specifies allowed MIME types (supports wildcards like `image/jpeg,image/*`).  

### Quick Field Import  

To avoid redundant field configuration, the platform provides a **Field Import** feature, enabling rapid declaration of variables/properties from existing project resources.  

![](/workbench/property.png)  

In any **Field Maintenance** panel (Step 1), click `Import Fields from Existing Assets` to open the field selection window.  

![](/workbench/property1.png)  

Select the fields to import, then click "Confirm" to add them instantly.  

> **Note**: The **Field Import** feature copies field declarations without binding them to the source data. Imported fields remain independent of subsequent changes to the original variables.