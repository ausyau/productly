import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <span className="navbar-brand">SHOPLY</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/products"><span className="nav-link">Products</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart"><span className="nav-link">Cart</span></NavLink>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;