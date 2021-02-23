import { createStore } from 'redux'; // Importamos o a função createStore do redux para criarmos a store.
import rootReducer from '../reducers/index' // Damos esse de rootReducer nome por convenção pra o arquivo que contem o combineReducers.

export default createStore(
  rootReducer, // Passamos o rootReducer pra o store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // essa linha habilita nos usarmos o Redux Dev Tools no chrome
);
