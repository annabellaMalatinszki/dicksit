import React from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Hand from './components/Hand';

const scores = [
  {
    name: 'Bella',
    points: 1,
  },
  {
    name: 'Márk',
    points: 4,
  },
  {
    name: 'Balázs',
    points: 3,
  },
];

const cards = [
  { id: '1.png' },
  { id: '2.png' },
  { id: '3.png' },
  { id: '4.png' },
  { id: '5.png' },
  { id: '6.png' },
];

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header name="Bella"></Header>
      </div>
      <div className="game-area">GameArea</div>
      <div className="scoreboard">
        <Scoreboard scores={scores} />
      </div>
      <div className="hand">
        <Hand cards={cards} />
      </div>
    </div>
  );
}

export default App;
