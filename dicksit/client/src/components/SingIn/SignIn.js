import React from 'react';
import { Link } from 'react-router-dom';
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

const SignIn = () => {
  const classes = useStyle();

  return (
    <div>
      <Grid container className={classes.center}>
        <Button className={classes.button} variant="contained" size="large">
          <Link to="/host">
            <Typography variant="h6">Host</Typography>
          </Link>
        </Button>
        <Button className={classes.button} variant="contained" size="large">
          <Link to="/player">
            <Typography variant="h6">Join</Typography>
          </Link>
        </Button>
      </Grid>
    </div>
  );
};

export default SignIn;
