## Logic Orchestration

This chapter mainly elaborates on the basic functions of logic orchestration and how to quickly implement business logic with the help of these functions.

### Overview

Logic orchestration is a visual method development tool. In this tool, you can write code to implement business logic either through simple drag-and-drop operations or by using custom code blocks. The platform has a powerful **Type Expression** function, which enables us to quickly query the required data variables at any logic node. Meanwhile, the intelligent **Syntax Hint** and **Syntax Check** functions make us more handy and smooth when carrying out logic development.

### How to Add Logic

We can drag the method nodes in the toolbox into the canvas in the logic orchestration panel to implement method calls.

[video](/workbench/workflow.mp4)

### How to Delete Logic

We can click the delete button on the right side of the node to be deleted to delete the logic node.

![](/workbench/workflow2.png)

### Add Node Annotations

We can click the edit annotation button on the right side of the node to edit the annotations for the node.

![](/workbench/workflow3.png)

> The edited annotations will be output to the actual code output together when the code is generated.

### Drag Order

We can move the mouse over the node to be dragged, select the drag icon and then hold down the left mouse button to achieve the drag position.

[video](/workbench/workflow1.mp4)

### Logic Branches

Logic branches allow us to implement the logic of **if**, **else if**, and **else** in a visual way.

![](/workbench/workflow4.png)

### Logs

We can quickly implement a `console` console log output through the log logic.

![](/workbench/workflow5.png)

> Please note that in server-side projects, the server-side controller provides a distributed log processing function, which is more powerful than controlling log output and can freely choose the form of log output.

### Internal Method Calls

We can use this node to implement visual internal method calls, and this node will automatically analyze the internal functions in the current project.

![](/workbench/workflow6.png)

#### Method Return Value Reception

It should be noted that if the method has a return value, an operation icon for variable reception will be displayed on the left side of the method call. Click it to configure the receiving variable.

![](/workbench/workflow7.png)

We can choose to use an existing variable to receive the return value or create a new variable to receive it here.

![](/workbench/workflow8.png)

#### Method Parameters

By default, the platform will automatically recognize the optional parameter configuration of the method and automatically hide the subsequent non-required (unconfigured) parameters. We can click to expand more parameters to display all parameters.

[video](/workbench/workflow9.mp4)

#### Asynchronous Methods (await)

When the method we call is an asynchronous function, the method call node will show whether to enable `await`.

After `await` is enabled, when the method is executed, it will wait until the method is successfully executed before executing the subsequent logic; if the waiting is turned off, the execution result will not be waited for, and the logic will be executed asynchronously.

![](/workbench/workflow10.png)

### Data Observation

In front-end projects, we can use the data observation method in component type files to monitor the update of response values and notify when the values change.

![](/workbench/workflow11.png)

The operation of this node will be converted into the following code for execution:

```js
import { Component } from "@joker.front/core";

export default class extends Component {
    model = {
        value: "v1"
    };

    方法() {
        this.$watch(
            () => this.model.icons,
            (nv, ov) => {
                console.info("值变更了");
            }
        );
    }
}
```

We can use a demo to understand this function in depth.

!!!demo1!!!

> For detailed content, you can read the introduction of the `$watch` method in the [Component Internal Methods](https://front.jokers.pub/base/component-api) document.

### Define Variables

We can use this node to define new variables.

![](/workbench/workflow12.png)

It is equivalent to the following code:

```js
let age = 35;
```

### Variable Assignment

We can use this node to assign values to existing variables.

![](/workbench/workflow13.png)

### Loop Traversal

We can use this node to implement loop traversal of arrays/objects.

-   **Loop**: The object to be looped through, which can be an array or an object.
-   **Loop Item**: Define the variable name of the loop item. If the looped object is an object, this value represents the property value of the object; if the looped object is an array, this value represents the array item.
-   **Loop Index**: Define the variable of the loop index. If the looped object is an object, this value represents the KEY of the object; if the looped array, this value represents the index of the array.

When we want to break the loop during the loop process, we can use the `break` node or directly use the `return` node.

![](/workbench/workflow14.png)

The above logic orchestration is equivalent to:

```js
for (let item of [1, 2, 3, 4]) {
    console.info(item);

    if (item > 2) {
        break;
    }
}
```

### Return

We can use the return node to implement the `return` operation of the method. We can click the button on the right side of the return node to configure the return value.

![](/workbench/workflow15.png)

### Custom Code Blocks

Custom code blocks allow us to freely edit our code using the `Javascript` syntax.

![](/workbench/workflow16.png)

We can click the zoom button on the right side of the custom code block node to open the expression editing panel. Here, we can have a larger operation space, and the platform will also prompt all the variables that can be operated on by the current node.

![](/workbench/workflow17.png)

> It should be noted that the temporary variables declared in the code block will not be recognized by the node expressions after the node. If you want the variables declared to be available in the subsequent logic, you can first define them through the `Define Variables` node before the code block is executed and then assign values in the custom code block. The reason why the platform does this is that it can better identify and display the variables in the method during subsequent debugging.

### Debugging and Running

We are allowed to embed a `debugger` node in a certain business logic node, which can help us debug in the console during development and debugging.

![](/workbench/workflow18.png)

> When the actual code is exported and built, this node will be removed, so you can use it with confidence.

### Trigger Events

This node will only be displayed in front-end component files. We can use this logic node to implement event triggering for components.

![](/workbench/workflow19.png)

> For detailed usage methods, please refer to [Component Events](/workbench/component-event).

### Get Components

This node will only be displayed in front-end component files. We can use this node to implement method calls for marked components.

Before using this node, you need to configure the `Component Identifier` property of the component to be operated, and the component has external public methods.

![](/workbench/workflow20.png)

Of course, we can also obtain the component virtual node through the `this.$getRef` method in the custom code block. This is an advanced usage that provides more flexible operations. In addition to being able to call the component's public methods, it can also read the component's internal data, register the component's events, and other advanced functions.

```js
import { Component } from "@joker.front/core";

export default class extends Component {
    model = {
        value: "v1"
    };

    方法() {
        this.$getRef("form1")?.component.submit();
    }
}
```

### Environment Branches

The platform is divided into three environments according to the development scenario: development, debugging, and output. We can implement the effectiveness of code in different environments through conditional judgment.

![](/workbench/workflow21.png)

Its operation principle is not to implement whether the logic is executed through `if` judgment in the code, but a function at the code block output level from the perspective of code generation.

> The environment here is not the environment maintained in the environment variables, but the environment division for the development scenario.

### Internal Events

We can use the `Internal Event Registration` and `Internal Event Destruction` nodes to manage the event handling within the current component.

![](/workbench/workflow22.png)

![](/workbench/workflow23.png)

### Combined Reply

This node will only be displayed in front-end projects. The combined reply is usually used when we need to frequently operate a certain variable. Its purpose is to avoid frequent execution of DOM rendering before the final setting is completed. By using this method, all changes in the method can be deduplicated and then the change notification can be uniformly executed.

> Before understanding the combined reply node, please first learn the content of the JOKER framework [Combined Reply](https://front.jokers.pub/base/combined-reply).

The platform provides the ability to quickly implement combined replies:

![](/workbench/workflow24.png)

It is equivalent to:

```js
combinedReply(() => {
    this.model.radioValue = 1;
    this.model.radioValue = 2;
});
```

### Data Synchronization

This node will only be displayed in front-end component files. We can use this method node to quickly synchronize the attribute values in `props` to the attributes in `model` and synchronize the modification of the values in `model` when the attribute values in `props` change.

> This node requires that the attribute values in `props` and the attributes in `model` have the same names.

![](/workbench/workflow25.png)

> For detailed content, please refer to `Attribute Synchronization ($syncProp)` in [Component Internal Methods](https://front.jokers.pub/base/component-api).

### Wait for Update and Rendering

This node will only be displayed in front-end component files. This method is used to wait for the actual update and rendering of the DOM after the change is updated and can be used for asynchronous rendering waiting.

![](/workbench/workflow26.png)

> The rendering of the Joker front end is immediate. When the property changes, it will be immediately updated and rendered in the page. However, when we use asynchronous components, we need to use the `$nextUpdatedRender` function to monitor whether the component has completed the overall rendering update. For detailed content, please refer to `Wait for Next Rendering` in [Component Internal Methods](https://front.jokers.pub/base/component-api).

### Return Success Data

It will only be displayed in server-side application projects. We can use this node to complete the return of successful data for the interface.

![](/workbench/workflow27.png)

It is equivalent to:

```js
return Ok(1);
```

> This node is also a `return` syntax node with business meaning. For detailed content, please refer to [Controller Design](/workbench/server-controller).

### Return Failure Data

It will only be displayed in server-side application projects. We can use this node to complete the return of abnormal data for the interface.

![](/workbench/workflow28.png)

It is equivalent to:

```js
return ActionError("错误信息");
```

> This node is also a `return` syntax node with business meaning. For detailed content, please refer to [Controller Design](/workbench/server-controller).

### Database Operations

It will only be displayed in server-side application projects. This node can help us implement database operations. For detailed content, please read the [Database Operations](https://workbench/db-option) article.

![](/workbench/db-option.png)

### Cache Operations

It will only be displayed in server-side application projects. This node can help us implement cache operations. For detailed content, please read the [Cache Operations](https://workbench/server-cache) article.

![](/workbench/server-cache1.png)
