import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './context/Provider'; // Importamos o provider

ReactDOM.render(
  <Provider> {/* Setamos o provider para a aplicação. */}
    <App />
  </Provider>,
  document.getElementById('root'),
);