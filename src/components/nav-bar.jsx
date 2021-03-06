import React from 'react';
import '../styles/nav-bar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="NavBar">
    <div className="imageContainer">
      <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-real-estate-house-logo-template-png-image_3555523.jpg" alt="real estate" height="400" width="400" />
    </div>
    <ul className="nav">
      <Link className="item" to="/">
        <button>View Properties</button>
      </Link>
      <Link className="item" to="/add-property">
        <button>Add a Property</button>
      </Link>

    </ul>
  </div>
);

export default NavBar;
