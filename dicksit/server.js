const express = require('express');
const bodyParser = require('body-parser');
const mockdata = require('./mockdata.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const scores = [
//   {
//     name: 'Bella',
//     points: 10,
//     key: 'Bella'
//   },
//   {
//     name: 'Márk',
//     points: 4,
//     key: 'Márk'
//   },
//   {
//     name: 'Balázs',
//     points: 3,
//     key: 'Balázs'
//   },
// ];

// const userCards = [
//   { id: '1.png' },
//   { id: '2.png' },
//   { id: '3.png' },
//   { id: '4.png' },
//   { id: '5.png' },
//   { id: '6.png' },
// ];

// const gameAreaCards = [
//   { id: '7.png' },
//   { id: '8.png' },
//   { id: '9.png' },
//   { id: '10.png' },
//   { id: '11.png' },
//   { id: '12.png' },
// ];

app.get('/api/init', (req, res) => {
  res.send({scores: mockdata.scores, userCards: mockdata.userCards, gameAreaCards: mockdata.gameAreaCards});
})

app.listen(port, () => console.log(`Listening on port ${port}`));
