import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const composeWithDevTools = ( // Isso aqui é uma sintaxe pra fazer funcionar o Dev tools com o applyMiddleware.
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : (...args) => {
      if (args.length === 0) return undefined;
      if (typeof args[0] === 'object') return compose;
      return compose(...args);
    }
);

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;