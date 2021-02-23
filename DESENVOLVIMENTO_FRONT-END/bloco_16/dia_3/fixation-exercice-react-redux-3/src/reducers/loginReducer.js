const INITIAL_STATE = {};
  
  const loginReducer = (state = INITIAL_STATE, action) => { // Como padrão passamos para o reducer o state e a action.
    switch (action.type) { // Usamos o Switch para tratar os casos das actions.
    case 'LOGIN':
      return action.value;
    default:
      return state;
    }
  };
  
  export default loginReducer;
  