## Component Methods

This chapter focuses on the creation and maintenance of component methods.

### Overview

In addition to maintaining logic in the component's lifecycle functions, the platform also empowers developers with the ability to create component methods. By creating common business logic as methods within a component, it helps to maintain the component more efficiently. After exposing these methods externally, it is also possible to call the internal methods of the component from the outside, which is a key operation process for implementing advanced and complex components.

### How to Create/Edit Methods

Component methods can be added and maintained at "Logic Events - Component Methods" in the "Component Data" panel.

![](/workbench/component-method.png)

After opening the method creation panel, the platform requires the following method-related data to be filled in:

![](/workbench/component-method2.png)

- **Method Name**: The name of the method needs to be filled in. It is required to use English letters and be unique within the current component.
- **Remark/Title**: An alias can be given to the method so that the purpose and meaning of the method can be quickly understood.
- **Comment Description**: Configure the comment for the method here. When using the method, moving the mouse over it will display more information about this method.
- **Whether to Expose**: If configured as an exposed method, it allows external calls. For detailed content, please refer to the subsequent sections.
- **Async Function**: If marked as an async function, the method will be modified with `async`. When saving the logic orchestration, the platform will automatically judge whether asynchronous processing is included and provide prompts for the repair of async functions. Of course, the async flag of the method can also be manually marked here.
- **Parameter Declaration**: Method parameters can be added in the parameter declaration area. For parameter declaration, refer to: [Field Maintenance](/workbench/property).
- **Return Type**: The return value type of the current method can be defined here.

### How to Use Methods

We will introduce how to use component methods from two perspectives:

#### Internal Use

In the page layout, component methods can be used in the form of component parameters (expressions).
![](/workbench/component-method3.png)

During the logic orchestration process, internal methods can be called either through expressions (code) or with the help of "Internal Method Call":

1. **In Code Expressions**: Call it in the way of `this.`.
![](/workbench/component-method4.png)
2. **With the Help of "Internal Method Call" Node**: Drag the "Internal Method Call" node to the logic orchestration canvas and select the method to be called through the drop-down box. All callable methods will be shown here, including the internal methods of the component. The advantage of this calling method is that it can achieve quick method calls in a visual form and also provides visual parameter configuration.
![](/workbench/component-method5.png)

#### External Call

External calls require us to configure **ref (component identifier)** for the component. For detailed content, please refer to [Component Layout](/workbench/layout). Now let's learn how to use the publicly exposed methods provided by the component.

![Screenshot of Demonstration for Calling Public Methods](/workbench/component5.png)

All the callable methods shown in the figure are the publicly exposed methods within the component. Un-exposed methods will not be displayed here.

> For the logic orchestration tutorial, please refer to: [Logic Orchestration](/workbench/workflow) 