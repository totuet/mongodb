//library imports
var express = require('express');
var bodyParser = require('body-parser');
/*
bodyParser is gonna let us send JSON to the server, the server can than
do something with it. It essentially parses the string body and turns it
into a javascript object
*/

// local imports
/*
var {mongoose}: By requiring in the file we run
the code in it as well, that sets up the database
connection for us.
*/
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

/*
when we create a new todo, we gonna send a JSON object
over to the server, its gonna have a text property and
the server is gonna get that text property,
create the new model and send the complete model with
the ID, completed and completedAt property back to the client
*/

/*
Mounts the specified middleware function or functions at
the specified path: the middleware function is executed when
the base of the requested path matches path.

Bind application-level middleware to an instance of
the app object by using app.use()

app.use([path,] callback [, callback...])

We use a middleware function with no mount path.
The function is executed every time the app receives a request.

The return value from this json method, that is the middleware
that we need to give to express
*/
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);

    //first get body data that got send by the client (using bodyparser)
    var todo = new Todo({
        text: req.body.text
    });


    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};
