// routes.js (for organization)
const express = require('express');
const router = express.Router();

// Define routes and handlers
router.get('/users', async (req, res) => {
  // Your logic to fetch user data from the database
  // Send the data back as a response
  res.json(/* Your data here */);
});

router.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Export the router
module.exports = router;
