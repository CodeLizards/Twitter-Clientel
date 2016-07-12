var request = require('request');
var baseUrl = 'http://localhost:3000/';
var expect = require('chai').expect;

describe('Server', function () {
  describe('POST /newWebsite', function () {
    it('returns status code 201', function (done) {
      request
        .post({ url: 'http://localhost:8080/newWebsite', form: { name: 'google.com', description: 'This is a test' } },
          function (err, response) {
            console.log(err);
            expect(response.statusCode).to.equal(201);
            done();
          }
        );
    });

    it('accepts an object with any url (valid or invalid)', function (done) {
      request
        .post({ url: 'http://localhost:8080/newWebsite', form: { name: 'www.google.com', description: 'tweedle dee' } },
          function (err, response) {
            expect(response.statusCode).to.equal(201);
            request
              .post({ url: 'http://localhost:8080/newWebsite', formData: { description: 'tweedle dee' } },
                function (err, response) {
                  expect(response.statusCode).to.equal(500);
                  done();
                }
              );
          }
        );
    });
  });

  describe('GET /allValidWebsites', function () {
    it('returns the results in an object ', function (done) {
      request
        .get({ url: 'http://localhost:8080/allValidWebsites' },
          function (err, response) {
            var results = JSON.parse(response.body)[0];
            expect(results).to.be.a('object');
            expect(results.name).to.be.a('string');
            expect(results.description).to.be.a('string');
            expect(results.time_posted).to.be.a('string');


            done();
          }
        );
    });
  });
});
