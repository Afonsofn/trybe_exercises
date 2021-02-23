import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Importamos o Provider do react-redux.
import App from './App';
import store from './store'; // Importamos o store.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* E passamos o store pro Provider, que encapsula o app. */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
