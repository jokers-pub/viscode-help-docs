## Code Generation  

This chapter explains how to perform code generation and export it locally.  

### Overview  

The JOKER Intelligent Development Platform utilizes an advanced **DSL (Domain-Specific Language)** to manage resources within the current project, which empowers JOKER with robust code generation capabilities. Leveraging JOKER’s distinctive **expressions** and sophisticated **type declarations**, it enables high-quality code generation.  

The platform provides code generation and export capabilities for two scenarios:  

- **Production Release Code Export**: The platform supports generating and exporting code for published project versions, facilitating automated **CI/CD functionality** through version releases.  
- **Development Version Code Export**: The platform allows generating and exporting project code during development, helping developers understand the actual runtime logic in real time and offering a more flexible operational workflow.  

### Production Release Code Export  

First, ensure that the current project has completed a version release. For the version release process, refer to: [Portal - Creating a Version](/portal/rep-version) and [Workbench - Code Inspection and Release](/workbench/check-code-version).  

After releasing a version, you can view the published version on the **Project Releases** page and click **Export Code** to initiate the code generation process.  

![](/workbench/generate.png)  

### Development Version Code Export  

The platform permits generating and exporting code for development versions. You can perform code generation by clicking the `Generate Code` menu in the Workbench.  

![](/workbench/generate1.png)  

When generating development code, the platform follows the preparation steps below:  

1. Check for unsaved code.  
2. Perform a full code scan—if any code anomalies are detected, the generation process is aborted.  
3. Trigger the code generation logic.  

> The generated exported code is provided as a ZIP file. After downloading and extracting it, read the `readme.md` file first, which includes instructions on project initialization, directory structure, and other relevant details.