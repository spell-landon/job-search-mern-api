// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const applicationController = require('./controllers/applicationController');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
  res.redirect('/');
});

// Controllers
// Forward all requests to localhost:3111/icecreams to the ice cream controller
app.use('/', applicationController);

app.listen(3111, () => {
  console.log('Grabbing all current applications...');
});
