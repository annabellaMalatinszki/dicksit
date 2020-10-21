import React from 'react';
import Scoreboard from './Scoreboard';

const SideBar = ({ scores }) => {
  return (
    <div>
      <Scoreboard scores={scores} />
    </div>
  );
};

export default SideBar;
