import React from 'react';
import './css/AddReviewSection.css';

function AddReviewSection() {
  return (
    <section className="add-review-section">
      <h3>Add a Review</h3>
      <form id="review-form">
        <input type="text" id="review-user" placeholder="Your Name" required />
        <select id="review-rating">
          <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          <option value="4">⭐️⭐️⭐️⭐️</option>
          <option value="3">⭐️⭐️⭐️</option>
          <option value="2">⭐️⭐️</option>
          <option value="1">⭐️</option>
        </select>
        <textarea id="review-comment" placeholder="Your review..." required></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
}

export default AddReviewSection;
