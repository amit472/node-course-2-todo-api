// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,DB)=>{
    if (err){
      return  console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    // var Collection = DB.db('TodoApp').collection('Todos');
    // Collection.insertOne({
    //   text: 'Something to do',
    //   completed: false
    // },(err,result)=>{
    //   if(err){
    //     return console.log('unable to insert todo',err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2))
    // });
    // var collection = DB.db('Users').collection('User');
    // collection.insertOne({
    //   name: 'Amit',
    //   age: 26,
    //   location: 'Noida'
    // },(err,result)=>{
    //   if(err){
    //     return console.log('unable to insert user details',err);
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp, undefined, 2))
    // });
    DB.close();
});