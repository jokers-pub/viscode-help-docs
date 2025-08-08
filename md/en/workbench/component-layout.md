## Component Layout

This chapter focuses on the layout features of components, covering how to orchestrate component layouts, common shortcuts used during orchestration, and advanced usage such as declaring and employing **component Sections** and component events.

### Adding Components

The platform supports drag-and-drop to add components through the following channels:

-   **Component Center**: Inside the **Component Center**, drag-and-drop a component to reference it.  
    [video](/workbench/component4.mp4)

-   **Explorer**: In the resource management interface, drag a file of type **Component** into the project to reference the in-project component file.  
    [video](/workbench/component7.mp4)

-   **Quick Add from Layout**: Select a component on the canvas and click **Quick Add** on it to open the **Quick Add Component** panel, where you can quickly reference other components.  
    [video](/workbench/component8.mp4)  
    Within the Quick Add Component panel, users can bind **associated components** via [Section](/workbench/section). Associated components appear at the top of the panel for fast selection.  
    ![](/workbench/component-layout.png)

-   **Outline Tree**: In the Outline Tree, select a component and click the **plus** icon to its right to open the **Quick Add Component** panel. **Note**: The **plus** icon is only shown if the selected component has **custom Section configuration** enabled; otherwise, child components cannot be added.  
    ![](/workbench/component-layout12.png)

### Selecting Components

On the canvas, click directly to select a component. While the mouse hovers, the platform draws a **dashed rectangle** around the component and displays its name; click the **left mouse button** to confirm selection.  
[video](/workbench/component-layout2.mp4)

During development, some components—such as modals or hidden buttons—cannot be rendered on the canvas and are therefore hard to select. In such cases, open the **Component Data – Outline Tree** panel and click on the corresponding node to select them.  
[video](/workbench/component-layout3.mp4)

To deselect a component, click the **Deselect** button at the bottom-right corner of the canvas; the Properties panel will revert to file-level settings.  
![](/workbench/component-layout8.png)

### Deleting Components

After selecting a component, click the **Delete** button in the floating quick-action toolbar to remove it.  
[video](/workbench/component-layout4.mp4)  
Alternatively, delete components rapidly via the Outline Tree.  
![](/workbench/component-layout5.png)

### Duplicating Components

The platform supports instant duplication of the selected component. After selection, click the **Duplicate** button in the quick-action toolbar; a new copy is placed immediately after the original.  
[video](/workbench/component-layout6.mp4)  
Duplication can also be performed quickly from the Outline Tree.  
![](/workbench/component-layout7.png)

Additionally, an advanced copy/paste mechanism is available:  
Use `Ctrl/Cmd+C` to copy the selected node. Next, select any container (inside the current or another component) and paste with `Ctrl/Cmd+V`.  
[video](/workbench/component-layout9.mp4)

### Moving Components

To reorder the layout, select a component and drag it while holding the left mouse button. The platform displays the drop position live; release the button to commit the change.  
[video](/workbench/component-layout10.mp4)

In complex page hierarchies, dragging on the canvas may be imprecise. Instead, drag the corresponding node in the Outline Tree to rearrange components.  
[video](/workbench/component-layout11.mp4)

### Component Reference

When a non-command-type component is selected, its Properties panel exposes the **Component Reference** (`ref`). It is recommended that this value be unique within the current file.  

Once defined, the reference provides direct access to the component, enabling method calls or value retrieval.  
![](/workbench/component-layout13.png)

With the reference configured, you can invoke internal methods of the component from logic code (lifecycle functions, component methods, events, etc.) in the current scope.  
![Public method invocation demo screenshot](/workbench/component5.png)

> **Command-type components** include Condition nodes, Loop nodes, Render Sections, and Page Containers.