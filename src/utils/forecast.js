const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=36e3a2c78402ae6a7b27161197494500&query=' +latitude +',' +longitude +'&units=m';
    
    request({
        url,
        json: true
    }, (err, {body}) => {
        if(err){
            callback('Could not connect to Weather service', undefined);
        }else if(body.error){
            callback('Unable to find location', undefined);
        }else{
            callback(undefined, body.current);
        }
    })
}

module.exports = forecast;
