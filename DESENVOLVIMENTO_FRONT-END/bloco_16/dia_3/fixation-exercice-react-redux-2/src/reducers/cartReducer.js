const INITIAL_STATE = { // Setamos o nosso stado inicial como um array vazio.
  cartItems: [],
};

const reducer = (state = INITIAL_STATE, action) => { // Como padrão passamos para o reducer o state e a action.
  switch (action.type) { // Usamos o Switch para tratar os casos das actions.
  case 'ADD_ITEM_TO_CART':
    return {
      ...state, // Usamos o spread para conservar os outros dados do store que não iremos mudar nesse momento.
      cartItems: state.cartItems.concat(action.payload.item), // Aqui fazemos uma concatenação dos dados que já existem no cartItems com os novos da action.
    }; // Uma coisa muito importante a ser frisada, nunca podemos alterar o state diretamente, sempre usaremos metodos como o concat que cria um novo array/objeto e atribuimos a nossa key do store.
  default:
    return state;
  }
};

export default reducer;