import { combineReducers } from 'redux';
import userNameReducer from './userName';
import userColorReducer from './userColor';

const allReducers = combineReducers({
  userName: userNameReducer,
  userColor: userColorReducer,
});

export default allReducers;
