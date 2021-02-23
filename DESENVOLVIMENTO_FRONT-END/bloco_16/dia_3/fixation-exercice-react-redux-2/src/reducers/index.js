import { combineReducers } from 'redux'; // Importamos o combineReducers do redux para unir os reducers.
import reducer from './cartReducer'; // Importamos os nossos reducers.

export default combineReducers({
  cart: reducer, // E passamos os reducers para o combineReducers.
});

// Usamos esse arquivo index do reducer para combinarmos todos os possíveis reducers num local só, usando o combineReducers.
