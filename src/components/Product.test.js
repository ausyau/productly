import React from 'react';
import Product from './Product';
import { shallow, mount } from "enzyme";

it('renders without crashing', function() {
  shallow(<Product/ >);
});