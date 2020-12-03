import React, { useState, useEffect } from 'react';
import './Game.css';
import Header from './Header';
import SideBar from './SideBar';
import Hand from './Hand';
import GameArea from './GameArea';
import { callApi } from '../../requestHelper';
import { useSelector } from 'react-redux';

const Game = () => {
  const [scores, setScores] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [gameAreaCards, setGameAreaCards] = useState([]);

  const isSignedIn = useSelector((state) => state.isSignedIn);

  useEffect(() => {
    callApi('init')
      .then((res) => {
        setScores(res.scores);
        setUserCards(res.userCards);
        setGameAreaCards(res.gameAreaCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isSignedIn ? (
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
      ) : (
        <div>Please sign in</div>
      )}
    </div>
  );
};

export default Game;
