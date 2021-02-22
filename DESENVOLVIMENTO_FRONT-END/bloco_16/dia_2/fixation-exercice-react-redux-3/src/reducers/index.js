import { combineReducers } from 'redux';
import signalReducer from './signalReducer'

export default combineReducers({
  signal: signalReducer,  
});