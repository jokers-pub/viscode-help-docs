## Cache Design

This chapter focuses on how to implement cache functionality development in server-side applications and introduces specific configurations for cache features.

### Overview

Cache files play a critical role in server-side performance optimization, enabling the caching of hot data. By caching frequently accessed data, it effectively reduces frequent database queries, alleviating database server pressure and significantly improving server performance. This also accelerates data access speeds, greatly enhancing user access efficiency.

You can create cache files in the **Cache** folder.

![Cache-related Screenshot](/workbench/back-end6.png)

### Cache Configuration

When opening the cache configuration file, you will find that the platform has already provided a standardized cache configuration solution, which includes the following elements:

- **Cache Expiration Time**: Configure the expiration time for the cache here. If left unconfigured, the cache will never expire.
- **Cache Type**: Configure different cache types based on business scenarios:
  1. **Single-Item Storage**: Provides simple and direct value operations, including value retrieval, setting, and deletion. These basic operations allow for quick handling of single-data caching needs, suitable for scenarios requiring frequent read/write operations on individual data.
  2. **Array Storage**: Offers a series of cache operations based on array characteristics. These include getting the cache length (to understand the number of data items), inserting data (adding new data dynamically), clearing the cache array, retrieving data within a specific range (via the "cache list (range)" operation), and accessing data precisely by index, catering to diverse access needs for array-type cached data.
  3. **Object Storage**: Provides flexible cache operations based on key-value pairs. These include retrieving cache by key (supporting batch retrieval for multiple keys to improve efficiency), setting cache (also supporting batch operations), checking if a specified key exists in the cache, deleting cache, and retrieving all cache keys for comprehensive management. This is ideal for complex business scenarios requiring object-form cache organization and management.
- **Data Type**: Allows you to define the data type of cache items, which helps in better utilization of cached values during business logic development.
- **Cache Loading Method**: Cache supports manual methods to add, modify, or delete cache entries. Additionally, the platform provides an automatic cache loading mechanism. Its principle is: when querying the cache, if the data is absent, the cache loading method is invoked to set the cache value, eliminating the need for manual configuration.

### Cache Loading Method

The cache loading method can only be configured when the cache type is **Single-Item Storage** or **Object Storage**. Using this method, you can implement database queries or perform complex calculations to complete cache value loading.
![](/workbench/server-cache.png)

> This method can return data as the cache value via the `return` statement, and the returned value type must match the cache data type requirements.

If you prefer not to use the cache loading method, manual configuration is also supported. In **Logic Orchestration**, you can use the **Cache Operations** node to perform cache operations and set cache values.
![](/workbench/server-cache1.png)

> Different cache types provide different interaction methods.

### How to Use Cache

You can use the **Cache Operations** node in **Logic Orchestration** to perform cache operations.

![](/workbench/server-cache2.png)

> The benefits of this approach are significant. When fetching user information by ID, the system first checks the cache. If the data is present in the cache, it is returned directly, significantly reducing data retrieval time. If the data is not found in the cache, the cache management mechanism automatically invokes the cache loading method to query the corresponding value from the database. Once retrieved, the data is stored in the cache and then returned. This ensures that subsequent identical requests can be served directly from the cache, avoiding repeated database queries and improving overall system responsiveness and efficiency.

### Cache Storage Methods

The platform provides two cache storage methods:

1. **In-Memory Storage**: Stores data in the business service's memory. Its advantages are evident—it requires no additional hardware services, and read/write operations are performed directly in memory for maximum efficiency. However, it has notable limitations: it cannot store large amounts of data, and when business services require cluster deployment, cache sharing is not possible.
2. **Redis Cache**: The platform supports easy configuration for Redis cache integration. This method offers numerous benefits, including the ability to store large amounts of cached data, enabling cache sharing across multiple business services. Moreover, as business demands grow, Redis cache can be deployed in a clustered setup. The downside is that Redis requires separate deployment and installation, posing a technical barrier.

You can modify the cache storage method in the **Cache Configuration** file.

![](/workbench/server-cache3.png)