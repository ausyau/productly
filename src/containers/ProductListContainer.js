import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import ProductList from "../components/ProductList";

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  };
}

const mapDispatchToProps = {
  addToCart, removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
