import React, { useState } from 'react';
import './css/Faqs.css';

function Faqs() {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const showAnswer = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  return (
    <>
      <main id="main-content">
        <div className="flex-container">
          <div className="faq-container">
            <h2>How can we help you?</h2>
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
          <h3>Frequently Asked Questions</h3>
          <hr className="dividershort" />
          <div className="tabs">
            {/* the tabs side/questions */}
            <div className="faq-tabs">
              <button className="tab" onClick={() => showAnswer(0)}>
                What is your service?
              </button>
              <button className="tab" onClick={() => showAnswer(1)}>
                How can I contact support?
              </button>
              <button className="tab" onClick={() => showAnswer(2)}>
                Where can I find pricing?
              </button>
              <button className="tab" onClick={() => showAnswer(3)}>
                What materials do you use in your jewelry?
              </button>
              <button className="tab" onClick={() => showAnswer(4)}>
                Do you offer custom jewelry designs?
              </button>
              <button className="tab" onClick={() => showAnswer(5)}>
                Can you make rings for larger fingers?
              </button>
              <button className="tab" onClick={() => showAnswer(6)}>
                Is your jewelry hypoallergenic?
              </button>
              <button className="tab" onClick={() => showAnswer(7)}>
                How do I take care of my jewelry?
              </button>
              <button className="tab" onClick={() => showAnswer(8)}>
                Do you ship internationally?
              </button>
              <button className="tab" onClick={() => showAnswer(9)}>
                How long does it take to receive my order?
              </button>
              <button className="tab" onClick={() => showAnswer(10)}>
                Can I send in my own materials for a custom piece?
              </button>
            </div>

            {/* the answer side */}
            <div className="faq-answers">
              <div className="answer" id="answer-0" style={{ display: visibleAnswer === 0 ? 'block' : 'none' }}>
                <p>
                  Our service provides unique, handcrafted jewelry using sustainable and recycled materials like 3D-printed recycled plastics, old metal scraps (including spoons and gold), resin, and more. Each piece is thoughtfully designed to give new life to discarded materials, transforming them into wearable art. I also offer custom sizing and styles, ensuring inclusivity for larger fingers and personalized designs that match your vision.
                </p>
              </div>
              <div className="answer" id="answer-1" style={{ display: visibleAnswer === 1 ? 'block' : 'none' }}>
                <p>You can contact our support team through email at contact@goldpebbles.com or by calling our number +1 (555) 123-4567</p>
              </div>
              <div className="answer" id="answer-2" style={{ display: visibleAnswer === 2 ? 'block' : 'none' }}>
                <p>You can view our pricing details on the "Shop" page, accessible from the top navigation bar.</p>
              </div>
              <div className="answer" id="answer-3" style={{ display: visibleAnswer === 3 ? 'block' : 'none' }}>
                <p>I use a mix of recycled and repurposed materials, including 3D-printed recycled plastics, old metal scraps (such as spoons and gold), resin, and other sustainable elements. Each piece is crafted to be both stylish and eco-friendly.</p>
              </div>
              <div className="answer" id="answer-4" style={{ display: visibleAnswer === 4 ? 'block' : 'none' }}>
                <p>Yes! I love working with customers to create personalized pieces that match their style, size, and vision. Whether it’s a custom-sized ring, a specific design, or a unique material request, I’m happy to bring your ideas to life.</p>
              </div>
              <div className="answer" id="answer-5" style={{ display: visibleAnswer === 5 ? 'block' : 'none' }}>
                <p>Absolutely! I understand that standard jewelry sizes don’t always fit everyone, so I offer custom sizing to ensure a perfect and comfortable fit for all finger sizes.</p>
              </div>
              <div className="answer" id="answer-6" style={{ display: visibleAnswer === 6 ? 'block' : 'none' }}>
                <p>Many of my pieces are designed with sensitive skin in mind. If you have allergies or specific concerns, let me know, and I can customize materials to suit your needs.</p>
              </div>
              <div className="answer" id="answer-7" style={{ display: visibleAnswer === 7 ? 'block' : 'none' }}>
                <p>To keep your jewelry looking its best, avoid prolonged exposure to water, harsh chemicals, and direct sunlight. Store it in a dry place when not in use, and gently clean with a soft cloth when needed.</p>
              </div>
              <div className="answer" id="answer-8" style={{ display: visibleAnswer === 8 ? 'block' : 'none' }}>
                <p>Yes! I offer shipping worldwide. Shipping costs and delivery times vary depending on your location. Feel free to reach out for more details.</p>
              </div>
              <div className="answer" id="answer-9" style={{ display: visibleAnswer === 9 ? 'block' : 'none' }}>
                <p>Since each piece is handmade, production times vary. Typically, orders are ready to ship within 10-15 business days, but custom designs may take longer. You’ll receive a tracking number once your order is on its way!</p>
              </div>
              <div className="answer" id="answer-10" style={{ display: visibleAnswer === 10 ? 'block' : 'none' }}>
                <p>Yes! If you have sentimental metals, old jewelry, or unique materials you'd like incorporated into a new piece, I’d love to work with you to create something special.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Faqs;
