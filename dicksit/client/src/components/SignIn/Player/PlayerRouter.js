import React from 'react';
import PlayerCode from '../Player/PlayerCode';

const PlayerRouter = ({ setSignInStatus }) => {
  return (
    <div>
      <PlayerCode setSignInStatus={setSignInStatus} />
    </div>
  );
};

export default PlayerRouter;
