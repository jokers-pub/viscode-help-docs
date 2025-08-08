## Font Icons  

This chapter focuses on how to maintain and efficiently utilize font icons within project files on the platform.  

### Overview  

The platform provides a convenient way to create and manage **font icon** files under the **`Resources`** folder. This designated location serves as the central hub for organizing font icons in a project.  
![Font Icon Folder Location](/workbench/font-icon.png)  

### Configuring Style Prefix  

Before utilizing font icons, a crucial preliminary step is configuring the **style prefix**. This is essential—failing to set a style prefix will prevent the platform from generating font files.  
![Configuring Style Prefix](/workbench/font-icon1.png)  

> Ensure the icon style prefix is entered accurately. It is critical to emphasize that any changes to the style prefix must be made with extreme caution. Modifications may cause previously referenced icons in components to disappear, potentially disrupting platform functionality.  

For example, if the style prefix is configured as `jk-icon`, the actual style output will strictly follow this naming convention, such as:  

```css
.jk-icon-setting {  
}  
.jk-icon-plus {  
}  
/**...*/  
```  

### Maintaining Icons  

Within the platform, you can easily add new icons by uploading SVG files.  
![Uploading SVG Files to Maintain Icons](/workbench/font-icon2.png)  

-   **Icon**: Upload an **SVG** file to create and display the icon.  
-   **Icon Name**: This serves as the **suffix** for the style name during actual usage. The final effective style name is a combination of the **style prefix** and this **suffix**.  
-   **Remarks**: Adding notes helps developers quickly understand the icon’s purpose.  

After creating an icon, hovering over it will trigger the operation panel, where you can edit or delete the icon.  
![Icon Operation Panel](/workbench/font-icon3.png)  

### Generating Font Files  

The platform automatically converts uploaded SVG files into `woff`-format font files when the current file is saved.  

> Note: Font icons are only generated if two conditions are met: a style prefix is configured, and at least one icon has been maintained before saving.  

### How to Use  

All font icons are globally referenced within the platform automatically, eliminating the need for manual configuration. When maintaining fields, you can leverage the **`assignment method`** to configure icon components flexibly.  
![Configuring Icon Components via Assignment Method](/workbench/font-icon4.png)  

Once configured, the field automatically renders as an **icon selector** control. This allows for quick browsing of all available icons—including those created within the project or provided by installed plugins.  
![Icon Selector Control](/workbench/font-icon5.png)  

### Code Generation  

During the final code generation phase, the platform automates the creation of `woff`-format font files and handles all necessary references. Developers can confidently use these generated font icons.  
![Font Icon Operations During Code Generation](/workbench/font-icon6.png)