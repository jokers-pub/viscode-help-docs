## Component/Method Set Release

This chapter focuses on how to carry out the version release work for component library/method set type repositories and how to choose the public capabilities.

### Overview

Before reading the content of this chapter, it is recommended to read the following two chapters first:

- [Version Release](/portal/rep-version)
- [Code Inspection and Version Release](/workbench/check-code-version)

UI component and method set type repositories are extensible plugins that can be referenced, and their version releases require some operations for external public declarations. With this function, we can mark which components, method sets, styles, and style variables can be used by external callers and which are only used internally as internal resources.

Here, we will explain how the external output of each function is labeled according to its functions.

### Open Components

In a front-end component library project, if you want to provide some developed components externally to facilitate quick reference by users, you need to make relevant selections in the `Project Configuration` file and carry out personalized configurations for the open components.

![](/workbench/package-release.png)

The platform will display all components. We just need to select the components to be publicly disclosed from them and check the boxes on the far left. After checking, three personalized configuration operation areas will appear on the right side of the selected components:

1. **Configure Component Introduction**: Here, you can describe the component in detail. When developers reference the component, a tooltip will pop up when the mouse hovers over it, helping them understand the component's characteristics better.
2. **Component Icon ICON**: The platform supports configuring the ICON icon of the component, and the icon format supports SVG. We can copy the SVG code on [iconfont](https://www.iconfont.cn/) and then paste it into the component icon editing window to easily complete the editing of the component ICON.
   [video](/workbench/package-release2.mp4)
3. **Configure Component Cover**: You can configure a cover for the component. After configuration, the component will be displayed in a large format in the component center, making it more convenient for developers to select.
  ![](/workbench/package-release3.png)

The mapping relationship of the source of personalized data for a component:

| Personalized Data | Source |
| ---- | ---- |
| Component Name | File Name |
| Component Title | File Title |
| Component ICON | ICON configured in the `Project Configuration` file |
| Component Introduction | Component introduction configured in the `Project Configuration` file |
| Component Cover | Component cover configured in the `Project Configuration` file |
| Component Grouping | Automatically analyzed from the directory structure of the actual files in the project |

### Open Method Sets

Whether it is a front-end project or a server-side type project, in the method set type repositories (including front-end component library type projects), we can select the method sets to be publicly disclosed in the `Project Configuration` file.

![](/workbench/package-release4.png)

We can select the method set files to be disclosed here, and after checking, we can configure personalized information on the right side:

1. Default ICON of Method Set: The platform supports configuring the ICON icon of the component, and the icon format supports SVG. We can copy the SVG code on [iconfont](https://www.iconfont.cn/) and then paste it into the icon editing window to easily complete the editing of the component ICON. For the copy tutorial, you can refer to the ICON copy video tutorial in the Open Components section.
2. Default Background Color of Method Set: Allows us to configure the default logical background color for the method set. It is not recommended to configure it as a light color.
3. Default Font Color of Method Set: Allows us to configure the default logical font color for the method set. The default is white.

These personalized elements will affect the actual display effect in logical orchestration.
![](/workbench/package-release5.png)

##### Select Open Methods

Just now we selected the method set to be opened to the outside world. This only means that we publicly disclose which method set file, but it does not mean that all the methods in the method set will be opened to the outside world.

![](/workbench/package-release6.png)

We can modify the `Whether to be Public` property of the method in the method set to determine whether the current method is publicly disclosed or used internally.

When we choose to disclose it, we can configure different personalized configurations here, including the background color and font color of the method set.

If the background color and font color are configured here, the personalized data configured according to the method will be executed; otherwise, the default personalized data in the `Project Configuration` file will be executed.

### Open Style Names

In a component library project, if the default style code has been provided and commonly used style names are used for quickly configuring data, you need to create style name data in the `Project Configuration` file and choose to disclose it to the outside world.

![](/workbench/package-release7.png)

Here, we can check the style names we want to disclose. Once disclosed, these style names will provide quick style data for the outside world.

> For the usage method of styles, please refer to [Component Styles](/workbench/style).

### Open Style Variables

When the component library project already has the default style code and provides commonly used style variables for quickly configuring data, you need to create style variable values in the `Project Configuration` file and choose to disclose them to the outside world.

![](/workbench/package-release8.png)

Here, we can check the style variables to be disclosed. The disclosed style variables will provide data for quick selection to the outside world.

> For the usage method of styles, please refer to [Component Styles](/workbench/style). 