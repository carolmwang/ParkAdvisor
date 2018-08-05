const park = require('../models/parkDB');
const user = require('../models/userDB');
const comment = require('../models/commentDB');
const state = require('../models/stateDB');

const userSeedData = [
  {
    first_name: 'Carol',
    last_name: 'Wang',
    email: 'carolmwang@gmail.com',
    username: 'cwang',
    password: 'pass',
  },
];

const parkSeedData = [
  {
    name: 'Acadia National Park',
    state_id: '1',
  },
  {
    name: 'Arches National Park',
    state_id: '1',
  },
  {
    name: 'Badlands National Park',
    state_id: '1',
  },
  {
    name: 'Big Bend National Park',
    state_id: '1',
  },
  {
    name: 'Biscayne National Park',
    state_id: '1',
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
  },
  {
    name: 'Alaska',
  },
  {
    name: 'Arizona',
  },
  {
    name: 'Arkansas',
  },
  {
    name: 'California',
  },
  {
    name: 'Colorado',
  },
  {
    name: 'Connecticut',
  },
  {
    name: 'Delaware',
  },
  {
    name: 'Florida',
  },
  {
    name: 'Georgia',
  },
  {
    name: 'Hawaii',
  },
  {
    name: 'Idaho',
  },
  {
    name: 'Illinois',
  },
  {
    name: 'Indiana',
  },
  {
    name: 'Iowa',
  },
  {
    name: 'Kansas',
  },
  {
    name: 'Kentucky',
  },
  {
    name: 'Louisiana',
  },
  {
    name: 'Maine',
  },
  {
    name: 'Maryland',
  },
  {
    name: 'Massachusetts',
  },
  {
    name: 'Michigan',
  },
  {
    name: 'Minnesota',
  },
  {
    name: 'Mississippi',
  },
  {
    name: 'Missouri',
  },
  {
    name: 'Montana',
  },
  {
    name: 'Nebraska',
  },
  {
    name: 'Nevada',
  },
  {
    name: 'New Hampshire',
  },
  {
    name: 'New Jersey',
  },
  {
    name: 'New Mexico',
  },
  {
    name: 'New York',
  },
  {
    name: 'North Carolina',
  },
  {
    name: 'North Dakota',
  },
  {
    name: 'Ohio',
  },
  {
    name: 'Oklahoma',
  },
  {
    name: 'Oregon',
  },
  {
    name: 'Pennsylvania',
  },
  {
    name: 'Rhode Island',
  },
  {
    name: 'South Carolina',
  },
  {
    name: 'South Dakota',
  },
  {
    name: 'Tennessee',
  },
  {
    name: 'Texas',
  },
  {
    name: 'Utah',
  },
  {
    name: 'Vermont',
  },
  {
    name: 'Virginia',
  },
  {
    name: 'Washington',
  },
  {
    name: 'West Virginia',
  },
  {
    name: 'Wisconsin',
  },
  {
    name: 'Wyoming',
  },
];

async function seed() {
  const stateQueries = await Promise.all((stateSeedData.map(state.save)));
  const states = await Promise.all(stateQueries);
  console.log(states);
  const parks = await Promise.all((parkSeedData.map(park.save)));
  console.log(parks);
  const users = await Promise.all((userSeedData.map(
    ({
      first_name, last_name, email, username, password,
    }) => user.register(first_name, last_name, email, username, password),
  )));
  console.log(users);
  const comments = await Promise.all((commentSeedData.map(comment.save)));
  console.log(comments);
};

seed();
