require('dotenv').config();

const parkApi = process.env.PARK_API_KEY;
const fetch = require('node-fetch');

const { insert } = require('../models/parkDB');

function getApiData() {
  return fetch(`https://developer.nps.gov/api/v1/parks?limit=10000&parkCode=&api_key=${parkApi}`)
    .then((resp) => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then(data => data.data)
    .catch(err => console.log(err));
}


// function getNationalParks() {
//   return getApiData()
//     .then((data) => {
//       const npSeed = {
//         name: data.fullname,
//       };
//     });
// }


function getNationalParks() {
  return getApiData()
    .then((data) => {
      const pushData = data.map((names) => {
        if (names.designation === 'National Park') {
          const parkData = {
            name: names.fullName,
            state: names.states,
            description: names.description,
            weather: names.weatherInfo,
            url: names.url,
            directions: names.directionsUrl,
          };
          return insert(parkData);
        }
      });
      return Promise.all(pushData);
    });
}
console.log(getNationalParks());

module.exports = getNationalParks;


