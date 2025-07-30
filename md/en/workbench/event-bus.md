### Event Bus

In this chapter, we will explore what an Event Bus is and the functionalities it enables.

**Note**: The Event Bus feature is only available for `front-end project` types. It cannot be used in component libraries or method set libraries.

#### Overview

In the front-end domain, apart from data communication between components and pages via `props` parameters, the Platform also provides a data communication method called the `Event Bus`. Under the traditional `parameter` and `event` data transfer model, data can only be passed between components with a reference relationship. When a component is **not subordinate** to the current page/component, data transfer via parameters or registered events is not feasible.

To achieve data communication between components or pages without a reference relationship, we need the `Event Bus`. The Event Bus acts as a global event manager, allowing all pages/components/methods to register events or listen for events on it.

#### Create an Event Bus

First, open the **Event Bus** panel in the `Project Configuration` file.

![](/workbench/event-bus.png)

Click the **「Create Event Bus」** button on the page to create an Event Bus. Note that an Event Bus can declare multiple events, so an `Event Bus` can be understood as a collection of event categories, helping us manage events by category.

![](/workbench/event-bus1.png)

After creating an Event Bus for a specific category, you can define events within it.

![](/workbench/event-bus2.png)
![](/workbench/event-bus3.png)

Here, you need to define the event name, and the Event Bus allows setting event parameter types.

#### How to Use

You can perform operations through the `Event Bus` logic node in logic orchestration.

![](/workbench/event-bus4.png)

After dragging in the node, complete the following two steps:

1. **Select an Event**: The Platform provides a visual selection interface where you can choose the event to trigger.
2. **Select an Operation Type**: Operation types include **Listen for Events** and **Trigger Event**.

When selecting **Trigger Event**, if the current event has constrained event parameter types, you need to fill in the event parameter values to be passed.

![](/workbench/event-bus5.png)

If selecting **Listen for Events**, you need to maintain a callback function for handling when the event is triggered.

![](/workbench/event-bus6.png)

> **Special Note**: For the `Listen for Events` operation, the Event Bus does not automatically handle event destruction. Therefore, you need to define a receiving value (Function) as the **destruction function** for the event, which should be triggered during `component destruction` or at an appropriate 时机 (timing).
