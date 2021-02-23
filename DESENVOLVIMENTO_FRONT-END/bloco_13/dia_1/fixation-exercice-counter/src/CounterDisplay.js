import React from 'react'

class CounterDisplay extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {   /* possibilita autorizar ou não o componente a atualizar, depedendo do que vc parar como parametro */
    if (nextProps.value % 3 !== 0) return false;  /* Nesse caso só vai atualizar se o resto do valor divido por 3 for 0 */
    return true;
  }
  
  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;
