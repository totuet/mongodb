const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server' );

    db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5b5b8352631ca29984c2c9c2')
            }, {
            $set: {
                text: 'Eat dinner'
                }
            },
        {
            returnOriginal: false
        })
        .then((results) => {
        console.log(results);
    });

    //db.close();
});
