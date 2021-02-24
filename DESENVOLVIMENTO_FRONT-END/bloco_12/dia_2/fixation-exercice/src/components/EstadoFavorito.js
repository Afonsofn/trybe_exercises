import React from 'react'

class EstadoFavorito extends React.Component {
  render() {

    const { value, handleChange, handleErrors } = this.props
    
    let error = undefined
    if (value.length > 120) error = "Texto muito grande"  /* Defino as condições do erro */
    /* if (error !== undefined) handleErrors() */  /* Se o erro for levantado eu chamo a função handleErrors que coloca um true no state dos erros no componente pai */

    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea 
          name="estadoFavorito" 
          value={value} /* Aqui eu declaro que o value dele é oq está no state */
          onChange={handleChange}   /* A junção dessa função onChange no state, faz com que ao ir digitando já vai sendo adcionado dinamicamente */
        />
        <span>{error === undefined ? "" : error }</span>  {/* Aqui estou passando que se o error for diferente de undefined é pra renderizar a msg de erro */}
      </label>
    )
  }
}

export default EstadoFavorito;
