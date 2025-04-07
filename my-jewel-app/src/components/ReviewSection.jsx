import React from 'react';
import './css/ReviewSection.css';

function ReviewSection() {
  return (
    <section className="reviews-section">
      <h3>Customer Reviews</h3>
      <div id="reviews-container">
        <p>No reviews yet. Be the first to leave one!</p>
      </div>
    </section>
  );
}

export default ReviewSection;
