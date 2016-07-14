var request = require('request');
var baseUrl = 'http://localhost:3000/';
var expect = require('chai').expect;

describe('Server', function () {
  describe('GET /searchTweets/:q', function () {
    it('returns status code 200', function (done) {
      request
        .get({ url: 'http://localhost:8080/searchTweets/:cats' },
          function (err, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
          }
        );
    });
    xit('returns an object with an array of statuses', function (done) {
      request
        .get({ url: 'http://localhost:8080/searchTweets/:pokemongo' },
          function (err, response, body) {
            var results = JSON.parse(body);
            expect(results).to.be.a('object');
            done();
          }
        );
    });

    it('returns a response 404 if the tweets cannot be found / error with query', function (done) {
      request
        .get({ url: 'http://localhost:8080/searchTweets/' },
          function (err, response) {
            expect(response.statusCode).to.equal(404);
            done();
          }
        );
    });
  });
});
