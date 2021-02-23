const INITIAL_STATE = {} //criamos um State inicial vazio pra receber o array com as infos do form.

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) { // Com o Switch passamos os casos em que o reducer vai mandar dados pro store.
    case "ADD_REGISTER": // Sempre usamos a key type da action para identificar a case.
      return {
        ...state, // Passamos o spread operator para manter otros possíveis dados do state e depois o dado que queremos mudar.
        data: action.input
      }
    default: 
    return state;
  }
}