## Component Development  

This chapter focuses on the detailed workflow of component development, as well as the various properties and methods that components possess.  

### Overview  

In front-end project development, component development plays a pivotal role. By encapsulating components, common business or UI interactions can be unified and consolidated, effectively avoiding redundant development and significantly improving efficiency.  

The **JOKER** development platform demonstrates exceptional advantages by supporting online component development. Completed components can be directly referenced and rendered within the platform without compilation, thanks to its self-developed rendering and sandbox mechanisms, enabling framework-level flexibility.  

A complete component primarily consists of the following key functionalities:  

- **State Data**: This section maintains component data, including input parameters, reactive data, and internal private variables. Input parameters allow components to receive externally passed data, enhancing reusability. Reactive data ensures real-time updates to the UI when data changes. Internal private variables handle component logic securely and independently.  
- **Lifecycle**: Throughout a component's lifecycle—from creation to destruction—hooks are provided at different stages. Developers can use these hooks to execute specific business logic at various phases (e.g., initializing data on creation or releasing resources on destruction). [Component Lifecycle](https://front.jokers.pub/base/component-lifecycle)  
- **Method Logic**: Developers can create public or private methods here. Public methods allow external invocation, facilitating interaction between components or modules, whereas private methods handle internal logic while maintaining encapsulation.  
- **Event Handling**: Events are categorized into **component/element events** (responding to user actions like clicks or mouse movements) and **internal component events** (enabling communication between different parts of the component).  
- **Component Layout**: Developers can manage layouts via drag-and-drop visualization, configure properties, **Sections**, and events. The platform’s outline tree feature provides an intuitive way to review and manage component structures.  

For an in-depth understanding of component development, refer to the [Core Framework](https://front.jokers.pub/base/component) documentation.  

### State Data  

![](/workbench/component.png)  

When opening a `Component` or `Page` file, the workspace’s left-hand menu displays the **Component Data** option. Clicking it reveals the component data panel.  

Data can be classified as follows:  

- **Props**: Input parameters for the component. These are reactive—when externally passed data changes, the component’s DOM nodes update immediately. For example, a button component’s text or color can dynamically adjust based on prop changes.  
- **Model**: Internal reactive data. Before the component mounts, this property is "hijacked" to become reactive. For instance, changes to a shopping cart component’s item quantity trigger automatic updates to the total price display.  
- **Internal Private Properties**: Non-reactive variables used temporarily within the component (e.g., tracking form completion steps). These are neither externally callable nor reactive.  

### Lifecycle  

The **Component Data** panel’s *Logic/Events > Lifecycle* section lets you manage lifecycle hooks. Click the "+" button to add lifecycle functions, then maintain the logic. (Refer to [Workflow Documentation](/workbench/workflow) for details.)  
![](/workbench/component2.png)  

A component or page follows a complete lifecycle from creation to destruction. These hooks enable business processing at different stages. [Component Lifecycle](/workbench/component-life)  

### Method Logic  

Component methods are managed in the *Logic/Events > Component Methods* section of the **Component Data** panel.  

![Component Methods Panel](/workbench/component3.png)  

When creating a method, choose its visibility:  

- **Private Methods**: Internal-only, handling component-specific logic. These ensure encapsulation.  
- **Public Methods**: Callable internally or externally, facilitating component interaction and reusability.  

Public methods can be invoked via `ref`. The platform automatically analyzes parameter and return types, providing a visual interface for method invocation.  

![Public Method Demo](/workbench/component5.png)  

For details, see [Component Methods](/workbench/component-method) and [Component Layout](/workbench/component-layout).  

### Event Handling  

Events are managed in the *Logic/Events > External/Internal Events* section of the **Component Data** panel.  

![Component Events Panel](/workbench/component6.png)  

Events are categorized as:  

- **External Events**: Triggered by the component for external consumption (exclusive to components, not pages). Example: A dropdown component notifying a parent of selection changes.  
- **Internal Events**: Listeners for template node interactions (e.g., button clicks).  

For more, see [Component Events](/workbench/component-event).  

### Component Layout  

Layout is a critical aspect of component/page development. The workspace canvas enables visual styling and arrangement.  

The front-end editor divides into two areas: the **Development Canvas** and the **Properties Panel**.  

![Front-End Editor](/workbench/front-end2.png)  

1. **Development Canvas**: Drag **components** here to add them. Select a component to modify properties or delete it.  
2. **Properties Panel**:  
   - Displays component attributes by default. Edit styles or import nodes via HTML.  
   - When a component is selected, the panel shows specific configs: *Properties*, *Events*, *Sections*.  

#### Adding Components  

Components can be added via:  

- **Component Center**: Drag from the component library.  
  [video](/workbench/component4.mp4)  
- **Resource Manager**: Drag **Component**-type files from the project.  
  [video](/workbench/component7.mp4)  
- **Quick Add**: Select a component and use the *Quick Add* panel.  
  [video](/workbench/component8.mp4)  

#### Configuring Components  

Select a component on the canvas to view/modify its properties, events, or Sections in the left panel.  

![](/workbench/component9.png)  

#### Component Styles  

Users can write scoped CSS for components, with `scoped` isolation by default. The `deep()` selector enables style penetration when needed.  

To edit styles, deselect all components in the canvas (via the quick-action panel), then access the style settings in the left panel:  

![](/workbench/component10.png)  

#### Outline Tree  

The **Component Data** panel’s *Outline Tree* displays the layout hierarchy and offers quick layout operations.  

![](/workbench/component11.png)  

> For detailed layouts, refer to [Component Layout](/workbench/component-layout).