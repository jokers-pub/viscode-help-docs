## Component Section

This chapter elaborates on the concept of component sections and their functionalities.

### Overview

Component sections are a crucial extension method in advanced component development. They allow us to expose display areas within components, enabling deep layout extensions through custom layouts when using the component.

### How to Define a Section

During component development, we can drag and drop a `Render Section` component into specified areas to open up custom layout capabilities for those regions.

![](/workbench/component-base12.png)

#### Component Properties

| Property           | Type    | Description                                                                                                               |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| Default Section    | Boolean | If set to **true**, when the component is imported into other components or pages, this section will be enabled by default for quick editing. |
| Identifier         | String  | Used to name the render section (must use English letters). If a component has multiple dynamic rendering parts, this identifier helps differentiate them (default: `default`). |
| Section Description | String  | Helps developers quickly understand the section's functionality.                                                          |
| Section Note/Name  | String  | A nickname for the section, facilitating quick comprehension and clearer display in the outline tree.                     |
| Associated Components | Array   | Select components related to the current one to help developers quickly insert compliant child components into the section. |
| Section Parameters | Array   | Supports configuring section parameters to pass internal component data to dynamically rendered child components, enabling more flexible development. |

### Default Section

We can modify the `Default Section` property of the `Render Section` component to configure its default display state. In specific scenarios, such as when developing a universal form component with a section for action buttons, setting `Default Section` to `true` allows the button area to display by default when the form is imported, saving developers from manually enabling it each time.

### Section Identifier

When a component contains multiple sections, we need to define identifiers to distinguish them.

![](/workbench/component-section.png)

For example, a **Form Input** component provides three sections:
1. Default section (`default`): Form item editing area (displayed by default).
2. Label section (`label`): Displays the form input title.
3. Error section (`error`): Displays validation error messages.

### Associated Components

When components are interrelated, the *Associated Components* feature enables quick and accurate addition of child components to sections. For instance, a dropdown component's content section requires adding `Option` components to configure dropdown options. By establishing this association, the system can automatically suggest adding `Option` components when editing the dropdown's content section, improving efficiency and reducing errors.

![](/workbench/component-section2.png)

When associated components are configured, they appear first in the quick-add menu.
![](/workbench/component-section3.png)

### Section Parameters

Section parameters are an extremely practical feature in advanced component development. They allow internal component data to be passed to child components via sections, enabling external use of internal variables.

For example, with a tree component, if we want to customize the display of each node, the tree component needs to pass node data to the section. Developers can then access this data to freely extend the display logic. This data transfer is achieved through section parameters, enhancing component reusability and scalability.

#### How to Add Section Parameters

![](/workbench/component-section4.png)

To add parameters, select the target section and operate in the properties panel. The following data must be maintained:
1. **Note**: The parameter title helps developers quickly understand its purpose (e.g., "User Age").
2. **Hint**: A detailed explanation of the parameter (e.g., "This parameter passes user age data, ranging from 0–120. Ensure values are within bounds.").
3. **Type**: Specifies the parameter type (e.g., "Number" for age).
4. **Value**: Binds to a component variable via expressions (e.g., `{{userAge}}`).

> Note: Parameters are passed sequentially. Use the sort function to manage their order. Since parameters are positional, names are unnecessary, simplifying the process.

#### How to Receive Section Parameters

In the section management panel, click "Add Parameter" to receive parameters. The platform lists all parameters passed from the section. Parameters must be received in order, and the button is hidden if no parameters are provided.

![](/workbench/component-section5.png)

Here, we receive the `tree` component's node data parameter as `node`, making it accessible via expressions in child components.
![](/workbench/component-section6.png)

### Conditional Rendering

Conditional section rendering is an **advanced feature** that enables sections to render based on whether they contain content. Consider this code snippet:

```xml
<template>
    <jk-input>
        @if($section.append){
            @section('append'){
                //TODO：
            }
        }
    </jk-input>
</template>
```

This code means the `append` section is only passed if the user enables it. Otherwise, the section is omitted.

In the visual platform, we can configure this association in a component's section, and the platform will automatically recognize the render section.

![](/workbench/component-section7.png)