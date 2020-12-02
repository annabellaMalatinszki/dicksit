import React from 'react';
import './Game.css';
import Header from './Header';
import SideBar from './SideBar';
import Hand from './Hand';
import GameArea from './GameArea';
import { callApi } from '../../requestHelper';

class Game extends React.Component {
  state = {
    scores: [],
    userCards: [],
    gameAreaCards: [],
  };

  componentDidMount() {
    callApi('init')
      .then((res) => {
        this.setState({
          scores: res.scores,
          userCards: res.userCards,
          gameAreaCards: res.gameAreaCards,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="game">
        <div className="header">
          <Header name="Bella"></Header>
        </div>
        <div className="game-area">
          <GameArea cards={this.state.gameAreaCards} />
        </div>
        <div className="side-bar">
          <SideBar scores={this.state.scores} />
        </div>
        <div className="hand">
          <Hand cards={this.state.userCards} />
        </div>
      </div>
    );
  }
}

export default Game;
