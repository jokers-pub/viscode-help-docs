## Component Lifecycle

This chapter mainly introduces the creation and maintenance of the component lifecycle.

### How to Create and Maintain

We can manage our component lifecycle in "Logic/Events - Lifecycle" within the "Component Data" panel. After clicking the plus button on the right side of the lifecycle, we can add lifecycle functions. Once added, we can maintain our lifecycle logic here. (The logic orchestration help document can be viewed [here](/workbench/workflow).)
![](/workbench/component2.png)

A component or page has a complete set of lifecycle functions from creation to destruction. We can use these functions to implement business processing at different nodes.
![](https://front.jokers.pub/base/component-life.png)

Under the default Joker system, the mounting and unloading of a component are one-time operations, and there is no state preservation. To meet the requirement of component state preservation, Joker provides the "keep-alive" attribute. It can make a component only destroy the DOM node instead of the component instance when the "destroy" is called. When the component is loaded again, it will use the surviving instance to re-render the DOM and achieve component state preservation.

Based on the above introduction, the lifecycle of such state-preserving components is as follows:
![](https://front.jokers.pub/base/keepalive-life.png)

### List

| Function Name | Introduction                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------- |
| created       | Triggered after the component is created.                                                       |
| mounted       | Triggered after the component is rendered and mounted to the DOM.                               |
| beforeDestroy | Triggered before the component is destroyed.                                                    |
| destroyed     | Triggered after the component is destroyed, serving as the last hook function in the lifecycle. |
| sleeped       | The hook function after the component is put to sleep.                                          |
| weakup        | The hook function triggered after the component is awakened.                                    |

> For the logic orchestration tutorial, please refer to: [Logic Orchestration](/workbench/workflow)
