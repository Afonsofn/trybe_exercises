import { combineReducers } from 'redux'; // Importamos o combineReducers do redux para unir os reducers.
import signalReducer from './signalReducer' // Importamos os nossos reducers.

export default combineReducers({
  signal: signalReducer,  // E passamos os reducers para o combineReducers.
});

// Usamos esse arquivo index do reducer para combinarmos todos os possíveis reducers num local só, usando o combineReducers.