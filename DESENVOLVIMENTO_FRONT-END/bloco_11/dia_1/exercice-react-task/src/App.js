import React from 'react'
import logo from './logo.svg';
import './App.css';

const tasks = ['JavaScript', 'HTML', 'CSS']  /* A declaração de array pra manipularmos no JSX */

class App extends React.Component {

  taskLi(value) {   /* Uma função que retorna uma li com o parametro como value */
    return <li>{value}</li>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tasks</h2>
          <p>
          {tasks.map((task) => this.taskLi(task))} {/* Aqui estamos fazendo um map no array de cima e passando os itens na função task, renderizando nesse "p" */}
        </p>
        </header>
      </div>
    );
  }
}

export default App;
