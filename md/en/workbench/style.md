## Style Management  

This chapter focuses on the implementation of style management within projects, covering both private style management within components and global style management across projects.  

### Component-Specific Styles  

When opening a component or page file without selecting any component, the default view on the right-hand property panel displays the attributes of the current file. Here, you can manage the private styles of the current file.  

![Screenshot of Component or Page File Attribute Panel](/workbench/style.png)  

Component-specific styles adhere to the `scoped` style isolation principle. The `scoped` isolation ensures that, during runtime, the CSS of the current file automatically appends a `[data-scoped-xxx]` marker. This feature restricts the CSS scope so that styles only affect elements (including Section content) within the current page, without interfering with styles on other pages or components.  

#### Style Penetration  

With `scoped` applied, parent component styles do not penetrate child components. However, the root node of a child component is affected by both the parent and child component’s scoped styles. This design allows parent components to adjust the layout-related styles of child component root elements.  

In certain scenarios, if you need to modify the styles of a child component with `scoped` from a parent node, you can use `:deep()` for style penetration to achieve the desired changes. For example:  

```html  
<style scoped>  
    .a :deep(.b) {  
        /*... */  
    }  
</style>  
```  

The above code will be compiled as:  

```css  
.a[data-scoped-981d2c8a].b {  
    /*... */  
}  
```  

In practice, style penetration is often used to control child component styles, and child components may also utilize it to modify the Section template styles of parent containers.  

### Global Project Styles  

Global project styles are only available in "frontend" projects under "Component Libraries" or "Applications" repositories. Method-based repositories do not support global style management.  

In the `Project Configuration` file, under the `Project Style Management` panel, click the `Configure Project Main Style File` button to manage global styles for the current project.  

![Screenshot of Project Style Management Panel](/workbench/style2.png)  

> Note: If a third-party component library extension is referenced, the main style file from the component library loads first, followed by the main style file from the current application project. This arrangement ensures that "Application" projects can override styles or style variables from third-party extensions.  

### Quick Styles and Style Variables  

When configuring component properties, you may need to pass style names or style variables to complete parameter settings. However, the sheer number of style names and variables can make them difficult to locate. To address this, the `Project Configuration` file includes **Style Name** and **Style Variable** management panels to maintain commonly used style names and variables. This enables quick retrieval when configuring style values.  

#### Definition  

In the `Project Configuration` file, use the **Style Name** and **Style Variable** management panels to maintain frequently used style names and variables.  

![Screenshot of Style Name and Style Variable Management Panel](/workbench/style3.png)  

#### Usage  

Take the Joker UI project as an example—this Repository has already maintained commonly used style names and variables.  

-   **Quickly Select Style Names**  
    ![Screenshot of Quick Style Name Selection](/workbench/style4.png)  

-   **Quickly Select Style Variables**  
    ![Screenshot of Quick Style Variable Selection](/workbench/style5.png)  

> Note: Style variables must be switched to `var variable` mode before they can be input.