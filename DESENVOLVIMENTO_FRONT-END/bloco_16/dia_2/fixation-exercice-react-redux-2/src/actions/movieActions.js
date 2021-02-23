import SELECT_MOVIE from './index'; // Importamos esse SELECT_MOVIE para usarmos só como forma de não escrever o nome errado e não percebermos.

export default function selectMovie(selectedCategory, selectedMovie) { // Essa é a sintaxe padrão da action.
  return {
    type: SELECT_MOVIE,
    payload: {
      selectedCategory,
      selectedMovie,
    },
  };
}