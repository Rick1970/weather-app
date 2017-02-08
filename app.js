
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true
    }
})
  .help()
  .alias('help', 'h')
  .argv;

  geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
      console.log(errorMessage);
    } else {
      console.log(results.address);
      weather.getWeather(results.lattitude, results.longitude, (errorMessage, weatherResults) => {
        if(errorMessage){
          console.log(errorMessage);
        } else {
          console.log(JSON.stringify(`Its currently ${weatherResults.temperature}.  It feels like ${weatherResults.apparentTemperature}.  The current conditions are ${weatherResults.summary}, with a wind speed of ${weatherResults.windSpeed} mph.`));
        }
      });
    }
  });


  //491f144fe452902a82dfd3b1ed658f7e
  // lat 47.154366
  //lon -122.141761
