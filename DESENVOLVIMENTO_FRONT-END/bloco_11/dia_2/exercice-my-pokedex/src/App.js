import React from 'react'
import './App.css';
import Pokedex from './components/Pokedex'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pokedex</h1>
        </header>
        <Pokedex/>
      </div>
    );
  }
}

export default App;
