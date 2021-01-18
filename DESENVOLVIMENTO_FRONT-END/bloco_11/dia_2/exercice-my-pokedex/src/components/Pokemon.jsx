import React from 'react'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {

  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokem  /* desestruturando as props para usar elas mais facilmente */
    return (
      <div className="main-pokemon-card">
        <div>
          <p className="poke-info">{name}</p>
          <p className="poke-info">{type}</p>
          <p className="poke-info">{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={moreInfo} className="poke-img" />
      </div>
    )
  }
}
  Pokemon.propTypes = {  /* Aqui tem um modelo bom pra entender como funciona os Proptypes */
      pokem: PropTypes.shape({   /* Nesse link dá pra tirar todas as duvidas https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html */
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          averageWeight: PropTypes.shape({  /* Com o .shape() se diz a forma que vai ser, nesse caso um objeto "{}" com as info a seguir */
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired
          }),
          image: PropTypes.string.isRequired,
          moreInfo: PropTypes.string.isRequired
      }).isRequired
  }
export default Pokemon;
