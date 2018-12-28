const {ObjectID} = require('mongodb');

const {mongoose} = require('./../playground/server/db/mongoose');
const {Todo} = require('./../playground/server/models/todo');

var id = '5c260b2bd322cd2c617bd9de33';
   if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
}
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });
Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found')
    }
    console.log('Todo by id',todo);
}).catch((e)=>console.log(e)
);