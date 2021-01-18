import React, { Component } from 'react'
import EstadoFavorito from './components/EstadoFavorito';
import Idade from './components/Idade';
import PalavraChave from './components/PalavraChave';
import VaiComparecer from './components/VaiComparecer';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      palavraChave: '',
      formularioComErros: undefined
    };
  }

  handleErrors() {   
    this.setState({
      formularioComErros: true
    });
  }

  handleChange(event) {   /* O event.target retorna informaçẽs do elemento que chamou ele */
    const { target } = event /* event.target */
    const { name } = target  /* event.target.name */  /* event.target.value mostra o que está sendo escrito no textArea */
    const value = target.type === "checkbox" ? target.checked : target.value  /* Aqui eu to fazendo uma condição que, se que chamar essa função tiver o tipo checkbox eu retorno uma coisa, se nao tiver eu retono outra */
    this.setState({
      [name]: value  /* Quando eu quiser que o nome da chave do objeto seja dinamico eu passo esse "[]" pra ele entender que é uma variavel. */
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} handleErrors={this.handleErrors} />   {/* Por aqui estou passando com props pra o componente filho tanto o valor do que o state receber como a função que adciona valor no state do pai */}
          <Idade value={this.state.idade} handleChange={this.handleChange} handleErrors={this.handleErrors} />   {/* Dessa forma o codigo fica muito mais limpo e organizado */}
          <VaiComparecer value={this.state.vaiComparecer} handleChange={this.handleChange} />
          <PalavraChave value={this.state.palavraChave} handleChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Form;