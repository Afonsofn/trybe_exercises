import React from 'react';
import { connect } from 'react-redux'; // Importamos o conect par conectar o React com o Redux.
import addRegister from './actions/index'; // Importamos a action para fazermos os dispatchs.

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {  // Setamos um state local para depois mandarmos o todas as informações referente a esse form de uam vez só.
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      resume: '',
      role: '',
      roleDescription: '',
      hasEntered: false
    }
  }

  handleChange(event) { // Uma função com a lógica de subir os dados dos inputs para o state.
    let { name, value } = event.target

    if (name === "nome") value = value.toUpperCase()
    if (name === "endereço") value = value.replace(/[^\w\s]/gi, '')

    this.setState({
        [name]: value
    })
  }

  validateRegister = () => {  // pq esse modo de function funcionou e esse nao => validateRegister() {}
    const { // Aqui temos a função que recupera os dados do state local.
      nome,
      email,
      cpf,
      endereço,
      cidade,
      estado,
      resume,
      role,
      roleDescription,
      hasEntered,
     } = this.state;

    this.props.addRegister({  // Depois fazemos um dispatch com esses dados para a store através do addRegister que setamos no mapDispatchToProps.
      nome,
      email,
      cpf,
      endereço,
      cidade,
      estado,
      resume,
      role,
      roleDescription,
      hasEntered,
     });
     
    this.setState({ // E por fim limpamos o state para um novo Form.
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      resume: '',
      role: '',
      roleDescription: '',
      hasEntered: '',
    });
  };


  render() {

    return (
      <div>
        Formulário de Curriculo
        <fieldset>
          <label>
            Nome
            <input
              name="nome"
              type="text"
              maxLength="40"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="text"
              maxLength="50"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            CPF
            <input
              name="cpf"
              type="number"
              maxLength="11"
              required
              value={this.state.cpf}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Endereço
            <input
              name="endereço"
              type="text"
              maxLength="200"
              required
              value={this.state.endereço}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Cidade
            <input
              name="cidade"
              type="text"
              maxLength="28"
              required
              value={this.state.cidade}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Estado
            <select
              name="estado"
              required
              value={this.state.estado}
              onChange={this.handleChange}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>  
            </select>
          </label>
        </fieldset>
        <fieldset>
            <legend>Dados profissionais:</legend>
              <div className="container">
                Resumo do currículo:
                <textarea
                  name="resume"
                  maxLength="1000"
                  required
                  value={this.state.resume}
                  onChange={this.handleChange}
                />
              </div>
              <label>
          </label>
              <div className="container">
                Cargo:
                <input
                  type="text"
                  name="role"
                  maxLength="40"
                  required
                  value={this.state.role}
                  onChange={this.handleChange}
                  onClick={() => {
                    alert('Preencha com cuidado esta informação.');
                  }}
                />
              </div>
              <div className="container">
                Descrição do cargo:
                <textarea
                  name="roleDescription"
                  maxLength="500"
                  value={this.state.roleDescription}
                  onChange={this.handleChange}
                />
              </div>
            </fieldset>
            <button onClick={this.validateRegister}>Registrar</button> {/* Adcionamos um button para enviar os dados do state local pra a store atravś do dispatch */}
      </div>
    )

  }
}

const mapDispatchToProps = dispatch => ({ // O mapDispatchToProps disponibiliza as actions para usarmos no componente através de props.
  addRegister: (formulario) => dispatch( // Setamos a key para chamarmos através das props.
    addRegister(formulario) // E colocamos a action para ser usada através da key pelas props.
  )
});

const mapStateToProps = state => ({ // O mapStateToProps pega os dados do store e disponibiliza através de props pra usarmos no componente.
  userLogin: state.loginReducer // Aqui setamos a key da prop que queremos chamar e dizemos oq vai ter naquela key.
});

export default connect(mapStateToProps, mapDispatchToProps)(Form); // Passamos o connect no export para unirmos o store ao componente.