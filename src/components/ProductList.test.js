import React from 'react';
import ProductList from './ProductList';
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../rootReducer";
import toJson from "enzyme-to-json";

const store = createStore(rootReducer);

it('renders without crashing', function () {
  shallow(<Provider store={store}><ProductList /></Provider>);
});

it('matches snapshot', () => {
  let wrapper = shallow(<Provider store={store}><ProductList /></Provider>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});