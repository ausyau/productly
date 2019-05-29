import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../rootReducer";
import ProductList from "./ProductList";
import './App.css';

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ProductList />
        </div>
      </Provider>
    );
  }
}

export default App;
