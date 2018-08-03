const parkApi = process.env.PARK_API_KEY;
const fetch = require('node-fetch');


fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&api_key=${parkApi}`)
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
