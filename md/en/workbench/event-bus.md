## Event Bus

In this chapter, we will explore what an event bus is and the functionalities it enables.  

**Note**: The event bus feature is only available for `Frontend - Project` types. It cannot be used in component libraries or method set repositories.  

### Overview  

In frontend development, apart from using `props` for data communication between components and pages, the platform also provides a data communication method called `Event Bus`. In the traditional `props` and `events` data passing model, data can only be transmitted between components that have a reference relationship. When a component **does not belong** to the current page/component, it is impossible to pass data via props or register events.  

To achieve data communication between components or pages without a reference relationship, we use the `Event Bus`. The event bus acts like a global event manager, allowing all pages/components/methods to register or listen to events.  

### Creating an Event Bus  

First, you need to open the **Event Bus** panel in the `Project Configuration` file.  

![](/workbench/event-bus.png)  

Click the **"Create Event Bus"** button to create an event bus. Note that multiple events can be declared within a single event bus, so an `Event Bus` can be understood as a collection of events within a category, helping us manage events by classification.  

![](/workbench/event-bus1.png)  

Once an event bus for a specific category is created, you can define events within it.  

![](/workbench/event-bus2.png)  
![](/workbench/event-bus3.png)  

Here, you need to define the event name, and the event bus also allows you to set the event parameter types.  

### How to Use  

You can use the `Event Bus` logic node in logical orchestration to perform operations.  

![](/workbench/event-bus4.png)  

After dragging in the node, complete the following two steps:  

1. **Select Event**: The platform provides a visual selection interface where you can choose the event to trigger.  
2. **Select Operation Type**: The operation types include **Listen to Event** and **Trigger Event**.  

If you select **Trigger Event**, and the event has constrained parameter types, you need to fill in the event parameter values to be passed here.  

![](/workbench/event-bus5.png)  

If you select **Listen to Event**, you need to define the callback function to handle the event when it is triggered.  

![](/workbench/event-bus6.png)  

> **Important Note**: For the `Listen to Event` operation, the event bus does not automatically handle event cleanup methods. Therefore, you need to define a return value (Function), which serves as the **cleanup function for the event**. This function must be called when the component is destroyed or at the **appropriate time**.