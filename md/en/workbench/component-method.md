## Component Methods

This chapter focuses on the creation and maintenance of component methods.

### Overview

In addition to managing logic within a component's lifecycle functions, the platform empowers developers to create component methods. By encapsulating common business logic as internal methods, components can be maintained more efficiently. Exposing these methods externally enables invocation of internal component logic from outside, which is a critical workflow for implementing advanced and complex components.

### How to Create/Edit Methods

In the `Component Data` panel under `Logic Events - Component Methods`, you can add and manage component methods.

![](/workbench/component-method.png)

Upon opening the method creation panel, the platform requires the following method-related data:

![](/workbench/component-method2.png)

- **Method Name**: Enter the method name, which must use English letters and be unique within the current component.
- **Alias/Title**: Assign an alias to the method for quick understanding of its purpose and meaning.
- **Comment Description**: Configure comments for the method. Hovering over this method during usage will display additional details.
- **Public/Private**: If configured as a public method, it allows external invocation. For more details, refer to subsequent sections.
- **Async Function**: If marked as an async function, the method will use the `async` modifier. The platform automatically checks for asynchronous operations during logic orchestration and provides prompts for fixing async functions. You can also manually mark the method's async flag here.
- **Parameter Declaration**: Add method parameters in this section. Parameter declarations can be referenced here: [Field Maintenance](/workbench/property).
- **Return Type**: Define the return type of the current method.

### How to Use Methods

We will introduce the usage of component methods from two perspectives:

#### Internal Usage

In page layouts, component methods can be used via component parameters (expressions).
![](/workbench/component-method3.png)

During logic orchestration, internal methods can be called either through expressions (code) or by using the "Internal Method Invocation" node:

1. **In Code Expressions**: Call via `this.` syntax.  
   ![](/workbench/component-method4.png)
2. **Using the "Internal Method Invocation" Node**: Drag the "Internal Method Invocation" node onto the logic orchestration canvas and select the method to call from the dropdown. This displays all callable methods, including internal component methods. This approach offers a visual way to quickly invoke methods and provides a graphical interface for parameter configuration.  
   ![](/workbench/component-method5.png)

#### External Invocation

External invocation requires configuring a **ref (component identifier)** for the component. For details, refer to [Component Layout](/workbench/component-layout). Below, we explain how to use the public methods provided by components.

![Public Method Invocation Demo Screenshot](/workbench/component5.png)

All callable methods shown in the diagram are public methods within the component. Non-public methods will not appear here.

> For logic orchestration tutorials, please visit: [Logic Orchestration](/workbench/workflow)