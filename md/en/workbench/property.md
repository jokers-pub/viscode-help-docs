## Field Maintenance

This chapter focuses on the methods of adding and maintaining parameters or attributes in a project. The "Field Maintenance" function, as an extremely common and crucial function in the JOKER development platform, is an important means for efficiently managing project fields. By using this function, developers can accurately and conveniently configure and adjust various fields in the project, thus ensuring the accuracy and consistency of project data.

### Overview

When we face various scenarios such as creating **parameters**, **response data**, **global variables** for components, or defining **parameters**, **return types** for methods, we can all use the **Field Maintenance** panel to complete the maintenance work of field information.

The **Field Maintenance** panel combines the functions of maintaining basic field information and designing field types. It can not only help us set various basic attributes of fields in detail but also flexibly design field types to meet the diverse needs of different projects.

Here, we will explain the operation process of the parameter attribute editing panel. (The creation panels for attributes and parameters are basically the same, except for some differences in certain attributes. We will mark them specifically during the explanation. Please read carefully.)

### Step 1 (Basic Attribute Information)

![](/workbench/component-data8.png)

- **Attribute Name**: The configuration of the attribute name should be completed using English letters, and the attribute name should be unique within the current component function (that is, unique among the incoming data of the same type).
- **Remarks/Title**: You can configure a title for it, which helps us understand the purpose of the attribute more quickly, such as "Color", "Size", etc.
- **Hint**: You can configure a detailed description of the current attribute through the hint attribute. When in use, you can view the detailed description of the attribute by moving the mouse over it.
- **Classification**: **Only parameters need to be configured**. You can configure the classification of parameters here. Parameters with the same classification will be grouped and categorized when component attributes are displayed, improving the user experience.
![](/workbench/component-data9.png)

### Step 2 (Attribute Type Information)

![](/workbench/component-data10.png)

- **Type**: The type of the current attribute. The following introduces each type and its applicable scenarios in detail:
    1. **String** (`String`): Used to represent text data, such as names, addresses, description information, etc. Contents like `"John Doe"`, `"123 Main St"` are suitable for storage in the string type.
    2. **Number** (`Number`): Used to store numerical values, which can represent integers or decimals, such as age, price, quantity, etc. Values like `25`, `9.99` belong to the number type.
    3. **Boolean** (`Boolean`): There are only two possible values, namely `true` or `false`, and it is often used to represent switch states, logical judgment results, etc. For example, to judge whether a user has logged in, it is `true` if logged in and `false` if not.
    4. **Array** (`Array`): Used to store an ordered collection of multiple values, and these values can be of different types. For example, an array storing multiple user names `["Alice", "Bob", "Charlie"]`, or an array storing mixed-type data `[1, "apple", true]`.
    5. **Object** (`Object`): Used to store a collection of key-value pairs, which can organize related data together. For example, a user object may contain information such as name, age, and email: `{ name: "John", age: 30, email: "john@example.com" }`.
    6. **Function** (`Function`): Represents a reusable block of code used to implement specific functions. For example, a method for calculating the sum of two numbers: `function add(a, b) { return a + b; }`.
    7. **Date** (`Date`): Used to handle date and time information, and operations such as date creation, comparison, and formatting can be performed. For example, creating a date object representing the current time: `new Date()`.
    7. **File** (`File`): Only exists in server-side projects and is used to receive files uploaded by clients, such as pictures, documents, etc.
    8. **Any** (`Any`): Indicates that the attribute can be of any type of data. When you cannot determine the specific type of the attribute or want the attribute to have flexibility, you can use this type.
- **Whether it is Non-null**: You can configure whether the current value is allowed to be empty (`undefined`).
- **Assignment Method**: **Only parameters need to be configured**. When you need to set a value for it, you can use this property to decide which interactive method to use for assignment. Different data types have different optional assignment methods.
    1. **Optional Values**: You can create Key - Value data and provide a drop-down box mode for value selection.
    2. **Multi-line Text**: Use a long text input box to enable multi-line text input.
    3. **Color Value**: Displayed as a color setting control, which can quickly complete color configuration.
    4. **CSS Size Value**: You can configure the CSS size value (with units) here.
    5. **Style Name**: Displayed as a style setting control, which can quickly query the public styles in the current project and achieve quick addition.
    6. **Image Resource Selection**: Provides a quick selection interaction for internal static resources (image display effect).
    7. **Resource Selection**: Provides a quick selection interaction for internal static resources.
    8. **Style Style**: Displays a visual Style configuration panel, which can complete some common style editing.
- **Disable Expression**: By default, all parameters can configure dynamic values through expressions. If you don't want this property to configure dynamic values, you can disable it here.
- **Default Value**: As the default value of the parameter/attribute, if the value is not configured or not passed (for parameters), it will be automatically assigned this default value.
- **Demonstration Value**: **Only parameters need to be configured**. This property is used to immediately set a value for the property when the component is introduced. The demonstration value can help developers have a better first display effect when introducing the component, and developers can modify it.

If the current attribute type is configured as `Array/Object`, a deep-level type design panel will be displayed in Step 2, and you can configure the internal attribute types of the object or array here.

![](/workbench/component-data11.png)

#### Attribute Validation

Attribute validation is only used to perform input parameter validation and judgment for API interfaces in the server-side controller.

In the second step of the **Field Maintenance** editing window, by selecting different data types, you can configure different field restriction rules.
![](/workbench/server-controller1.png)

The following is an introduction to all validation rules without considering data types:

1. **Regular Expression Validation**: Allows customizing regular expressions to constrain the content of input parameters.
2. **Whether it is an Email**: Used to verify whether the input content is in the email format.
3. **Whether it is a Telephone**: Judges whether the input content conforms to the telephone format.
4. **Only Letters**: Ensures that the input content contains only letters.
5. **Only Letters and Numbers**: Limits the input content to only letters and numbers.
6. **Only Numbers**: Only allows the input of numbers (string type numbers). If the field itself is of the number type, you can directly change the field type; this rule only provides a supplementary number format validation for the string type.
7. **Whether it is an Integer**: Requires the input to be an integer and does not allow floating-point numbers.
8. **Contains Specific Content**: The string must contain specific content.
9. **Limit the Value Range**: Limits the range of values. For example, gender can only be male/female, and you can manually maintain enumeration values or select enumeration values in the data table.
![](/workbench/server-controller2.png)
10. **Length Limit**: Limits the length of the string. You can configure the maximum or minimum value separately or combine the limits simultaneously.
11. **Maximum Value**: For fields of the number type, you can configure the maximum value limit.
12. **Minimum Value**: For fields of the number type, you can configure the minimum value limit.
13. **File Size Limit**: When the field type is **File**, you can use this constraint to limit the size of the uploaded file.
14. **File Quantity Limit**: When the field type is **File**, you can limit the maximum number of uploaded files. By default, only one file is allowed to be uploaded.
15. **File Type Limit**: When the field type is **File**, you can limit the accepted types of uploaded files, and wildcards are supported. For example, for images (image/jpeg, image/*), the "*" wildcard is supported. If you need to limit multiple types, you can separate them with ",".

### Quick Import of Fields

To avoid repeating the filling of field content, the platform provides the **Field Import** function, which allows us to quickly declare variables/attributes in existing resources in the project through a quick import method.

![](/workbench/property.png)

We can click `Import Fields from Existing Assets` in the first step of any **Field Maintenance** panel to open the field quick selection window.

![](/workbench/property1.png)

We can select multiple fields that we want to add quickly here and then click the "OK" button to achieve the quick addition of fields.

> The **Field Import** function only quickly declares field information by copying during operation. It does not bind to the original data, and the imported fields will not change with the changes of the original variables. 