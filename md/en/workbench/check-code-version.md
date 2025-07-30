## Code Inspection and Version Release

This chapter focuses on introducing the platform's code inspection capabilities and how to conduct code inspections completely during the version release process.

### Overview

In the `Repository Status` area at the bottom of the platform, click on the `Problem Panel` to open the repository problem panel. In this panel, developers can quickly view the existing problems in the current project and solve the corresponding problems promptly according to the problem descriptions and optimization suggestions.

![](/workbench/check-code-version.png)

The platform uses a real-time scanning mechanism. During the development process, it will check the changed code in real time, aiming to inform developers of the abnormal situations found as soon as possible. Meanwhile, it uses color changes to visually present the health level of the current project:

- **Yellow**: It indicates that there are warning exceptions. Such exceptions are non-blocking, for example, situations like empty methods, irregular naming, etc. Although they won't hinder the project's operation, they may affect the readability and maintainability of the code, and developers need to pay attention to and optimize them in a timely manner.
- **Red**: It means that there are serious blocking exceptions, usually code errors or type errors, such as variables that don't exist, components that don't exist, or variable types that don't meet the requirements. These exceptions will cause the project to fail to operate normally and must be fixed in time.
- **Blue**: It represents that no exceptions are detected in the code under development, indicating that the current code is in a relatively healthy state and the development process is progressing smoothly.

> **Special Note**: The platform only conducts code inspections on the file resources that are being edited, rather than checking all the code in real time. This is done to ensure the smoothness of the development process while ensuring that code problems can be found in a timely manner, avoiding development lags caused by a large number of code inspections.

### Viewing Problems

Click on the `Problem Panel` to open the corresponding interface, which displays the problems found in the current repository.

![Screenshot of the Problem Panel](/workbench/check-code-version2.png)

The problems here can be divided into two categories:

- **Errors**: Such problems are relatively serious and may cause the program to fail to operate normally or have logical errors.
- **Warnings**: Although they won't directly cause the program to crash, they may imply potential risks or irregularities in the code and need attention.

For some abnormal situations, the platform will provide an `Auto-fix Function` according to the actual scenarios. If there are problems that can be automatically fixed, when you click on the problem entry, the system will pop up a reminder asking whether to perform automatic repair. In addition, by directly clicking on the problem entry, the platform will automatically locate the source position of the problem in the code, which is convenient for developers to quickly find and solve the problem.

### Full Problem Scanning

If you need to conduct a full scan of all the files in the current repository, you can click the `Full File Inspection` button in the upper right corner of the `Problem Panel` to trigger the full file problem inspection function. This function will conduct a comprehensive and detailed code inspection of all the files in the repository, helping developers to understand the existing problems in the project more comprehensively.

![Screenshot of the Full File Inspection Button](/workbench/check-code-version3.png)

### Version Release

When the `Create Release Version` process is triggered, the first step is to complete the code inspection work (you can refer to the [Create Version Help Document](/portal/rep-version)). When entering the workbench, the platform will automatically guide us to conduct code inspections.

![Screenshot of the Version Release Guidance](/portal/rep-version4.png)

We must fix all the discovered problems and then click the green button to complete the code inspection work and prepare for the subsequent version release. 