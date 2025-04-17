import {useState} from "react";
import {Link} from "react-router-dom";
import './css/Shop.css';
import Item from '../components/Item';
import React, { useEffect } from 'react';


function Shop() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
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
    console.log("Form submitted!");
  
    const newItem = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      material: formData.material,
      category: formData.category,
      image: formData.image,
    };
  
    //define form first
    const form = new FormData();
    Object.entries(newItem).forEach(([key, value]) => {
      form.append(key, value);
    });
  
    //my debugging
    for (let pair of form.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }
  
    try {
      const response = await fetch("https://jewels-server-v7wa.onrender.com/", {
        method: "POST",
        body: form,
      });
  
      if (response.ok) {
        const newData = await response.json();
        setItems(prevItems => [...prevItems, newData]);
        setSuccessMessage("Item added successfully!");
        setShowModal(false);
  
        setFormData({
          name: "",
          description: "",
          price: "",
          material: "",
          category: "",
          image: null,
        });

      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to add item.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    }
  };


  const fetchItems = async () => {
    const response = await fetch("https://jewels-server-v7wa.onrender.com/");
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
        {items.map((item) => (
          <Link key={item._id || item.id} to={`/product/${item.id}`}>
            <Item
              id={item.id}
              image={item.image} // make sure the URL is correct
              name={item.name}
              price={`$${item.price}`}
              material={item.material}
              category={item.category}
            />
          </Link>
        ))}
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