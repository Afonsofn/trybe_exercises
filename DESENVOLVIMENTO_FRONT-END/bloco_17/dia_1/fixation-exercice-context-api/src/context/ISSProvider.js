import React from 'react';
import ISSContext from './ISSContext'; // Chamamos o context
import { getCurrentISSLocation } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {  // Setamos o state inicial da nossa aplicação
      latitude: 10,
      longitude: 10,
      error: null,
      isFetching: false,
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
  }

  fetchISSLocation() { // função que chama o fetch e coloca os resultados na store
    // seta isFetching pra true
    // fazer a requisicao
    // armazenar o resultado no context

    this.setState({ isFetching: true }, async () => { // quando passamos o segundo parametro para o setState ele so resolve o segundo quando o primeiro for resolvido.
      const { iss_position: { latitude, longitude } } = await getCurrentISSLocation();
      this.setState({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        isFetching: false,
      });
    });
  }

  render() {
    const { children } = this.props; // chamamos o metodo children que resolve o problema de termos um componente generico sendo chamado pelo provider.
    return (
      <ISSContext.Provider // Com o context importados chamamos o provider pra prover o state pra os componentes q passarmos como children.
        value={ { ...this.state, fetchISSLocation: this.fetchISSLocation } }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;