import React, { Component } from 'react';

class CartListItem extends Component {

  render() {
    const { id, name, price, quantity } = this.props;
    return (
      <div style={{margin: "10px", padding: "10px", outline: "1px solid #333"}}>
        <div>{name}</div>
        <div>{price}</div>
        <div>{quantity}</div>
        <button className="btn btn-primary mt-1" onClick={() => this.props.removeFromCart(id)}>Remove</button>
      </div>
    );
  }
}

export default CartListItem;