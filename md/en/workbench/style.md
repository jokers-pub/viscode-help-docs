## Style Management

This chapter mainly introduces the implementation methods of style management within the project, covering the management of private styles inside components and the management of global styles of the project.

### Component Internal Styles

When opening a component or page file and no component is selected, the attribute panel on the right side by default shows the attribute panel of the current file. Here, the private styles of the current file can be managed.

![Screenshot of the component or page file attribute panel](/workbench/style.png)

The internal styles of components follow the `scoped` style scope isolation principle. The so-called style `scoped` scope isolation means that during actual operation, the CSS of the current file will automatically add the `[data-scoped-xxx]` mark. This feature makes the CSS content only affect the relevant elements (including block content) within the current page and will not interfere with the styles of other pages or components.

#### Style Penetration

After using `scoped`, the styles of the parent component will not penetrate into the sub-component. However, the root node of the sub-component will be affected by the scoped styles of both the parent component and the sub-component. This design facilitates the parent component to adjust the styles of the root element of the sub-component from the layout perspective.

In some specific scenarios, if it is necessary to change the styles of the sub-component with `scoped` in the parent node, `:deep()` can be used for style penetration to achieve the change of the sub-component styles. For example:

```html
<style scoped>
   .a :deep(.b) {
        /*... */
    }
</style>
```

The above code will be compiled into:

```css
.a[data-scoped-981d2c8a].b {
    /*... */
}
```

In practical applications, style penetration is often used to control the styles of sub-components, and sub-components can also use style penetration to change the block template styles of the parent container.

### Project Global Styles

The project global styles are only available in the "Component Library" or "Application" repositories in the "Front-end" project. The method set repository does not have the function of global style management.

In the `Project Style Management` panel of the `Project Configuration` file, click the `Configure Project Main Style File` button to manage the global styles within the current project.

![Screenshot of the Project Style Management panel](/workbench/style2.png)

> It should be noted that if a third-party component library extension package is referenced, the main style file in the component library will be loaded first, and then the main style file in the current application project will be loaded. This arrangement aims to enable the "Application" project to rewrite the styles or style variables in the third-party extension.

### Quick Styles and Style Variables

When configuring component attributes, sometimes it is necessary to pass in style names or style variables to complete the parameter setting of the component. However, numerous style names and style variables may lead to difficulties in searching. At this time, we can use the **Style Name** and **Style Variable** management panels in the `Project Configuration` file to maintain the commonly used style names and style variables. In this way, when it is necessary to pass and configure style values, they can be quickly retrieved.

#### How to Define

We can maintain the commonly used style names and style variables through the **Style Name** and **Style Variable** management panels in the `Project Configuration` file.

![Screenshot of the Style Name and Style Variable management panels](/workbench/style3.png)

#### How to Use

Taking the Joker UI project as an example, this repository has already maintained the commonly used style names and style variables.

- **Quickly Select Style Names**
![Screenshot of the operation of quickly selecting style names](/workbench/style4.png)

- **Quickly Select Style Variables**
![Screenshot of the operation of quickly selecting style variables](/workbench/style5.png)

> Note that style variables need to be switched to the `var variable` mode before style variables can be input. 