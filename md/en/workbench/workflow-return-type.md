## Method Return Type Inference

When developing method logic, the platform provides a flexible way to specify return types without requiring pre-definition during design. This approach allows us to derive return types based on declared variable types during logic orchestration, significantly simplifying method declaration.

### How to Enable

Method return type inference is not available in all method editing scenarios. For example, it cannot be used in component lifecycle methods, component event functions, request aspects, route aspects, or other scenarios where the platform enforces strict return type constraints. This feature is only effective in scenarios where custom return types are permitted.

![](/workbench/workflow-return-type.png)

> **Note**: The platform performs type inference based on variable declarations in logic orchestration. Therefore, the **"Infer Return Type from Variables"** button will only appear when logic nodes exist and variables have been declared.

### How to Operate

To perform method return type inference, click the **Infer Return Type from Variables** button at the bottom of the logic orchestration panel to open the operation panel.
![](/workbench/workflow-return-type1.png)

-   **Left Panel**: Displays the current method's actual return type.
-   **Right Panel**: Lists variables declared in the logic along with their types.

If the method's return type matches a variable's type, a **Replace Return** button will appear on the right. Clicking this button will set the variable's type as the method's return type.
![](/workbench/workflow-return-type2.png)

To import properties into an object, select the target object node in the **left panel**. When an object-type node is selected, the right panel will display an **Import as Field** button. Clicking this button imports the field into the object.
![](/workbench/workflow-return-type3.png)

The left panel for method return types also supports the following common operations:
![](/workbench/workflow-return-type4.png)

1. **Reset**: Restores the method return type to its last saved state, enabling easy rollback of operations.
2. **Clear**: Empties the current method's return type definition.
3. **Delete**: Allows deletion of a specific property.

**Tip**: To modify property names, titles, descriptions, or other details, it is recommended to adjust the return type comprehensively in the method editing panel after saving the logic. This operation panel primarily provides quick type import functionality.

### How It Takes Effect

After editing the method return type, click the **Save** button at the bottom of the panel to finalize the changes. Note that this operation only takes effect within the logic orchestration panel, where the method's return type is updated immediately and potential syntax issues are highlighted. Once logic orchestration is completed, the method return type will be modified and saved along with other method information when the orchestration is saved.