# using MongodB with Node

`npm install` within this folder  
__Disclaimer__:  
This app uses mongodb ^2.2.33  
V3 and above might not work  

When the `app.js` file is executed, the database project101 is created in mongo  

__In the Mongo Shell__

```mongo
show dbs
```
Switch to the database  

```mongo
use project101
```

Show collections

```mongo
show collections
```
We have a collection called users

```mongo
db.users,find()
```
Returns the objects  