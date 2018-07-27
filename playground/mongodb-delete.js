const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server' );

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}, null, (err, result) =>{
    //     if (err) {
    //         console.log("Unable to delete to-dos", err);
    //     }
    //     console.log('Deleted objects: ', result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);

    // db.collection('Users').findOneAndDelete({name: 'Tom'}).then((result) => {
    //     console.log(result);
    // });
    //
    // db.collection('Users').deleteMany({name: 'Jeffrey'}).then((result) => {
    //     console.log("All Jeffreys deleted");
    // });

    db.collection('Users').deleteOne({_id: new ObjectID('5b5b41b5e93fca06c7c988c6')}).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    //});

    //db.close();
});
