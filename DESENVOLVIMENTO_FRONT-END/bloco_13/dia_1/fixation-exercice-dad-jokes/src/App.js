import React from 'react'

/* AQUI TEM UM RESUMO SOBRE OS ESTADOS DOS COMPONENTES => https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ */

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: []
    };
  }

  fetchJoke() {
    this.setState(  /* O setState te permite passar um segundo parametro, isso nos ajuda a fazer uma logica de loading */
      { loading: true },  /* Esse é o primeiro parametro, passamos o loading: true pra ele fazendo o loading aparecer na tela */
      () => {   /* Aqui vem o segundo parametro */
        const requestHeaders = { headers: { Accept: 'application/json' } }
        fetch(`https://icanhazdadjoke.com/`, requestHeaders)
          .then(response => response.json())
          .then(object => {
            this.setState({
              loading: false, /* aqui quando a requisição já terminou eu passo o loading: false pra fazer ele sumir e aparecer a piada */
              jokeObj: object
            })
          })
      }
    )
  }

  componentDidMount() {   /* dispara uma ou mais ações após o componente ser inserido no DOM pelo Render (ideal para requisições); */
    this.fetchJoke()
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar Piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state
    const loadingElement = <span>Loading...</span>

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <p>{loading ? loadingElement : this.renderJokeElement()}</p>  {/* Essa logica de loading é pra eu levar pro resto da vida, eu crio um loadingElement e digo que sempre que ele for true ele deve aparecer, nesse caso ele só vai ser false depois que chegar no segundo parametro do setState do fetchJoke. */}

      </div>
    )
  }
}

export default DadJoke;
