## Component Blocks

This chapter mainly elaborates on the concept of component blocks and the functions they can achieve.

### Overview

Component blocks are a crucial expansion method in advanced component development. With their help, we can open up the display areas within components, enabling in-depth expansion of the component layout in the form of custom layouts when using components.

### How to Define Blocks

During the component development process, we can drag the "Rendering Block" component into the specified area position to open up the custom layout function for that area.

![](/workbench/component-base12.png)

#### Component Properties

| Property | Type | Description |
| --- | --- | --- |
| Default Display Block | Boolean | If this value is **true**, when the component is introduced into other components or pages, this block will be enabled by default, facilitating quick editing of the block. |
| Identifier | String | Used to name the rendering block (English letters are required). If a component has multiple dynamic rendering parts, they can be distinguished by configuring this identifier. The default value is `default`. |
| Block Description | String | This description helps developers quickly understand the function of the block when using the component. |
| Block Remark/Name | String | A nickname can be given to the block, which not only helps developers quickly understand the meaning of the block but also makes the display in the outline tree clearer. |
| Associated Components | Array | Components that can be used in association with the current component can be selected here, helping developers quickly insert sub-components that meet the requirements into the block. |
| Block Parameters | Array | The platform supports configuring block parameters, through which data within the component can be passed to dynamically rendered sub-components via the block, meeting the needs of more complex and flexible development. |

### Default Display Block

We can configure the default display state of a block by modifying the "Default Display Block" property of the "Rendering Block" component. In some specific scenarios, when we hope that a block is enabled by default when the component is referenced, for example, when developing a general form component, there is a rendering block for displaying the operation buttons at the bottom of the form. To make it convenient for developers using the form component, without having to manually enable this block to add buttons like "Save" and "Reset" every time, the "Default Display Block" property of this rendering block can be set to `true`. In this way, when other components reference this form component, the bottom operation button area will be displayed by default, and developers can directly add the required buttons in this area, improving development efficiency.

### Block Identifier

When a component has multiple blocks, we need to define block identifiers for them to distinguish the blocks.

![](/workbench/component-section.png)

Take the **Form Input Item** component as an example. It provides three blocks:

1. Default Block (`default`): The form item editing area, which is displayed by default.
2. Title Block (`label`): Used to display the title of the form input item.
3. Error Block (`error`): Used to display the prompt information after form validation fails.

### Associated Components

When there is an association relationship between components, by using the function of associated components, sub-components can be added to blocks quickly and accurately. Take the drop-down box component as an example. The content block of this component needs to add the "Option" component to complete the configuration of the drop-down box options. At this time, by configuring the association relationship between the two, when developers operate on the content block of the drop-down box component, the system can conveniently add the "Option" component for it according to the preset association relationship, effectively improving development efficiency and accuracy and avoiding errors or omissions that may occur due to manual addition.

![](/workbench/component-section2.png)

After we configure the associated components, when we quickly add them through the drop-down box component, the associated components will be displayed first, facilitating developers to quickly integrate them.
![](/workbench/component-section3.png)

### Block Parameters

Block parameters are an extremely practical function in advanced component development. They enable us to pass the data inside the component to the underlying components through the block, achieving the purpose of using the internal variables of the component externally.

Take the tree component as an example. Suppose we want to expand the display effect of each node in the tree component. At this time, the tree component needs to pass the data of each node into the block so that developers can obtain the tree node data and freely expand the display effect. And this data transfer process needs to rely on block parameters to achieve. In this way, developers can customize the display logic of components more flexibly, meet diverse business needs, and improve the reusability and expandability of components.

#### How to Add Block Parameters

![](/workbench/component-section4.png)

To add block parameters, you can first select the block that needs to pass parameters, and then perform relevant operations in the property panel. During this process, the following types of data need to be maintained:

1. **Remark**: As the title of the parameter, its role is to help developers quickly understand the meaning of the parameter. For example, for a parameter representing the user's age, the remark can be set as "User Age", allowing developers to understand what the parameter represents at a glance.
2. **Tip**: Provide comprehensive parameter descriptions to help developers understand the parameters in depth. Taking the user age parameter as an example, the tip content can be "This parameter is used to pass the user's age information, with a value range of 0 - 120. When using this parameter, it is necessary to ensure that the value is within a reasonable range", so that developers have a clear understanding of the purpose, range, and precautions for using the parameter.
3. **Type**: Clearly define the type of the parameter, which helps developers know the composition form of the parameter. For example, the type of the user age parameter can be defined as "Numeric", so that developers know what type of data the parameter should receive.
4. **Value**: Here, specific values in the current component can be bound in the form of expressions. For example, if there is a variable `userAge` storing the user's age in the component, the value can be bound here through the expression `{{userAge}}`, realizing the transfer of variables within the component as parameters.

> It should be noted that parameter transfer is carried out in order. We can manage the transfer order of parameters through the sorting function. Since parameters are transferred in order, there is no need to define parameter names when defining block parameters. This design simplifies the parameter transfer process and improves development efficiency.

#### How to Receive Block Parameters

In the block management part of the component property panel, we only need to click the "Add Parameter" button to receive parameters. When we click this button, the platform will prompt all the parameters passed from the block. It should be noted that parameters must be received in order, and selective reception is not allowed. If the block does not provide any parameters, the "Add Parameter" button will not be displayed here.

![](/workbench/component-section5.png)

We receive the node data parameter passed by the `tree` component block here and name it `node`. In this way, we can read this parameter in the form of an expression in the components under this block.
![](/workbench/component-section6.png)

### Linked Rendering

Block-linked rendering is an **advanced conditional** block rendering. It allows us to open a block by judging whether there is content in the rendering block. Before understanding this concept, let's first look at a piece of code:

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

The meaning of this code is that the `append` rendering block will be passed in only when the user enables the `append` block; otherwise, the block will not be passed in.

In the visual platform, we can perform association configuration in a component's block, and the platform will automatically identify the rendering block.

![](/workbench/component-section7.png) 