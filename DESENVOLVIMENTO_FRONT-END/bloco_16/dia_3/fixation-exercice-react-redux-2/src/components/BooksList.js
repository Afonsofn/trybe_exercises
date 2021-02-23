import React from 'react';
import { connect } from 'react-redux'; // Importamos o conect par conectar o React com o Redux.
import books from '../products'; // Importamos os dados do arquivo products.
import addItemToCartAction from '../actions'; // Importamos a action para fazermos os dispatchs.

class BooksList extends React.Component {
  render() {
    const { addItemToCart } = this.props; // Resgatamos o dispatch que fizemos com a action addItemToCartAction através da props addItemToCart que setamos no mapDispatchToProps.
    return (
      <>
        <h1>Lista de livros</h1>
        <ul>
          {books.map((book) => ( // Fazemos um map nos dados do products.
            <li key={ book.name }>
              {book.name}
              {' '}
              -
              {' R$'}
              {book.price}
              <button
                type="button"
                onClick={ () => addItemToCart(book) } // Fazemos o dispatch através do click do button.
              >
                Adicionar
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ // O mapDispatchToProps disponibiliza as actions para usarmos no componente através de props.
  addItemToCart: (item) => dispatch( // Setamos a key para chamarmos através das props.
    addItemToCartAction(item) // E colocamos a action para ser usada através da key pelas props.
  ),
});

export default connect(null, mapDispatchToProps)(BooksList); // Passamos o connect no export para unirmos o store ao componente.