import React from 'react'

class PalavraChave extends React.Component {
  render() {

    const { value, handleChange } = this.props

    return (
      <label>
        Escolha a palavra chave
        <select 
          name="palavraChave" 
          value={value}
          onChange={handleChange}
        >
          <option value="estado">Estado</option>
          <option value="evento">Evento</option>
          <option value="props">Props</option>
          <option value="hooks">Hooks</option>
        </select>
      </label>  
    )
  }
}

export default PalavraChave;


