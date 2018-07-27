//WERKT NIET


const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) throw error;

    var coll = [{text: 1}, {text: 2}, {text: 3}];

    for (var i = 0; i < 3; i++) {
        db.collection('Todos').insertMany(coll).then(() => {
            console.log(`succesfully added object ${i+1} to database`);
        });
    };

});
