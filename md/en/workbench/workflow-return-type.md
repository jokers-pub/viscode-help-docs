### Method Return Type Inference

When developing method logic, the Platform provides a flexible way to specify the method's return type without pre-designing it before development. This approach allows us to derive the return type based on declared variable types during logic orchestration, significantly simplifying method declaration.

#### How to Enable

Method return type inference does not take effect in all method editing scenarios. For example, in scenarios where the Platform has forcibly constrained return types, such as component lifecycles, component event functions, request interceptors, and route interceptors, return type inference is not allowed. This feature only works in scenarios that allow custom return types.

![](/workbench/workflow-return-type.png)

> **Note**: The Platform performs type inference based on variable types declared in logic orchestration. Therefore, the "Derive Return Type from Variables" button will only appear when there are logic nodes with declared variables.

#### How to Operate

When needing to infer the method return type, click the **Derive Return Type from Variables** button at the bottom of the logic orchestration panel to open the operation panel.  
![](/workbench/workflow-return-type1.png)

-   **Left Panel**: Displays the actual return type of the current method.
-   **Right Panel**: Lists declared variables in the logic and their types.

If the method's return type matches a variable's type, a **Replace Return Type** button will appear on the right. Clicking this button sets the variable's type as the method's return type.  
![](/workbench/workflow-return-type2.png)

To import properties into an object, select the target object node in the **left panel**. When an `object`-type node is selected, an **Import as Field** button will appear in the right panel. Clicking this button imports the field into the object.  
![](/workbench/workflow-return-type3.png)

The left panel for method return types also supports the following common operations:  
![](/workbench/workflow-return-type4.png)

1. **Reset**: Restores the method return type to the last saved state for easy rollback.
2. **Clear**: Removes the existing method return type.
3. **Delete**: Allows deleting a specific property.

**Tip**: For modifying property names, titles, remarks, or other details, it is recommended to edit the return type in the method editing panel after saving the logic. This operation panel primarily provides quick type import functionality.

#### How to Take Effect

After editing the method return type, click the Save button at the bottom of the panel to complete the return type configuration. Note that this operation takes effect immediately in the logic orchestration, updating the method's return type in the panel and quickly exposing syntax issues. When logic orchestration is completed, the method return type will be updated alongside the logic save, uniformly modifying and saving method information.
