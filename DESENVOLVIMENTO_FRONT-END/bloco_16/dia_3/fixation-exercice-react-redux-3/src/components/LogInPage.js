import React from 'react';
import { connect } from 'react-redux'; // Importamos o conect par conectar o React com o Redux.
import { login } from '../actions/index'; // Importamos a action para fazermos os dispatchs.
import { Link } from 'react-router-dom';

class LogInPage extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {  // Setamos um state local para depois mandarmos o todas as informações referente a esse form de uam vez só.
      email: '',
      senha: '',
    }
  }

  handleChange(event) { // Uma função com a lógica de subir os dados dos inputs para o state.
    let { name, value } = event.target

    this.setState({
        [name]: value
    })
  }

  validateRegister = () => {  // pq esse modo de function funcionou e esse nao => validateRegister() {}
    const { // Aqui temos a função que recupera os dados do state local.
      email,
      senha,
     } = this.state;

    this.props.login({  // Depois fazemos um dispatch com esses dados para a store através do addRegister que setamos no mapDispatchToProps.
      email,
      senha,
     });
     
    this.setState({ // E por fim limpamos o state para um novo Form.
      email: '',
      senha: '',
    });
  };

  render() {
    return (
      <div>
        <label>
            Email:
            <input
              name="email"
              type="text"
              maxLength="50"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Senha:
            <input
              name="senha"
              type="passowrd"
              placeholder="senha"
              maxLength="50"
              value={this.state.senha}
              onChange={this.handleChange}
            />
          </label>
          <Link 
            to="/Clients"
            onClick={this.validateRegister}
          >
            Entrar
          </Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ // O mapDispatchToProps disponibiliza as actions para usarmos no componente através de props.
  login: (formulario) => dispatch( // Setamos a key para chamarmos através das props.
    login(formulario) // E colocamos a action para ser usada através da key pelas props.
  )
});

export default connect(null, mapDispatchToProps)(LogInPage); // Passamos o connect no export para unirmos o store ao component.