var mongoose = require('mongoose');

var User = mongoose.model('Users',{
    email: {
        required: true,
        minlength: 3,
        trim: true,
        type: String
    }
});

module.exports = {User};
