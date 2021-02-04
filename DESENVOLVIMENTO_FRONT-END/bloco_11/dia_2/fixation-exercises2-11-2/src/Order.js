import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;  /* Aqui temos uma desetruturação basica de props que passaremos a usar constantemente daqui pra frente */

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;