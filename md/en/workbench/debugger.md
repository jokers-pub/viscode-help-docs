## Running and Debugging

This chapter mainly describes how to quickly implement the **running and debugging** of projects. The **running and debugging** is only applicable to the repository projects of the `application` type.

> Currently, the debugging function for server-side projects has not been opened yet. It relies on our local JOKER development tools for **debugging**, and it is currently under development. You can export the code and run the project locally for **debugging**.

### Overview

In the current development process, we adopt a WYSIWYG (What You See Is What You Get) development mode, and we can directly see the actual running effect of the project during development. However, if we want to run the project as a whole, preview the routing page jump situation of the entire project, or connect to the business server to verify the overall **running** effect of the service, we need to use our **running and debugging** tools at this time.

### Starting Running and Debugging

We can click on the `Run and Debug` menu in the workbench panel to open the running and debugging panel.
![](/workbench/debugger.png)

Here, we can **select the environment configuration** file and click the **Run and Debug** button to conduct the overall **running** in the browser.

> You can use the built-in debugging tools of the browser to carry out the **debugging** work of the code.

### Stopping Running and Debugging

The platform internally uses heartbeat packets to detect the debugging running status. You can directly close the debugging window to interrupt the **debugging**, or click the **Stop Debugging** button to close the debugging window.
![](/workbench/debugger1.png) 