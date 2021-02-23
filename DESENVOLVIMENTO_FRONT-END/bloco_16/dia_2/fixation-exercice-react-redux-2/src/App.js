import React from 'react';
import { Provider } from 'react-redux'; // Importamos o Provider do react-redux.
import Sidebar from './components/Sidebar'; // Importamos os componentes.
import Player from './components/Player';
import Header from './components/Header';
import store from './store'; // Importamos o store.

import './index.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }> {/* E passamos o store pro Provider, que encapsula o app. */}
        <Header />
        <main className="main">
          <Player />
          <Sidebar />
        </main>
      </Provider>
    );
  }
}

export default App;
