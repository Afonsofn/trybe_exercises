import React from 'react'
import CounterDisplay from './CounterDisplay'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("construtor");

  }

  render() {
    console.log("render");
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((previousState) => ({ counter: previousState.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
      </div>
    );
  }
}

export default App;
