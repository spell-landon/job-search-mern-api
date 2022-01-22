// eslint-disable-next-line no-unused-vars
const mongoose = require('../db/connection');
const seedData = require('./seeds.json');
const Applications = require('./models/Application');

Applications.deleteMany({}).then(() => {
  Applications.insertMany(seedData).then((job) => {
    console.log(`We have applications!`);
    console.log(job);
    process.exit();
  });
});
