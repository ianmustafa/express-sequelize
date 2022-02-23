const express = require('express');
const app = express();
const port = 6400;

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
