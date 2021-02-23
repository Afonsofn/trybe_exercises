import { combineReducers } from 'redux' // Importamos o combineReducers do redux para unir os reducers.
import formReducer from './formReducer' // Importamos os nossos reducers.

export default combineReducers({
    form: formReducer// E passamos os reducers para o combineReducers.
})

// Usamos esse arquivo index do reducer para combinarmos todos os possíveis reducers num local só, usando o combineReducers.