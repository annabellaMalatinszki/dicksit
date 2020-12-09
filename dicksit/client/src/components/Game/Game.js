import React, { useState, useEffect } from 'react';
import './Game.css';
import Header from './Header';
import SideBar from './SideBar';
import Hand from './Hand';
import GameArea from './GameArea';
import { getApi } from '../../requestHelper';

const Game = () => {
  const [scores, setScores] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [gameAreaCards, setGameAreaCards] = useState([]);

  useEffect(() => {
    getApi('init')
      .then((res) => {
        setScores(res.scores);
        setUserCards(res.userCards);
        setGameAreaCards(res.gameAreaCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="game">
        <div className="header">
          <Header name="Bella"></Header>
        </div>
        <div className="game-area">
          <GameArea cards={gameAreaCards} />
        </div>
        <div className="side-bar">
          <SideBar scores={scores} />
        </div>
        <div className="hand">
          <Hand cards={userCards} />
        </div>
      </div>
    </div>
  );
};

export default Game;
