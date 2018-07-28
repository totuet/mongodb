var mongoose = require('mongoose');

//Declare which promise library mongoose is going to use
//global.Promise declares the standard javascript promise library
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Todoapp');

//mongoose is able to use models/schemas, which defines the attributes
//that are going to be used in the collection. To keep things more
// organised.
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        //createdAt doesn't have much value since the creation timestamp
        //is already implemented in the objectID, completed adds more value
        type: Number, //it is going to be a unix timestamp, so type is always number
        default: null //since completed defaults to false, completedAt will not exist either
    }
});

var newTodo = new Todo({
    text: 'Something to do'
});

// newTodo.save().then((doc) => {
//     console.log('Saved todo: ', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

newTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo', e);
});
