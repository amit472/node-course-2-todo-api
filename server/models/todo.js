var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed:{
        type: Boolean,
        default: true
    },
    completedAt:{
        type: Number,
        default: true
    }
});

var newTodo = new Todo({
    text: '  Something to do.  ',
    completed: true,
    completedAt: 1234
});
newTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
    console.log('Unable to save user')
}); 

module.exports = {Todo};