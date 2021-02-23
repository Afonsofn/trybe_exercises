import React from 'react'
import Pokemon from './Pokemon';
import data from '../data'


class Pokedex extends React.Component {

  render() {
    return (
      <div className="pokedex">
        {data.map(poke => <Pokemon pokem={poke} />)}  {/* Aqui passamos o arquivo data como parametro pra o componente Pokemon, atravez de um map */}
      </div>
    );
  }
}

export default Pokedex;
