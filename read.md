Indexing in Data base
----------------------
1. Perform search faster
2. Basically when we add indexing new lookup table is created for every entry and there is a pointer which pointig main table data
3. If we have lot of data we will do multi level indexing , create new lookup table combining set of fisrt index table 
expmle :  1 ,2,3,4,5,6 are index in multilevel (1,2,3) = > 1 index (3,4,5) => 2 index

to achive this we use b_tree algorithem

4. basically binary tree search left and right lesser valuse will be searcg on left and greater values will be search on right

5. But in case of B-tree it will search range left will be having lesser values (1,2,3) , middle having (6,7) and last having (8,9,10)


Redis
------------

1. Redis is server , it has its own port it will run 6379 dfeault port
2. We know data base also do internal cahching, but will be specific to DB level, they cache repeated queries, not shareable , we don't TTL
3. Then Radis come to an picture like it is for application level caching , it can cache user data , have expiry, it can store data by data types string , lists (stack,queue),set -> unique values
4. methods cliet.set(key,value) , client.get(key) and   client.expire(key, 5000)


