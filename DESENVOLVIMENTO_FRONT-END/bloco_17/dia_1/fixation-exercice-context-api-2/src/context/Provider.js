import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarsContext from './CarsContext'; // Importamos o context

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = { // Setamos o stado inicial da aplicação
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) { // Setamos a função que iremos precisar
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render() {
    const context = { // Criamos um objeto com o que queremos disponibilizar para os outros componentes
      ...this.state,
      moveCar: this.moveCar,
    };

    const { children } = this.props; // Chamamos o children para deixar esse provider genérico para qqr componente usar.

    return (
      <CarsContext.Provider value={context}> {/* Passamos o objeto que criamos para o provider. */}
        {children} {/* Passamos o children para para o provider */}
      </CarsContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;