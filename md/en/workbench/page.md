## Page Management  

This chapter focuses on how to maintain pages in "Frontend - Application" projects, achieve nested page layouts, and configure page routing information.  

### Overview  

**Pages** are indispensable file resources in "Frontend - Application" projects. They serve not only as the entry point for runtime execution but also as key functional files that determine the display effects for different URLs.  

You can manage and view all page resources of your project in the `Pages` folder under the root directory.  

![](/workbench/page.png)  

### Creating a Page  

You can create page files in the `Pages` folder.  

![](/workbench/page1.png)  

Here, the following information needs to be provided:  

1. **Page Name**: The file name of the page (in English letters).  
2. **Remarks**: An alias for the file to facilitate quick understanding of its purpose.  
3. **Page Route**: Configure the routing address for the page resource (details will be covered in later sections).  

### Creating a Layout File  

The platform provides a **Layout File** feature. Within **Page Files**, you can create **Child Pages** to generate layout files. A **Layout Page** is not a final **routing address** but rather a **shared layout file**. It consolidates **common areas** into a layout file while dynamically rendering **variable content areas** based on different child page URLs.  

You can add a **Page Container** component to the parent page to mark the dynamic display area in the layout file. Then, create child pages under this resource file to achieve the requirement of displaying different child pages for different routes.  

![](/workbench/page2.png)  

If you are a developer, the following code snippet may help you better understand layout files/nested routing:  

```js  
export let router = new Router({  
    routes: [  
        {  
            path: "/",  
            // Layout file  
            component: core,  
            children: [  
                {  
                    path: "",  
                    component: index  
                },  
                {  
                    path: "/about",  
                    component: about,  
                    theme: "white"  
                },  
                {  
                    path: "/docs",  
                    component: docs  
                }  
            ]  
        }  
    ]  
});  
```  

> Child pages inherit the routing information of their parent page. The prefix route information will be visible when creating a child page.  

![](/workbench/page3.png)  

### Child Components  

Although the platform has a unified `Components` folder, it may not be suitable for **private components** specific to a **page** or **module** to be placed in the root **Components** folder. To address this, the platform allows you to create **Component-Type Files** under **Page Resources**. These component files follow the same development pattern as **public components**, with the only difference being that they are recommended for use only within the **current level** and **sub-level pages or components**. If this usage hierarchy is violated, the platform will issue a warning. This helps better manage the needs for both **private components** and **public components**.  

![](/workbench/page4.png)  

> To better distinguish private components from public components, their icons are differentiated in the interface.  

### Configuring Routing Information  

During file creation, whether for **Layout Page Files** or final **Route Page Files**, you can configure their **routing information** either at creation or during maintenance.  

Simply click the **plus sign** next to the **Route Address** to add routing information. Note that the **Route Address** is divided into multiple segments using `/`, allowing the creation of multi-level routes.  

![Route Information Addition Interface](/workbench/page5.png)  

After clicking to add a route segment, a route segment editing window will appear.  

![Route Segment Editing Window Interface](/workbench/page6.png)  

- **Route Segment**: Define the route segment using English letters.  
- **Dynamic Parameter**: Indicate whether the current route segment is a dynamic parameter.  

For example, to configure a route address like `/info/:id`, you need to set `id` as a dynamic parameter. When configuring dynamic parameters, the platform supports setting the parameter title, optional status, MOCK data, and other related information.  

![Dynamic Parameter Configuration Interface](/workbench/page7.png)  

- **Title**: Assign an alias to the dynamic parameter to help developers quickly understand its meaning.  
- **Is Optional Parameter**: If set as optional, the parameter can be empty or omitted. For instance, with the route address `/info/:id`, both `/info/123` and `/info` will match the page.  
- **Parameter MOCK**: Maintain a Mock value here to prevent errors during development due to missing parameters.  

> In some scenarios, the **Route Address** can be left blank. If not specified, the system will generate the actual route address for the leaf page based on the hierarchical routing relationships.  

> For features related to global routing configuration, refer to [Route Management](/workbench/router).