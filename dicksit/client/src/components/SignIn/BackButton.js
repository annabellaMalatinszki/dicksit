import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const BackButton = ({ setSignInMode }) => {
  return (
    <div>
      <Button
        onClick={() => {
          setSignInMode('signin');
        }}
      >
        <ArrowBackIcon />
      </Button>
    </div>
  );
};

export default BackButton;
