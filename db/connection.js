const mongoose = require('mongoose');

require('dotenv').config();

const mongoURI = process.env.DATABASE_URL;

mongoose
  .connect(mongoURI)
  .then((conn) => {
    console.log(
      `Connected to MongoDB Atlas on ${conn.connections[0].name} database. `
    );
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
