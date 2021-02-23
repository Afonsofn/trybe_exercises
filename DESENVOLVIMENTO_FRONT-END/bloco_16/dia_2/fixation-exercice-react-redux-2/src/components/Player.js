import React from 'react'; // Importamos o connect do react-redux.
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { selectedMovie, selectedCategory } = this.props; // Recuperamos as props recebidas pelo mapStateToProps e mapDispatchToProps.
    return (
      <div>
        <h1>
          {selectedMovie.title}
        </h1>
        <h3>
          {selectedCategory.name}
          {' '}
          -
          {' '}
          {selectedMovie.released}
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src={ selectedMovie.link }
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // O mapStateToProps pega os dados do store e disponibiliza através de props pra usarmos no componente.
  selectedMovie: state.movies.selectedMovie, // Aqui setamos a key da prop que queremos chamar e dizemos oq vai ter naquela key.
  selectedCategory: state.movies.selectedCategory,
});

export default connect(mapStateToProps, null)(Player); // Passamos o connect no export para unirmos o store ao componente.
// Sempre temos que passar os dois mapsToProps, se não for usar algum, coloca null.