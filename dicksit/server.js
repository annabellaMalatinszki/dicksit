const express = require('express');
const bodyParser = require('body-parser');
const mockdata = require('./mockdata.js');
const cardHandler = require('./cardHandler.js');

const app = express();
const port = process.env.PORT || 5000;

// TODO This should not come from mockdata
// TODO Cardpictures should be relocated, not all sent to the client for no reason
const deck = mockdata.userCards;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/init', (req, res) => {
  res.send({scores: mockdata.scores, userCards: cardHandler.dealHand(deck, 1)[0], gameAreaCards: mockdata.gameAreaCards});
})

app.listen(port, () => console.log(`Listening on port ${port}`));
