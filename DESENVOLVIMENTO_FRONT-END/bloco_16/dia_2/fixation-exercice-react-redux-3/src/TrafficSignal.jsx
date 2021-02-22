import React from 'react';
import renderSignal from './renderSignal'
import { connect } from 'react-redux';
import selectColor from './actions/index'

const TrafficSignal = ({ signalColor, changeSignal }) => {
  
  return (
    <div>
      <div className="button-container">
        <button type="button" onClick={ () =>  changeSignal('red') } >Red</button>
        <button type="button">Yellow</button>
        <button type="button">Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({ signalColor: state.signal.signalColor,});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (color) => dispatch(
    selectColor(color),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
