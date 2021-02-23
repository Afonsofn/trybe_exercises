const INITIAL_STATE = { // Setamos o state inicial que queremos.
  signalColor: 'red'
}

export default function signalReducer(state = INITIAL_STATE, action) {  // Criamos o reducer que recebe como argumentos o state inicial e a action.
  switch (action.type) { // Com o Switch passamos os casos em que o reducer vai mandar dados pro store.
    case "SELECT_COLOR": // Sempre usamos a key type da action para identificar a case.
      return {
        ...state, // Passamos o spread operator para manter otros possíveis dados do state e depois o dado que queremos mudar.
        signalColor: action.color,
      };
    default:
      return state;  
  }
}