var methods = require('../lib/TwitterMethods.js');
var authentication = require('../lib/authentication.js');
module.exports = {

  searchTweets: {
    get: function (req, res, token) {
      methods.searchTweets.get(function (err, results, token) {
        if (err) {
          // check if token expired, if so get another one?
          // check if query is invalid?
          console.log('error in getting valid tweets', err);
          res.send(500);
        } else {
          res.json(results);
        }
      });
    },
  },

};
