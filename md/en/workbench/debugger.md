## Run and Debug

This chapter mainly explains how to quickly achieve **run and debug** for projects. **Run and debug** is only applicable to Repository projects of the `application` type.

> Currently, the debug feature is not yet available for server-side projects. It relies on our local JOKER development tool for **debugging** and is currently under development. You can export the code and run the project locally for **debugging**.

### Overview

In the current development process, we adopt a WYSIWYG (What You See Is What You Get) development model, allowing developers to see the actual runtime effects directly during development. However, if we want to **run** the project as a whole to preview the routing and page transitions, or to connect to the business server to verify the overall **runtime** effects of the service, we need to utilize our **run and debug** tool.

### Starting Run and Debug

You can click the `Run and Debug` menu in the Workbench panel to open the Run and Debug panel.  
![](/workbench/debugger.png)

Here, you can **select the environment configuration** file and click the **Run and Debug** button to **run** the project in the browser.

> You can use the browser's built-in debugging tools to perform code **debugging**.

### Terminating Run and Debug

The platform internally uses heartbeat packets to monitor the debug runtime status. You can directly close the debug window to terminate the **debugging** session or click the **Stop Debugging** button to close the debug window.

![](/workbench/debugger1.png)