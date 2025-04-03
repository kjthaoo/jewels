import { useState } from "react";
import "./css/Header.css";
import Navigation from "./Navigation";

function Header() {
    // Example list of items to filter
    const exampleData = [
        { id: 1, name: "Pebble 1" },
        { id: 2, name: "Pebble 2" },
        { id: 3, name: "Pebble 3" },
        { id: 4, name: "Gold Pebble" },
        { id: 5, name: "Diamond Pebble" },
        { id: 6, name: "Emerald Pebble" }
    ];

    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [filteredItems, setFilteredItems] = useState([]); // State to store filtered results

    // Filter items based on the search query
    const filterItems = (query) => {
        // Only show results if the query is not empty
        if (query.length > 0) {
            const filtered = exampleData.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered); // Update filtered items state
        } else {
            setFilteredItems([]); // Clear results if query is empty
        }
    };

    // Handle the change in search bar input
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query); // Update search query state
        filterItems(query); // Filter items as the user types
    };

    return (
        <header>
            <h1>Gold Pebbles</h1>
            <Navigation />

            <div id="search-bar-container">
                <form id="search-bar-wrapper" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        id="search-bar"
                        placeholder="Search..."
                        value={searchQuery} // Bind input value to state
                        onChange={handleSearchChange} // Update state on input change
                    />
                </form>

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

            {/* Display filtered results only if there is any input */}
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
