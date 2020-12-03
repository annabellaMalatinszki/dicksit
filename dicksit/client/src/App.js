import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Game from './components/Game/Game';
import SignInRouter from './components/SignIn/SignInRouter';

const App = () => {
  const isSignedIn = useSelector((state) => state.isSignedIn);

  return (
    <div className="App">
      <div>
        <Route exact path="/">
          {isSignedIn ? <Redirect to="/game" /> : <SignInRouter />}
        </Route>
        <Route path="/game" component={Game} />
      </div>
    </div>
  );
};

export default App;
