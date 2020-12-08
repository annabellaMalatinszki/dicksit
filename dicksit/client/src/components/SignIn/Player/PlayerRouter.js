import React, { useState } from 'react';
import PlayerCode from '../Player/PlayerCode';
import PlayerForm from '../Player/PlayerForm';

const PlayerRouter = ({ setSignInStatus }) => {
  const [isValidated, setIsValidated] = useState(false);

  return (
    <div>
      {isValidated ? (
        <PlayerForm />
      ) : (
        <PlayerCode
          setSignInStatus={setSignInStatus}
          setIsValidated={setIsValidated}
        />
      )}
    </div>
  );
};

export default PlayerRouter;
