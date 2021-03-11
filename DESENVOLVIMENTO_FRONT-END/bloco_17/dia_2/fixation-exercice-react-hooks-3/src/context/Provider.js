import PropTypes from 'prop-types';
import React, { useState } from 'react'; // Importamos a hook do state
import CarsContext from './CarsContext'; // Importamos o context

function Provider({ children }) {
  const [state, setState] = useState({ // Setamos o state
    red: false,
    blue: false,
    yellow: false,
  })

  const moveCar = (car, side) => { // Função para mudar o carro de direção
    setState({
      ...state,
      [car]: side,
    });
  };

  const context = { // Objeto com tudo que vamos prover para os components
    ...state,
    moveCar: moveCar,
  };

  return (
    <CarsContext.Provider value={context}> {/* Setamos o provider */}
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
