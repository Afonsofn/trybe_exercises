import './App.css';
import Image from './Image.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />  {/* Aqui estamos passando as props pra o component Image, as props sao como parametros de funções que podemos recuperar nos arquivos destino e usar-las */}
        </div>
      </header>
    </div>
  );
}

export default App;
