import React, { useEffect, useState } from 'react';
import './App.css';
import useAbility from './hooks/useAbility'; //Também podemos criar nossos proprios hooks.

function App() {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(5)
  const [pokemonAbilities, setURL] = useAbility() // Chamei o meu hook criado e desestruturei de acordo com o que foi exportado por ele no seu arquivo.
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`

  /*
    O useEffect executa a função que recebe como primeiro parâmetro quando disparado;
    Se não receber um segundo parâmetro, ele executa a função sempre que o componente é atualizado; //  componentDidUpdate
    Se receber um array vazio como segundo parâmetro, ele executa a função somente quando o componente é montado; // componentDidMount
    Quando ele recebe um array com valores dentro, sempre que algum desses valores é alterado, a função é executada; // componentShouldUpdate
    Se ele retorna uma função, essa função é executada quando o componente é desmontado e também antes da próxima renderização. // componentWillUnMout
  */

  useEffect(async () => {
    const { results } = await fetch(URL).then(response => response.json());
    setPokemons(results);

    return () => {}

  }, [limit]);


  const hundleMorePokemons = () => {
    setLimit(limit + 10)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {pokemonAbilities.toString()} {/*Passei os parametros que o hook customizado esperava. */}
        </h1>
        <button type='button' onClick={hundleMorePokemons}>
          Buscar mais pokémons
        </button>
        <ul>
          {
            pokemons.map(({ name, url }) => <li key={name} onClick={() => setURL(url)}>{name}</li>) // Passei os parametros que o hook customizado esperava.
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
