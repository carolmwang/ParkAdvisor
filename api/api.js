const fetch = require('node-fetch');

// module.exports = {
    function getAllParks() {
        return fetch('https://developer.nps.gov/api/parks?&api_key=WrO6t9gkPzVhPzjMzOZZbGKA2bmpTOXAOlv1QX6h')
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
    };

    console.log(getAllParks());
// };

function q0() {
    return fetch('http://anapioficeandfire.com/api/characters/583')
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then((data) => {
        // console.log(data.born);
        return data.born;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }