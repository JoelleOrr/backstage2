const express = require('express'),
  morgan = require('morgan'),
  app = express();

// Parse incoming JSON into objects
app.use(express.json());
// Log all requests
app.use(morgan('dev'));

module.exports = app;
