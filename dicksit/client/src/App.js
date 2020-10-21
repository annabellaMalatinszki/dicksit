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

const userCards = [
  { id: '1.png' },
  { id: '2.png' },
  { id: '3.png' },
  { id: '4.png' },
  { id: '5.png' },
  { id: '6.png' },
];

const gameAreaCards = [
  { id: '7.png' },
  { id: '8.png' },
  { id: '9.png' },
  { id: '10.png' },
  { id: '11.png' },
  { id: '12.png' },
];

class App extends React.Component {
  state = {
    respone: '',
    post: '',
    responseToPost: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: this.state.post}),
    });

    const body = await response.text();

    this. setState({responseToPost: body});
  }

  render() {
    return (
      <div className="App">
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
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Psot to server</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
  );
}
}

export default App;
