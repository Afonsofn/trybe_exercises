import { getCurrentISSLocation } from '../services/issAPI'; // Aqui estamos importando a requisição(fetch) para usarmos no thunk.

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION_ERROR = 'REQUEST_ISS_LOCATION_ERROR';

export const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION, // Primeira action para marcar o inicio da requisição mudando o isFetching pra true.
  payload: {
    isFetching: true,
  },
});

export const requestISSLocationSuccess = ({ iss_position: { latitude, longitude } }) => ({ // Aqui estamos desestruturando a resposta da api que vem lá do fetch.
  type: REQUEST_ISS_LOCATION_SUCCESS, // A segunda action que vai ser disparada quando a requisição retoranar com um sucesso.
  payload: {  // Adcionando no payload a localização.
    latitude, 
    longitude, 
    isFetching: false  // E desligando o isFetching/loading.
  },
});

export const requestISSLocationError = (error) => ({
  type: REQUEST_ISS_LOCATION_ERROR, // A terceira action para o caso de dar erro.
  payload: { 
    error, 
    isFetching: false 
  },
});

export const fetchISSLocation = () => (dispatch) => { // Aqui setamos e exportamos a função fetch que vai ser usada no dispatch
  dispatch(requestISSLocation()); // chamamos a primeira action que vai ligar o isFetching.
  getCurrentISSLocation() // Então chamamos o fetch que está linkado por essa função.
    .then((issLocationResponse) => dispatch( // pegamos o resultado com sucesso da requisição  e fazemos o dispatch com a segunda action *continua*
      requestISSLocationSuccess(issLocationResponse), // que coloca a response no payload.
    ))
    .catch((issLocationError) => dispatch( // E pegamos tbm o caso de erro e passamos a terceira action.
      requestISSLocationError(issLocationError),
    ));
};