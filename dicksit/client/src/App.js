import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Hand from './components/Hand';
import GameArea from './components/GameArea';

class App extends React.Component {
  state = {
    scores: [],
    userCards: [],
    gameAreaCards: []
  };

  componentDidMount() {
    this.callApi('init')
      .then(res => {
        this.setState({scores: res.scores, userCards: res.userCards, gameAreaCards: res.gameAreaCards});
      }
        )
      .catch(err => console.log(err));
  }

  callApi = async (dest) => {
    const response = await fetch(`/api/${dest}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  }

  render() {
    return (
      <div className="App">
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

export default App;
