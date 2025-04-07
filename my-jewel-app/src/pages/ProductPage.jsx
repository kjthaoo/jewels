import React from 'react';
import './css/Product.css';
import { useParams, Link } from 'react-router-dom';
import productData from '../data/productData.json';
import ReviewSection from '../components/ReviewSection';
import AddReviewSection from '../components/AddReviewSection';
import BackToTop from '../components/BackToTop';

function ProductPage() {
  const { id } = useParams(); 
  const product = productData.find(p => p.id === id);

  if (!product) {
    return <div>Product not found 😢</div>;
  }

  return (
    <div className="product-page">
        <main id="product-content">
            <section id="products-section">
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="item-description">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
            </section>
            <ReviewSection />
            <AddReviewSection />
        </main>
      <BackToTop />
    </div>
  );
}

export default ProductPage;