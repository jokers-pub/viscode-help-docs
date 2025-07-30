## Code Generation

This chapter mainly explains how to generate code and export it to the local machine.

### Overview

The JOKER intelligent development platform uses an advanced **DSL language** to maintain the resource content in the current project, which endows the JOKER with the ability to generate code. With the help of JOKER's unique **expressions** and advanced **type declarations**, high-quality code generation can be achieved.

The platform provides the code generation and export capabilities in two scenarios:

- **Exporting the Release Version Code**: The platform supports code generation and export for the released project versions, which helps to realize the automatic **CICD function** through version release.
- **Exporting the Development Version Code**: The platform allows the project code in the development process to be generated and exported, which facilitates developers to understand the actual operation principle of the project in real time during the development process and also provides more flexible operation scenarios.

### Exporting the Release Version Code

First, make sure that the current project has completed the release of a version. For the version release process, you can refer to the content of [Portal - Create Version](/portal/rep-version) and [Workbench - Code Inspection and Release](/workbench/check-code-version) to complete the version release.

After completing the release of a version, you can view the released version on the **Project Release Version** page and click **Export Code** to implement the code generation work.

![](/workbench/generate.png)

### Exporting the Development Version Code

The platform allows the code of the development version to be generated and exported. You can click the `Generate Code` menu in the workbench to start the code generation work.

![](/workbench/generate1.png)

When generating the development code, the platform will complete the preparatory work according to the following process:

1. Check whether there are unsaved codes.
2. Scan the entire code. If there are code exceptions, the code generation operation will be interrupted.
3. Trigger the code generation logic.

> The generated and exported code will be provided for download in the form of a ZIP package. After downloading and unzipping, please read the `readme.md` file first, which contains information on how to start the project, an introduction to the project directory, and so on. 