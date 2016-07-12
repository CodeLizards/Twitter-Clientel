import axios from 'axios';

exports.getWebsites = (callback) => {
  const url = 'http://localhost:8080/allValidWebsites';
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

exports.postWebsite = (data, callback) => {
  const url = 'http://localhost:8080/newWebsite';
  return axios({
    url,
    timeout: 20000,
    method: 'post',
    responseType: 'json',
    data,
  })
  .then((response) => {
    console.log(response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};
