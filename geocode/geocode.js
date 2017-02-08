const request = require('request');

var geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error){
      console.log('Unable to connect to Google servers.');
    } else if(body.status === 'ZERO_RESULTS'){//body.status is specific to Google
      console.log('Address info entered returned no results.');
    } else if(body.status === 'OK'){
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    } else {
      console.log('Unable to process request');
    }
  });
};



module.exports = {
  geocodeAddress
};