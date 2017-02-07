const request = require('request');
const request = require('yargs');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=11204%20216th%20ave%20ct%20e%20bonney%20lake',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
