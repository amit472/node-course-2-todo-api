const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,DB)=>{
    if (err){
      return  console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const {MongoClient,ObjectID} = require('mongodb');

    // deleteMany
    // var Collection = DB.db('TodoApp').collection('Todos');
    // Collection.deleteMany({text : 'Eat lunch'}).then((result) =>{
    //     console.log(result)
    // });
    // deleteOne
    // var Collection = DB.db('TodoApp').collection('Todos');
    // Collection.deleteOne({text : 'Eat lunch'}).then((result) =>{
    //     console.log(result)
    // });
    // findOneAndDelete
    // var Collection = DB.db('TodoApp').collection('Todos');
    // Collection.findOneAndDelete({completed : false}).then((result) =>{
    //     console.log(result)
    // });

    // var Collection = DB.db('Users').collection('User');
    // Collection.deleteMany({name :'Amit'});
    // var Collection = DB.db('Users').collection('User');
    // Collection.findOneAndDelete({_id: ObjectID('5c2483934b42fb21b184ea78')}).then((results)=>{
    //     console.log(JSON.stringify(results,undefined,2));
    // });
});

