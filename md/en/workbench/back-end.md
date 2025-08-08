## Understanding the Server Side

This chapter focuses on the capabilities of the **server-side project** and the convenient development features it delivers.

JOKER embraces a **front-end/back-end decoupled** architecture, granting developers the flexibility to choose their area of expertise. Depending on individual strengths and project requirements, they can fully concentrate on either the front-end or the server-side. This document narrows in on the server side, providing an in-depth explanation of its features to help readers master server-focused development within the JOKER platform.

### Overview

The server-side project is the **critical data-processing layer** indispensable to any modern web application—acting as the invisible “data steward” behind the scenes. Its mission is to manage and manipulate large volumes of data efficiently, ensuring rock-solid data services for the front end.

In the server-development space, JOKER’s **intelligent development platform** opens the door to flexible coding. By leveraging its **visual code builder**, developers can complete all server-side assets without writing boilerplate SQL or boilerplate Node.js code. Examples include:

- Designing database table structures as intuitively as snapping LEGO blocks together—defining relationships, composite keys, and composite indexes in minutes.  
- Declaring controllers (API endpoints) visually while enforcing request/response contracts, ensuring seamless front-end/back-end data exchange.  
- Configuring caching layers in drag-and-drop fashion to accelerate read/write operations and slash database contention.

![Server-side visual workbench](/workbench/back-end.png)

### Component Files

A complete server-side application comprises several file types working in concert:

- **Data Models** – Design entire database schemas visually. Supports complex business rules such as table relations, PK definition, composite and unique indexes, etc.  
- **Controllers** – The public contract layer. Exposes APIs and business logic, powered by `@joker.server/core`. Includes visual JWT setup, RBAC, input sanitisation, and security audits.  
- **Caching** – Caches hot data to cut database traffic, raise throughput and maintain responsiveness under high concurrency.  
- **Configuration Files** – Single source of truth for global settings, reusable styles, component/method visibility, route mapping, environment variables, and NPM references.  
- **Environment Variables** – Isolate dev/test/prod behaviour by injecting different values without modifying code.

---

### Data Models

Select **Database** in the left sidebar to open the **Data Model Designer**. Table schemas appear graphically for easy management.

![Schema Designer](/workbench/back-end2.png)

Relation mapping is astonishingly simple: the platform auto-detects types and completes foreign-key bindings automatically. A built-in schema linter flags design issues instantly and suggests fixes.

![Schema linter](/workbench/back-end3.png)

> **Info**: Under the hood, Prisma with **PostgreSQL** is the default stack, enabling **schema sync** and **auto-migration** for frictionless life-cycle management.

---

### Controllers

Controllers are the gateway layer. Through the visual editor you declare REST endpoints and map them to server-side logic—either inline in the controller or via reusable **method collections** for clean layering.

![Controller editor](/workbench/back-end4.png)

The IDE provides:

- One-click REST method selection (GET/POST/PUT/PATCH/DELETE).  
- One-click JWT authentication toggle.  
- Visual query builders for single-table, multi-table JOIN, GROUP BY, aggregation, and pagination pipelines.

![Visual query builder](/workbench/back-end5.png)

---

### Caching

Cache files enable high-speed retrieval of hot data, eliminating repetitive database hits and cutting average response latency.

![Cache editor](/workbench/back-end6.png)

JOKER currently supports **three cache topologies** (more coming soon):

- **Single Value** – Basic get/set/del operations for atomic data.  
- **Array/List** – Push, pop, len, range slice, index lookup, clear.  
- **Object/Hash** – Key-value store with batch get, batch set, exists, del, list keys—all suited for hierarchical cache objects.

---

### Configuration Files

Every **Repository** contains a **project config** file governing shared metadata.

![Project Config editor](/workbench/back-end7.png)

Depending on the project type, the file exposes:

#### NPM Package Management

Install underlying libraries here to tap into third-party capabilities—unlike the *Component & Method Marketplace*, which exposes pre-packaged visual assets.

![NPM tab](/workbench/back-end8.png)

#### Global Variables

Define truly global, runtime-safe constants that every part of the application can reach.

![Global Variables](/workbench/back-end9.png)

---

### Environment Variables

The platform ships with full-featured environment management.

![Env Variables](/workbench/back-end10.png)

Create multiple named environments—e.g., `dev`, `staging`, `prod`—and assign custom key/value pairs. Access them via `process.env.KEY` anywhere in code.

![Env Editor](/workbench/back-end11.png)