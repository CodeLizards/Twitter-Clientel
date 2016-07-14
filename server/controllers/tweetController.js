const methods = require('../lib/TwitterMethods.js');
const authentication = require('../lib/authentication.js');

module.exports = {

  searchTweets: {
    get: (req, res, ) => {
      authentication.getAccessToken((error, response, authBody) => {
        if (error) {
          console.log(error, 'error');
        } else {
          const token = JSON.parse(authBody).access_token;
          console.log('token', response);
          methods.searchTwitter(req.params.q, token, (err, results, body) => {
            console.log('we ahve arrived', body);
            if (err) {
              // check if token expired, if so get another one?
              // check if query is invalid?
              console.log('error in getting valid tweets', err);
              // res.sendStatus(500);
            } else {
              res.json(body);
            }
          });
        }
      });
    },
  },

};
