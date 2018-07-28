var mongoose = require('mongoose');

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

module.exports = {Todo};
