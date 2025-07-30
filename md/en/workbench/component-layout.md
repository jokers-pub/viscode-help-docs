## Component Layout

This chapter mainly introduces the layout functions of components, covering how to arrange the layout of components, the shortcut ways commonly used in the arrangement process, as well as the advanced usages of components, such as the declaration and use of component blocks, component events, etc.

### Adding Components

The platform supports adding components by dragging. The specific ways are as follows:

- **Component Center**: In the `Component Center`, reference components can be achieved through dragging operations.
    [video](/workbench/component4.mp4)
- **Resource Manager**: In the resource management interface, drag the files of the **component** type to reference the component files within the project.
    [video](/workbench/component7.mp4)
- **Quick Layout Addition**: After selecting a component, click `Quick Add` on the component to open the quick component addition panel, and then components can be quickly referenced.
    [video](/workbench/component8.mp4)
    In the quick component addition panel, users can configure associated components in [Blocks](/workbench/section). The associated components will be displayed at the upper position of the quick component addition panel for convenient and quick selection.
   ![](/workbench/component-layout.png)
- **Outline Tree**: After selecting a component in the outline tree, click the `plus sign` on the right side of the outline tree node to open the quick component addition panel. It should be noted that only when the selected component has enabled [Blocks](/workbench/component-section) (with custom block configuration) is it allowed to add child components to it; otherwise, the `plus sign` button will not be displayed.
   ![](/workbench/component-layout12.png)

### Selecting Components

In the console, components can be selected by clicking with the mouse. When the mouse moves, the platform will mark the component range and component name with `dotted lines`. After confirming that it is the target component, click the `left mouse button` to complete the selection.
[video](/workbench/component-layout2.mp4)

During the development process, some components are difficult to select because they cannot be rendered on the canvas, such as pop-up windows, hidden buttons, etc. At this time, these components can be selected by clicking operations in the `Component Data - Outline Tree` panel.
[video](/workbench/component-layout3.mp4)

If you want to cancel the selected state of a component, click the `Deselect` button at the lower right corner of the canvas, and then the property panel can be switched to the file property panel.
![](/workbench/component-layout8.png)

### Deleting Components

After selecting a component, click the `Delete` button in the quick operation area above the component to delete the component.
[video](/workbench/component-layout4.mp4)
Components can also be quickly deleted in the outline tree.
![](/workbench/component-layout5.png)

### Copying Components

The platform supports quickly copying the selected components. After selecting a component, click the `Copy` button in the quick operation area. After clicking, a new component will be added behind the current component.
[video](/workbench/component-layout6.mp4)
Components can also be quickly copied in the outline tree.
![](/workbench/component-layout7.png)

In addition, the platform also provides an advanced copy and paste method: use the keyboard shortcut `ctrl/command + c` to copy the node. After copying, select a certain container in the current component or other components, and then paste it through `ctrl/command + v`.
[video](/workbench/component-layout9.mp4)

### Moving Components

When it is necessary to adjust the layout order, first select the component to be moved, hold down the left mouse button and drag the component. During the dragging process, the platform will prompt the current insertion position. After confirming the position, release the left mouse button to complete the component movement.
[video](/workbench/component-layout10.mp4)

In a complex page structure, it may be difficult to accurately determine the final document structure by dragging on the canvas. At this time, the platform supports dragging the outline tree nodes in the outline tree to realize the moving operation of components.
[video](/workbench/component-layout11.mp4)

### Component Identifier

When a non-command type component (for the command type components, detailed introductions are provided below) is selected, the `Component Identifier` (`ref`) can be configured in the component property panel. It is recommended that the component identifier be unique in the current file.

After defining the component identifier, this identifier can be used to quickly obtain the component, and then the methods of the component can be called or the values of the component can be obtained.
![](/workbench/component-layout13.png)

After configuring the component identifier, the internal methods of the component can be called in the logical methods (such as life cycle functions, component methods, events, etc.) of the current component.
![Screenshot of the demonstration of calling public methods](/workbench/component5.png)

> **Command Type Components** include: conditional judgment nodes, loop nodes, rendering blocks, and page containers. 