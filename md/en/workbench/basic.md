## Understanding the Workbench

In this chapter, we will take an in-depth look at the workbench, covering its definition, functional area division, and the specific functions of each area, to help you quickly get started and carry out development work efficiently.

### Overview

The workbench, as an online visual development tool, is a powerful assistant in our daily development process. Through the workbench, we can conveniently conduct code development within the repository. It integrates rich resources such as front-end components, pages, methods, APIs, as well as the server-side database, cache, controllers (APIs), and configuration files, realizing visual development operations.

Moreover, the platform has a powerful built-in Javascript/Typescript expression editor. With the help of this tool, developers can achieve more complex and advanced functional development through expression writing. Meanwhile, during the development process, the code inspection function provided by the platform runs in real time, promptly discovers potential problems, and gives targeted solutions, effectively improving the accuracy of development, reducing the time for error troubleshooting, and greatly enhancing the development efficiency.

![](/workbench/basic.png)

### Functional Areas

The workbench can be divided into three major areas according to functions:

![](/workbench/basic2.png)

- **Left Panel**: This is our menu panel, which contains the commonly used function menu panels. Different menus will be displayed according to different project types and the types of opened files.
- **Middle Panel**: This is our work area. When we open a file, the platform will display different visual work area panels according to the file type.
- **Bottom Panel**: This is the area for displaying the basic information of the project, showing information such as errors and exceptions in the project, file size, and version.

### Resource Manager

![](/workbench/basic3.png)

The resource manager is presented in the form of an intuitive project file directory tree and is a key area for managing project files. Here, you can conveniently perform operations such as creating files, modifying the basic information of files, deleting files, and copying/pasting files to efficiently manage various file resources in the project.

![](/workbench/basic4.png)

When the mouse hovers over a resource, a menu operation button will appear on the right side of the resource. Click the three-dot icon to open the file operation menu, which contains the following commonly used functions:

#### File Menu

- **Create Folder**: This option is only displayed for folder resources and can be used to create sub-folders within the current folder, which is convenient for business classification. Reasonable planning of the folder structure helps ensure the rationality of the file directory when generating code and improves the overall organization and maintainability of the project.
- **Create XX**: Different create file menus will be displayed according to different root directories or parent nodes, meeting diverse file creation needs and allowing you to quickly create the required files.
- **Commit Record**: Click this option to view the commit log of the file, which records in detail who has operated the file, the operation time, and the specific operation content, facilitating the tracing of the file's change history and understanding the project progress and team collaboration situation.
- **Edit**: It is used to edit the information of file nodes, such as modifying the file name, adjusting routing information and other basic file attributes, allowing you to flexibly adjust the identification and path settings of the file.
- **Delete**: It can be used to delete files or folders, but the root directory is protected and cannot be deleted, ensuring the stability of the core structure of the project and avoiding confusion in the project file system caused by misoperations.
- **Copy**: After clicking Copy, the file content will be temporarily stored in memory for pasting operations in the target folder or parent file, realizing the rapid copying of files and improving the efficiency of file management.
- **Paste**: The Paste menu will be displayed only when there are files that have been copied and is used to complete the pasting operation of files and complete the file copying and transfer process.
- **Move/Cut**: Through this operation, files can be cut and pasted at the target file position, thus realizing the movement of files and facilitating the adjustment of the position of files in the project directory.

> When a repository is created, the platform will automatically create a root directory folder that complies with the specifications according to the repository type. To ensure standardization and consistency, users cannot create new root directories on their own, but they can freely create sub-folders under the root directories created by the platform. The root directories created by the platform are divided according to functions and conform to general business specifications.

#### Root Directory Explanation

- **Components**: This folder is specifically used to store general or cross-page UI component resources. You can further subdivide the types through folders inside it for convenient management and searching. This folder only exists in front-end projects (not method sets) and is an important resource storage place for building front-end pages.
- **Methods**: It mainly stores general method sets. You can create different types of method function sets according to business types inside it, classify and manage related methods, and improve the reusability and maintainability of code.
- **Pages**: It is used to store page layout and functional page files and is the main area for creating actual display pages. Here, you can design and build pages that directly interact with users. This folder is only applicable to front-end projects (not method sets).
- **Resources**: It mainly stores files of types such as pictures and fonts in the project. The platform supports uploading resources such as pictures and provides a visual quick reference function, which is convenient for quickly calling these resources during the project development process and improving the development efficiency.
- **Cache**: This folder stores the cache strategies for server-side business data. You can create cache types and cache strategies for specific businesses here to optimize the performance of server-side data processing. This folder only exists in server-side projects (not method sets).
- **Controllers**: It mainly stores the controllers (APIs) provided by the server side to the outside world. You can create API methods here to implement the interaction interfaces between the server side and the outside world, facilitating data transmission and function calls. It is only applicable to server-side projects (not method sets).
- **Project Configuration (File)**: Here, you can maintain the basic information of the current project, such as which components, method sets, and style variables are open; configure security and access control functions such as route guards; maintain the NPM references of the current project to ensure the normal management of project dependencies; and also set global variables and global methods to achieve the global configuration and management of the project.
- **Environment Variables (File)**: You can create cache variables and environments. During runtime, you can choose an environment according to actual needs to determine the values of environment variables and achieve differentiated configurations for different running environments, meeting the needs of the project in different stages such as development, testing, and production.

#### Opening Files

In the operation interface, the way to open files is very convenient. When you **click on a file node**, the corresponding file can be quickly opened. The system adopts an intelligent management mechanism. If the opened file has not been changed in any way, when you open the next file, the previous unchanged file will be automatically closed to keep the operation interface simple and orderly.

However, if you don't want to modify the file content but hope that the file will always remain in the open file taskbar, just **double-click on the file node** to keep the file in the taskbar, which is convenient for viewing and switching at any time.

![](/workbench/basic5.png)

In addition, below the resource manager, there is an `“Opened Editors”` panel. Here, you can clearly view the list of already opened files, quickly locate and switch to the required files, further improving the operation efficiency.

### Component Data

In **front-end** projects, when you open files of the `Components` or `Pages` types, the **Component Data** menu will be displayed on the left menu panel. This menu is one of the most commonly used tools for front-end developers. Through it, you can view the internal data of the current component or page.

![Screenshot related to component data](/workbench/basic6.png)

Here, you can maintain the "state data" and "logic/events" of the component, and also view the "layout outline tree" to understand and manage the relevant data and structure of the component or page more comprehensively and deeply.

### Component Center

In **front-end** projects, when you open files of the `Components` or `Pages` types, the **Component Center** menu will be displayed on the left menu panel. For front-end developers, this is one of the most commonly used tools. With the help of this menu, you can view the list of available components in the current project, and you can quickly add and reference components through simple **drag-and-drop** operations.

![Screenshot related to component center](/workbench/basic7.png)

Here, the basic components are displayed by default, and these basic components cannot be deleted. If the basic components cannot meet the daily development needs, you can go to the `Component Market` to install plugins. After the installation is completed, the available components in other plugins will be displayed here.

![](/workbench/basic8.png)

### Request Management

In **front-end (application type)** projects, the `Request Management` menu option will appear in the left menu. This is a key area for centralized maintenance of request APIs in the current project.

![Screenshot related to request management](/workbench/basic9.png)

In the request management panel, click the `Request Management` button at the bottom to open the request management editor. In this editor, you can perform a series of key operations:

- **Interface Management**: You can conveniently **create** new interfaces, **edit** various parameters and configurations of existing interfaces, and **delete** interfaces when they are no longer needed, flexibly controlling the addition, deletion, and modification of interfaces.
- **Global Configuration Settings**: You can adjust the global configuration of interface requests, such as setting the **request timeout period** to ensure that requests will not wait for a long time when the network is poor; configuring **request aspect events** to achieve custom processing of the logic before and after requests; and performing **request data conversion** to make the format of received and sent data meet the project requirements, comprehensively optimizing various parameters and processes of interface requests.

### Data Model

In **server-side (application type)** projects, the `Data Model` menu option will be displayed on the left menu. This is the core area for maintaining the database tables in the current project.

![Screenshot related to data model](/workbench/basic13.png)

In the data model panel, just click the `Manage Database` button at the bottom to open the database management editor. In this powerful editor, you can conduct comprehensive maintenance of the database table structure. The platform provides highly flexible support for table structure design. Whether it is establishing the association relationships between data tables, setting primary key constraints, or creating joint indexes and other complex designs, all can be easily completed here, fully meeting various complex data management needs.

### Run and Debug

The `Run and Debug` panel is a key area for performing complete run and debug operations on the current project.

![Screenshot related to run and debug](/workbench/basic10.png)

> It is worth noting that in this panel, you can choose different environments to run and debug according to the project requirements to meet the testing and optimization requirements of the project in different scenarios.

### Export Code

The platform supports the code export operation in the development branch. Just click the "Export Code" menu to generate the code in the development branch.

![Screenshot related to export code](/workbench/basic11.png)

It should be noted that **before exporting the code**, the platform will automatically conduct a full-file scan and inspection of the code. Only when the scan result shows that there are no problems will the file code be allowed to be exported smoothly, ensuring the quality and integrity of the exported code.

### Component Method Market

The platform has a `Component Method Market`, which provides developers with a convenient plugin management platform. Here, developers can **install**, **update**, and **uninstall** plugins. These plugins are all developed by other developers and made public.

![Screenshot related to component method market](/workbench/basic12.png)

### Main Work Area

The middle area of the workbench is our **Main Work Area**, which undertakes the important task of displaying visual editors of different file types and is the core operation area for daily work.

![Screenshot related to main work area](/workbench/basic14.png)

The main work area is mainly divided into two parts from top to bottom:

- **Taskbar**: This shows the files that are in the opened/edited state.
- **Editor**: As the rendering area of the file editor, it is also the place where actual development and editing are carried out.

In the taskbar, different display effects correspond to different states of the file:

1. If the file name is in `italic`, it indicates that the current file has neither been edited nor modified. When the next file is opened, this file will be automatically closed. If you want to keep it in the taskbar, you can double-click the task or double-click the target file in the resource management panel.
2. When a `dot` is displayed after the file, it means that the current file has been changed but not saved yet.
3. When the mouse moves over a task item, a close button will be displayed behind it. If the file is closed without being saved, the system will pop up a prompt asking whether to save it.

### Bottom Status Bar

The **Bottom Status Bar** at the bottom of the workbench is mainly used to display various status information of the project, specifically including: project name, classification, type, problem panel, file size, login status, etc.

![Screenshot of the bottom status bar](/workbench/basic15.png)

> Among them, the `Problem Panel` is a commonly used function. Here, you can view the code problems of the current project. Moreover, when creating a project version, the code inspection also needs to be completed through the `Problem Panel` to trigger the subsequent release process and ensure that the project code quality meets the release standard. 