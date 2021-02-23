import React from 'react';
import { connect } from 'react-redux';
import addRegister from './actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
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

  handleChange(event) {
    let { name, value } = event.target

    if (name === "nome") value = value.toUpperCase()
    if (name === "endereço") value = value.replace(/[^\w\s]/gi, '')

    this.setState({
        [name]: value
    })
  }

  validateRegister = () => {
    const { 
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

    this.props.addRegister({ 
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
     
    this.setState({
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
            <button onClick={this.validateRegister}>Registrar</button>
      </div>
    )

  }
}

const mapDispatchToProps = dispatch => ({
  addRegister: e => dispatch(addRegister(e))});

const mapStateToProps = state => ({
  userLogin: state.loginReducer});

export default connect(mapStateToProps, mapDispatchToProps)(Form);