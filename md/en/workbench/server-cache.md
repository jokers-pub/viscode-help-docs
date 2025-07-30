## Cache Design

This chapter mainly describes how to develop the cache function in server-side applications and introduces the specific configurations of the cache function.

### Overview

Cache files play a crucial role in server-side performance optimization. They can help us cache hot data. By caching hot data, frequent access to the database is effectively avoided, thus reducing the pressure on the database service, significantly improving server performance, accelerating data access speed, and greatly enhancing user access efficiency.

We can create our cache files in the **Cache** folder.

![Screenshot related to cache](/workbench/back-end6.png)

### Cache Configuration

When opening the cache configuration file, you will find that the platform has already provided us with a standard cache configuration scheme, which contains the following configuration elements:

- **Cache Expiration Time**: You can configure the expiration time of the cache here. If not configured, it means that the current cache will never expire.
- **Cache Type**: Different cache types can be configured according to business scenarios:
    1. **Single-item Storage**: It mainly provides simple and direct value operations, including getting, setting, and deleting values. With these basic operations, the caching needs of a single piece of data can be quickly handled, which is suitable for cache management scenarios where single data is frequently read and written.
    2. **Array Storage**: It provides a series of cache operations based on the characteristics of arrays. It can not only obtain the cache length to understand the number of data items in the current cache, but also perform cache insertion to dynamically add new data to the cache array. If you need to clear the cache array, you can use the cache clearing function. If you want to obtain data within a specific interval range, you can achieve it through the cache list (interval range) operation. Moreover, you can accurately obtain the data in the cache according to the index, meeting the diverse access requirements for array-type cached data.
    3. **Object Storage**: It provides flexible cache operations based on key-value pairs. You can obtain the cache according to the Key, and support batch retrieval of cache data corresponding to multiple Keys, greatly improving the data retrieval efficiency. When setting the cache, batch operations are also supported, facilitating the one-time update of multiple cache data. It can also check whether the cache of a specified Key exists, which is convenient for confirming the data status before operation. If you need to clear the cache, you can perform the delete cache operation. In addition, you can obtain all cache KEYs, which is convenient for comprehensive management and maintenance of cached data, and is suitable for complex business scenarios where cached data is organized and managed in the form of objects.
- **Data Type**: It allows us to design the data type of cache items. The data type of the cache helps us better use the values in the cache in business logic development.
- **Cache Item Loading Method**: The cache supports manually increasing, modifying, and deleting the cache by calling methods. Of course, the platform also provides an automatic cache loading mechanism. Its operation principle is that when querying the cache, if the cache does not exist, the cache loading method will be called to set the cache value through this method, thus avoiding the complexity of manual configuration.

### Cache Loading Method

The cache loading method can only be set when the cache type is **Single-item Storage** or **Object Storage**. With this method, we can perform database queries or conduct complex calculations to complete the loading of cache values.

![](/workbench/server-cache.png)

> This method can return data as the cache value through the `return` statement, and the type of the return value needs to match the design requirements of the cache data type.

If you don't want to use the cache loading method to configure the cache value, the cache also supports manual setting. In **Logic Orchestration**, you can use the **Cache Operation** node to perform cache operations.

![](/workbench/server-cache1.png)

> Different cache types will provide different interaction methods.

### How to Use Cache

We can use the **Cache Operation** node in **Logic Orchestration** to perform cache operations.

![](/workbench/server-cache2.png)

> The benefits of such operations are significant. When we obtain user information according to the id, the system will first access the cache. If the required data is hit in the cache, the cached data will be directly returned, which greatly saves data acquisition time. If the cache misses the data, the cache management mechanism will automatically call the cache loading method to query the corresponding value from the database. After querying the data, it will be set in the cache and then the required data will be returned to us. In this way, when the same access operation is performed next time, the data can be directly obtained from the cache without consuming the access performance of the database again, effectively improving the overall response speed and operation efficiency of the system.

### Cache Storage Method

The platform provides us with two cache storage methods:

1. **Memory Storage**: Store data in the memory of the business service. Its advantages are extremely obvious. Without the need for other hardware services, read and write operations are directly carried out in the business memory, achieving the highest efficiency. However, it also has significant limitations. On the one hand, it cannot store a large amount of data. On the other hand, when the business service needs to be deployed in a cluster, cache sharing cannot be achieved.
2. **Redis Cache**: The platform supports accessing Redis cache through simple configuration. This cache method has many advantages. It can store a large amount of cached data, and cache sharing can be achieved among multiple business services. Moreover, as the business volume continues to increase, the Redis cache can also be deployed in a cluster. However, the disadvantage is that the Redis service needs to be deployed and installed, and there is a certain technical threshold.

We can modify the cache storage method in the **Cache Configuration** file.

![](/workbench/server-cache3.png) 