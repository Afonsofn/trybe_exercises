import React from 'react'

class Idade extends React.Component {
  render() {

    const { value, handleChange, handleErrors } = this.props
    
    let error = undefined
    if (value > 150 ) error = "Idade errada"
    /* if (error !== undefined) handleErrors() */  /* Se o erro for levantado eu chamo a função handleErrors que coloca um true no state dos erros no componente pai */
    
    return (
      <label>
        Digite sua idade:
        <input
          type="number"
          name="idade"
          value={value}
          onChange={handleChange}
        />
        <span>{error === undefined ? "" : error }</span>
      </label>
    )
  }
}

export default Idade;