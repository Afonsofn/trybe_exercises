
import React from 'react';
import { connect } from 'react-redux'; // Importamos o conect par conectar o React com o Redux.
import { addRegister } from '../actions/index'; // Importamos a action para fazermos os dispatchs.
import { Link } from 'react-router-dom';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {  // Setamos um state local para depois mandarmos o todas as informações referente a esse form de uam vez só.
      nome: '',
      idade: '',
      email: '',
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
      nome,
      idade,
      email,
     } = this.state;

    this.props.addRegister({  // Depois fazemos um dispatch com esses dados para a store através do addRegister que setamos no mapDispatchToProps.
      nome,
      idade,
      email,
     });
     
    this.setState({ // E por fim limpamos o state para um novo Form.
      nome: '',
      idade: '',
      email: '',
    });
  };

  render() {
    return (
      <div>
        <label>
            Nome:
            <input
              name="nome"
              type="text"
              maxLength="50"
              placeholder="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Idade:
            <input
              name="idade"
              type="number"
              placeholder="idade"
              maxLength="50"
              value={this.state.idade}
              onChange={this.handleChange}
            />
          </label>
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
          <button onClick={this.validateRegister}>Registrar Cliente</button>
          <Link to="/Clients">Ver clientes cadastrados</Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ // O mapDispatchToProps disponibiliza as actions para usarmos no componente através de props.
  addRegister: (formulario) => dispatch( // Setamos a key para chamarmos através das props.
    addRegister(formulario) // E colocamos a action para ser usada através da key pelas props.
  )
});

export default connect(null, mapDispatchToProps)(SignUpPage); // Passamos o connect no export para unirmos o store ao component.