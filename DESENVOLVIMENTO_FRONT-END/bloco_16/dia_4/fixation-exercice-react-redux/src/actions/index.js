export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

function requestImage() { // Fazemos as action para os casos que precisaremos.
  return { 
    type: REQUEST_IMAGE // A primeira para quando começar a requisição setarmos o loading através do isFetching.
  };
}

function getImage(json) {
  return { 
    type: GET_IMAGE, // A segunda pra quando a requisição já foi resolvida, então passamos o retorno da promise para o payload.
    payload: json.message 
  };
}

function failedRequest(error) {
  return { 
    type: FAILED_REQUEST, // E a terceira para um possivel caso de erro, então passamos o erro para o payload.
    payload: error 
  };
}

export function fetchDog() {
  return (dispatch) => {  // Quando nos retornamos para a nossa função uma outra função com o parametro dispatch, nesse momentos nos setamos o thunk.
    dispatch(requestImage());  // Aqui nós atualizamos o nosso estado através da function requestImage que tem o type REQUEST_IMAGE, lá no reducer ele vai atualizar o state para isFetching: true.
    return fetch('https://dog.ceo/api/breeds/image/random') // Logo depois fazemos o Fetch normalmente.
      .then((response) => response.json()
        .then(
          (json) => dispatch(getImage(json)), // E fazemos o dispatch do resultado para o reducer.
          (error) => dispatch(failedRequest(error)), // Ou do erro.
        ));
  };
}