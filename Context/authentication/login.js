const express = require('express');
const { generateChallenge, authenticate, login } = require('./authenticationHandlers');

const app = express();
const port = 3000;

// Define routes
app.get('/generateChallenge', async (req, res) => {
  try {
    const challenge = await generateChallenge(req.query);
    res.json({ challenge });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/authenticate', async (req, res) => {
  try {
    const authenticatedResult = await authenticate(req.body);
    res.json({ result: authenticatedResult });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const authenticatedResult = await login(req.body.address);
    res.json({ result: authenticatedResult });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// export this
module.exports = { generateChallenge, authenticate, login };
// dependiencies npm install express body-parser