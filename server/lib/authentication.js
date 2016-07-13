var keys = require('../config/keys.js');
var request = require('request');

// callback receive error, response, body
// body : '{ token_type, access_token}' OR '{errors: , message: , label: }'
exports.getAccessToken = function (callback) {
  var bearerToken = keys.CONSUMER_KEY + ':' + keys.CONSUMER_SECRET;
  var uriEncodedBearer = encodeURIComponent(bearerToken);
  var encodedBearerToken = new Buffer(bearerToken, 'utf-8').toString('base64');
  var options = {
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
      'User-Agent': 'request',
      Authorization: 'Basic ' + encodedBearerToken,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    form: {
      grant_type: 'client_credentials',
    },
  };
  request.post(options, callback);
};


