import { combineReducers } from 'redux';
import userNameReducer from './userName';
import userColorReducer from './userColor';
import numOfPlayersReducer from './numOfPlayers';

const allReducers = combineReducers({
  userName: userNameReducer,
  userColor: userColorReducer,
  numOfPlayers: numOfPlayersReducer,
});

export default allReducers;
