const fetch = require('node-fetch');

module.exports = {
    getAllParks() {
        return fetch('https://developer.nps.gov/api/parks?&api_key=WrO6t9gkPzVhPzjMzOZZbGKA2bmpTOXAOlv1QX6h')
        .then(parks => parks.json())
    },
};