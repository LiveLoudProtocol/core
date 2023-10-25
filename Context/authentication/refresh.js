const express = require('express');
const { refreshAuth } = require('./refreshHandlers');

const app = express();
const port = 3000;

// Define routes
app.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const refreshResult = await refreshAuth({ refreshToken });
    res.json({ result: refreshResult });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// same dependencies