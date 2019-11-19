# Nodejs with mongodb

:sparkles:  Using Nodejs with mongodb  

## MongoDb

A nosql database  
__NoSQL__ :zap:  
Provides a mechanism for storage than traditional tabular relations used in relational databases  
Mongo is a __document database__ :zap:  
Document database - Data is stored in json-like documents  

### Documents and collections  

:pencil: Documents consist of a set of key-value pairs and forms the basic unit of data in mongo  
Similar to a row of data in a relational database  
Collections - Set of documents  
Similar to tables in an rdbms  
  
__Download Mongo__  
Download the installer fom [here](https://www.mongodb.com/download-center/community)  
Install mongo and in the bin directory run:  

```bash
 mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongodb.log --logappend --rest --install
```

Start as a service

```bash
net start mongoDB
```

Getting into the mongo shell

```bash
mongo
```

showing databases

```mongo
show dbs
```
