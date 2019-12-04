const MongoClient = require('mongodb').MongoClient;
//connection url
const url = 'mongodb://localhost:27017/project101';
MongoClient.connect(url, function(err, db){
    if(err){
        return console.dir(err);
    }
    console.log("connected to Mongodb");

    InsertDocument(db, function(){
        db.close();
    });
});
//insert single doc
const InsertDocument = function(db, callback){
    //get collection
    const collection = db.collection('users');
    //insert Docs
    collection.insert({
        name: 'Eric Muchiri',
        email: 'test@gmail.com'
    }, function(err, result){
        if(err){
            return console.dir(err);
        }
        console.log('Inserted Document');
        console.log(result);
        callback(result);
    });
}