import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from './SignIn';
import HostRouter from './Host/HostRouter';
import PlayerRouter from './Player/PlayerRouter';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: 'rgba(230, 230, 250, 1)',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  signIn: {
    height: '40vh',
    width: '24vw',
  },
});

const SignInRouter = () => {
  const classes = useStyle();

  return (
    <Grid container className={`${classes.root} ${classes.center}`}>
      <Paper className={classes.signIn}>
        <Typography variant="h3" className={classes.center}>
          Dicksit
        </Typography>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/host" component={HostRouter} />
          <Route exact path="/player" component={PlayerRouter} />
        </div>
      </Paper>
    </Grid>
  );
};

export default SignInRouter;
