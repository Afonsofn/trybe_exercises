import categoriesData from '../data'; // Importamos o data pra usarmos no store.
import SELECT_MOVIE from '../actions/index'; // Importamos esse SELECT_MOVIE para usarmos só como forma de não escrever o nome errado e não percebermos.

const INITIAL_STATE = { // Setamos o state inicial que queremos.
  selectedCategory: {},
  selectedMovie: {},
  categories: categoriesData,
};

export default function movieReducer(state = INITIAL_STATE, action) { // Criamos o reducer que recebe como argumentos o state inicial e a action.
  switch (action.type) { // Com o Switch passamos os casos em que o reducer vai mandar dados pro store.
  case SELECT_MOVIE: // Sempre usamos a key type da action para identificar a case.
    return {
      ...state, // Passamos o spread operator para manter otros possíveis dados do state e depois o dado que queremos mudar.
      selectedCategory: action.payload.selectedCategory,
      selectedMovie: action.payload.selectedMovie,
    };
  default:
    return state;
  }
}
