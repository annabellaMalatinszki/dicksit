import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const PlayerWait = () => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector((state) => {
    state.isGameStarted;
  });

  return (
    <div>
      <CircularProgress />
    </div>
  );
};

export default PlayerWait;
