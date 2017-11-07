'use strict';
const express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    cors = require('cors');

const studentsApi  = require('./routes/students');

const app = express();

app.set('port', process.env.PORT || 1337);
// since we serve json, we use bodyParser.json()
app.use(bodyParser.json());
// cors middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
// cors HTTP headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, DELETE");
    next();
});
// JSON APIs
app.use('/api/students', studentsApi);

app.listen(app.get('port'), function () {
    console.log('✔Express server listening on http://localhost:%d/', app.get('port'));
});