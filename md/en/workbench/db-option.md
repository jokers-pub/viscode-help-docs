## Data Operations

This chapter focuses on how to perform various operations on the database, covering basic operations such as adding, deleting, modifying, and querying, as well as advanced operations like grouped queries and aggregate statistical queries. It mainly explains the usage method of the **Database Operation** node in business logic orchestration.

### Overview

In business orchestration, we can drag in the **Database Operation** node to access and operate on the database.
![](/workbench/db-option.png)

The specific operation steps are as follows:

1. **Select the Database Table to Operate**: First, it is necessary to clarify which database table to operate on.
2. **Determine the Operation Method**: After selecting the database table to operate on, then choose what specific operation to perform on this table.

### Adding Data

Currently, the platform provides two ways to add data: adding a single record and adding multiple records in batches.

#### Adding a Single Record

![](/workbench/db-option1.png)

When choosing to add a single record, the platform will automatically display the required fields of the current database in the data panel, facilitating us to quickly assign values. If it is necessary to write other data fields, you can click **Other Attributes** below to add other field attributes.
![](/workbench/db-option2.png)

#### Adding Multiple Records in Batches

Adding multiple records in batches requires creating multiple pieces of data by customizing an array of data items. Meanwhile, the platform will impose constraints on the array type.
![](/workbench/db-option3.png)

### Deleting Data

The platform provides two ways to delete data: deleting by index and deleting by condition.

#### Deleting by Index

Deleting by index is the fastest deletion method.
![](/workbench/db-option4.png)

The operation steps are as follows:

1. **Select the Data Index**: You can choose the unique value index in the data table or the combined index.
2. **Fill in the Index Value**: If the selected index is a combined index, multiple values may need to be filled in here.

#### Deleting Multiple Records by Condition

![](/workbench/db-option5.png)

The platform provides rich condition constraints and supports us to perform the following operations:

- **Configuring Multiple Constraints for a Single Field**: Different constraint conditions can be set for a single field.
- **Cross-Table Association Constraints**: Constraints can be set based on the association relationship between tables.
- **AND/OR Grouping Conditions**: Conditions can be grouped and combined using AND or OR logic to achieve more complex condition judgments.

### Updating Data

The platform provides two methods for updating data: updating a single record and updating multiple records according to conditions.

#### Updating a Single Record

Updating by index is the fastest way to modify data.
![](/workbench/db-option6.png)

1. **Select the Data Index**: You can choose the unique value index in the data table or the combined index.
2. **Fill in the Index Value**: If the selected index is a combined index, multiple values may need to be filled in here.
3. **Configure the Data to be Changed**: Select the fields to be changed and configure new values.

#### Updating Multiple Records According to Conditions

![](/workbench/db-option7.png)

The platform provides rich condition constraints and supports us to perform the following operations:

- **Configuring Multiple Constraints for a Single Field**: Different constraint conditions can be set for a single field.
- **Cross-Table Association Constraints**: Constraints can be set based on the association relationship between tables.
- **AND/OR Grouping Conditions**: Conditions can be grouped and combined using AND or OR logic to achieve more complex condition judgments.

### Data Query

Data query is a commonly used data operation. The platform provides the following options: **Querying a Single Record**, **Returning the First Record**, **Querying Multiple Records According to Conditions**, **Querying Multiple Records According to Conditions and Paging Data**, **Querying the Number of Records Meeting Requirements According to Conditions**.

#### Querying a Single Record

Querying a single record is an operation method for quickly querying data based on the index within the table. It can help developers query a single record through the index.

![](/workbench/db-option8.png)

1. **Select the Data Index**: You can choose the unique value index in the data table or the combined index.
2. **Fill in the Index Value**: If the selected index is a combined index, multiple values may need to be filled in here.
3. **Configure the Query Data**: We can decide which data to query by checking here.

> As can be seen from the above figure, our query supports **multi-table association query**. The system will **automatically analyze** the table association relationship and present it in a **hierarchical manner**. You can intuitively check the fields you want to output, and the operation is very convenient.

> What you can rest assured about is that the underlying ORM system will automatically analyze the attributes you have checked and automatically complete SQL optimization. For the associated tables that are not selected, there will be no performance consumption.

#### Returning the First Record

Both returning the first record and returning a single record can help developers return one record according to the screening conditions. However, there are obvious differences between them.

Returning a single record returns the unique record in the table according to the index. This method has high specificity and certainty. Returning the first record first screens out multiple records according to the screening conditions and then only queries the first record after sorting.

From the performance perspective, the performance of returning the first record is lower than that of querying a single record according to the index. This is because returning the first record needs to first screen out multiple records that meet the conditions and perform sorting, while querying according to the index can directly locate the target data and avoid additional screening and sorting operations.

![](/workbench/db-option9.png)

From the above operation example, it can be found that when performing query operations, we have more query screening conditions to choose from, and the system allows us to sort the data. This greatly enhances the flexibility and specificity of the query. More screening conditions allow us to more accurately locate the required data, and the sorting function can display the data in the order we expect. Whether it is arranged in ascending order to view the order from small to large or in descending order to obtain the result from large to small, it can be easily achieved. Such a design enables data query to better meet diverse business needs and improves the efficiency and quality of data acquisition.

#### Querying Multiple Records According to Conditions

In this operation, we can return multiple records that meet the requirements according to the **query conditions**.
![](/workbench/db-option10.png)

The platform provides rich configuration options to facilitate the setting of filtered data:

- **Reading Range**: You can configure the number of rows to skip and the number of rows to read, which allows us to flexibly obtain specific parts of the data. For example, only obtain a certain section of the data to avoid reading too much unnecessary data at one time and improve query efficiency.
- **Filtering Conditions**: Supports complex query methods. It can filter a single attribute or filter based on table associations. And it can group and combine conditions using AND or OR logic to achieve more complex condition judgments and accurately locate the data we need.
- **Output Fields**: Select output fields by checking. It also supports outputting in table association queries. This means that we can only select the fields we care about for output, avoid returning a large amount of useless data, reduce the amount of data transmission, and in queries involving multiple table associations, it is also convenient to select fields from different tables for output.
- **Sorting Configuration**: Allows configuring complex sorting rules and supports complex scenarios such as grouped sorting. For example, we can group by a certain field and then sort by other fields within each group, so that the returned data is presented in the order we expect.

> It should be noted that the result returned by this method is an array.

#### Querying Multiple Records According to Query Conditions and Paging

The platform provides a function for quick paging query. We can pass in the page number and quickly return the data of one page.

![](/workbench/db-option11.png)

Return values:

```js
// Total number of records
data.total;
// Current page number
data.page;
// Number of records per page
data.pageSize;
// Data list
data.list[0].email;
```

#### Querying the Number of Records According to Conditions

We can return the number of records that meet the requirements according to the query conditions.

![](/workbench/db-option12.png)

> The result returned by this method is a positive integer of the **number** type.

### Advanced Operations

The platform provides advanced data operations, including: **Grouped Queries**, **Updating or Adding**, **Aggregate Statistical Queries**.

#### Updating or Adding

As can be known from the name, this method realizes the combination of updating and adding. It will first query the target data according to the index. If it is found, it will perform an update operation. If it is not found, it will add new data. It is an advanced combination usage of data.
![](/workbench/db-option15.png)

#### Grouped Queries

Grouped queries are a practical function in database operations for grouping data according to specified fields and performing aggregate statistics. In the platform, this operation can be completed by using the "Database Operation" node. First, select the database table to operate on, specify the grouping fields to divide the data groups. It supports configuring multiple aggregate functions to perform statistics on each group. It can return the number of grouped queries (using the COUNT function), the maximum value (using the MAX function), the minimum value (using the MIN function), and the average value (using the AVG function). It can also configure filtering conditions to preprocess the data participating in the grouping and supports various filtering rules. Finally, check the fields to be output.

![](/workbench/db-option13.png)

In grouped queries, the following common aggregate statistical operations can be performed:

- **Counting**: Used to count the number of records hit in each group after grouped queries. Aggregate counting can be performed according to specific fields. The platform also provides the **all** field, which can be used to count based on all data to comprehensively count the data volume.
- **Maximum Value**: Find the maximum value of the specified field in each group to help understand the upper limit of each group of data on this field.
- **Minimum Value**: Determine the minimum value of the specified field in each group to master the lower limit level of each group of data on this field.
- **Summation**: It can only operate on numeric attribute fields. Add up all the values of this numeric field in each group to obtain the sum of each group, which is often used to summarize the data such as quantity and amount.
- **Average Value**: It is also only applicable to numeric attributes. Calculate the average value of the specified numeric field in each group to reflect the average level of each group of data on this field.

#### Aggregate Queries

Aggregate queries are a way of performing statistical analysis on data grouped according to specific rules in database operations. They can be implemented by using the "Database Operation" node on the platform. They support operations such as counting (including counting all data by the all field), finding the maximum value, the minimum value, summing and averaging numeric attributes, and can also configure filtering conditions to preprocess data and check the fields to be output.

![](/workbench/db-option14.png)

#### Emphasis on the Concepts of Grouping/Aggregation

- **Grouped Queries**: The core is to group data according to one or more specified fields, focusing on the classification method of data. It groups data with the same field values together, aiming to perform further operations on the data within each group. For example, in an employee information table, group by department and group all employee data belonging to the same department together.
- **Aggregate Queries**: It emphasizes more on performing statistics and calculations on data and obtaining a summary result by using aggregate functions (such as COUNT, SUM, AVG, MAX, MIN, etc.). It can perform calculations based on grouped data or on the entire data set, and it does not necessarily have to perform a grouping operation. For example, calculating the total salary of all employees is a simple aggregate query.

##### Operation Process

- **Grouped Queries**:
    - First, clarify the grouping fields, which are the basis for grouping.
    - Then, aggregate operations can be performed on each group, such as counting the number of records in each group and calculating the average value of each group.
    - For example, in a student grade table, group by class and then count the number of students in each class.
- **Aggregate Queries**:
    - Aggregate functions can be directly applied to the entire data set without involving the grouping step. For example, calculate the average grade of all students.
    - It can also be combined with grouped queries. First, group and then perform aggregate calculations on each group. For example, after grouping by class, calculate the average grade of students in each class.

##### Result Presentation

- **Grouped Queries**: The results are usually each group and the results of aggregate operations performed on each group, presenting multiple groups and their corresponding statistical information. For example, after grouping by department, information such as the number of employees and the average salary of each department will be obtained.
- **Aggregate Queries**: If no grouping is performed, the result is a single summary value, such as the total sales amount of all products. If combined with grouping, the result is similar to that of grouped queries, which is the aggregate value corresponding to each group.

##### Usage Scenario Examples in the Platform

- **Grouped Queries**: When you need to analyze the characteristics of different categories of data, such as analyzing the sales situation of different product categories, you can group by product category and then count the sales quantity and sales amount of each category.
- **Aggregate Queries**: When you only need an overall statistical result, such as calculating the total salary of all employees in the company, you can directly use aggregate queries. When you need to perform statistics on different groups separately, use it in combination with grouped queries. 