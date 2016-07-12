var models = require('../models/domainModel.js');

module.exports = {

  domain: {
    get: function (req, res) {
      models.domain.get(function (err, results) {
        if (err) {
          console.log('error in getting valid websites', err);
          res.send(500);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body.name, req.body.description];
      models.domain.post(params, function (err, results) {
        console.log('results');
        if (err) {
          console.log('error in posting a new website', err);
          res.send(500);
        } else {
          res.send(201);
        }
      });
    },
  },
};
