import {Outlet, Link} from "react-router-dom";
import './css/Footer.css';

function Footer() {
    return (
        <footer id="main-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Gold Pebbles</h3>
                    <p>Timeless, sustainable jewelry crafted with purpose.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/customdesign">Custom Design</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <span className="material-icons">facebook</span>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <span className="material-icons">instagram</span>
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <span className="material-icons">tiktok</span>
                        </a>
                    </div>
                </div>
            </div>
            <p className="footer-bottom">&copy; Gold Pebbles | 2025</p>
        </footer>
    );
}

export default Footer;
