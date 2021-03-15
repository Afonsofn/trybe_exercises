import React from 'react';
import ISSContext from './ISSContext'; // Importamos o context.
import { getCurrentISSLocation, getPeopleInSpace } from '../services/issAPI'; // Importamos as chamadas de requisição.

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      isFetching: false,
      showMap: true,
      peopleInSpace: [],
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.fetchPeopleInSpace = this.fetchPeopleInSpace.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
  }

  fetchISSLocation() {
    // seta isFetching pra true
    // fazer a requisicao
    // armazenar o resultado no context

    this.setState({ isFetching: true }, async () => { // Passar um segundo parametro para o setState faz com que sincrono, o segundo parametro so vai rodar quando o primeiro tiver sido terminado.
      const { iss_position: { latitude, longitude } } = await getCurrentISSLocation(); // Chamada pra localização da estação.
      this.setState({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        isFetching: false,
      });
    });
  }

  fetchPeopleInSpace() {
    this.setState({ isFetching: true }, async () => {
      const { people } = await getPeopleInSpace(); // Chamada para a quantidade de pessoas no espaco
      this.setState({
        peopleInSpace: people,
        isFetching: false,
      });
    });
  }

  toggleMap() {
    this.setState(({ showMap }) => ({ showMap: !showMap })); // Essa sintaxe de item: !item, é boa pra botão de on off.
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={ { // Passamos os valores para o componente generico.
          ...this.state,
          fetchISSLocation: this.fetchISSLocation,
          fetchNumberOfPeopleInSpace: this.fetchNumberOfPeopleInSpace,
          toggleMap: this.toggleMap,
          fetchPeopleInSpace: this.fetchPeopleInSpace,
        } }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
