const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define a sample user_id based on your name and date of birth
const user_id = 'john_doe_17091999';

// POST endpoint
app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item) && item.length === 1);
  const highest_alphabet =
    alphabets.length > 0
      ? alphabets.reduce((a, b) => (a.toLowerCase() > b.toLowerCase() ? a : b))
      : '';

  const response = {
    is_success: true,
    user_id: user_id,
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highest_alphabet,
  };

  res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
