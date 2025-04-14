import {useState} from "react";
import {Link} from "react-router-dom";
import './css/Shop.css';
import Item from '../components/Item';
import React, { useEffect } from 'react';

function Shop() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    material: "",
    category: "",
    image: null,
  });

  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      material: formData.material,
      category: formData.category,
      image: formData.image,
    };

    try {
      const form = new FormData();
      Object.entries(newItem).forEach(([key, value]) => {
        form.append(key, value);
      });

      const response = await fetch("http://localhost:3001/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: form,
      });

      if (response.ok) {
        setSuccessMessage("Item added successfully!");
        fetchItems(); // Re-fetch the updated list of items?
        setShowModal(false);
      } else {
        console.error("Failed to add item");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const fetchItems = async () => {
    const response = await fetch("http://localhost:3001/api/items");
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
    <hr className="divider" />
      <h2>SHOP</h2>

      <div id="filters">
        <h3>Filter by</h3>

        {/* Material Filter */}
        <label htmlFor="material">Material:</label>
        <select id="material">
          <option value="all">All</option>
          <option value="recycled-material">Recycled Material</option>
          <option value="recycled-metals">Recycled Metals</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="plastic">Plastic</option>
          <option value="resin">Resin</option>
          <option value="pearl">Pearl</option>
          <option value="clay">Clay</option>
          <option value="ceramic">Ceramic</option>
          <option value="glass">Glass</option>
        </select>

        {/* Category Filter */}
        <label htmlFor="category">Category:</label>
        <select id="category">
          <option value="all">All</option>
          <option value="ring">Ring</option>
          <option value="bracelet">Bracelet</option>
          <option value="necklace">Necklace</option>
          <option value="earrings">Earrings</option>
        </select>

        {/* Price Filter */}
        <label htmlFor="price">Price:</label>
        <select id="price">
          <option value="all">All</option>
          <option value="low-to-high">Lowest to Highest</option>
          <option value="high-to-low">Highest to Lowest</option>
        </select>
      </div>
  
      <section className="columns">
        <Link to={`/product/gold-bracelet`}>
          <Item 
            id="gold-bracelet"
            image="images/bracelet1.jpg"
            name="Gold Bracelet"
            price="$49.99"
            material="gold"
            category="bracelet" />
        </Link>
        <Link to={`/product/gold-bracelet`}>
          <Item 
            id="3D-jewelry"
            image="images/3d1.jpg"
            name="3D Jewelry"
            price="$105.99"
            material="recycled-material"
            category="ring" />
        </Link>
        <Link to={`/product/gold-bracelet`}>
          <Item 
            id="gold-starlight"
            image="images/ring2.jpg"
            name="Gold Starlight"
            price="$59.99"
            material="gold"
            category="ring" />
        </Link>
        <Link to={`/product/powder-moon`}>
          <Item 
            id="powder-moon"
            image="images/secondchance.jpg"
            name="Powder Moon"
            price="$79.99"
            material="gold"
            category="ring" />
        </Link>
        <Link to={`/product/recycled-metal-jasmine`}>
          <Item 
            id="recycled-metal-jasmine"
            image="images/recycled1.jpg"
            name="Recycled Metal Jasmine"
            price="$69.99"
            material="recycled-metals"
            category="ring" />
        </Link>
        <Link to={`/product/silver-feathered`}>
          <Item 
            id="silver-feathered"
            image="images/ring3.jpg"
            name="Silver Feathered"
            price="$89.99"
            material="silver"
            category="earrings" />
        </Link>
        <Link to={`/product/gold-twist`}>
          <Item 
            id="gold-twist"
            image="images/bracelet2.jpg"
            name="Gold Twist"
            price="$54.99"
            material="gold"
            category="necklace" />
        </Link>
        <Link to={`/product/iridescent-bloom`}>
          <Item 
            id="iridescent-bloom"
            image="images/repurposedradiance.jpg"
            name="Iridescent Bloom"
            price="$40.99"
            material="resin"
            category="earrings" />
        </Link>
        <Link to={`/product/terralace`}>
          <Item 
            id="terralace"
            image="images/ecoluxe.jpg"
            name="TerraLace"
            price="$30.99"
            material="recycled-material"
            category="earrings" />
        </Link>
        <Link to={`/product/ceramic-whisper`}>
          <Item 
            id="ceramic-whisper"
            image="images/ceramic.jpg"
            name="Ceramic Whisper"
            price="$20.99"
            material="ceramic"
            category="earrings" />
        </Link>
        <Link to={`/product/timeless-green`}>
        <Item 
          id="timeless-green"
          image="images/clay.jpg"
          name="Timeless Green"
          price="$60.00"
          material="clay"
          category="earrings" />
        </Link>
        <Link to={`/product/starlit-shards`}>
          <Item 
            id="starlit-shards"
            image="images/glassbead.jpg"
            name="Starlit Shards"
            price="$15.99"
            material="glass"
            category="earrings" />
        </Link>
        <Link to={`/product/gossamer-garden`}>
          <Item 
            id="gossamer-garden"
            image="images/glassgarden.jpg"
            name="Gossamer Garden"
            price="$45.99"
            material="glass"
            category="earrings" />
        </Link>
        <Link to={`/product/ethereal-links`}>
          <Item 
            id="ethereal-links"
            image="images/linkluxe.jpg"
            name="Ethereal Links"
            price="$66.00"
            material="gold"
            category="bracelet" />
        </Link>
        <Link to={`/product/moonlit-pearls`}>
          <Item 
            id="moonlit-pearls"
            image="images/moonlitpearls.jpg"
            name="Moonlit Pearls"
            price="$120.00"
            material="pearl"
            category="earrings" />
        </Link>
      </section>

        {/* Add New Item Button */}
        <div className="add-item-button">
          <button onClick={() => setShowModal(true)}>Add New Item</button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-button" onClick={() => setShowModal(false)}>×</button>
              <h3>Add New Item</h3>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                  Name*:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Description*:
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Price*:
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Material*:
                  <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Category*:
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Upload Image:
                  <input
                    type="file"
                    name="image"
                    onChange={handleInputChange}
                    accept="image/*"
                  />
                </label>
                <div className="modal-buttons">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
    </>
  );
}

export default Shop;