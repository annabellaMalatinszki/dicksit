import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GameRouter from './components/Game/GameRouter';
import SignInRouter from './components/SignIn/SignInRouter';

const App = () => {
  const isSignedIn = useSelector((state) => state.isSignedIn);
  const isGameStarted = useSelector((state) => state.isGameStarted);

  return (
    <div className="App">
      <div>
        <Route exact path="/">
          {isSignedIn ? <Redirect to="/game" /> : <SignInRouter />}
        </Route>
        <Route path="/game" component={GameRouter} />
      </div>
    </div>
  );
};

export default App;
