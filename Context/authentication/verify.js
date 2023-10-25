const express = require('express');
const { verifyRequest } = require('./verifyHandlers');

const app = express();
const port = 3000;

// Define a route for verifyRequest
app.get('/verify', async (req, res) => {
  try {
    const result = await verifyRequest();
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});