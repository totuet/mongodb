const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b5c41489775d68006cf7af6';

//
// if (!ObjectID.isValid(id)) {
//     console.log('id not valid');
//};
/*
.find() returns an arrray
.findOne() returns the document itself
*/
// Todo.find({
//     _id: id
// }).then((todos) => {
// console.log('Todos:', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
// console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id:', todo)
// }).catch((e) => console.log(e));

//query works, but user not found
//user found, print
//error

User.findById(id).then((user) => {
    if(!user) {
        return console.log('user not found');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));
