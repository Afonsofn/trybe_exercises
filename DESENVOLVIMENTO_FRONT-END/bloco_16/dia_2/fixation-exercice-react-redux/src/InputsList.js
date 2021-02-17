import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from './actions';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' }; // Primeiro, nós estamos definindo um estado interno do componente chamado textValue . Note que, apesar de estarmos usando o Redux , que centraliza os states , caso haja algum estado o qual não necessite navegar entre outros componentes, podemos declará-lo internamente.
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}  // Estamos criando um input para o usuário digitar a tarefa que deseja adicionar. A cada mudança no valor do input, o valor é salvo no estado textValue .
        />
        <button onClick={() => this.props.add(this.state.textValue)}>     {/* Aqui Estamos fazendo o dispatch de fato, recuperando a função add que definimos na linha 28 e passando o textValue para a action dinamicamente */}
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({  // A função mapDispatchToProps é a responsável por disparar fazer o dispatch de uma ação para o reducer .
  add: value => dispatch(addAssignment(value))});  // Ao envês de escrevermos a sintaxe da action aqui, nós importamos a action addAssignment que recebe um value dinamicamente e deixamos essa função pronto para uso atravez da prop add.

export default connect(null, mapDispatchToProps)(InputsList) // Por último, estamos conectando o Redux ao componente. Para isso, precisamos importar o método connect .
// No primeiro parênteses, devem estar presentes os métodos nativos do Redux. Como nesse caso estamos apenas enviando dados, estamos passando apenas o mapDispatchToProps . 
// O null presente no connect é necessário pois ele entende que o primeiro parâmetro deve ser uma função chamada mapStateToProps , que veremos logo a frente.
// No segundo parênteses passamos nosso componente.