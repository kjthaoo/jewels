import { Link } from "react-router-dom";
import './css/Navigation.css';
import { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="main-nav">
      <div id="toggle-nav" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/customdesign" onClick={() => setMenuOpen(false)}>Custom Design</Link></li>
        <li><Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        <li><Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQS</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
