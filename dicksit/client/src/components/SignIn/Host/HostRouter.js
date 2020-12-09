import React, { useState } from 'react';
import HostForm from './HostForm';
import HostWait from './HostWait';

const HostRouter = ({ setSignInMode }) => {
  const [code, setCode] = useState();

  return (
    <div>
      {code ? (
        <HostWait code={code} />
      ) : (
        <HostForm setCode={setCode} setSignInMode={setSignInMode} />
      )}
    </div>
  );
};

export default HostRouter;
