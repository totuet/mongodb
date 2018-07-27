//const MongoClient = require('mongodb').MongoClient;

//const {MongoClient} = require('mongodb'); // this code is identical to code above.

////we can also pull other properties in the same call

const {MongoClient, ObjectID} = require('mongodb')

//now we can use this object to randomnly generate object-id's, which can be handy
//even out of a mongodb project.
var obj = new ObjectID();
var obj2 = new ObjectID();
console.log(obj + \n + obj2);

/*
This is called ES6 destructuring. We make a new variable from an object's property.
By putting the desired property into curly braces

var user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server' );

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    //     }
    // );

    // db.collection('Users').insertOne({
    //     name: 'Jeffrey',
    //     age: 25,
    //     location: 'Brussels'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });
    db.close();
});
