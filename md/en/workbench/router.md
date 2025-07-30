## Routing Management

This chapter mainly elaborates on routing-related knowledge, covering aspects such as **Default Routing Address** and **Routing Guards**.

### Overview

**Routing Global Management** enables us to manage the default access address of the front-end application and, according to business requirements, has the ability to configure different **Routing Guards**.

Before reading the content of this chapter, it is recommended that you read the [Page Management](/workbench/page) chapter first.

We can maintain the global routing-related configurations in the `Routing Management` panel in the `Project Configuration` file.

![Screenshot of the Routing Management panel](/workbench/router.png)

### Default Address

Here, you can configure the default routing address of the current project.

The platform will automatically analyze the context routing information of all page resource files and list the routing information of all leaf pages. You can select a page address from them as the default page address. If no selection is made, the default access is `/`. If this address does not exist in your project, an error may occur during runtime.

![Screenshot of the default address selection interface](/workbench/router1.png)

> Clicking on the file name can quickly open the target page resource, facilitating your understanding of the display situation of this address.

### Routing Guards

Routing guards can help us achieve diverse business requirements before and after route jumps, such as adding a loading waiting effect during the jump or checking the login status before the jump.

#### beforeRouteCallbacks [Before Jump]

In `beforeRouteCallbacks`, we can add listener functions to monitor the aspect event before the route jump. In this way, we can perform some custom operations before the route jump, such as verifying user permissions, recording logs, etc. This way provides convenience for us to flexibly control the route jump process and helps optimize the performance and user experience of the application.

![Screenshot of operations related to beforeRouteCallbacks](/workbench/router3.png)

When it is necessary to redirect to another page before the jump, you need to call the `next` function of the parameter and pass in the new jump address to complete the route redirection.

> **Important Note**: The **next** function must be called. If you want to redirect, pass in the new address; if there is no need to redirect, do not pass in parameters.

#### afterRouteCallbacks [After Jump]

`afterRouteCallbacks`, as a hook after the jump, is basically used in the same way as `beforeRouteCallbacks`. However, it does not have a mechanism like `next` or `return` for controlling the flow.

### Example

Here, we take the example of judging whether the current user is logged in. If logged in, normal access is allowed; if not logged in, it will jump to the login page.

![Screenshot of the example operation](/workbench/router4.png) 