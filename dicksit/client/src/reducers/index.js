import { combineReducers } from 'redux';
import userNameReducer from './userName';
import isSignedInReducer from './isSignedIn';
import userColorReducer from './userColor';
import numOfPlayersReducer from './numOfPlayers';

const allReducers = combineReducers({
  userName: userNameReducer,
  userColor: userColorReducer,
  isSignedIn: isSignedInReducer,
  numOfPlayers: numOfPlayersReducer,
});

export default allReducers;
