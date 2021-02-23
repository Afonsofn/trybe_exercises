import React from 'react';
import renderSignal from './renderSignal'
import { connect } from 'react-redux'; // Importamos o connect do react-redux.
import selectColor from './actions/index' // Importamos a action para usarmos no dispatch.

const TrafficSignal = ({ signalColor, changeSignal }) => { // No componente funcional disponibilizamos as props por aqui.
  
  return (
    <div>
      <div className="button-container">
        <button type="button" onClick={ () =>  changeSignal('red') }>Red</button>  {/* Aqui fazemos o dispatch da nossa action através da props changeSignal. */}
        <button type="button" onClick={ () =>  changeSignal('yellow') }>Yellow</button>
        <button type="button" onClick={ () =>  changeSignal('green') }>Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" /> {/* Chamamos o signalColor do store atravez da Função que criamos. */}
    </div>
  );
}

const mapStateToProps = (state) => ({ // O mapStateToProps pega os dados do store e disponibiliza através de props pra usarmos no componente.
  signalColor: state.signal.signalColor, // Aqui setamos a key da prop que queremos chamar e dizemos oq vai ter naquela key.
});

const mapDispatchToProps = (dispatch) => ({ // O mapDispatchToProps disponibiliza as actions para usarmos no componente através de props.
  changeSignal: (color) => dispatch( // Setamos a key para chamarmos através das props.
    selectColor(color), // E colocamos a action para ser usada através da key pelas props.
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal); // Passamos o connect no export para unirmos o store ao componente.
