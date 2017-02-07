const request = require('request');


request({
  url: '',//url for api call
  json: true//return json data
}, (error, response, body) =>{//callback function that is used when data returns
  //can access error obj, response obj, and/or body obj
});
