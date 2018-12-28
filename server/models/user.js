var mongoose = require('mongoose');
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
    }); 
module.exports = {User}