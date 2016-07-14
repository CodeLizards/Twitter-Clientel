const request = require('request');

module.exports = {
  searchTwitter: (query, token, callback) => {
    const q = encodeURIComponent(query);
    const options = {
      url: `https://api.twitter.com/1.1/search/tweets.json?q=${q}`,
      headers: {
        'User-Agent': 'Twitter Clientel',
        Authorization: `Bearer ${token}`,
      },
    };
    request.get(options, callback);
  },
};

