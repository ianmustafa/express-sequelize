const express = require('express');
const app = express();
const port = 6400;

const { Person } = require('./models');

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.post('/persons', async (req, res) => {
  try {
    const person = await Person.create({ name: 'Budi', address: 'Depok' });
    res.json({ message: 'Success!', data: { personId: person.id }});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create new person!' });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
