var express = require('express');
var db = require('./db');
var morgan = require('morgan');
var parser = require('body-parser');
var router = require('./routes.js');
var loader = require('./loaderio-3f79f5cd8508886d4f245a6ef8cd04e8.txt');
var app = express();

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/qa', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
app.listen(app.get('port'));

//NO DB CALLS MADE HERE
app.get('/loaderio-3f79f5cd8508886d4f245a6ef8cd04e8', (req, res) =>
  res.status(200).send('loaderio-3f79f5cd8508886d4f245a6ef8cd04e8')
);
app.get('/', (req, res) => res.status(200).send(loader));
console.log('Listening on', app.get('port'));
