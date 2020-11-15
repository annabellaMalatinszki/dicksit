import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './components/Game';
import SignIn from './components/SignIn';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route 
              exact path='/game' 
              component={Game} 
            />
            <Route path='/' component={SignIn}/>
          </Switch>
        </div>
      </div>
  );
}
}

export default App;
