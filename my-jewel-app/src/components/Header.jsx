import { useState } from "react";
import "./css/Header.css";
import Navigation from "./Navigation";
import { Link } from 'react-router-dom';

function Header() {
    // my filter/search bar
    const exampleData = [
        { id: 1, name: "Gold Bracelet", link: "/shop" },
        { id: 2, name: "3D Jewelry" },
        { id: 3, name: "Gold Starlight" },
        { id: 4, name: "Poweder Moon" },
        { id: 5, name: "Recycled Metal Jasmine" },
        { id: 6, name: "Silver Feathered" },
        { id: 7, name: "Gold Twist" },
        { id: 8, name: "Iridescent Bloom" },
        { id: 9, name: "TerraLace" },
        { id: 10, name: "Ceramic Whisper" },
        { id: 11, name: "Timeless Green" },
        { id: 12, name: "Starlit Shards" },
        { id: 13, name: "Gossamer Garden" },
        { id: 14, name: "Ethereal Links" },
        { id: 15, name: "Moonlit Pearls" },
        { id: 16, name: "Recycled Materials" },
        { id: 17, name: "Recycled Metals" },
        { id: 18, name: "Gold" },
        { id: 19, name: "Silver" },
        { id: 20, name: "Plastic" },
        { id: 21, name: "Resin" },
        { id: 22, name: "Pearl" },
        { id: 23, name: "Clay" },
        { id: 24, name: "Ceramic" },
        { id: 25, name: "Glass" }
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const filterItems = (query) => {
        if (query.length > 0) {
            const filtered = exampleData.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        filterItems(query);
    };

    return (
        <header>
            <h1><Link to="/">Gold Pebbles</Link></h1>            
            <Navigation />

            <div id="search-bar-container">
                <form id="search-bar-wrapper" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        id="search-bar"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </form>

                <div className="icon-container">
                    <a href="#"><span className="material-icons">favorite</span></a>
                    <a href="#"><span className="material-icons">account_circle</span></a>
                    <a href="#"><span className="material-icons">shopping_cart</span></a>
                </div>
            </div>
            {searchQuery.length > 0 && (
                <div id="search-results">
                    {filteredItems.length > 0 ? (
                        <ul>
                            {filteredItems.map((result) => (
                                <li key={result.id}>{result.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}
        </header>
    );
}

export default Header;
