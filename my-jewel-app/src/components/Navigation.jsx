import {Outlet, Link} from "react-router-dom";
import './css/Navigation.css';
import {useState} from "react";

function Navigation() {
  const {menuOpen, setMenuOpen} = useState(false); //its alwasy the name "menuOpen" then its sets the name "setMenuOpen"

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav id="main-nav">
      <div id="toggle-nav" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul id="nav-items" className={menuOpen?"":"hide-small"}>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/customdesign">Custom Design</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/faqs">FAQS</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
