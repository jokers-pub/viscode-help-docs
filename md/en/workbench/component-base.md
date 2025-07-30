## Basic Components

This chapter mainly describes the basic layout components provided by the platform.

![](/workbench/component-base.png)

### Text

![](/workbench/component-base2.png)
The text node allows us to add a text display node on the page. It enables us to configure the text display value through static text or dynamic text. It has the following attributes:

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Component Identifier | String | Here we can define the `ref` value for it, which is used to obtain the text virtual node in the logic method and operate on it. |
| Text Content | String | The text display value. Here we can configure a static text value or use an expression to configure a dynamic value. |
| Custom Style Name | Array | The `class` name of the text node can be configured. |
| Custom Style | Object | The `style` property of the text node can be edited through the visual style editor. |

### Element

The element node is one of the most commonly used components in page layout. We can drag in the element component and change its `Tag` to make it display as different **DOM** nodes. By default, it is rendered using **DIV**.

The element component supports us to customize component attributes and element events, which enables us to display and interact with any DOM node through the element component. Whether it's a `div` container, an `i` tag, or an `input` input box, it can be implemented through the element tag.

![](/workbench/component-base3.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Component Identifier | String | Here we can define the `ref` value for it, which is used to obtain the text virtual node in the logic method and operate on it. |
| Tag | String | This attribute can be used to determine the tag type. By default, it is rendered using DIV. |
| Custom Style Name | Array | The `class` name of the text node can be configured. |
| Custom Style | Object | The `style` property of the text node can be edited through the visual style editor. |
| Custom Component Attribute | String | Component attributes can be added customarily, and the attribute values can be modified or deleted after adding. |

#### Block

| Name | Remarks | Description |
| --- | --- | --- |
| default | Container Content | By configuring the container content block, the display of nested levels can be achieved. |

#### Event

The element component allows developers to customize node events.

[video](/workbench/component-base4.mp4)

### Button

The platform provides a simple button component, through which we can achieve click interaction effects.

![](/workbench/component-base5.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Component Identifier | String | Here we can define the `ref` value for it, which is used to obtain the text virtual node in the logic method and operate on it. |
| Button Content | String | The text display value. Here we can configure a static text value or use an expression to configure a dynamic value. |
| Custom Style Name | Array | The `class` name of the text node can be configured. |
| Custom Style | Object | The `style` property of the text node can be edited through the visual style editor. |

#### Component Events

| Event Name | Event Meaning | Parameter | Description |
| --- | --- | --- | --- |
| click | Mouse Click Event | - | When the button on the pointing device (e.g., the primary button of the mouse) is pressed and released on a single element, the click event is triggered. If the button on one element is pressed and released on another element, the event will be triggered on the most specific ancestor element that contains both elements. The click event is triggered after the mousedown and mouseup events in sequence. |
| mouseenter | Mouse Enter Event | - | This event usually works with the mouseleave event and occurs when the mouse pointer moves into the element. |
| mouseleave | Mouse Leave Event | - | This event usually works with the mouseenter event and occurs when the mouse pointer moves out of the element. |

> The **BUTTON component** provided by the platform is relatively simple and is more suitable for quick integration in **DEMO** demonstrations or debugging processes. If you need to implement a button with complex functions, you can consider using the element node to encapsulate the button component by yourself or choose to install a third-party UI component library to meet the requirements.

### Conditional Judgment

The conditional judgment node is mainly used to control the display state of elements on the page.

![](/workbench/component-base4.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Condition | Boolean | When the value is **true**, the content included in the conditional judgment will be rendered; if it is **false**, it will not be rendered. Usually, expressions are used to implement complex interaction logic. |

In this example, we use the conditional judgment component to wrap a `button` button component. By changing the condition value, we can observe that the button will be displayed or hidden accordingly according to the change of the condition.

[video](/workbench/component-base6.mp4)

> It should be noted that since the conditional component belongs to the command component, once it contains content, it will no longer be presented as a selectable element. At this time, if you want to select the conditional judgment component, you can operate in the outline tree.

### Loop

The loop function can help us render repeated data display nodes in a loop on the page.

![](/workbench/component-base7.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Loop Object | Array/Object | This is the data source for our loop operation. It can be either an array or an object. |
| Loop Item Name | String | This string is used to define the variable name of the **item** generated during the loop. In the elements or components inside the loop component, this variable name can be used through expressions. |
| Loop Index | String | This string is used to define the variable name of the **index** generated during the loop. Inside the loop component, this variable name can be used through expressions. If the loop object is an array, the value of this variable is the array index; if the loop object is an object, the value of this variable represents the KEY of the object. |

#### How to Use Loop Variables

Once the loop item name or loop index variable is defined, these variables can be used in the form of expressions inside the loop component.

![](/workbench/component-base8.png)

From the above example, it can be clearly seen that in the icon component inside the loop, the **item** variable defined in the loop component is called by using an expression.

### Dynamic Component

The dynamic component has similarities with the element component. Both support setting custom attributes and custom events inside the component. However, the **dynamic component** has a unique purpose. It is usually used to dynamically render third-party underlying components according to the tag name and supports custom blocks.

![](/workbench/component-base9.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Component Identifier | String | Here you can define the `ref` value so that you can obtain the text virtual node in the logic method and operate on it. |
| Tag | String | The tag type can be determined through this attribute. |
| Custom Component Attribute | String | Component attributes can be added customarily, and the attribute values can be modified or deleted after adding. |

#### Block

The dynamic component allows developers to customize node blocks.

![](/workbench/component-base10.png)

#### Event

The dynamic component allows developers to customize node events.

![](/workbench/component-base11.png)

> This component is often used to quickly integrate the NPM third-party underlying library and realize the visual declaration and encapsulation of the components of the underlying library.

### Rendering Block

The rendering block component can only be referenced in **component** type files. With the help of this component, the area that supports dynamic rendering within the component can be determined. Dynamic rendering means that when the component is referenced, the caller has the right to determine the rendering content of this area.

![](/workbench/component-base12.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Default Display Block | Boolean | If the value is **true**, when the component is introduced into other components or pages, this block will be enabled by default, which is convenient for quickly editing this block. |
| Identifier | String | It is used to name the rendering block (English letters should be used). If a component has multiple dynamic rendering parts, they can be distinguished by configuring this identifier. The default value is `default`. |
| Block Description | String | This description helps developers quickly understand the function of the block when using the component. |
| Block Remarks/Name | String | A nickname can be given to the block, which is convenient for developers to quickly understand the meaning of the block and makes the display in the outline tree clearer. |
| Associated Components | Array | Here you can choose the components associated with the current component to help developers quickly insert sub-components that meet the requirements into this block. |
| Block Parameters | Array | The platform supports configuring block parameters, through which the data in the component can be passed to the dynamically rendered sub-components through the block to meet more complex and flexible development needs. |

> For detailed information about blocks, you can read [Component Blocks](/workbench/component-section).

#### How to Use

[video](/workbench/component-base13.mp4)

In this video, we can observe that multiple dynamic rendering blocks arranged in front and back are added to the `input` component. When the `input` component is introduced into another component, the blocks provided by the `input` component can be viewed in the **Component Attributes - Block** panel, and whether to open these blocks can be configured here. This operation method enables developers to flexibly control the display and hiding of different blocks within the component according to actual needs, thereby achieving more personalized and customized component applications.

### Image

The image component can help us quickly display a single image.

![](/workbench/component-base14.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Component Identifier | String | Here you can define the `ref` value so that you can obtain the virtual node related to the image in the logic method and operate on it. |
| Image Address | String | The platform provides a convenient resource selection function to select the image resources to be displayed, and the dynamic image address can also be configured through an expression. |
| Custom Style Name | Array | It can be used to configure the `class` name of the image node to apply specific styles. |
| Custom Style | Object | The `style` property of the image node can be edited through the visual style editor to achieve personalized style settings. |

#### Component Events

| Event Name | Event Meaning | Parameter | Description |
| --- | --- | --- | --- |
| click | Mouse Click Event | - | When the primary button of the mouse is pressed and released on the image element, this event is triggered. If the button is pressed on one element and released on another element, the event will be triggered on the nearest ancestor element that contains both elements. This event is triggered after the mousedown and mouseup events in sequence. |
| load | After Image Loading is Completed | - | This event is executed when the image is successfully loaded onto the page and can be used to perform operations related to the successful image loading, such as displaying a loading success prompt. |
| error | Triggered when Image Loading Fails | - | This event is executed when an error occurs during the image loading process and the image cannot be displayed normally. It can be used to prompt the user that the image loading has failed or take other remedial measures. |

#### How to Quickly Select Internal Resources

![](/workbench/component-base15.png)

We can upload the image resources required by the project in the `Resources` folder of the `Resource Manager`. Then, in the image property panel, we can conveniently select the locally uploaded resources by using the quick resource selection function. This operation process provides convenience for the management and use of image resources in the project, enabling us to efficiently apply the required images to the corresponding components.

#### HTML Rendering

The HTML rendering node is generally used to render dynamic HTML data to the specified position on the canvas. We usually use it to render some dynamic HTML fragments, such as news content, comment content, etc.

![](/workbench/component-base16.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Component Identifier | String | Here you can define the `ref` value so that you can obtain the virtual node related to the image in the logic method and operate on it. |
| Content | String | The content of the HTML fragment to be inserted. Generally, we use expressions to render dynamic HTML. |
| Close Sandbox Isolation | Boolean | By default, the platform will use HTML Sandbox to achieve style isolation. You can choose to turn it off here to modify the internal style. |

> Generally, we use expressions to render dynamic HTML. For static HTML data, we do not recommend using it for rendering. Instead, we recommend using the element node for development.
> It is not recommended to turn off sandbox isolation. Sandbox isolation can effectively isolate CSS and prevent the internal style from affecting the global style. After the change, the canvas needs to be refreshed to update the rendering.
> Attention should be paid to content security to prevent XSS injection risks. Please note that the dragged Html rendering component cannot be selected on the canvas. Please select it in the outline tree and operate on it.

### SVG Component

Since SVG usually uses extremely complex multi-level content to complete graphic drawing, if ordinary elements are used to implement SVG rendering, it may be difficult to maintain effectively due to too many levels. Therefore, the platform specifically launches the SVG component, which supports managing SVG content in the form of strings.

![](/workbench/component-base17.png)

#### Component Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| Component Identifier | String | Define the `ref` value here, and you can obtain the virtual node related to SVG in the logic method and operate on it. |
| Value | String | It is used to input SVG code to determine the graphic content presented by the SVG component. |

### Page Container

The page container component is only available in **page** type resources. With the help of this component, we can insert page containers on the page to achieve the rendering of dynamic areas on the page. It is similar to the "rendering block" in components. The difference is that the page container is driven by routing information for rendering, and different routing addresses will display different sub-pages.

Using this component, we can conduct in-depth page layout development. If you want to learn more about relevant content, you can refer to the [Page](/workbench/page) help document.

![](/workbench/component-base18.png) 
