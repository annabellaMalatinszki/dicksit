import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
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
  paper: {
    height: 'auto',
    width: 'auto',
    padding: '1% 3%',
  },
});

const BackgroundWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container className={`${classes.root} ${classes.center}`}>
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.center}>
          Dicksit
        </Typography>
        <div>{children}</div>
      </Paper>
    </Grid>
  );
};

export default BackgroundWrapper;
