import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { setUserName } from '../../actions';

const useStyle = makeStyles({
  nameInput: {
    width: '15vw',
    marginBottom: '2vh',
  },
});

const NameField = () => {
  const dispatch = useDispatch();
  const classes = useStyle();

  return (
    <div>
      <TextField
        className={classes.nameInput}
        label="Name"
        onChange={(e) => {
          dispatch(setUserName(e.target.value));
        }}
      ></TextField>
    </div>
  );
};

export default NameField;
