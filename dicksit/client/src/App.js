import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './components/Game/Game';
import SignInRouter from './components/SingIn/SignInRouter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route path="/" component={SignInRouter} />
            <Route path="/game" component={Game} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
