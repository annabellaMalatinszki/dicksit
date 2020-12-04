const express = require('express');
const bodyParser = require('body-parser');
const mockdata = require('./mockdata.js');
const cardHandler = require('./cardHandler.js');
const helper = require('./util.js');

const app = express();
const port = process.env.PORT || 5000;

// TODO This should not come from mockdata
// TODO Cardpictures should be relocated, not all sent to the client for no reason
const deck = mockdata.userCards;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/gameinfo', (req, res) => {
  const game = req.body;
  const code = helper.generateCode();
  res.send({ code });
});

app.get('/api/init', (req, res) => {
  // TODO This is not right, the userCards property return the first element of the array, because this here is everyone's hand,
  // and it shouldn't be sent to everyone. Each should get their own hand only.
  res.send({
    scores: mockdata.scores,
    userCards: cardHandler.dealHand(deck, 1)[0],
    gameAreaCards: mockdata.gameAreaCards,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
