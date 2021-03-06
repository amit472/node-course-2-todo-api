var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

var User = mongoose.model('User',{
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

var newUser = new User({
    email: '  xyz@gmail.com  ',
    completed: true,
    completedAt: 1234
});
newUser.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
    console.log('Unable to save user')
}); 

// var secondTodo = new Todo({
//     text: 'Eating food',
//     completed: false,
//     completedAt: 1234
// });
// secondTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// },(e)=>{
//     console.log('Unable to save todo')
// }); 