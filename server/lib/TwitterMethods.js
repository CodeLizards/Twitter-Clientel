var request = require('request');

var SearchTwitter = function (query, callback, token) {
  var q = encodeURIComponent(query);
  var options = {
    url: 'https://api.twitter.com/1.1/search/tweets.json?q=' + q,
    headers: {
      'User-Agent': 'request',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    form: {
      grant_type: 'client_credentials',
    },
  };
  request.get(options, callback);
};
