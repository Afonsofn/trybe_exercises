import React from 'react';
import { connect } from 'react-redux'; // Importamos o conect par conectar o React com o Redux.

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props; // Recuperamos os dados do store global pela prop cartItem, através do mapStateToProps.
    return (
      <>
        <h1>Meu Carrinho</h1>
        <ul>
          {console.log(cartItems)}
          {cartItems.map((item, index) => <li key={ index }>{item.name}</li>)} {/* Aqui fazemos mapeamos as info que estão dentro do array do store global. */}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ // O mapStateToProps pega os dados do store e disponibiliza através de props pra usarmos no componente.
  cartItems: state.cart.cartItems, // Aqui setamos a key da prop que queremos chamar e dizemos oq vai ter naquela key.
});

export default connect(mapStateToProps)(Cart); // Passamos o connect no export para unirmos o store ao componente.