const MongoClient = require('mongodb').MongoClient;
//connection url
const url = 'mongodb://localhost:27017/project101';
MongoClient.connect(url, function(err, db){
    if(err){
        return console.dir(err);
    }
    console.log("connected to Mongodb");
});