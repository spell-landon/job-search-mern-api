const express = require('express');
const Application = require('../db/models/Application');

const router = express.Router();

// INDEX: Get all applications
// GET
router.get('/', (req, res) => {
  Application.find({}).then((app) => {
    res.json(app);
  });
});

// SHOW: GET one application by id
router.get('/:id', (req, res) => {
  Application.findById({ _id: req.params.id }).then((app) => {
    res.json(app);
  });
});

// CREATE: POST a new application
router.post('/', (req, res) => {
  Application.create(req.body).then((app) => {
    res.status(201).json(app);
  });
});

// UPDATE: PUT new info with an application
router.put('/:id', (req, res) => {
  Application.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((app) => {
    res.json(app);
  });
});

// DELETE: DELETE an application
router.delete('/:id', (req, res) => {
  Application.findByIdAndDelete({ _id: req.params.id }).then((delApp) => {
    res.json(delApp);
  });
});

module.exports = router;
