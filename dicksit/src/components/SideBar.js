import React from 'react';
import Scoreboard from './Scoreboard';
import { Button, Backdrop, Typography, Paper } from '@material-ui/core';
import { makeStyle, makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    position: 'relative',
  },
  button: {
    display: 'block',
    width: '100%',
    margin: '1em 0',
  },
  backdrop: {
    zIndex: 1,
  },
  dropDownPaper: {
    padding: '1em',
    width: '25vw',
  },
});

const SideBar = ({ scores }) => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (backdrop) => {
    setOpen(backdrop);
  };

  return (
    <div className={classes.root}>
      <Scoreboard scores={scores} />
      <div>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleClick('scoring')}
        >
          Scoring
        </Button>
        <Backdrop
          className={classes.backdrop}
          open={open === 'scoring' ? true : false}
          onClick={handleClose}
        >
          <div>
            <Paper elevation={3} className={classes.dropDownPaper}>
              <Typography variant="subtitle2">
                If all players find the storyteller's card:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">Storyteller: 0 points</Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Other players: 2 points
                  </Typography>
                </li>
              </ul>
              <Typography variant="subtitle2">
                If no players find the storyteller's card:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">Storyteller: 0 points</Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Other players: 2 points (+1 bonus point per vote for his/her
                    card)
                  </Typography>
                </li>
              </ul>
              <Typography variant="subtitle2">
                If at least 1 player, but not all players have found the
                storyteller's card:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">Storyteller: 3 points</Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Players who found the card: 3 points (+1 bonus point per
                    vote for his/her card)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Other players: 0 points (+1 bonus point per vote for his/her
                    card)
                  </Typography>
                </li>
              </ul>
            </Paper>
          </div>
        </Backdrop>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleClick('rules')}
        >
          Rules
        </Button>
        <Backdrop
          className={classes.backdrop}
          open={open === 'rules' ? true : false}
          onClick={handleClose}
        >
          <div>
            <Paper elevation={3} className={classes.dropDownPaper}>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                placeat suscipit? Minus nisi blanditiis optio exercitationem qui
                error sapiente quibusdam accusantium. Enim nulla inventore
                quaerat ducimus iusto possimus aut id.
              </Typography>
            </Paper>
          </div>
        </Backdrop>
      </div>
    </div>
  );
};

export default SideBar;
