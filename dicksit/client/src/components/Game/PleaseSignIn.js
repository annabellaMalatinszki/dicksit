import { Typography } from '@material-ui/core';
import React from 'react';
import BackgroundWrapper from '../BackgroundWrapper';
// import Typography from '@material-ui/core/Typography';

const PleaseSignIn = () => {
  return (
    <BackgroundWrapper>
      <Typography variant="h6">Please sign in to play</Typography>
    </BackgroundWrapper>
  );
};

export default PleaseSignIn;
