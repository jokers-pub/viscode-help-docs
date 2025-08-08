## Component State Data

This chapter focuses on **component state data**. Here you can maintain parameter constraints, internal reactive data, and private variables of a component.

### Overview

Component state data is one of the most frequently used features in component development.

![](/workbench/component.png)

When you open a `component` or `page` file, the **Component Data** entry appears on the left side of the Workbench. Click it to open the **Component Data** panel.

From a data-usage perspective, the data can be classified into three types: **Input Props**, **Reactive Data (model)**, and **Internal Private Properties**. The next sections describe their purposes and how to declare a property or parameter.

---

### Input Props (props)

These are the arguments required by the current component. They are **reactive**—whenever the caller passes new values, the component receives the update instantly and re-renders its DOM nodes. This makes the component highly flexible and reusable.  
For instance, a button component may accept text and color through props; when those props change, the button immediately reflects the new text or color.

> Configuration of input props is **only available in component-type files**. Page-type components do **not** allow prop configuration.

#### Creation / Edit

Click the **+** icon on the right side of the **Input Props** panel to open the property-creation dialog. There you can specify the **name**, **description**, **type**, **default value**, and **demo value** of the prop.  
For step-by-step instructions, refer to the last section **Creating & Editing Properties / Parameters**.

![](/workbench/component-data.png)

#### Usage

After creation, the prop is ready for use from two distinct angles:

##### 1. Declarer’s View – Inside the Component

-   **Layout Template**: Use `${props.variableName}` expressions to reference the prop.  
    ![Example of referencing a prop in template](/workbench/component-data1.png)

-   **Method Logic**: In the **logic editor**, reference the value via `this.props.variableName`.  
    ![Example of referencing a prop in logic](/workbench/component-data2.png)

> **Tip**: If you are not comfortable writing code yet, don’t worry. The platform provides intelligent code completion and a **Data Management Panel** where you can click to insert variables quickly.

##### 2. Consumer’s View – When Other Components or Pages Use It

When another component or page references this component, simply select the component instance and open its **Property Panel**. All declared props appear there, ready for configuration.  
![Viewing declared props in a parent component](/workbench/component-data3.png)

> **Strong recommendation**: Always **fully declare** the props. Provide descriptions, interaction types, and demo values so other developers can understand the prop’s intent at a glance.

---

### Reactive Data (model)

These are the **internal reactive values** of the component. Before the component is mounted, they’re **wrapped** as reactive observers. Whenever any of these values change, the relevant parts of the component re-render automatically.  
Example: In a shopping-cart component, the item **quantity** is reactive—changing it instantly updates the displayed **total price** and the item list.

#### Creation / Edit

Click the **+** icon on the right side of the **Reactive Data (model)** panel. Configure **name**, **description**, **type**, **default value**, and **demo value** following the same workflow as above.  
See section “Creating & Editing Properties/Parameters” for detailed steps.

![](/workbench/component-data4.png)

#### Understanding Reactive Data

A simple **DEMO** helps illustrate the concept—when the reactive variable `count` is incremented by a button click, the DOM updates immediately.

!!!demo1!!!

#### Usage

Once defined:

-   **Layout Template**: Reference via `model.variableName` in expressions.  
    ![Example referencing model in template](/workbench/component-data5.png)

-   **Method Logic**: Access via `this.model.variableName`.  
    ![Example referencing model in logic](/workbench/component-data6.png)

> **Tip**: Same as with props, smart completion and the **Data Management Panel** will help you insert variables without manual typing.

---

### Internal Private Properties

Private properties are **not** accessible from the outside and are **non-reactive**. They make perfect temporary or utility variables within the component.  
For instance, a multi-step form component could hold a private `stepIndex` to track the current active step—only relevant inside the component’s methods.

#### Creation / Edit

Click the **+** on the right side of the **Private Properties** panel and fill in the **name**, **description**, **type**, **default value**, and **demo value** as described earlier.

![](/workbench/component-data7.png)

Usage is identical to props or reactive data (expressions can read them directly), but remember:

- They **do not trigger re-renders**.  
- Therefore, **never expose them in the template** if the value can change at runtime.  
- Ideal for state that is shared among multiple methods without side effects introduced by reactivity.

---

### Creating & Editing Properties / Parameters

Here is a step-by-step guide to the property editor (parameters and reactive data share the same UI, but some options appear only for props).

#### Step 1 – Basic Information

![](/workbench/component-data8.png)

-   **Property Name**: English letters; must be unique within its own scope (props, model or private).  
-   **Title / Remarks**: A human-readable label like Color, Size, etc.  
-   **Tooltip**: Detailed description that appears as a tooltip on hover.  
-   **Category**: Only **for props**; groups related props under a category.  
    ![Property categories](/workbench/component-data9.png)  
-   **Sort Order**: Determines order in the property panel; larger values appear first (**props only**).

#### Step 2 – Type Configuration

![](/workbench/component-data10.png)

-   **Type**  
    1. String  
    2. Number  
    3. Boolean  
    4. Array  
    5. Object  
    6. Function  
    7. Date  
    8. Any

-   **Required**: Mark whether the value can be `undefined`.  
-   **Value Assignment** (props only) chooses how the consumer provides a value. Each data type exposes a different set of UI controls:
    1. Select (Key–Value options)
    2. Multiline Text
    3. Color Picker
    4. CSS Dimension
    5. Style Name Selector
    6. Image Asset Selector
    7. Asset Selector
    8. Inline Style Editor
    9. Expression (default)

-   **Default Value**: Applied if no value is supplied.  
-   **Demo Value** (props only): Immediately assigned when the component is dragged onto a page, providing a better first impression. Developers can still override it.

When the property type is **Array** or **Object**, Step 2 displays a **deep-type designer** where you can further define nested properties/columns.

![](/workbench/component-data11.png)

The nested designer shares the same options as above.