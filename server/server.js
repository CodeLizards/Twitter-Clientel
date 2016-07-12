var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var controller = require('./controllers/domainController.js');
var http = require('http');

var db = require('./db/init.js');
var bodyParser = require('body-parser');

// SERVE UP CLIENT FILES
app.use(express.static(__dirname+'/../client/'));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ENDPOINTS
app.get('/allValidWebsites', function (req, res) {
  controller.domain.get(req, res);
});

app.post('/newWebsite', function (req, res) {
  controller.domain.post(req, res);
});

// START SERVER
app.listen(port, function (err) {
  if(err){
    return console.log('server cannot connect', err);
  }
  console.log('App is listening on port 8080');
});

module.exports = app;