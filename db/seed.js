// -- INSERT INTO parks (name, location)
// -- VALUES 
// -- ('Acadia National Park', 'Maine'),
// -- ('Arches National Park', 'Utah'),
// -- ('Badlands National Park', 'South Dakota'),
// -- ('Big Bend National Park', 'Texas'),
// -- ('Biscayne National Park', 'Florida');

const park = require('../models/parks');

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

async function seed() {
    const parks = await Promise.all((parkSeedData.map(park.save)));
    debugger;
    console.log(parks);
};

seed();