## Component Development

This chapter focuses on the specific process of component development, as well as various properties and methods that components possess.

### Overview

In front-end project development, component development plays a pivotal role. Through component encapsulation, common business or UI interactions can be unified and integrated, effectively avoiding repetitive development and greatly improving development efficiency.

The JOKER development platform demonstrates outstanding advantages. It supports online component development, and the developed components can be directly referenced and rendered within the platform without the need for compilation. This is due to the rendering and sandbox mechanisms independently developed by the JOKER development platform, achieving a high level of flexibility at the framework level.

A complete component mainly consists of the following major functional points:

-   **State Data**: This part is used to maintain the component's data, covering incoming parameters, reactive data, and internal private variables. Incoming parameters allow the component to receive data passed from the outside, enhancing the component's universality; reactive data can respond to data changes in real time, ensuring the timely update of the component interface; internal private variables are used for internal logic processing of the component, guaranteeing the security and independence of the data.
-   **Lifecycle**: During the process from component creation to destruction, hook functions at different stages will be provided. Developers can use these hook functions to execute specific business logic at various stages of the component's lifecycle. For example, initialize data when the component is created and clean up relevant resources when it is destroyed, thus ensuring the normal operation of the component and the rational management of resources. [Component Lifecycle](https://front.jokers.pub/base/component-lifecycle)
-   **Method Logic**: Developers can create public or private methods here. Public methods can be called externally, facilitating interaction between other components or modules and this component, realizing the reuse and expansion of functions; private methods are used for internal logic processing of the component, ensuring the encapsulation and independence of the component's internal logic.
-   **Event Handling**: Events are mainly divided into two types: component/element events and internal component events. Component/element events are used to respond to user operations on components or elements, such as clicks, mouse movements, etc.; internal component events are used for communication and interaction between different parts within the component, ensuring the coherence and coordination of the component's internal logic.
-   **Component Layout**: Developers can manage the component layout through visual drag-and-drop, and can also configure the component's properties, blocks, and events. In addition, the outline tree function provided by the platform can help developers view and manage the component structure in a more intuitive way, making the design and adjustment of the component layout more convenient and efficient.

If you want to gain an in-depth understanding of the underlying details of component development, you can refer to the [Core Framework](https://front.jokers.pub/base/component) document.

### State Data

![](/workbench/component.png)

When opening a `Component` or `Page` file, the `Component Data` menu will be displayed in the left menu of the workbench. Click on it to open the component data panel.

From the perspective of data usage, it can be divided into the following categories:

-   **Incoming Parameters (props)**: These are the parameters required by the current component. These parameters have reactive characteristics. Once the parameters passed by external users change, the DOM nodes inside the component will be immediately notified and updated. This means that the component can respond in real time to changes in externally incoming data, thereby dynamically adjusting its own display and behavior, greatly enhancing the component's flexibility and reusability. For example, a button component may receive parameters such as the button's text content and color through props. When the externally incoming text or color changes, the button can immediately present corresponding changes.

-   **Reactive Data (model)**: This is the reactive data inside the component. Before the component is loaded, this property will be "hijacked" and then possess data response capabilities. That is to say, when this internal data changes, the associated parts of the component will be automatically updated. For example, in a shopping cart component, the quantity of goods is reactive data. When the quantity changes, related parts such as the total price display of the shopping cart and the rendering of the goods list will be automatically updated to provide real-time feedback to users.

-   **Internal Private Attributes**: These attributes neither support external calls nor have reactive capabilities. They are only used as temporary variables for internal use within the component. Here, you can declare internal dynamic data variables for use in multiple methods. For example, in a complex form component, a temporary variable may be needed to record the step status of form filling. This variable is only used in the methods inside the component, does not need to be exposed externally, and does not require reactive updates for its changes.

### Lifecycle

We can manage our component lifecycle in "Logic/Events - Lifecycle" within the "Component Data" panel. After clicking the plus button on the right side of the lifecycle, we can add lifecycle functions. Once added, we can maintain our lifecycle logic here. (The logic orchestration help document can be viewed [here](/workbench/workflow).)
![](/workbench/component2.png)

A component or page has a complete set of lifecycle functions from creation to destruction. We can use these functions to implement business processing at different nodes. [Component Lifecycle](/workbench/component-life)

### Method Logic

We can manage component methods in the "Logic/Events - Component Methods" area of the "Component Data" panel.

![Screenshot of the Component Method Management Panel](/workbench/component3.png)

When creating a method, whether the method is open to the outside world can be determined according to the specific usage scenario:

-   **Private Methods**: They are only for internal use within the component and are mainly used to handle the business logic inside the component. They are like the "secret weapons" inside the component, focusing on completing specific tasks within the component, not exposing interfaces externally, ensuring the encapsulation and independence of the component's internal logic.
-   **Public Methods**: They can be used both internally within the component and provide the ability to be called externally. This enables effective interaction and cooperation between components, enhancing the component's reusability and expandability.

When we set a method as publicly exposed, it can be called through the `ref` method. This is just a simple demonstration. If you want to know the detailed content, you can refer to the [Component Methods](/workbench/component-method), [Component Layout](/workbench/layout) documents.

![Screenshot of Demonstration for Calling Public Methods](/workbench/component5.png)

It is worth mentioning that the platform will automatically analyze the parameter types and return types of public methods and provide a visual method calling interface, greatly improving the convenience of development and enabling developers to use and manage component methods more easily.

### Event Handling

We can manage component methods in the "Logic/Events - Component Methods" area of the "Component Data" panel, and this is also an important entry point for viewing information related to component events.

![Screenshot of the Component Event Information Panel](/workbench/component6.png)

In this area, we can view all the information about the events of the current component. These events are mainly divided into two categories:

-   **External Events**: This is the event handling mechanism provided by the current component to the outside world. It should be noted that this function only exists in component files, and page files will not trigger such events externally. External events enable the component to interact effectively with the outside world. When a specific situation occurs inside the component, it can send signals to the outside world and notify other parts to make corresponding responses. For example, in a custom drop-down menu component, when the user selects a certain menu item, it can notify the parent component to update data through an external event.
-   **Internal Events**: They mainly handle events that monitor the template nodes within the current component. For example, a button click event belongs to an internal event. By monitoring these internal events, we can implement various interaction logics inside the component. When users interact with elements inside the component, the corresponding processing functions will be triggered to complete specific tasks, such as displaying prompt information and modifying the component state.

If you want to know the detailed content about component events, you can refer to the [Component Events](/workbench/component-event) document.

### Component Layout

Component layout is one of the most important aspects in component/page development. We can use the work canvas to arrange the layout of components/pages and achieve the display and development of components.

In the front-end editor, the interface is divided into two areas on the left and right, namely the `Development Canvas Area` and the `Property Area`.

![Screenshot of the Front-End Editor](/workbench/front-end2.png)

1. **Development Canvas Area**: In this area, we can drag **Components** into the work canvas to complete the component addition operation. Meanwhile, if a component has been added, we can modify its properties or perform operations such as deleting the component after selecting it.
2. **Property Area**: When no component is selected, the component property panel is displayed by default. Here, we can change the component's style files or quickly import nodes through HTML. When a component is selected, the property area will display the exclusive property panel of that component, which includes three types of property configurations: `Properties`, `Events`, and `Areas`.

#### How to Add Components

The platform allows us to add components through drag-and-drop.

-   **Component Center**: We can reference components by dragging them in the `Component Center`.
    [video](/workbench/component4.mp4)
-   **Resource Manager**: We can reference component files within the project by dragging **Component**-type files in the resource management.
    [video](/workbench/component7.mp4)
-   **Layout Quick Add**: When we select a component, we can click `Quick Add` on the component to open the quick add component panel and achieve quick reference of the component.
    [video](/workbench/component8.mp4)

#### How to Configure Components

We can select a certain component by clicking on the canvas. After selecting the component, we can view the configuration information of the current component in the left panel of the canvas and modify the component's parameters here, including component parameters, component events, and component blocks.

![](/workbench/component9.png)

#### Component Styles

The platform empowers users to write styles for individual components. Users can use nested CSS syntax to write component styles. The platform supports `scoped` style isolation by default, effectively avoiding style conflicts. At the same time, it also provides the `deep()` style penetration function to meet the needs of style overwriting in specific scenarios.

When we do not select any component in the canvas (you can click to cancel the selected component in the shortcut operation panel below the canvas), the left side of the canvas will display the property panel of the current component, where we can maintain the styles of our components.

![](/workbench/component10.png)

#### Outline Tree

The platform has an overall layout outline display function. You can view the layout structure in the `Outline Tree` of the `Component Data` panel. In addition, the outline tree also provides rich shortcut layout operations to help you complete layout adjustments more efficiently.
![](/workbench/component11.png)

> For detailed component layout, please refer to [Component Layout](/workbench/layout).
