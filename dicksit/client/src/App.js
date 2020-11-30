import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './components/Game/Game';
import SignInRouter from './components/SignIn/SignInRouter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={SignInRouter}></Route>
            <Route path="/game" component={Game} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
