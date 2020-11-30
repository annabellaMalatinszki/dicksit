import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    display: 'block',
    width: '20vw',
    margin: 10,
  },
});

const SignIn = ({ setSignInStatus }) => {
  const classes = useStyle();

  return (
    <div>
      <Grid container className={classes.center}>
        <Button
          className={classes.button}
          variant="contained"
          size="large"
          onClick={() => {
            setSignInStatus('host');
          }}
        >
          <Typography variant="h6">Host</Typography>
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="large"
          onClick={() => {
            setSignInStatus('player');
          }}
        >
          <Typography variant="h6">Join</Typography>
        </Button>
      </Grid>
    </div>
  );
};

export default SignIn;
