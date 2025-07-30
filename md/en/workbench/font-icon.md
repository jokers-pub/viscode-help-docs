### Font Icons

This chapter focuses on introducing how to maintain font icons in projects within the Platform and how to efficiently use these font icons.

#### Overview

The Platform provides the convenience to create **font icon** files in the **`Resources`** folder. This specific folder location serves as the central hub for centrally maintaining font icons of the project.  
![Font Icon Folder Location](/workbench/font-icon.png)

#### Configure Style Prefix

Before using font icons, a crucial preparatory step is to configure the **style prefix**. This step is extremely important because without configuring the style prefix, the Platform will not generate font files for you.  
![Configure Style Prefix](/workbench/font-icon1.png)

> Ensure the icon style prefix is entered accurately. It is strongly emphasized that any modification to the icon style prefix must be done with caution. Once modified, components that previously referenced the icon are highly likely to lose the icon, severely affecting the normal use of the Platform.

For example, when the style prefix is configured as `jk-icon`, the styles will be named strictly according to this prefix during actual output, such as:

```css
.jk-icon-setting {
}
.jk-icon-plus {
}
/**...*/
```

#### Maintain Icons

Within the Platform, you can easily add new icon files to font icons by uploading SVG files.  
![Upload SVG Files to Maintain Icons](/workbench/font-icon2.png)

-   **Icon**: The specific operation is to upload an **SVG**-formatted file to create and display the icon.
-   **Icon Name**: This serves as the style **suffix** for the icon during actual use. It should be clear that the final effective style name is composed of the **style prefix** combined with this **suffix**.
-   **Remarks**: By adding remark information, you can provide special explanations for the icon, greatly helping developers quickly understand the specific meaning of the icon.

After creating the icon, simply hover the mouse over the icon you want to edit to trigger and open the icon operation panel. In this panel, you can modify or delete the icon.  
![Icon Operation Panel](/workbench/font-icon3.png)

#### Generate Font Files

The Platform has an intelligent function: when you save the current file, it automatically converts all uploaded SVG files into font files in `woff` format.

> It is particularly important to note that the Platform will only automatically generate font icons when saving the file if both conditions are met: the style prefix is configured, and at least one icon is maintained.

#### How to Use

All font icons in the Platform are automatically globally referenced, eliminating the need for manual additional configuration. During the maintenance of fields, you can flexibly choose to use the icon component for configuration through the `assignment method`.  
![Select Icon Component Configuration via Assignment Method](/workbench/font-icon4.png)

Once configured, when using the field, the system will automatically present an `icon selection` control. With this control, you can conveniently and quickly view all icon files available in the current project, including both font icons created by the project itself and those provided by installed plugins.  
![Icon Selection Control](/workbench/font-icon5.png)

#### Code Generation

During the final code generation stage, the Platform will once again leverage its automation advantage to automatically generate font icon files in `woff` format and complete the relevant associative referencing. You can confidently use these generated font icons.  
![Operations Related to Font Icons in Code Generation Stage](/workbench/font-icon6.png)
