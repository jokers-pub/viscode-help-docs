## Getting to Know the Workbench

In this Section we’ll dive deep into the workbench—its definition, functional zones, and the specifics of each zone—to get you up to speed and productive immediately.

### Overview  
The workbench is a **browser-based visual development platform**. Inside any Repository you can perform code-first or visual development while seamlessly integrating:  
- front-end **Sections**, pages, methods, APIs, and  
- back-end databases, caches, controllers (APIs), and configuration files.  

A powerful in-platform **JavaScript/TypeScript expression editor** allows you to compose sophisticated logic. A real-time linter continuously inspects code as you type, surfaces potential issues, and provides actionable fixes—cutting troubleshooting time and boosting throughput.

![](/workbench/basic.png)

### Functional Areas  
Three principal zones divide the UI:  

![](/workbench/basic2.png)

- **Left Pane** – Menu Panel: context-sensitive, displays tools relevant to the current project/file type.  
- **Center Pane** – Workspace: the active visual editor region; its layout morphs to match the file type being edited.  
- **Bottom Pane** – Project Info: shows errors, exceptions, file sizes, versions, and other diagnostics.

---

### Resource Explorer

![](/workbench/basic3.png)

The Resource Explorer presents directory tree navigation for the entire project. From here you can create, rename, delete, copy/paste, and reorder files or folders.

Hover any asset to reveal a three-dot action icon that opens the file operations menu.

#### File Actions

- **Create Folder** – Appears only on folders; creates a subfolder to keep assets organized and ensure a clean code-generation structure.  
- **Create…** – Context-aware; presents the correct template based on the parent node so you can bootstrap new artifacts instantly.  
- **Commit Log** – Lists every change-set, author, timestamp, and description—ideal for change-tracing and team collaboration.  
- **Edit** – Rename files, modify routes, or adjust other meta attributes.  
- **Delete** – Removes files or folders (root directories are protected).  
- **Copy** – Copies file content to clipboard for a quick clone.  
- **Paste** – Appears only after a copy; completes the clone operation.  
- **Move / Cut** – Allows repositioning of whole files or subtrees.

> When a Repository is created the platform auto-generates **canonical root directories** according to project type. You cannot add additional root directories manually; you may, however, create unlimited subfolders.

#### Root Directory Guide

- **Sections** – Shared and reusable UI components; organized via internal folders (front-end projects only).  
- **Methods** – Utility libraries grouped by business concern (method sets only).  
- **Pages** – Actual rendered pages and layouts (front-end projects only).  
- **Assets** – Images, fonts, icons, etc.; supports drag-and-drop upload and instant asset reference.  
- **Cache** – Back-end caching policies; classes and strategies live here (back-end projects only).  
- **Controllers** – Service APIs exposed by the back-end (back-end projects only).  
- **Project Config (file)** – Global project settings: open components, globals, route guards, NPM packages, etc.  
- **Environment Variables (file)** – Dedicated environment definition files to switch values between dev, test, and prod.

#### Opening Files

- **Single-click** → Opens the file for editing; keeps the workspace lean—unchanged files auto-close.  
- **Double-click** → Pins the file so it stays on the tab strip even if unmodified.  
- **Open Editors Panel** – Located below the file tree; lists all currently pinned tabs for lightning-fast navigation.

#### Saving Files

Press **Ctrl + S** (Windows/Linux) or **Cmd + S** (macOS) to persist all changes instantly.

---

### Keyboard Shortcuts

Master these hotkeys for rapid interaction:

- **Ctrl/Cmd + S** – Save Resource  
- **Ctrl/Cmd + P** – Quick Resource Finder  
- **Ctrl/Cmd + C** – Copy element in front-end visual pane  
- **Ctrl/Cmd + V** – Paste element in front-end visual pane  
- **Ctrl/Cmd + Z** – Undo last visual operation  

---

### Component Data (front-end projects only)

Open any **Section** or **Page**, and the left menu presents **Component Data**. Use it to inspect and edit:  
- **State**  
- **Logic / Events**  
- **Layout tree outline**

![](/workbench/basic6.png)

---

### Component Center (front-end projects only)

While editing a **Section** or **Page**, the **Component Center** appears in the left panel. Here you can:

- See every available component in the project.  
- **Drag & drop** to embed new components instantly.  
- Install plug-ins from the **Component/Method Market**; installed plug-ins will populate the custom components list.

![](/workbench/basic7.png)  
![](/workbench/basic8.png)

---

### Request Management (front-end *app* projects)

Open the **Request Management** menu in the left panel. Launch the **Request Management Editor** to:

- **Create / Edit / Delete** API interfaces declaratively.  
- Configure **global request defaults**: timeout, request interceptors, response transformers, etc.

![](/workbench/basic9.png)

---

### Data Model (back-end *app* projects)

Access the **Data Model** menu to:

- Click **Manage Database** and open an intuitive schema designer.  
- Build tables, relationships, composite indexes, constraints, and default values interactively—no SQL required.

![](/workbench/basic13.png)

---

### Run & Debug Panel

The **Run & Debug** panel lets you:

- Launch the project under the selected environment.  
- Attach the debugger, reload modules, and observe logs in real time.

![](/workbench/basic10.png)

---

### Export Code

From any development branch, open **Export Code** in the menu. A full-repository scan runs; zero **issues** must be reported before the export succeeds, guaranteeing clean deliverables.

![](/workbench/basic11.png)

---

### Component/Method Market

Install, update, or uninstall plug-ins—each contributed by the community—directly from the **Component/Method Market**.

![](/workbench/basic12.png)

---

### Main Workspace

The **center area** is the **Main Workspace**, where the visual editors render:

![](/workbench/basic14.png)

- **Tab Bar** – Lists all open/editable files.  
- **Editor Surface** – Actual rendering region for configuration or code.

Tab states:  
1. *Italic* → Clean file, auto-closes when another file is focused.  
2. **Dot icon** → Unsaved changes.  
3. Hover → Close button appears; unsaved changes trigger a save prompt.

---

### Status Bar

The **Status Bar** at the bottom reports:

- Project name, category, and type  
- **Problems** panel (integrated linter)  
- File size  
- Auth status  

Use **Problems** to review code issues; it must be empty before any release can pass the gated pipeline.

![](/workbench/basic15.png)