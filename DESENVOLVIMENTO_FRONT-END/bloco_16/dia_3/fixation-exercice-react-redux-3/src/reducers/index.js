import { combineReducers } from 'redux'; // Importamos o combineReducers do redux para unir os reducers.
import login from './loginReducer'; // Importamos os nossos reducers.
import addRegister from './signUpReducer'

export default combineReducers({ login, addRegister });

// Usamos esse arquivo index do reducer para combinarmos todos os possíveis reducers num local só, usando o combineReducers.
