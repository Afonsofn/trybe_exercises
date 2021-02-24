export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({  // Fazemos as action para os casos que precisaremos.
  type: REQUEST_API // A primeira para quando começar a requisição setarmos o loading através do isLoading.
});

export const getPicture = (data) => ({ 
  type: GET_PICTURE,  // A segunda pra quando a requisição já foi resolvida, então passamos o retorno da promise para o payload.
  data,
});

const ENDPOINT = 'https://aws.random.cat/meow'

export function fetchAPI() {
  return (dispatch) => { // Quando nos retornamos para a nossa função uma outra função com o parametro dispatch, nesse momentos nos setamos o thunk.
    dispatch(requestAPI()) // Aqui nós atualizamos o nosso estado através da function requestImage que tem o type REQUEST_IMAGE, lá no reducer ele vai atualizar o state para isLoading: true.
    return fetch(ENDPOINT) // Logo depois fazemos o Fetch normalmente.
      .then((response) => response.json()
        .then(
          (json) => dispatch(getPicture(json)) // E fazemos o dispatch do resultado para o reducer.
        )
      )
  }
}