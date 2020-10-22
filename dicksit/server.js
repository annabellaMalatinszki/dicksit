const express = require('express');
const bodyParser = require('body-parser');
const mockdata = require('./mockdata.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/init', (req, res) => {
  res.send({scores: mockdata.scores, userCards: mockdata.userCards, gameAreaCards: mockdata.gameAreaCards});
})

app.listen(port, () => console.log(`Listening on port ${port}`));
