## Data Model Design  

This chapter focuses on how to create and manage data models in server-side application projects.  

### Overview  

In **server-side application** projects, we can leverage data model design to plan database table structures. It enables us to quickly design database schemas in an intelligent, visual manner, covering **data**, **field definitions**, **composite indexes**, **table relationships**, and more.  

### Creating a Table  

On the left-hand panel in the workbench, navigate to the **Database** menu to view the current database table tree. This menu can be accessed from any file to quickly inspect the table structure. To manage and maintain the tables, click the **Manage Database** button at the bottom of the panel, which opens the database management file. Here, you can create or edit data models to manage tables in the database.  
![](/workbench/server-db.png)  

- **Model Name**: Defines the table name (camelCase recommended).  
- **Model Alias**: Assigns a readable name to the table for easier reference during development.  
- **Model Description**: Provides detailed documentation about the table, helping developers understand its purpose.  
- **Use Recommended Properties**: If enabled, the platform automatically generates common fields, including **primary key (id)**, **creation time (createAt)**, and **update time (updateAt)**.  

### Creating Table Fields  

After creating a data model (table), click **Create Attribute** in the model panel to open the field maintenance interface.  
![](/workbench/server-db1.png)  

In the field configuration panel, the following properties must be maintained:  

- **Name**: The field name (recommended to use concise, meaningful English).  
- **Alias**: A user-friendly label for the field, aiding quick comprehension.  
- **Description**: A detailed explanation of the field's purpose, data source, constraints, etc., to prevent misunderstandings.  
- **Data Type**: Specifies the data type of the field, influencing storage and operations:  
  1. **String**: Stores text (e.g., names, addresses). Subtypes:  
     - **UUID**: Unique identifiers.  
     - **TEXT**: Longer text (e.g., descriptions).  
     - **VARCHAR**: Short, fixed-length text (e.g., codes).  
  2. **Integer (Int)**: Whole numbers (e.g., age, quantity).  
  3. **Decimal**: Precise decimals (e.g., monetary values).  
  4. **Float**: Approximate floating-point numbers (e.g., scientific data).  
  5. **DateTime**: Dates/times (e.g., createAt, updateAt).  
  6. **Boolean**: True/false values (e.g., payment status).  
  7. **Enum**: Fixed value set (e.g., order status, user roles).  
  8. **Relationship Field**: Establishes table associations (e.g., linking orders to products).  
- **Primary Key**: Marks the field as the table's unique identifier (only one per table).  
- **Default Value**: Initial value if not explicitly set (e.g., default user role).  
- **Unique**: Ensures field uniqueness (automatically indexed for faster queries).  
- **Not Null**: Enforces mandatory field values (e.g., order amount cannot be empty).  
- **Array Type**: Allows storing multiple values (e.g., tags, contact methods).  
- **Field Type**: Further refines data storage (e.g., UUID vs. VARCHAR for strings).  

### Creating Table Relationships  

The platform provides an intelligent way to define table relationships. Below is an example with two tables:  

#### Product Table  

| Field | Data Type | Description            |  
|-------|-----------|------------------------|  
| id    | UUID      | Product ID (PK)        |  
| name  | String    | Product Name           |  

#### Order Table  

| Field      | Data Type | Description                    |  
|------------|-----------|--------------------------------|  
| id         | UUID      | Order ID (PK)                 |  
| productId  | String    | References Product.id          |  
| createAt   | DateTime  | Creation Time                  |  

#### Establishing the Relationship  

To link `Order.productId` with `Product.id`, follow these steps in the Order table:  
![](/workbench/server-db2.png)  

1. **Ignore Field Naming Temporarily**: The platform will auto-generate a name.  
2. **Select Data Type**: Choose **Relationship Field**.  
3. **Define Relationship**: Map `productId` to `Product.id`.  
4. **Finalize Field Name**: Edit the auto-generated name if needed.  

After creation:  
![](/workbench/server-db3.png)  

- **Order Table**: `productId` becomes a **foreign key**, and a `Product` field (with full product data) is added.  
- **Product Table**: An `Order[]` field is added (one-to-many relationship), enabling quick access to all related orders.  

### Creating Composite Indexes  

Composite indexes enforce uniqueness and improve query performance for multi-field combinations. For example, in a permission table where a user can have only one role per organization, a composite index on `userId + orgId` ensures uniqueness.  

To create one, click the **dropdown arrow** next to `Create Attribute` and select **Create Composite Index**.  
![](/workbench/server-db4.png)  

In the editor, select two or more fields to form the index.  
![](/workbench/server-db5.png)  

> This section covers data model design. For CRUD operations, refer to the [Data Operations](/workbench/db-option) chapter.  

### Database Connection URL  

Configure the database URL in the **Environment Settings** file (currently supports **PostgreSQL**).  
![](/workbench/server-db6.png)