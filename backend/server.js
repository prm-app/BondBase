const express = require('express');
const app = express();
const port = 5000;  // Backend server port

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});