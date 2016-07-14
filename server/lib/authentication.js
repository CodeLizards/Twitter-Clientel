const keys = require('../config/keys.js');
const request = require('request');

// callback receive error, response, body
// body : '{ token_type, access_token}' OR '{errors: , message: , label: }'
exports.getAccessToken = (callback) => {
  const CONSUMER_KEY = encodeURIComponent(keys.CONSUMER_KEY);
  const CONSUMER_SECRET = encodeURIComponent(keys.CONSUMER_SECRET);
  const bearerToken = `${CONSUMER_KEY}:${CONSUMER_SECRET}`;
  const encodedBearerToken = new Buffer(bearerToken, 'utf-8').toString('base64');
  const options = {
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
      'User-Agent': 'request',
      Authorization: `Basic ${encodedBearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    form: {
      grant_type: 'client_credentials',
    },
  };
  request.post(options, callback);
};
