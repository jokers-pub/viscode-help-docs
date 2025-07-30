## Component Events

This chapter will introduce the relevant content of component events, mainly covering the following aspects: **How to register component events**, **How to provide events externally**, and **How to pass parameters for events**.

### How to Register Component Parameters

When we select a component, we can view the events provided externally by the current component in the `Events` tab of the component property panel. We can select the event to be registered here and click **Create Event** to register the corresponding event.

[video](/workbench/component-event.mp4)

### Event Parameters

Event parameters are divided into two types: parameters passed by the component externally and current context parameters.

#### Parameters Passed by the Component Externally

During the event handling process of a component, the component that triggers the event may pass out data parameters. For example, on the product list page, when the user clicks on a product item, the system will pass out the detailed data of the clicked product through the event. In the event logic, we need to use the `e.data` variable to receive these parameters.

![Picture related to parameters passed by the component externally](/workbench/component-event1.png)

In the event handling function of each component, there will be an **e** variable, which carries the event handling data, specifically including the following contents:

| Parameter           | Data Type | Description                                                                 |
| ------------------ | -------- | ---------------------------------------------------------------------------- |
| eventName          | String   | Represents the name of the event                                                |
| event              | Object   | Belongs to the native event handling object                                    |
| target             | Virtual Node | That is, the virtual node (VNode) that triggers the current event                |
| preventDefault     | Method   | Calling this method can prevent the default event from occurring                |
| stopPropagation    | Method   | Calling this method can prevent the event from continuing to spread            |
| data               | Object   | It is the data passed by the component externally, and its data type is determined according to the parameter type declared when the event is declared |

#### Current Context Parameters

When we register the events of a component in the **current file** and want to pass the data in the **current file**, we need to use the second way of data passing parameters. This way enables us to pass the data in our **own file** as parameters into the event method. It is usually applied in the `for` loop of the page. When the click event is triggered, the data of each item is passed, and these data come from the **own context**, not from inside the component that triggers the event.

![](/workbench/component-event2.png)

After we add parameters, we can find this parameter in the event handling logic orchestration panel.

![](/workbench/component-event3.png)

> The parameter passing here is **sequential passing**, similar to the parameter passing method of methods. We can adjust the order of these parameters by sorting to ensure that they are passed in the order we expect.

### How to Provide Events Externally

When we are developing a component, we can declare the event information provided externally by the current component.

#### Defining Event Information

To define event information, you need to operate in the `Logic/Event` panel in the `Component Data` menu. Click the **Plus Button** on the right side of the external event to declare the event information.

![Screenshot of the interface for declaring event information](/workbench/component-event4.png)

When you click **Add** or **Edit** a certain event information, the event `Trigger Event` editing panel will be opened.

![Screenshot of the event trigger event editing panel](/workbench/component-event5.png)

In this editing panel, we need to maintain the following contents:

1. **Event Name**: Use English letters to define a name for the event. This name is used to identify and call this event in the code logic.
2. **Remarks Title**: Give the event a nickname to facilitate developers to quickly understand the role and purpose of the event and improve development efficiency.
3. **Hint**: Provide comprehensive and detailed event introductions to let developers have a deeper understanding of the function, trigger conditions, and expected effects of the event.
4. **Event Parameters**: Define the event parameter types here. If the event does not need to pass parameters, it can be left blank.

#### Triggering Events

After completing the declaration of the information of the external trigger events, the corresponding events can be triggered by using the `Trigger Event` node in the corresponding logic.

![Screenshot of the operation interface for triggering events](/workbench/component-event6.png)

When operating, you can select the event to be triggered through the drop-down box. The platform will automatically read all the **externally triggered events** registered by the current component, facilitating developers to quickly locate the required events.

If the event has parameters, the system will require developers to add event parameters at this time to ensure that the event is executed correctly according to the expected logic.

### Viewing Registered Event Methods

After registering a large number of interactive events in the page layout, if you want to quickly find them, you can manage them through the `Logic/Event - Internal Events` panel in the `Component Data` menu. This panel will display **all internally registered events**. Click on the event name, and the corresponding event handling function will be opened; click on the **Locate Component** button on the right side of the event, and the component that is the source of the event can be quickly selected. This operation method greatly improves the efficiency of finding and managing events during the development process.

![Screenshot of the interface for viewing registered event methods](/workbench/component-event7.png) 