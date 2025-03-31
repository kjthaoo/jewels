import {Outlet, Link} from "react-router-dom";
import "./css/Header.css";
import Navigation from "./Navigation";

function Header() {
    return (
        <header>
            <Link to="/">
                <h1>Gold Pebbles</h1>
            </Link>

            <div id="search-bar-container">
                <div id="search-bar-wrapper">
                    <input
                        type="text"
                        id="search-bar"
                        placeholder="Search..." />
                </div>
                <div className="social-icons">
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
            
            <Navigation />
        </header>
    );
}

export default Header;
