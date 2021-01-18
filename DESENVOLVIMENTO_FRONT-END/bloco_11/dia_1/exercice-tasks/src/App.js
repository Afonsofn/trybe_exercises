import './App.css';

const task = (value) => {   /* Uma função que retorna uma li com o parametro como value */
  return (
    <li>{value}</li>
  );
}

const compromissos = ['JavaScript', 'HTML', 'CSS']  /* A declaração de array pra manipularmos no JSX */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {compromissos.map((item) => task(item))} {/* Aqui estamos fazendo um map no array de cima e passando os itens na função task, renderizando nesse "p" */}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
