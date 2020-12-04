import React, { useState } from 'react';
import SignIn from './SignIn';
import HostRouter from './Host/HostRouter';
import PlayerRouter from './Player/PlayerRouter';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles({
  root: {
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: 'rgba(230, 230, 250, 1)',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  signIn: {
    height: 'auto',
    width: 'auto',
    padding: '1% 3%',
  },
});

const SignInRouter = () => {
  const [signInStatus, setSignInStatus] = useState('signin');
  const classes = useStyle();

  let componentToRender;
  if (signInStatus === 'signin') {
    componentToRender = <SignIn setSignInStatus={setSignInStatus} />;
  } else if (signInStatus === 'host') {
    componentToRender = <HostRouter setSignInStatus={setSignInStatus} />;
  } else if (signInStatus === 'player') {
    componentToRender = <PlayerRouter setSignInStatus={setSignInStatus} />;
  }

  return (
    <Grid container className={`${classes.root} ${classes.center}`}>
      <Paper className={classes.signIn}>
        <Typography variant="h3" className={classes.center}>
          Dicksit
        </Typography>
        <div>{componentToRender}</div>
      </Paper>
    </Grid>
  );
};

export default SignInRouter;
