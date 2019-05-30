import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import CartList from "../components/CartList";

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  };
}

const mapDispatchToProps = {
  addToCart, removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
