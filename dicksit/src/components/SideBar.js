import React from 'react';
import Scoreboard from './Scoreboard';
import { Button } from '@material-ui/core';
import { makeStyle, makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  button: {
    display: 'block',
    width: '100%',
    margin: '1em 0',
  },
});

const SideBar = ({ scores }) => {
  const classes = useStyle();

  return (
    <div>
      <Scoreboard scores={scores} />
      <div>
        <Button variant="contained" className={classes.button}>
          Scoring
        </Button>
        <Button variant="contained" className={classes.button}>
          Rules
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
