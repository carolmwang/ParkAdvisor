// seed data from the National Park API
// seed static data: user, states, comments
const park = require('../models/parkDB');
const user = require('../models/userDB');
const comment = require('../models/commentDB');
const state = require('../models/stateDB');
const api = require('../api/api');

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
    park_id: '1',
  },
];

const stateSeedData = [
  {
    name: 'Alabama',
    code: 'AL',
  },
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
    name: 'Connecticut',
    code: 'CT',
  },
  {
    name: 'Delaware',
    code: 'DE',
  },
  {
    name: 'Florida',
    code: 'FL',
  },
  {
    name: 'Georgia',
    code: 'GA',
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
    name: 'Illinois',
    code: 'IL',
  },
  {
    name: 'Indiana',
    code: 'IN',
  },
  {
    name: 'Iowa',
    code: 'IA',
  },
  {
    name: 'Kansas',
    code: 'KA',
  },
  {
    name: 'Kentucky',
    code: 'KY',
  },
  {
    name: 'Louisiana',
    code: 'LA',
  },
  {
    name: 'Maine',
    code: 'ME',
  },
  {
    name: 'Maryland',
    code: 'MD',
  },
  {
    name: 'Massachusetts',
    code: 'MA',
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
    name: 'Mississippi',
    code: 'MS',
  },
  {
    name: 'Missouri',
    code: 'MO',
  },
  {
    name: 'Montana',
    code: 'MT',
  },
  {
    name: 'Nebraska',
    code: 'NE',
  },
  {
    name: 'Nevada',
    code: 'NV',
  },
  {
    name: 'New Hampshire',
    code: 'NH',
  },
  {
    name: 'New Jersey',
    code: 'NJ',
  },
  {
    name: 'New Mexico',
    code: 'NM',
  },
  {
    name: 'New York',
    code: 'NY',
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
    name: 'Oklahoma',
    code: 'OK',
  },
  {
    name: 'Oregon',
    code: 'OR',
  },
  {
    name: 'Pennsylvania',
    code: 'PA',
  },
  {
    name: 'Rhode Island',
    code: 'RI',
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
    name: 'Vermont',
    code: 'VT',
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
    name: 'West Virginia',
    code: 'WV',
  },
  {
    name: 'Wisconsin',
    code: 'WI',
  },
  {
    name: 'Wyoming',
    code: 'WY',
  },
];

// async function to seed data into the DB (referenced John Master's lecture)
async function seed() {
  const stateQueries = await Promise.all((stateSeedData.map(state.save)));
  const states = await Promise.all(stateQueries);
  const users = await Promise.all((userSeedData.map(
    ({
      first_name, last_name, email, username, password,
    }) => user.register(first_name, last_name, email, username, password),
  )));
  const comments = await Promise.all((commentSeedData.map(comment.save)));
}

seed();
