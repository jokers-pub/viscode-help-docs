## Logic Orchestration  

This chapter elaborates on the fundamental features of logic orchestration and how to leverage these capabilities to rapidly implement business logic.  

### Overview  
Logic Orchestration is a visual development tool for methods. Within this tool, you can either use simple drag-and-drop operations or employ custom code blocks to implement business logic. The platform features robust **type expressions**, enabling quick access to required data variables at any logic node. Additionally, intelligent **syntax hints** and **syntax checking** functionalities make logic development more intuitive and smooth.  

### How to Add Logic  
You can drag method nodes from the toolbox onto the canvas in the Logic Orchestration panel to invoke methods.  

[video](/workbench/workflow.mp4)  

### How to Delete Logic  
Click the delete button on the right side of the node you wish to remove to delete the logic node.  

![](/workbench/workflow2.png)  

### Adding Node Comments  
Click the edit comment button on the right side of the node to edit its comments.  
![](/workbench/workflow3.png)  

> The edited comments will be exported to the actual generated code output.  

### Dragging Order  
Hover the mouse over the node you wish to move, select the drag icon, and hold the left mouse button to drag the node into position.  

[video](/workbench/workflow1.mp4)  

### Logic Branching  
Logic branching allows you to visually implement **if**, **else if**, and **else** logic.  

![](/workbench/workflow4.png)  

### Logging  
You can use the logging node to quickly output logs to the `console`.  

![](/workbench/workflow5.png)  

> Note: In server-side projects, the server controller provides distributed logging capabilities, which are more powerful than console logging and allow flexible log output formats.  

### Internal Method Invocation  
This node enables visual internal method calls, automatically analyzing internal functions within the current project.  

![](/workbench/workflow6.png)  

#### Method Return Value Handling  
If the method has a return value, a variable reception operation icon will appear on the left side of the method call. Click it to configure the receiving variable.  
![](/workbench/workflow7.png)  

You can choose to use an existing variable or create a new one to receive the return value.  

![](/workbench/workflow8.png)  

#### Method Parameters  
By default, the platform automatically identifies optional parameters and hides subsequent non-required (unconfigured) parameters. Click "Expand More Parameters" to reveal all parameters.  

[video](/workbench/workflow9.mp4)  

#### Asynchronous Methods (await)  
When invoking an asynchronous function, the method call node displays the option to enable `await`.  

If `await` is enabled, the execution will wait for the method to complete successfully before continuing. If disabled, the logic will execute asynchronously without waiting for the result.  

![](/workbench/workflow10.png)  

### Data Observation  
In frontend projects, you can use the data observation node in component-type files to monitor reactive value updates and receive notifications when values change.  

![](/workbench/workflow11.png)  

This node's operation translates into the following code:  

```js  
import { Component } from "@joker.front/core";  

export default class extends Component {  
    model = {  
        value: "v1"  
    };  

    method() {  
        this.$watch(  
            () => this.model.icons,  
            (nv, ov) => {  
                console.info("Value changed");  
            }  
        );  
    }  
}  
```  

Let’s explore this feature further with a demo.  

!!!demo1!!!  

> For detailed usage, refer to the `$watch` method in the [Component Internal Methods](https://front.jokers.pub/base/component-api) documentation.  

### Variable Declaration  
Use this node to declare new variables.  

![](/workbench/workflow12.png)  

Equivalent to:  

```js  
let age = 35;  
```  

### Variable Assignment  
Use this node to assign values to existing variables.  

![](/workbench/workflow13.png)  

### Loop Traversal  
This node enables looping through arrays or objects.  

- **Loop Target**: The object to loop through, which can be an array or an object.  
- **Loop Item**: Defines the variable name for the loop item. For objects, this represents the property value; for arrays, it represents the array item.  
- **Loop Index**: Defines the loop index variable. For objects, this represents the key; for arrays, it represents the index.  

To break out of the loop, use the `break` node or the `return` node directly.  

![](/workbench/workflow14.png)  

The above logic is equivalent to:  

```js  
for (let item of [1, 2, 3, 4]) {  
    console.info(item);  

    if (item > 2) {  
        break;  
    }  
}  
```  

### Return  
Use the return node to implement the `return` operation for methods. Click the button on the right to configure the return value.  

![](/workbench/workflow15.png)  

### Custom Code Block  
The custom code block allows you to freely write code using `JavaScript` syntax.  

![](/workbench/workflow16.png)  

Click the expand button on the right to open the expression editor, which provides more space for operations and displays all available variables for the current node.  

![](/workbench/workflow17.png)  

> Note: Temporary variables declared within the code block are not recognized by subsequent node expressions. To make variables available later, declare them using the "Define Variable" node before the custom code block and assign values within the block. This design ensures better variable identification and debugging.  

### Debugging  
You can embed a `debugger` node in any logic node to facilitate debugging in the console.  

![](/workbench/workflow18.png)  

> This node is removed during the actual code export/build process and can be safely used.  

### Triggering Events  
This node appears only in frontend component files. Use it to trigger component events.  
![](/workbench/workflow19.png)  

> For detailed usage, refer to [Component Events](/workbench/component-event).  

### Component Access  
This node appears only in frontend component files. Use it to call methods of marked components.  

Before using this node, ensure the target component has a **Component Identifier** property and exposes public methods.  

![](/workbench/workflow20.png)  

Alternatively, you can use `this.$getRef` in a custom code block to access the component’s virtual node. This advanced usage offers more flexibility, including accessing internal data and registering component events.  

```js  
import { Component } from "@joker.front/core";  

export default class extends Component {  
    model = {  
        value: "v1"  
    };  

    method() {  
        this.$getRef("form1")?.component.submit();  
    }  
}  
```  

### Environment Branching  
The platform divides development scenarios into three environments: development, debugging, and production. Use conditional logic to enable code for specific environments.  

![](/workbench/workflow21.png)  

This functionality operates at the code generation level, not through runtime `if` checks.  

> These environments are distinct from environment variables and are specific to development scenarios.  

### Internal Events  
Use the **Internal Event Registration** and **Internal Event Removal** nodes to manage internal component event handling.  

![](/workbench/workflow22.png)  
![](/workbench/workflow23.png)  

### Batched Updates  
This node appears only in frontend projects. Use it to optimize DOM rendering when frequently modifying a variable. It batches changes and executes them once to avoid redundant updates.  

> Before using this node, familiarize yourself with the JOKER framework’s [Batched Updates](https://front.jokers.pub/base/combined-reply).  

The platform provides quick batched update functionality:  
![](/workbench/workflow24.png)  

Equivalent to:  

```js  
combinedReply(() => {  
    this.model.radioValue = 1;  
    this.model.radioValue = 2;  
});  
```  

### Data Synchronization  
This node appears only in frontend component files. Use it to quickly synchronize `props` values to `model` properties, updating the `model` when `props` change.  

> The `props` and `model` property names must match.  

![](/workbench/workflow25.png)  

> For details, refer to the **Property Synchronization (`$syncProp`)** in [Component Internal Methods](https://front.jokers.pub/base/component-api).  

### Await DOM Update  
This node appears only in frontend component files. Use it to wait for DOM updates after changes, which is useful for asynchronous rendering.  

![](/workbench/workflow26.png)  

> Joker frontend updates the DOM immediately upon property changes. However, when working with async components, use `$nextUpdatedRender` to confirm full rendering completion. For details, refer to **Await Next Render** in [Component Internal Methods](https://front.jokers.pub/base/component-api).  

### Return Success Data  
Appears only in server applications. Use this node to return successful response data.  

![](/workbench/workflow27.png)  

Equivalent to:  

```js  
return Ok(1);  
```  

> This is a specialized `return` node with business semantics. Refer to [Controller Design](/workbench/server-controller) for details.  

### Return Error Data  
Appears only in server applications. Use this node to return error response data.  

![](/workbench/workflow28.png)  

Equivalent to:  

```js  
return ActionError("Error message");  
```  

> This is a specialized `return` node with business semantics. Refer to [Controller Design](/workbench/server-controller) for details.  

### Database Operations  
Appears only in server applications. Use this node to perform database operations. For details, see [Database Operations](/workbench/db-option).  

![](/workbench/db-option.png)  

### Cache Operations  
Appears only in server applications. Use this node to perform cache operations. For details, see [Cache Operations](/workbench/server-cache).  

![](/workbench/server-cache1.png)