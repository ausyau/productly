import React, { Component } from 'react';

class ProductDetails extends Component {
  render() {
    const { id, name, image_url, price, description } = this.props.product;
    return (
      <div>
        <h2>{name}</h2>
        <img style={{width: "300px"}} src={image_url} alt={name} />
        <p>{price}</p>
        <p>{description}</p>
        <button className="btn btn-primary mt-1" onClick={() => this.props.addToCart(id)}>Add to Cart</button><br/>
        <button className="btn btn-primary mt-1" onClick={() => this.props.removeFromCart(id)}>Remove from Cart</button>
      </div>
    );
  }
}

export default ProductDetails;
