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

// TODO: These really shouldn't be global variables, but saved in a database
let code;
let game;

app.post('/api/gameinfo', (req, res) => {
  game = req.body;
  code = helper.generateCode();
  res.send({ code });
});

app.post('/api/validatecode', (req, res) => {
  codeToValidate = req.body.code;
  if (codeToValidate === code) {
    res.send({ isValid: true });
  } else {
    res.send({ isValid: false });
  }
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
