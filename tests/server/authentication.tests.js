const auth = require('../../server/lib/authentication.js');
const expect = require('chai').expect;

describe('Auth', () => {
  describe('authentication request to twitter api', () => {
    it('returns a access token', (done) => {
      auth.getAccessToken((error, response, body) => {
        const token = JSON.parse(body).access_token;
        expect(token).to.exist;
        expect(token).to.be.a('string');
        done();
      });
    });
  });
});
