import { REQUEST_API, GET_PICTURE } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  imgURL: '',
  defaultImg: true,
};

function gallery(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API: // Aqui temos uma action que vai atualizar o state da store com isLoading: true.
    return {
      ...state,
      isLoading: true, 
      defaultImg: true,
    };
  case GET_PICTURE:  // Quando o Fetch for resolvido vamos setar os isLoading: false e passar o retorno da promise pra o state.
    return {
      ...state,
      isLoading: false,
      imgURL: action.data,
      defaultImg: false,
    };
  default:
    return state;
  }
}

export default gallery;