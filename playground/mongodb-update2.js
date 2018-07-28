const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b5b8d5caa5f3b0979c0703a')
    }, {
        $set: {
            name: 'Tom'
        },

        $inc:{age: 1}
    }, {
        returnOriginal: false
    }).then((returns) => {
        console.log(returns );
    });
});
