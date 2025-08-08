## Data Manipulation

This chapter focuses on how to perform all kinds of database operations—covering basic Create, Read, Update, and Delete (CRUD) tasks, together with advanced grouping and aggregate-statistics queries. We concentrate on how to use the **Database Operation** node inside business-logic orchestrations.

### Overview

During business orchestrations you can drag a **Database Operation** node onto the canvas to perform database-level actions.  
![](/workbench/db-option.png)

The steps are:

1. **Select the target table**: decide which database table you will act upon.  
2. **Choose the action**: after the table is fixed, pick the exact operation you want to execute against it.

---

### Inserting Data

The platform offers two insertion modes: single-record insert and batch insert.

#### Single-Record Insert  
![](/workbench/db-option1.png)

When single-record mode is chosen, the platform auto-renders all mandatory columns for the selected table in the data panel so that you can assign values quickly. Additional optional columns can be added by clicking **Additional Attributes**.  
![](/workbench/db-option2.png)

#### Batch Insert

Batch insert expects an array of custom data items and the platform strictly validates the array’s type at design time.  
![](/workbench/db-option3.png)

---

### Deleting Data

Two deletion strategies are available: delete by index and delete by condition.

#### Delete by Index

Deletion by index is the fastest route.  
![](/workbench/db-option4.png)

Steps:

1. **Pick the index**: choose a single-column unique index or a composite index.  
2. **Fill index value(s)**: if the index is composite, supply all required values.

#### Delete Multiple Records by Condition  
![](/workbench/db-option5.png)

The platform provides rich condition primitives:

-   **Multiple constraints per column**  
-   **Cross-table join conditions**  
-   **AND/OR groupings** to build arbitrarily complex predicates

---

### Updating Data

Two update patterns exist: update a single record and update multiple records by condition.

#### Update Single Record

Index-based updates give top performance.  
![](/workbench/db-option6.png)

1. **Select an index** (unique or composite).  
2. **Supply index value(s)**.  
3. **Configure the fields to change** and assign new values.

#### Update Multiple Records by Condition  
![](/workbench/db-option7.png)

Identical condition set supported as in *Delete Multiple*:

-   Per-column multi-constraints  
-   Cross-table joins  
-   AND/OR grouped filters

---

### Querying Data

Querying is the most frequent action. Choices are:

-   **Query single record**  
-   **Return first row**  
-   **Query many by condition**  
-   **Paginated query many by condition**  
-   **Count rows by condition**

#### Query Single Record

A lightning-fast index-based lookup.  
![](/workbench/db-option8.png)

1. **Pick index** (unique or composite).  
2. **Fill index value(s)**.  
3. **Tick the columns to fetch**.

> Notice the built-in support for **multi-table joins**. The system **auto-detects join relationships** and presents them hierarchically. You can tick desired fields directly.

> The underlying ORM will generate an optimized SQL query; unselected related tables incur **zero overhead**.

#### Return First Row

Both *Query Single* and *Return First* return a single entity, but they differ:

-   **Query Single** uses an index and guarantees zero-or-one row.  
-   **Return First** applies a filter on any column(s), sorts the list, and takes the first item. Thus, performance is lower because predicates plus sorting occur.  
![](/workbench/db-option9.png)

You can define **rich filters** and **sort rules**, making this far more flexible for ad-hoc requirements.

---

### Filter Many Records by Condition

Returns all matching rows as an **Array**.  
![](/workbench/db-option10.png)

Configuration knobs:

-   **Range**: skip & limit offsets.  
-   **Filters**: per-column, cross-table, AND/OR nestings.  
-   **Output columns**: tick the exact fields you need including columns from joined tables.  
-   **Sorting**: multi-level with grouping rules.

---

### Paginated Query by Condition

Built-in paging helper: supply `page` and receive one page.  
![](/workbench/db-option11.png)

Returned envelope:

```js
// total number of matching rows
data.total;
// current page number
data.page;
// rows per page
data.pageSize;
// array of entities
data.list[0].email;
```

---

### Count Rows by Condition

Returns a **Number** (non-negative integer) of rows that satisfy the condition.  
![](/workbench/db-option12.png)

---

## Advanced Operations

The platform exposes three advanced utilities: **Grouping Query**, **Upsert (Update-or-Insert)**, and **Aggregate Statistics Query**.

### Upsert (Update or Insert)

Looks up a record by index; if it exists—update, otherwise insert a new one.  
![](/workbench/db-option15.png)

### Grouping Query

Grouping queries bucket data by one or more columns and run aggregate functions over each bucket inside the *Database Operation* node:

1. Pick the target table.  
2. Choose grouping columns.  
3. Select aggregate functions (`COUNT`, `MAX`, `MIN`, `AVG`).  
4. Optionally add **pre-filter** and tick columns to output.  
![](/workbench/db-option13.png)

Typical aggregates:

-   **Count**: records per group; `all`-based counter also available.  
-   **Max/Min**: largest/smallest value within each group.  
-   **Sum**: numeric columns only, returns total per group.  
-   **Avg**: numeric columns only, returns average per group.

### Aggregate Query

Performs statistical computation across rows (optionally after grouping) using available functions (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`). Supports pre-filters and field-selection for the output.  
![](/workbench/db-option14.png)

#### Grouping vs. Aggregate Concepts

-   **Grouping Query**: core is *classification*. Rows with identical grouping key are gathered into the same bucket, enabling per-group operations.  
-   **Aggregate Query**: core is *statistical summarization*; may run over the whole dataset or over previously created groups.

##### Execution Flow

-   **Grouping**  
    1. Define grouping key(s).  
    2. Run aggregate(s) on each bucket.  
    Example: *Students* grouped by *class* → count students per class.

-   **Aggregate**  
    1. Either compute across whole table, or  
    2. Perform step 2 after grouping above.  
    Example 1: overall average score.  
    Example 2: average score per class (post grouping).

##### Output Model

-   **Grouping + Aggregate**: generates one row per group carrying the requested aggregates.  
-   **Pure Aggregate** (no grouping): single scalar or one-row summary.

##### Typical Use-Cases on the Platform

-   **Grouping Query**: analyze how distinct product categories perform (group by *category*, aggregate *sales*).  
-   **Aggregate Query**: total salary for the entire company (no grouping) or mean salary per department (after grouping).