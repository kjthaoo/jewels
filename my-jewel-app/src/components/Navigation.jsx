import { Link } from "react-router-dom";
import './css/Navigation.css';

function Navigation() {
  const toggleNav = () => {
    const navItems = document.getElementById('nav-items');
    navItems.classList.toggle('hide-small');
  };

  return (
    <nav id="main-nav">
      <div id="toggle-nav" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul id="nav-items" className="nav-links hide-small">
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
