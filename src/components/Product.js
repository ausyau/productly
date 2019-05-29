import React, { Component } from 'react';

export default class Product extends Component {

  render() {
    return (
      <div>
        <p> Name: {this.props.name} Price: ${this.props.price} </p>
        <button onClick={() => this.props.addToCart(this.props.id) }>Add to Cart</button>
        <button onClick={() => this.props.removeFromCart(this.props.id) }>Remove from Cart</button>
      </div>
    );
  }
}
