## Component Events

This chapter covers everything you need to know about component events, focusing on three key areas: **how to register component events**, **how to expose events externally**, and **how parameters are passed along with an event**.

### Registering Component Parameters

When a component is selected, switch to the `Events` tab in the component’s property panel to see all events that the component exposes. Simply choose the event you need and click **Create Event** to register it.

[video](/workbench/component-event.mp4)

### Event Parameters

There are two kinds of parameters:

1. Parameters emitted **by the component**.
2. Parameters taken from the **current context**.

#### Parameters Emitted by the Component

During event handling, the component that raises the event can transmit data to the outside world.  
For example, on a product-list page, when the user taps an item, the system dispatches an event whose payload contains the detailed product object.  
Inside the event handler you access this payload through the reserved variable `e.data`.

![Component-emitted parameter](/workbench/component-event1.png)

Every component event handler receives an **e** object that carries the following members:

| Property          | Type     | Purpose |
|-------------------|----------|---------|
| eventName         | string   | Name of the fired event. |
| event             | object   | The raw DOM or framework event object. |
| target            | VNode    | Virtual DOM node that triggered the event. |
| preventDefault    | function | Call to suppress the event’s default behavior. |
| stopPropagation   | function | Call to prevent bubbling/capturing further up the tree. |
| data              | object   | Externally declared data whose structure is determined by the component’s event signature. |

#### Parameters from the Current Context

When you register an event on a component **within the current file** and want to hand over data that lives in that same file, you switch to the second mode of parameter delivery.  
This pattern is common in list-rendering loops: while iterating with `for`, each item’s data is forwarded via the event handler even though those items are **not stored inside the triggering component** itself.

![Context parameter](/workbench/component-event2.png)

After you add such parameters you’ll find them in the event-handler workflow panel.

![Workflow panel with parameters](/workbench/component-event3.png)

> Parameters are bound **positionally**, similar to function arguments. You can drag them to reorder, ensuring they are delivered in the exact required order.

### How to Expose Events for External Use

While developing a component you can declare events that callers will be able to bind to.

#### Defining Event Metadata

Open `Component Data ➞ Logic/Events`. Click the **+** icon beside **Exposed Events**.

![Declare exposed event UI](/workbench/component-event4.png)

To add or edit an event the `Trigger Event` dialog appears.

![Trigger Event dialog](/workbench/component-event5.png)

Fill out the dialog as follows:

1. **Event Name** – an English identifier used in code to raise the event.
2. **Display Title** – a friendly label developers see in the IDE to quickly grasp its purpose.
3. **Description** – a concise yet complete explanation of when the event fires, what it achieves, and any edge-cases.
4. **Event Parameters** – describe the expected schema; leave empty when no payload is required.

#### Raising the Event

Once the event is declared, the **Trigger Event** node becomes available inside the component’s logic graph.

![Trigger Event node usage](/workbench/component-event6.png)

Use the drop-down to pick the event. The platform enumerates all exposed events defined for this component.  
If the event schema contains parameters, the node surfaces input ports so you can map the corresponding values.

### Browsing Registered Event Handlers

After you attach many interactive events across the page UI, you can quickly locate any handler inside `Component Data ➞ Logic/Events – Internal Events`. This panel lists **every internally-declared handler**. Click an event name to open the handler’s logic; press the **Locate Component** button to have the canvas jump to the source component – a huge productivity gain during debugging and maintenance.

![Internal events browser](/workbench/component-event7.png)