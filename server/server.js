const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const controller = require('./controllers/tweetController.js');
const authentication = require('./lib/authentication.js');
const cron = require('cron');
const token = null;
const authCallback = (error, response, body) => {
  if (error) {
    console.log(error, 'error');
  } else {
    token = body.access_token;
  }
};
// update token every 15 minute so it doesnt expire.
const cronJob = cron.job('* */15 * * * *', () => {
  authentication.getAccessToken(authCallback);
});

cronJob.start();

const bodyParser = require('body-parser');

// SERVE UP CLIENT FILES
app.use(express.static(__dirname + '/../client/'));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ENDPOINTS
app.get('/searchTweets/:q', (req, res) => {
  controller.searchTweets.get(req, res, token);
});

// START SERVER
app.listen(port, (err) => {
  if (err) {
    return console.log('server cannot connect', err);
  }
  console.log('App is listening on port 8080');
});

module.exports = app;
