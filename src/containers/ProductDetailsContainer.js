import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import ProductDetails from "../components/ProductDetails";

function mapStateToProps(state, ownProps) {
  return {
    product: {
      id: ownProps.match.params.id,
      ...state.products[ownProps.match.params.id]
    }
  };
}

const mapDispatchToProps = {
  addToCart, removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
