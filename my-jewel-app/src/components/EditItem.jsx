import "./css/Dialog.css";
import React, { useState } from "react";

const EditItem = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch(`https://jewels-server-v7wa.onrender.com/api/items/${props._id}`, {
      method: "PUT",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Item updated successfully.");
      event.target.reset();
      props.closeEditDialog();
      props.editItem(await response.json());
    } else {
      setResult("Error updating item.");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="edit-item-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Item Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
              />
            </p>
            <p>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                defaultValue={props.description}
                required
              />
            </p>
            <p>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={props.price}
                required
              />
            </p>
            <p>
              <label htmlFor="material">Material:</label>
              <input
                type="text"
                id="material"
                name="material"
                defaultValue={props.material}
                required
              />
            </p>
            <p>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                defaultValue={props.category}
                required
              />
            </p>

            <section className="columns">
              <div>
                <p id="img-prev-section">
                  {prevSrc !== "" ? (
                    <img id="img-prev" src={prevSrc} alt="Preview" />
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={uploadImage}
                />
              </p>
            </section>

            <p>
              <button type="submit">Update Item</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
