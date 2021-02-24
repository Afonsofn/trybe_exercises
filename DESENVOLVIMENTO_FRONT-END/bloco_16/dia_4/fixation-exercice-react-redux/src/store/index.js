import { createStore, applyMiddleware } from 'redux'; // Importamos o applyMiddleware para podermos usar o thunk.
import thunk from 'redux-thunk'; // Importamos o thunk.
import reducer from '../reducers/reducer'

const store = createStore(reducer, applyMiddleware(thunk)); // E passamos o thunk de parâmetro para o applyMiddleware.

export default store;