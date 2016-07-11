var db = require('../db/init.js');
var http = require('http');

module.exports = {

  domain: {
    get: function (callback) {
      var queryStr = 'select id, name, description, time_posted \
                      from domain where valid = true \
                      order by time_posted desc';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      isValidUrl( params[0], function (isValid) {
        console.log('in posting', isValid);
        var queryStr = 'insert into domain(name, description, time_posted, valid) \
                        value (?, ?, NOW(), '+isValid+')';
        db.query(queryStr, params, function(err, results) {
          callback(err, results);
        });
      })
    }
  },
  
};


var isValidUrl = function(url, callback) {
  var options = {method: 'HEAD', host: 'www.'+url, path: '/'};
  var req = http.request(options, function(results) {
    console.log(JSON.stringify(results.headers));
  });

  req.on('error', function(error){
    console.log('error in getting valid url results', error)
    callback(false);
  })

  req.end(function(){
     callback(true) 
  });
};
