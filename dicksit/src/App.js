import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Hand from './components/Hand';
import GameArea from './components/GameArea';

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
      <div className="game-area">
        <GameArea />
      </div>
      <div className="side-bar">
        <SideBar scores={scores} />
      </div>
      <div className="hand">
        <Hand cards={cards} />
      </div>
    </div>
  );
}

export default App;
