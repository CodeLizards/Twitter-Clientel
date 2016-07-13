import axios from 'axios';

exports.searchTweets = (query, callback) => {
  const url = `http://localhost:8080/searchTweets/${query}`;
  return axios({
    url,
    timeout: 20000,
    method: 'get',
    responseType: 'json',
  })
  .then((response) => {
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};
