// seed data from the National Park API
// seed static data: user, states, comments
const fetch = require('node-fetch');
const park = require('../models/parkDB');
const user = require('../models/userDB');
const comment = require('../models/commentDB');
const state = require('../models/stateDB');

const parkApi = process.env.PARK_API_KEY;

const { insert } = require('../models/parkDB');

// referred to Fetch sql lesson- Drake
function getApiData() {
  return fetch(`https://developer.nps.gov/api/v1/parks?limit=100000&parkCode=&api_key=${parkApi}`)
    .then((resp) => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then(data => data.data)
    .catch(err => console.log(err));
}

// gets all the national park information needed from
// the api and will be seeded into the database
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

const userSeedData = [
  {
    first_name: 'Carol',
    last_name: 'Wang',
    email: 'carolmwang@gmail.com',
    username: 'cwang',
    password: 'pass',
  },
];

const commentSeedData = [
  {
    author: 'cwang',
    content: 'This is the best park!',
    park_id: 1,
  },
];

const stateSeedData = [
  {
    name: 'Alaska',
    code: 'AK',
  },
  {
    name: 'Arizona',
    code: 'AZ',
  },
  {
    name: 'Arkansas',
    code: 'AR',
  },
  {
    name: 'California',
    code: 'CA',
  },
  {
    name: 'Colorado',
    code: 'CO',
  },
  {
    name: 'Florida',
    code: 'FL',
  },
  {
    name: 'Hawaii',
    code: 'HI',
  },
  {
    name: 'Idaho',
    code: 'ID',
  },
  {
    name: 'Kentucky',
    code: 'KY',
  },
  {
    name: 'Maine',
    code: 'ME',
  },
  {
    name: 'Michigan',
    code: 'MI',
  },
  {
    name: 'Minnesota',
    code: 'MN',
  },
  {
    name: 'Montana',
    code: 'MT',
  },
  {
    name: 'Nevada',
    code: 'NV',
  },
  {
    name: 'New Mexico',
    code: 'NM',
  },
  {
    name: 'North Carolina',
    code: 'NC',
  },
  {
    name: 'North Dakota',
    code: 'ND',
  },
  {
    name: 'Ohio',
    code: 'OH',
  },
  {
    name: 'Oregon',
    code: 'OR',
  },
  {
    name: 'South Carolina',
    code: 'SC',
  },
  {
    name: 'South Dakota',
    code: 'SD',
  },
  {
    name: 'Tennessee',
    code: 'TN',
  },
  {
    name: 'Texas',
    code: 'TX',
  },
  {
    name: 'Utah',
    code: 'UT',
  },
  {
    name: 'Virginia',
    code: 'VA',
  },
  {
    name: 'Washington',
    code: 'WA',
  },
  {
    name: 'Wyoming',
    code: 'WY',
  },
];

// async function to seed data into the DB (referenced John Master's lecture)
async function seed() {
  const users = await Promise.all((userSeedData.map(
    ({
      first_name, last_name, email, username, password,
    }) => user.register(first_name, last_name, email, username, password),
  )));
  const stateQueries = await Promise.all((stateSeedData.map(state.save)));
  const states = await Promise.all(stateQueries);
  const comments = await Promise.all((commentSeedData.map(comment.save)));
}
getNationalParks()
  .then(() => {
    seed();
  });
