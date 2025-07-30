## Page Management

This chapter mainly elaborates on how to maintain the pages in the "Front-end - Application" project, how to achieve the layout of nested pages, and how to complete the configuration of page routing information.

### Overview

**Page** resources are indispensable file resources in the "Front-end - Application" project. They are not only the entry points during the final actual operation but also the key functional files that determine the display effects at different addresses.

We can manage and view all the page resources in our project in the `Pages` folder under the root directory.

![](/workbench/page.png)

### Create Pages

We can create page files in the `Pages` folder.

![](/workbench/page1.png)

Here, we need to fill in the following content:

1. Page Name: The file name of the page file (in English letters).
2. Remarks: Give an alias to the file to facilitate quick understanding of the meaning of the file.
3. Page Route: Here, we can configure the routing address of our page resources (which will be introduced in detail in the following chapters).

### How to Create Layout Files

The platform has the **Layout File** function. In the **Page File**, we can generate layout files by creating **Sub-pages**. The layout page is not the final **Routing Address** but a kind of **Public Layout File**. It can integrate the **Public Areas** into layout files and render the **Dynamically Rendered Areas** according to the addresses of different sub-pages.

We can add a `Page Container` component to the parent page to mark which part of the layout page is the dynamically displayed area, and create sub-pages under this resource file to meet the requirement of displaying different sub-pages for different routes.

![](/workbench/page2.png)

If you are a developer, you may better understand the meaning of layout files/nested routes according to the following code:

```js
export let router = new Router({
    routes: [
        {
            path: "/",
            //Layout file
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

> The creation of sub-pages will inherit the routing information of the parent page. We can see the preceding routing information when creating sub-pages.

![](/workbench/page3.png)

### Sub-components

Although the platform has a unified `Components` folder, for **private components** under specific **pages** or **modules**, it may not be appropriate to place them in the `Components` folder in the root directory. For this reason, the platform allows us to create **component type files** under the **page resources**. The development mode of this type of component file is the same as that of **public components**. The only difference is that it is only recommended to be used in the **current level** as well as **lower-level pages** or **components**. If this level usage requirement is not met, the platform will issue a warning. In this way, it can better meet our management needs for **private components** and **public components**.

![](/workbench/page4.png)

> To better distinguish between private components and public components when displaying, the icons of the components will be different.

### Routing Information Configuration

During the file creation stage, whether it is the **Layout Page File** or the final displayed **Routing Page File**, the **routing information** can be set during the creation or maintenance process of the file.

Just click the **Plus Sign** behind the **Routing Address** to add routing information. It should be noted that the **Routing Address** is separated by multiple nodes with `/`. In this way, we can create multi-level routes.

![Routing information addition interface](/workbench/page5.png)

When you click to add a routing node, a routing node editing window will pop up.

![Routing node editing window interface](/workbench/page6.png)

- **Routing Node**: Use English letters to define the routing node.
- **Dynamic Parameter**: Determine whether the current routing node is a dynamic parameter.

For example, if you want to configure a routing address like `/info/:id`, you need to set `id` as a dynamic parameter. When configuring dynamic parameters, the platform supports us to configure relevant information such as the parameter title, whether it is an optional parameter, and parameter MOCK.

![Dynamic parameter configuration interface](/workbench/page7.png)

- **Title**: Give an alias to the current dynamic parameter to facilitate developers to quickly understand the meaning of the parameter.
- **Whether it is an Optional Parameter**: If it is set as an optional parameter, then the parameter can be empty or does not need to be passed. For example, for the routing address `/info/:id`, when we visit the addresses `/info/123` and `/info`, both will match this page.
- **Parameter MOCK**: Here, you can maintain a Mock data so that there will be no error reporting due to the parameter having no value during the development process.

> In some scenarios, the **Routing Address** may not be filled in. When the routing address is not filled in, the system will sort out and generate the actual routing address of the leaf page node according to the routing relationship of the upper and lower levels.

> For the introduction to the function of global routing configuration, please read [Routing Management](/workbench/router). 