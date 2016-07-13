var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var controller = require('./controllers/tweetController.js');
var authentication = require('./lib/authentication.js');
var cron = require('cron');
var token; 
var authCallback = function (error, response, body) {
  if (error) {
    console.log(error, 'error');
  } else {
    token = body.access_token;
  }
};
// update token every 15 minute so it doesnt expire.
var cronJob = cron.job('* */15 * * * *', function () {
  authentication.getAccessToken(authCallback);
});

cronJob.start();

authentication.getAccessToken(authCallback);
var bodyParser = require('body-parser');

// SERVE UP CLIENT FILES
app.use(express.static(__dirname + '/../client/'));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ENDPOINTS
app.get('/searchTweets/:q', function (req, res) {
  controller.searchTweets.get(req, res, token);
});

// START SERVER
app.listen(port, function (err) {
  if(err){
    return console.log('server cannot connect', err);
  }
  console.log('App is listening on port 8080');
});

module.exports = app;
