import userNameReducer from './userName';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  userName: userNameReducer,
});

export default allReducers;
