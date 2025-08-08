## Code Inspection & Version Release

This chapter focuses on the platform’s code-inspection capabilities and how to perform a complete code check during the release process.

### Overview

In the **`Repository Status`** section at the bottom of the platform, click **`Problem Panel`** to open the Repository Problem Panel. Developers can quickly view all outstanding issues in the project and follow the descriptions and improvement suggestions to resolve them promptly.  
![](/workbench/check-code-version.png)

The platform uses a **real-time scanning mechanism** that analyzes **only the changed code** while you type—alerts appear immediately when anomalies are found. The overall health of the project is reflected through intuitive color coding:

-   **Yellow**: Warning-level exceptions—non-blocking issues such as empty methods, non-standard naming, etc. They do not stop execution but degrade readability and maintainability; attention and periodic refactoring are recommended.
-   **Red**: Critical blocking exceptions—actual syntax or type errors (e.g., undefined variables, missing components, incorrect type usage). These prevent compilation or runtime and must be fixed immediately.
-   **Blue**: No anomalies detected; the currently edited code is in a healthy state and development is progressing smoothly.

> **Important Note**: The platform performs inspection **only on the file(s) currently being edited**, **not** on the entire codebase in real time. This design balances immediate feedback with editing smoothness—avoiding the performance overhead of scanning large repositories on every keystroke.

### Reviewing Issues

Click **`Problem Panel`** to open the pane displaying all discovered issues for the active Repository.

![Problem Panel Screenshot](/workbench/check-code-version2.png)

Issues fall into two categories:

-   **Error**: Severe problems that may prevent the program from compiling or running correctly, or can cause logical failures.
-   **Warning**: Non-critical issues that hint at potential bugs or violations of best practices; they warrant attention but do not immediately break the program.

For certain anomalies, the platform offers an **`Auto-Fix`** feature. When a problem supports auto-repair, clicking the issue entry will trigger a prompt asking whether to apply the automatic fix. Alternatively, simply clicking any problem entry navigates the cursor directly to the offending line in the editor, making the failure location instantly discoverable.

### Full-Repository Scan

To check every file in the repository at once, use the **`Full File Check`** button in the top-right corner of the **`Problem Panel`**. This launches a comprehensive scan across the entire codebase, producing an exhaustive issue report.

![Full File Check Button Screenshot](/workbench/check-code-version3.png)

### Version Release

When you initiate the **`Create Release`** flow, the first mandatory step is to complete a code inspection (see [Create Release Help Doc](/portal/rep-version)). Entering the Workbench automatically triggers the platform’s code-analysis guide:

![Release Prompt Screenshot](/portal/rep-version4.png)

All detected issues **must** be resolved. Once the codebase is clean, click the green button to finalize the check—clearing the path for the actual version release.