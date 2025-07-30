## Component State Data

This chapter mainly explains the state data in components. We can maintain the parameter constraints, internal reactive data and internal private variables of a component here.

### Overview

Component state data is one of the most commonly used features in component development.

![](/workbench/component.png)

When opening a `component` or `page` file, the `Component Data` menu will be displayed in the left menu of the workbench. Click it to open the component data panel.

From the perspective of data usage, it can be divided into the following categories: **Input Parameters (props)**, **Reactive Data (model)**, **Internal Private Attributes**. Next, we will explain in detail the uses of these three types of data and how to declare an attribute/parameter.

### Input Parameters (props)

These are the parameters required by the current component. These parameters have reactive characteristics. Once the parameters passed by external users change, the component will immediately be notified and the internal DOM nodes will be updated. This means that the component can respond in real time to changes in the externally passed-in data, thus dynamically adjusting its own display and behavior, greatly enhancing the flexibility and reusability of the component. For example, a button component may receive parameters such as the text content and color of the button through props. When the externally passed-in text or color changes, the button can immediately present corresponding changes.

> The configuration of the passed-in parameters will only be displayed in the component type file. Page type components are not allowed to configure to accept parameters.

#### How to Create/Edit

We can click the `plus sign` on the right side of the `Input Parameters (props)` panel to open the parameter creation panel. In the parameter creation panel, we can configure the name, remarks, type, default value, and demonstration value of the parameter. For the attribute creation tutorial, please read the `Attribute/Parameter Creation and Editing` section at the end of this chapter.

![](/workbench/component-data.png)

#### How to Use

After creating the parameters, you can start using them. The following will introduce it to you in detail from two perspectives:

##### 1. Declarer's Perspective (Current Component)

After completing the parameter creation, the created parameters can be used inside the component. These parameters can be used in the layout template and method logic:

- **Layout Template**: In the template, the parameter variables can be referenced in the way of expressions `props.`.
   ![Example of Using Component Parameters in the Template](/workbench/component-data1.png)
- **Method Logic**: In the logic editing panel, the component parameter values can be read in the way of `this.props.`.
   ![Example of Using Component Parameters in Logic Editing](/workbench/component-data2.png)

> **Friendly Tip**: If you are not very familiar with code writing, don't worry too much. The platform has an intelligent data management function. The expression editing panel will provide intelligent syntax prompts, and there is also a data management panel. You can view all the variables used by the current node in this panel, and you can quickly use the corresponding variables by just clicking.

##### 2. User's Perspective (Other Components/Pages Referencing the Current Component)

When the current component is referenced in other components or pages, click on the component, and you can see the declared parameters in the component parameter panel.
![Example of Viewing the Referenced Component Parameters in Other Components](/workbench/component-data3.png)

> **Important Suggestion**: When declaring component parameters, be sure to make it as complete as possible. It is recommended to provide parameter descriptions, interaction types, demonstration values and other information so that developers can quickly understand the purpose of the attribute.

### Reactive Data (model)

This is the reactive data inside the component. Before the component is loaded, this attribute will be "hijacked" and then have the data responsiveness. That is to say, when this internal data changes, the associated parts of the component will be automatically updated. For example, in a shopping cart component, the quantity of goods is the reactive data. When the quantity changes, the total price display of the shopping cart, the rendering of the goods list and other related parts will be automatically updated to provide real-time feedback to users.

#### How to Create/Edit

We can click the `plus sign` on the right side of the `Reactive Data (model)` panel to open the parameter creation panel. In the attribute creation panel, we can configure the name, remarks, type, default value, and demonstration value of the parameter. For the attribute creation tutorial, please read the `Attribute/Parameter Creation and Editing` section at the end of this chapter.

![](/workbench/component-data4.png)

#### Understanding Reactive Data

Here, we use a **DEMO** to deeply understand what reactive data is. Reactive data can **immediately notify the listener** once a value changes. In the layout template, once the value changes, this change will also **be immediately updated on the page**.

We define a reactive data `count` through code. When the button on the page is clicked, the value of `count` will increase by one, and after the value changes, the page will **immediately reflect this change**.

!!!demo1!!!

#### How to Use

After completing the attribute creation, the created attributes can be used inside the component. These attributes can be used in the layout template and method logic:

- **Layout Template**: In the template, the parameter variables can be referenced in the way of expressions `model.`.
   ![](/workbench/component-data5.png)
- **Method Logic**: In the logic editing panel, the component parameter values can be read in the way of `this.model.`.
   ![](/workbench/component-data6.png)

> **Friendly Tip**: If you are not very familiar with code writing, don't worry too much. The platform has an intelligent data management function. The expression editing panel will provide intelligent syntax prompts, and there is also a data management panel. You can view all the variables used by the current node in this panel, and you can quickly use the corresponding variables by just clicking.

### Internal Private Attributes

This type of attribute neither supports external calls nor has reactive capabilities. It is only used as a variable for temporary use inside the component. Here, you can declare internal dynamic data variables for convenient use in multiple methods. For example, in a complex form component, a temporary variable may be needed to record the step status of form filling. This variable is only used in the methods inside the component, does not need to be exposed externally, and does not require reactive updates for its changes.

#### How to Create/Edit

We can click the `plus sign` on the right side of the `Internal Private Attributes` panel to open the parameter creation panel. In the parameter creation panel, we can configure the name, remarks, type, default value, and demonstration value of the parameter. For the attribute creation tutorial, please read the `Attribute/Parameter Creation and Editing` section at the end of this chapter.

![](/workbench/component-data7.png)

Its usage is the same as that of parameters and reactive data, and it can be directly called through expressions. However, the difference from **reactive data** is that it does not have **reactive capabilities**. Therefore, if the value will change during the component's operation, it is not recommended to display it in the template in the form of **private attributes**.

Usually, we will define a common attribute in multiple logical methods to complete specific business logic. Since it does not have reactive capabilities, it will neither cause additional performance overhead nor pollute the original data.

### Attribute/Parameter Creation and Editing

Here we will explain the operation process of the parameter/attribute editing panel. (The creation panels of attributes and parameters are basically the same, except for some differences in some attributes. We will mark them specially when explaining. Please read carefully.)

#### Step 1 (Basic Attribute Information)

![](/workbench/component-data8.png)

- **Attribute Name**: Here we need to use letters to configure the attribute name. The attribute name needs to be unique in the current component function (that is, unique among the input parameters/unique among the reactive data).
- **Remarks/Title**: We can configure a title for it. The configuration of the title can help us understand the purpose of the attribute more quickly, such as color, size, etc.
- **Hint**: We can configure the detailed description of the current attribute through the hint attribute. When we use it, we can view the detailed description of the current attribute by moving the mouse over it.
- **Classification**: **Only parameters need to be configured**. We can configure a classification of a parameter here. The same classification will be grouped and classified when it comes to component attributes, which can provide a better user experience.
   ![](/workbench/component-data9.png)

#### Step 2 (Attribute Type Information)

![](/workbench/component-data10.png)

- **Type**: The type of the current attribute.
    1. **String** (`String`)
    2. **Number** (`Number`)
    3. **Boolean** (`Boolean`)
    4. **Array** (`Array`)
    5. **Object** (`Object`)
    6. **Function** (`Function`)
    7. **Date** (`Date`)
    8. **Any** (`Any`)
- **Whether It Can Be Empty**: It can be configured whether the current value is allowed to be empty (`undefined`).
- **Assignment Method**: **Only parameters need to be configured**. When it is necessary to set a value for it, this attribute can be used to decide which interaction method to adopt to assign a value. Different data types will have different assignment methods available.
    1. **Optional Values**: Key - Value data can be created to provide a drop-down box mode for value selection.
    2. **Multi-line Text**: A long text input box is used to enable multi-line text input.
    3. **Color Value**: It is displayed as a color setting control, which can quickly complete the configuration of colors.
    4. **CSS Size Value**: CSS size values (with units) can be configured here.
    5. **Style Name**: It is displayed as a style setting control, which can quickly query the public styles in the current project and achieve quick addition.
    6. **Image Resource Selection**: It provides a quick selection interaction for internal static resources (image display effect).
    7. **Resource Selection**: It provides a quick selection interaction for internal static resources.
    8. **Style Style**: A visual Style configuration panel is displayed, which can complete some common style editing.
- **Disable Expression**: By default, all parameters can configure dynamic values through expressions. If you don't want this attribute to configure dynamic values, you can disable it here.
- **Default Value**: As the default value of the parameter/attribute, if the value is not configured or passed (parameter), it will be automatically assigned this default value.
- **Demonstration Value**: **Only parameters need to be configured**. This attribute is used to immediately set a value for the attribute when the component is introduced. The demonstration value can help developers have a better first display effect when introducing the component, and developers can modify it.

If the current attribute type is configured as: `Array/Object`, a deep-level type design panel will be displayed in Step 2. We can configure the internal attribute types of objects or arrays here.

![](/workbench/component-data11.png)

The elements in the internal attribute design panel are basically the same as the above content. You can refer to the above function descriptions. 