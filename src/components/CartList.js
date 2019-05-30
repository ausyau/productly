import React, { Component } from 'react';
import CartListItem from "./CartListItem";

class CartList extends Component {

  removeFromCart = (id) => this.props.removeFromCart(id);

  renderList() {
    
    let freq = {}
    this.props.cart.forEach(item => {
      if (freq[item.name]) {
        freq[item.name].quantity++;
      } else {
        freq[item.name] = {...item, quantity: 1};
      }
    });
    return (
      <div>
        {Object.values(freq).map(val =>
          <CartListItem key={val.id} {...val} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />
        )}
      </div>
    );
  }

  render() {
    let total = this.props.cart.reduce((accumulator, item) => {
      return accumulator += item.price;
    }, 0);
    return (
      <div>
        {this.renderList()}
        <h2>Total: ${parseFloat(Math.round(total * 100) / 100).toFixed(2)}</h2>
      </div>
    );
  }
}

export default CartList;
