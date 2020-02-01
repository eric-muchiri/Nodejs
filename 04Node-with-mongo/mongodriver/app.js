const MongoClient = require('mongodb').MongoClient;
//connection url
const url = 'mongodb://localhost:27017/project101';
MongoClient.connect(url, function(err, db){
    if(err){
        return console.dir(err);
    }
    console.log("connected to Mongodb");
/*
    InsertDocument(db, function(){
        db.close();
    });
*/  
    /*
    InsertDocuments(db, function(){
        db.close();
    });
    */
    /*
    FindDocuments(db, function(){
        db.close();
    });
    */
   /*
    QueryDocuments(db, function(){
        db.close();
    });
    */
   UpdateDocument(db, function(){
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

//Insert multiple Documents
const InsertDocuments = function(db, callback){
    //Get collection
    const collection = db.collection('users')
    collection.insertMany([
        {
            name:'john doe',
            email:'jdoe@srt.me',
        },
        {
            name:'dan bitr',
            email:'dab@srt.me',
        },
        {
            name:'fin kinn',
            email:'finme@srt.me',
        }
    ],
    function(err, result){
        if(err){
            return console.dir(err);
        }
        console.log('Inserted '+ result.ops.length+' Documents');
        callback(result);
    });
}

const FindDocuments = function(db, callback){
    const collection = db.collection('users');
    collection.find({}).toArray(function(err, docs){
        if(err){
            return console.dir(err);
        }
        console.log('found the following records');
        console.log(docs);
        callback(docs);
    });
}
//Query Documents
const QueryDocuments = function(db, callback){
    const collection = db.collection('users');
    collection.find({'name' : 'Eric Muchiri'}).toArray(function(err, docs){
        if(err){
            return console.dir(err);
        }
        console.log('found the following records');
        console.log(docs);
        callback(docs);
    });
}
//Update Document
const UpdateDocument = function(db, callback){
    const collection = db.collection('users');

    collection.updateOne({name: 'john doe'}, {$set: {email: 'jdoe@sth.com'}}, 
        function(err, result){
            if(err){
                return console.dir(err);
            }
            console.log("Updated Document");
            callback(result);
    });
}

