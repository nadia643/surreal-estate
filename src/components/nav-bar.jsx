import React from 'react';
import '../styles/nav-bar.css';

const NavBar = () => (
  <div className="NavBar"> 
    <div className="imageContainer">
      <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-real-estate-house-logo-template-png-image_3555523.jpg" alt="real estate" height="400" width="400" />
    </div>
    <ul className="nav">
      <li className="item"><a href="#">View Properties</a></li>
      <li className="item"><a href="#">Add a Property</a></li>
    </ul>
  </div>
);

export default NavBar;
