import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Game from './Game';
import GameWait from './GameWait';
import PleaseSignIn from './PleaseSignIn';

const GameRouter = () => {
  const isSignedIn = useSelector((state) => {
    state.isSignedIn;
  });
  const isGameStarted = useSelector((state) => {
    state.isGameStarted;
  });

  let componentToRender;
  if (isSignedIn && isGameStarted) {
    componentToRender = <Game />;
  } else {
    componentToRender = <GameWait />;
    //   } else {
    //     componentToRender = <PleaseSignIn />;
  }

  return <div>{componentToRender}</div>;
};

export default GameRouter;
