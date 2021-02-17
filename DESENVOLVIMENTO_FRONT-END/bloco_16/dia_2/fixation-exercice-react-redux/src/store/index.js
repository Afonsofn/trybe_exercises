import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/index'

const rootReducer = combineReducers({ listReducer })  // Por boas praticas msm que nao tenha mais que um reducer sempre usamos o combineReducer

const store = createStore(rootReducer);

export default store;