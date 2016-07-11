var request = require('request');
var baseUrl = 'http://localhost:3000/';
var expect = require('chai').expect;

describe('Server', function() {
  describe('POST /newWebsite', function() {
    it('returns a job id', function(done){
      request
        .post({url: baseUrl+"newWebsite", formData: {url: 'www.google.com'}}, 
          function (err, response) {
            console.log(response);
            expect(isNaN(response.body)).to.be.false;
            expect(response.statusCode).to.equal(200);
            done();
          }
        );
    });
  });

  describe('GET /allWebsites', function() {
    it('returns the results in an object ', function(done){
      request
        .get({url: baseUrl+"allWebsites"}, 
          function (err, response) {
            if (response.content) {
              expect(isNaN(response.id)).to.be.false;
              expect(response.content).to.be.a('string');
            }
            done();
          }
        );
    });
  });

});