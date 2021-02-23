import React from 'react';
import { connect } from 'react-redux'; // Importamos o connect do react-redux.
import selectMovieAction from '../actions/movieActions'; // Importamos a action para usarmos no dispatch.

class Sidebar extends React.Component {
  render() {
    const { categories, selectMovie } = this.props; // Recuperamos as props recebidas pelo mapStateToProps e mapDispatchToProps.
    return (
      <aside>
        {
          categories.map((category) => ( // Aqui fazemos um map no array que estamos recebendo da stor através da props categories recebida pelo mapDispatchToProps.
            <div key={ category.id }>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={ movie.id }>
                      {movie.title}
                      {' '}
                      was released in
                      {' '}
                      {movie.released}
                      <button
                        type="button"
                        onClick={ () => selectMovie(category, movie) } // Aqui fazemos o dispatch da nossa action através da props selectMovie.
                      >
                        Select
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({ // O mapStateToProps pega os dados do store e disponibiliza através de props pra usarmos no componente.
  categories: state.movies.categories, // Aqui setamos a key da prop que queremos chamar e dizemos oq vai ter naquela key.
});

const mapDispatchToProps = (dispatch) => ({ // O mapDispatchToProps disponibiliza as actions para usarmos no componente através de props.
  selectMovie: (category, movie) => dispatch( // Setamos a key para chamarmos através das props.
    selectMovieAction(category, movie), // E colocamos a action para ser usada através da key pelas props.
  ),
});

// store.getState();

// store.dispatch();

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar); // Passamos o connect no export para unirmos o store ao componente.