const request = require('request');

var getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/491f144fe452902a82dfd3b1ed658f7e/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
       temperature: body.currently.temperature,
       apparentTemperature: body.currently.apparentTemperature,
       summary: body.currently.summary,
       windSpeed: body.currently.windSpeed
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
}

module.exports.getWeather = getWeather;
