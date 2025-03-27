import {Outlet, Link} from "react-router-dom";
import './css/Navigation.css';

function Navigation() {
    return (
        <nav id="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/customdesign">Custom Design</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/faqs">FAQS</Link></li>
            </ul>
        </nav>

    );
};

export default Navigation;