const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server' );


    // .find() without argument/query returns all documents from the Todos collection
    // it doesn't return the documents itself, but a pointer to those documents,
    // .find() returns a mongodb cursor, this is the pointer
    // we can call several methods on this cursor (e.g. toArray() ) to get our docs
    // toArray() returns a promise
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b5b483e631ca29984c2be87')
    //     }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({'name': 'Jeffrey'}).toArray().then((docs) => {
        //console.log(`Todos for Jeffrey count: ${docs.length}`);
        console.log('docs',docs);
    }, err => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({name: 'Jeffrey'}).count().then((count) => {
        console.log('count: ' + count);
    })

    //db.close();
});
