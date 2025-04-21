import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteItem = (props) => {
  const [result, setResult] = useState("");

  const deleteItem = async () => {
    const response = await fetch(`https://jewels-server-v7wa.onrender.com/api/items/${props._id}`, {
      method: "DELETE"
    });

    if (response.status === 200) {
      setResult("Item deleted successfully.");
      props.closeDeleteDialog();
      props.hideItem();
    } else {
      setResult("Sorry, we couldn't delete your item right now.");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete <strong>{props.name}</strong>?</h3>
            <section>
              <button onClick={props.closeDeleteDialog}>No</button>
              <button onClick={deleteItem}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
