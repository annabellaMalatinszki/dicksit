import React from 'react';
import useInterval from '../../hooks/useInterval';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import BackgroundWrapper from '../BackgroundWrapper';
import { getApi } from '../../requestHelper';
import { startGame } from '../../actions';

const useStyles = makeStyles({
  progress: {
    margin: '3em',
  },
});

const PlayerWait = () => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector((state) => {
    state.isGameStarted;
  });

  const classes = useStyles();

  useInterval(async () => {
    console.log('Checking if game has started...');
    const res = await getApi('isgamestarted');
    if (res.isGameStarted) {
      dispatch(startGame(true));
    }
  }, 1000);

  return (
    <BackgroundWrapper>
      <Typography variant="h6">Waiting for players to join</Typography>
      <CircularProgress className={classes.progress} size="6rem" />
    </BackgroundWrapper>
  );
};

export default PlayerWait;
