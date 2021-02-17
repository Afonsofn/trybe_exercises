import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({  // A função mapStateToProps mapeia as entidades armazenadas nos estados para uma props .
  list: state.listReducer});         // As estruturas dos métodos mapStateToProps e mapDispatchToProps sempre serão as mesmas, só muda se iremos disparar um dispatch ou se vamos acessar alguma coisa

export default connect(mapStateToProps)(List); // Por último, conectamos o Redux ao componente, fazendo uso do connect .
// Como no caso estamos fazendo apenas leitura dos dados, basta passar a função mapStateToProps no primeiro parênteses e o componente no segundo.