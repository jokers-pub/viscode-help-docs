## Component/Method Set Publishing

This chapter focuses on how to conduct version releases for component library/method set type repositories and how to select publicly available capabilities.

### Overview

Before reading this chapter, it is recommended to review the following two sections first:

-   [Version Publishing](/portal/rep-version)
-   [Code Review and Version Publishing](/workbench/check-code-version)

UI component and method set type repositories are referenceable extension plugins, and their version releases require some publicly declared operations. With this functionality, we can mark which components, method sets, styles, and style variables are available for external callers and which are only used as internal resources within the project.

Here, we will explain how each functional output is annotated according to its purpose.

### Public Components

In frontend component library projects, to make certain developed components available for external use and facilitate quick referencing by users, relevant selections need to be made in the `project configuration` file, and specialized configurations must be applied to the public components.

![](/workbench/package-release.png)

The platform will display all components, and we only need to select the components to be made public and check the box on the far left. After selection, three personalized configuration areas will appear on the right side of the selected component:

1. **Configure Component Description**: Here, you can provide detailed explanations about the component. When developers reference this component, a tooltip will appear on hover, helping them better understand its features.
2. **Only Show in Quick Add**: Developers can use this property to configure whether the component is for internal use. Internal-use components are publicly available but cannot be used independently; they can only exist as subsets of fixed components. For example, a dropdown component and dropdown option component, where the dropdown option component can be configured to "only show in quick add." After this configuration, the component will not appear in the component center but can only be added via the "associated component" quick-add feature within the dropdown component.
3. **Component Icon (ICON)**: The platform supports configuring the ICON for components, and the icon format supports SVG. We can copy SVG code from [iconfont](https://www.iconfont.cn/) and paste it into the component icon editing window to easily edit the component ICON.
   [video](/workbench/package-release2.mp4)
4. **Configure Component Cover**: You can configure a cover for the component. Once configured, the component will be displayed as a large image in the component center, making it easier for developers to select.
   ![](/workbench/package-release3.png)

The mapping relationship for a component's personalized data sources:

| Personalized Data | Source                                      |
| ------------------ | ------------------------------------------- |
| Component Name     | File Name                                   |
| Component Title    | File Title                                  |
| Component ICON     | ICON configured in the `project configuration` file |
| Component Description | Component description configured in the `project configuration` file |
| Component Cover    | Component cover configured in the `project configuration` file |
| Component Group    | Automatically derived from the directory structure of the project's actual files |

### Public Method Sets

For both frontend and backend-type projects, as well as method set-type repositories (including frontend component library projects), we can select the method sets to be made public in the `project configuration` file.

![](/workbench/package-release4.png)

Here, we can choose the method set files to be made public. After selection, we can configure personalized information on the right side:

1. Default Method Set ICON: The platform supports configuring the ICON for components, and the icon format supports SVG. We can copy SVG code from [iconfont](https://www.iconfont.cn/) and paste it into the icon editing window to easily edit the component ICON. For the copying tutorial, refer to the ICON copying video in the Public Components section.
2. Default Method Set Background Color: Allows us to configure the default logical background color for the method set. It is not recommended to set this to a light color.
3. Default Method Set Font Color: Allows us to configure the default logical font color for the method set. The default is white.

These personalized elements affect the display effect in logical orchestration.
![](/workbench/package-release5.png)

##### Selecting Public Methods

Earlier, we selected the method sets to be made public. This only indicates which method set files are publicly available but does not mean all methods within the set will be open to external use.

![](/workbench/package-release6.png)

We can modify the `isPublic` property of methods in the method set to determine whether the current method is publicly available or for internal use only.

After selecting public, we can configure differentiated personalized settings here, including the method set background color and font color.

If background and font colors are configured here, they will follow the method's personalized data; otherwise, they will follow the default personalized data in the `project configuration` file.

### Public Style Names

In component library projects, if default style code is provided and common style names are included for quick data configuration, it is necessary to create style name data in the `project configuration` file and select it for public release.

![](/workbench/package-release7.png)

Here, we can check the style names we want to make public. Once made public, these style names will provide quick style data externally.

> For style usage, refer to [Component Styles](/workbench/style).

### Public Style Variables

When a component library project includes default style code and provides common style variables for quick configuration, style variable values need to be created in the `project configuration` file and selected for public release.

![](/workbench/package-release8.png)

Here, we can check the style variables to be made public. Publicly available style variables will provide quick selection data externally.

> For style usage, refer to [Component Styles](/workbench/style).