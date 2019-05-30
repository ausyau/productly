import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    return (
      <div className="card" style={{maxWidth: "300px", margin: "10px"}}>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <Link to={`/products/${this.props.id}`}><button className="btn btn-primary mt-1">Product Details</button></Link><br/>
            <button className="btn btn-primary mt-1" onClick={() => this.props.addToCart(this.props.id)}>Add to Cart</button><br/>
            <button className="btn btn-primary mt-1" onClick={() => this.props.removeFromCart(this.props.id)}>Remove from Cart</button>
          </div>
      </div>
    );
  }
}

export default Product;
