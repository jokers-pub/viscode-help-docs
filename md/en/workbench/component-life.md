## Component Lifecycle

This chapter primarily introduces the creation and maintenance of component lifecycles.

### How to Create and Maintain

We can manage our component lifecycle in the `Component Data` panel under `Logic/Events - Lifecycle`. By clicking the plus button on the right side of the lifecycle, we can add lifecycle functions. After adding them, we can maintain our lifecycle logic here. (Documentation on logic orchestration can be found [here](/workbench/workflow).)  
![](/workbench/component2.png)

A component or page has a complete set of lifecycle functions from creation to destruction. We can use these functions to implement business processing at different stages.  

![](https://front.jokers.pub/base/component-life.png)  

In the default Joker framework, the mounting and unmounting of a component are one-time actions, with no state preservation. To satisfy the requirement of maintaining component states, Joker provides the `keep-alive` attribute, which allows a component to destroy only the DOM node without destroying the component instance when `destroy` is called. When the component is mounted again, it uses the surviving instance to re-render the DOM, achieving state preservation for the component.  

Based on the above introduction, the lifecycle of such state-preserving components is as follows:  

![](https://front.jokers.pub/base/keepalive-life.png)  

### List  

| Function Name   | Description                                                  |  
| --------------- | ------------------------------------------------------------ |  
| created         | Triggered after the component is created                     |  
| mounted         | Triggered after the component is rendered and the DOM is mounted |  
| beforeDestroy   | Triggered before the component is destroyed                  |  
| destroyed       | Triggered after the component is destroyed, serving as the final lifecycle hook |  
| sleeped         | Hook function triggered after the component is put to sleep  |  
| weakup          | Hook function triggered after the component is awakened      |  

> For logic orchestration tutorials, see: [Logic Orchestration](/workbench/workflow)