import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.addToCart=this.addToCart.bind(this);
    this.removeFromCart=this.removeFromCart.bind(this);
  }
  
  addToCart(id) {this.props.addToCart(id)}
  removeFromCart(id) {this.props.removeFromCart(id)}

  render() {
    let products = Object.entries(this.props.products);
    let total = this.props.cart.reduce((accumulator, item) => {
      return accumulator += item.price;
    }, 0);
    return (
      <div>
        <h1>Product List</h1>
        <div className="product-list">
          {products.map(item =>
            <Product key={item[0]} id={item[0]} {...item[1]} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
          )}
        </div>
        <h3>Total: ${parseFloat(Math.round(total * 100) /100).toFixed(2)}</h3>
      </div>
    );
  }
}

export default ProductList;
