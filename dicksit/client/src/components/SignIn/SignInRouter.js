import React, { useState } from 'react';
import SignIn from './SignIn';
import HostRouter from './Host/HostRouter';
import PlayerRouter from './Player/PlayerRouter';
import BackgroundWrapper from '../BackgroundWrapper';

const SignInRouter = () => {
  const [signInMode, setSignInMode] = useState('signin');

  let componentToRender;
  if (signInMode === 'signin') {
    componentToRender = <SignIn setSignInMode={setSignInMode} />;
  } else if (signInMode === 'host') {
    componentToRender = <HostRouter setSignInMode={setSignInMode} />;
  } else if (signInMode === 'player') {
    componentToRender = <PlayerRouter setSignInMode={setSignInMode} />;
  }

  return <BackgroundWrapper>{componentToRender}</BackgroundWrapper>;
};

export default SignInRouter;
