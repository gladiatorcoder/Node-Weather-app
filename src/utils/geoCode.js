// const request = require('request');

// const geoCode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2hvY2tlcjE5IiwiYSI6ImNrbm4wNW43cTB1cGUybmx0am5uc3R2MTkifQ.urifIbQHQ4T1jdECX1nAtw&limit=1';

//     request({
//        url: url,
//        json: true 
//     }, (err, {body}) => {
//         if(err){
//             callback('Unable to connect to API, please try again.', undefined);
//         }else if(body.features.length === 0){
//             callback('No search results returned. Please refine search query and try again.', undefined);
//         }else{
//             callback(undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// };

// module.exports = geoCode;

// const request = require('request');

// const geoCode = (address, callback) => {
//      const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2hvY2tlcjE5IiwiYSI6ImNrbm4wNW43cTB1cGUybmx0am5uc3R2MTkifQ.urifIbQHQ4T1jdECX1nAtw&limit=1';

//      request({
//          url: url,
//          json: true,
//      }, (err, data) => {
//          if(err){
//              callback('There was an error connecting to Mapbox API', undefined);
//          }else if(data.body.features.length === 0){
//             callback('No search results returned!');
//          }else{
//              callback(undefined, {
//                  latitude: data.body.features[0].center[1],
//                  longitude: data.body.features[0].center[0],
//                  location: data.body.features[0].place_name,
//              });
//          }
//     })
// }

// module.exports = geoCode;

const request = require('request');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2hvY2tlcjE5IiwiYSI6ImNrbm4wNW43cTB1cGUybmx0am5uc3R2MTkifQ.urifIbQHQ4T1jdECX1nAtw&limit=1';
    request({
        url: url,
        json: true
    }, (err,data) => {
        if(err){
            callback('Could not connect to service', undefined);
        }else if(data.body.features.length === 0){
            callback('No search results returned!', undefined);
        }else{
            callback(undefined, {
                latitude: data.body.features[0].center[1],
                longitude: data.body.features[0].center[0],
                location: data.body.features[0].place_name
            })
        }
    })

}

module.exports = geoCode;