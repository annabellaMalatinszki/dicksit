import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header name="Bella"></Header>
      </div>
      <div className="game-area">GameArea</div>
      <div className="scoreboard">Scoreboard</div>
      <div className="hand">Hand</div>
    </div>
  );
}

export default App;
