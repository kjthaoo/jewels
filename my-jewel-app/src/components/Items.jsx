// Items.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const Items = () => {
    const [items, setItems] = useState([]); // State to store the list of items

    // Fetch items data when the component mounts
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/items");
                setItems(response.data); // Set the items state with the fetched data
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        })();
    }, []);

    return (
        <div id="items" className="items-container">
            {items.map((item) => (
                <Item
                    key={item.id}  // Ensure to use a unique key for each item
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                />
            ))}
        </div>
    );
};

export default Items;
