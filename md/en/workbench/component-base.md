## Base Components

This chapter introduces the foundational layout components provided by the platform.

![](/workbench/component-base.png)

### Text

![](/workbench/component-base2.png)
A **Text Node** enables you to display text anywhere in the canvas. You may configure the display value using either **static text** or **dynamic expressions**.  
Key properties:

#### Component Attributes

| Attribute          | Type   | Description                                                                                                           |
|--------------------|--------|-----------------------------------------------------------------------------------------------------------------------|
| Component ID       | String | Defines a `ref` used to obtain the virtual node in code and perform programmatic operations.                          |
| Text Content       | String | The value to render—supply a static string or an expression for dynamic rendering.                                    |
| Custom Style Class | Array  | Accepts an array of CSS class names to be applied to the node.                                                        |
| Custom Styles      | Object | Edited through the visual style editor; maps to the node’s inline `style`.                                            |

---

### Element

The **Element Node** is the most frequently used layout primitive. Drop an element and change its `tagName` to render any **DOM** element; defaults to **DIV**.  
It exposes:
- Custom attributes
- Custom element events  
This lets you model any DOM node—div, i, input, etc.—without restrictions.

![](/workbench/component-base3.png)

#### Component Attributes

| Attribute          | Type   | Description                                                                                                           |
|--------------------|--------|-----------------------------------------------------------------------------------------------------------------------|
| Component ID       | String | Defines a `ref` used within logic to reference and manipulate the virtual node.                                       |
| Tag Name           | String | Controls the rendered element type; defaults to `div`.                                                                |
| Custom Style Class | Array  | CSS class names array for the element.                                                                                |
| Inline Style       | Object | Visual style editor maps to the element’s inline styles.                                                              |
| Custom Attributes  | String | Arbitrary HTML attributes can be added, edited, or removed after creation.                                            |

#### Section

| Slot    | Label   | Description                                                                                      |
|---------|---------|--------------------------------------------------------------------------------------------------|
| default | Content | Container’s content slot; supports nested elements for hierarchical composition.                 |

#### Events

Developers may attach custom DOM events to the node.

[video](/workbench/component-base4.mp4)

---

### Button

A lightweight **Button** component for rapid click interactions.

![](/workbench/component-base5.png)

#### Component Attributes

| Attribute          | Type   | Description                                                                                                           |
|--------------------|--------|-----------------------------------------------------------------------------------------------------------------------|
| Component ID       | String | Assigns a `ref` for programmatic access.                                                                              |
| Button Content     | String | Static text or expression-driven dynamic text displayed on the button.                                                |
| Custom Style Class | Array  | CSS classes.                                                                                                          |
| Button Style       | Object | Inline styles edited with the visual style editor.                                                                    |

#### Component Events

| Event      | Meaning           | Params | Details |
|------------|-------------------|--------|---------|
| click      | Mouse-click       | —      | Fired after both `mousedown` and `mouseup` complete on the same element (or their least-common ancestor). |
| mouseenter | Pointer enters    | —      | Triggered when the pointing device enters the component bounds. Usually paired with `mouseleave`. |
| mouseleave | Pointer exits     | —      | Triggered when the pointer leaves the component bounds. Usually paired with `mouseenter`. |

> The built-in Button is intentionally minimal—for complex logic or styling, wrap your own button via the **Element** node or integrate a third-party UI kit.

---

### Conditional Rendering

Controls the visibility of DOM fragments.

![](/workbench/component-base4.png)

Define a **primary condition** and optionally add `else if` / `else` branches. The panel auto-creates matching condition branches in the outline tree, where you can nest child elements accordingly.

#### Component Attributes

| Attribute | Type    | Description                                           |
|-----------|---------|-------------------------------------------------------|
| Condition | Boolean | When truthy, renders the wrapped elements; falsy hides them. Use expressions to model sophisticated logic. |

Example: wrapping a `button` inside a condition toggles its visibility based on the expression value.  
[video](/workbench/component-base6.mp4)

> Conditional nodes are *directive* elements; once populated, clicking them on the canvas selects their children instead. Use the outline tree to select the directive itself.

---

### Loop

Renders repeated data (lists or objects) dynamically.

![](/workbench/component-base7.png)

#### Component Attributes

| Attribute   | Type        | Description                                                                                                                            |
|-------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Loop Source | Array/Object| The dataset to iterate over.                                                                                                           |
| Item Name   | String      | Identifier for the current loop item—accessible as an expression variable inside the loop.                                             |
| Index Name  | String      | Identifier for the index/key variable: array index for arrays, object key for objects.                                                 |

#### Using Loop Variables

After declaring Item Name and Index Name, reference them inside the loop scope via expressions.

![](/workbench/component-base8.png)

Illustrates referencing an `item` variable inside an icon component nested in the loop.

---

### Dynamic Component

Much like the **Element** node, but purpose-built for *runtime tag selection*. You supply tag names at runtime to render third-party components, and you can define custom sections.

![](/workbench/component-base9.png)

#### Component Attributes

| Attribute          | Type   | Description                           |
|--------------------|--------|---------------------------------------|
| Component ID       | String | Assign `ref` for programmatic access. |
| Tag Name           | String | The tag or component name to render.  |
| Custom Attributes  | String | Arbitrary attributes editable post-add. |

#### Sections

Dynamic components let you define custom **slots/sections** for content projection.

![](/workbench/component-base10.png)

#### Events

Attach custom events to the dynamic node.

![](/workbench/component-base11.png)

> Often leveraged to wrap NPM-based low-level libraries into visually-declarative components.

---

### Render Slot

Available **only** in a *Component* type file. Marks a region within a component that can be injected dynamically by consumers.

![](/workbench/component-base12.png)

#### Component Attributes

| Attribute        | Type    | Description                                                                                                                |
|------------------|---------|----------------------------------------------------------------------------------------------------------------------------|
| Default Slot     | Boolean | When `true`, the slot appears open by default when the component is dropped onto the canvas, simplifying initial editing.  |
| ID               | String  | Alphabetic identifier—defaults to `default`—used to distinguish multiple slots in one component.                           |
| Slot Description | String  | Human readable guidance for developers consuming the component.                                                            |
| Slot Alias       | String  | A nickname for better tooltip/outliner readability.                                                                        |
| Linked Components| Array   | Pre-attach suggested children for quick drop-in usage.                                                                     |
| Slot Parameters  | Array   | Define arguments to be passed from the host component into the dynamic slot content, enabling data-driven composition.     |

> For deeper slot mechanics, see *Component Sections*.

[video](/workbench/component-base13.mp4)

Demonstrates injecting an `Input` component with multiple `before/after` slots; toggling each slot in the consumer’s *Component Slots* panel renders exactly the intended additions or omissions.

---

### Image

Quickly renders a single image asset.

![](/workbench/component-base14.png)

#### Component Attributes

| Attribute          | Type   | Description                                                                 |
|--------------------|--------|-----------------------------------------------------------------------------|
| Component ID       | String | Assign `ref` for programmatic access.                                       |
| Image Source       | String | Bind static assets or dynamic URLs via expressions.                         |
| Custom Style Class | Array  | CSS classes.                                                                |
| Inline Styles      | Object | Styled via the visual editor.                                               |

#### Component Events

| Event   | Meaning                 | Params | Details |
|---------|-------------------------|--------|---------|
| click   | Click on the image      | —      | Event fires after mousedown + mouseup on the element or closest common ancestor. |
| load    | Image loaded successfully | —      | Executes when the image finishes loading. Ideal for hiding placeholders. |
| error   | Image load failed       | —      | Executes if fetching the image fails. Useful for fallback behaviors.       |

#### Quick Asset Selection

![](/workbench/component-base15.png)

Upload images to the **Resources** folder in the *Asset Manager*, then pick them via the bind-in resource panel for drop-in usage.

---

### HTML Renderer

Outputs dynamic HTML fragments (e.g., news, comments) into a positioned slot.

![](/workbench/component-base16.png)

#### Component Attributes

| Attribute         | Type    | Description                                                                                 |
|-------------------|---------|---------------------------------------------------------------------------------------------|
| Component ID      | String  | Assigns a `ref` for programmatic access.                                                    |
| Content           | String  | HTML fragment, generally supplied via expressions.                                          |
| Disable Sandbox   | Boolean | Defaults to sandboxed iframe isolation. Toggle off to allow styles/scripts—use cautiously. |

> Prefer expressions for dynamic HTML. Static markup is better modeled via plain **Element** nodes.  
> Keep sandbox *on* to avoid CSS/global leakage; disabling requires a canvas refresh.  
> Always sanitize inputs to mitigate XSS; the node is not directly selectable on canvas—use the outliner.

---

### SVG Component

SVG often contains deeply nested layers; building via plain nodes becomes unmanageable. This component accepts SVG source as a string.

![](/workbench/component-base17.png)

#### Component Attributes

| Attribute   | Type   | Description                                                   |
|-------------|--------|---------------------------------------------------------------|
| Component ID| String | Provide a `ref` for code-level interaction.                   |
| SVG Source  | String | The raw SVG markup rendered by the component.                |

---

### Page Container

Available only in *Page* files. Inserts a container whose content is driven by routing data—different routes render different child pages.

![](/workbench/component-base18.png)

This grants deep, multi-level layout capabilities. See [Pages](/workbench/page) for further reading.