import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {    /* O constructor é uma função interna do React, ela é lida antes do Render() */
    super(props) /* A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará */

    this.handleClick1 = this.handleClick1.bind(this) /* Essa função é usada no contructor para podermos acessar o this. dentro de funções que não conseguem enchergar o this. */
    /* Se definir a função com arrow function "minhaFuncao = () => {...}", você não precisará fazer o bind no constructor, mas sua aplicação será menos performática!  */
    this.numeroPar = this.numeroPar.bind(this)
    this.state = {    /* No constructor adcionamos o estado inicial das coisas, e durante o codigo vamos alterando */
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
    console.log("componente sendo construido")
  }

  handleClick1(btn) { /* funções no React não precisam colocar function antes */
    if (btn === 'handleClick1') {
      this.setState((estadoAnterior, _props) => ({             /* Pra alterar o state fora do constructor SEMPRE tem que usar o setState */ 
        numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1  /* Se passar uma callback pra o setState o primeiro parametro sera sempre o state anterior e o segundo parametro são props, podemos colocar o "_" pra dizer q nao vamos usar " */
      }))
      this.numeroPar(this.state.numeroDeCliques1, ".btn1")
    } else if (btn === 'handleClick2') {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
      }))
      this.numeroPar(this.state.numeroDeCliques2, ".btn2")
    } else if (btn === 'handleClick3') {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
      }))
      this.numeroPar(this.state.numeroDeCliques3, ".btn3")
    }   
  }

  numeroPar(numeroDoBotao, classeDoBotao) {
    if (numeroDoBotao & 2 !== 0) {
      document.querySelector(classeDoBotao).classList.add("verde")
    } else {
      document.querySelector(classeDoBotao).classList.remove("verde")
    }
  }

  render() {
    console.log(this) /* O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente, colocando num log a gnt pode ver */
    return (
      <div>
        <button className="btn1" onClick={() => this.handleClick1('handleClick1')}>{this.state.numeroDeCliques1}</button>  {/* para usar uma função dentro do escopo da classe tem que colocar this. */}
        <button className="btn2" onClick={() => this.handleClick1('handleClick2')}>{this.state.numeroDeCliques2}</button>
        <button className="btn3" onClick={() => this.handleClick1('handleClick3')}>{this.state.numeroDeCliques3}</button>
      </div>
    );  
  }
}

export default App;
