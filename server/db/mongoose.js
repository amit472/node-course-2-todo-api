var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {
    // mongoose: mongoose => if both are Same then covert into one like as below
    mongoose
}