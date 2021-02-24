import { // importamos as strings do arquivo das actions
    REQUEST_ISS_LOCATION,
    REQUEST_ISS_LOCATION_ERROR,
    REQUEST_ISS_LOCATION_SUCCESS,
  } from '../actions';
  
  const INITIAL_ISS_LOCATION_STATE = { // Setamos uma localização qqr para ser o state inicial.
    latitude: -19.967279,
    longitude: -44.198689,
  };
  
  const issLocation = ( state = INITIAL_ISS_LOCATION_STATE, { type, payload }, ) => {  // Passamos o state inicial e a action desestruturada para o reducer.
    switch (type) { // E começamos os casos.
    case REQUEST_ISS_LOCATION: // A primeira action para ligar o isFetching.
      return {
        ...state,
        isFetching: payload.isFetching,
      };
    case REQUEST_ISS_LOCATION_SUCCESS: // A segunda para atribuir a resposta da requisição para o state.
      return {
        ...state,
        latitude: parseFloat(payload.latitude),
        longitude: parseFloat(payload.longitude),
        isFetching: payload.isFetching,
      };
    case REQUEST_ISS_LOCATION_ERROR: // E a terceira para os possíveis erros.
      return {
        ...state,
        error: payload.error,
        isFetching: payload.isFetching,
      };
    default:
      return state;
    }
  };
  
  export default issLocation;