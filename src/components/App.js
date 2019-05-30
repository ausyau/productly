import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../rootReducer";
import ProductListContainer from "../containers/ProductListContainer";
import CartListContainer from "../containers/CartListContainer";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ProductDetailsContainer from '../containers/ProductDetailsContainer';
import Navbar from "./Navbar"

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/products"
              render={rtProps => <ProductListContainer {...rtProps} />}
            />
            <Route
              exact
              path="/products/:id"
              render={rtProps => <ProductDetailsContainer {...rtProps} />}
            />
            <Route
              exact
              path="/cart"
              render={rtProps => <CartListContainer {...rtProps} />}
            />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/products" />}
            />
            {/* <Route
              render={() => <NotFound />}
            /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
