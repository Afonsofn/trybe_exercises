import {
  GET_IMAGE,
  REQUEST_IMAGE,
  FAILED_REQUEST,
} from '../actions/index'

const INITIAL_STATE = {
    isFetching: false,
    imagePath: '',
    error: '',
  };
  
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_IMAGE: 
      return { ...state, isFetching: true }; // Aqui temos uma action que vai atualizar o state da store com isFetching: true.
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false }; // Quando o Fetch for resolvido vamos setar os isFetching: false e passar o retorno da promise pra o payload.
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false }; // E também temos um case para o possivel erro que a promise retornar.
    default:
      return state;
  }
}

export default reducer;