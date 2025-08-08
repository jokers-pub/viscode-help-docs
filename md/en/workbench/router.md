## Routing Management  

This chapter focuses on routing-related knowledge, covering topics such as **Default Route Address** and **Routing Guards**.  

### Overview  

**Global Routing Management** enables us to control the default access address of front-end applications while providing the ability to configure different **Routing Guards** based on business requirements.  

Before diving into this chapter, we recommend reviewing the [Page Management](/workbench/page) section.  

You can maintain global routing configurations in the **Routing Management** panel within the `Project Configuration` file.  

![Routing Management Panel Screenshot](/workbench/router.png)  

### Default Address  

Here, you can configure the default route address for the current project.  

The platform automatically analyzes the routing context of all page resource files and lists the routing information for all leaf pages. You can select one of the addresses as the default page route. If left unconfigured, the default access path will be `/`. If your project does not include this route, runtime errors may occur.  

![Default Address Selection Interface Screenshot](/workbench/router1.png)  

> Clicking the file name allows quick access to the target page resource, helping you understand how the route renders.  

### Routing Guards  

Routing Guards assist in executing diverse business requirements before or after route navigation, such as adding a loading state during redirection or performing login status checks beforehand.  

#### beforeRouteCallbacks [Before Navigation]  

In `beforeRouteCallbacks`, you can register listener functions to intercept pre-navigation events. This enables custom operations—like validating user permissions or logging—before routing occurs. This flexibility in controlling the navigation process helps optimize application performance and user experience.  

![beforeRouteCallbacks Operations Screenshot](/workbench/router3.png)  

To redirect to another page before navigation, invoke the `next` function and pass the new target address to complete the redirection.  

> **Important Note**: The **next** function **must** be called. Pass a new address for redirection; otherwise, omit the parameter.  

#### afterRouteCallbacks [After Navigation]  

`afterRouteCallbacks` serves as a post-navigation hook, functioning similarly to `beforeRouteCallbacks`. However, it lacks flow-control mechanisms like `next` or `return`.  

### Example  

Here, we demonstrate checking a user’s login status. If logged in, access proceeds; otherwise, the user is redirected to the login page.  

![Example Operation Screenshot](/workbench/router4.png)