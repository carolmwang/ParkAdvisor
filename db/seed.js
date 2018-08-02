const park = require('../models/parks');
const user = require('../models/user');

const userSeedData = [
    { first_name: 'Carol', 
      last_name: 'Wang', 
      email: 'carolmwang@gmail.com', 
      username: 'cwang', 
      password: 'pass'}
]
const parkSeedData = [
    {
        name: 'Acadia National Park',
        location: 'Maine',
    },
    {
        name: 'Arches National Park',
        location: 'Utah',
    },
    {
        name: 'Badlands National Park',
        location: 'South Dakota',
    },
    {
        name: 'Big Bend National Park',
        location: 'Texas',
    },
    {
        name: 'Biscayne National Park',
        location: 'Florida',
    },
];
// 
async function seed() {
    const parks = await Promise.all((parkSeedData.map(park.save)));
    const users = await Promise.all((userSeedData.map(
        ({ first_name, last_name, email, username, password }) => 
        user.register(first_name, last_name, email, username, password))));
    console.log(users);
};

seed();