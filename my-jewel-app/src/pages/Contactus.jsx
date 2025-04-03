import {Link} from "react-router-dom";
import './css/Contactus.css';
import SlideShow from '../components/SlideShow';
import React from 'react';
import {useState} from "react";

function ContactUs() {
  return (
    <main id="main-content">
      <div className="flex-container">
        <div className="contact-info">
          <h2>CONTACT US</h2>
          <p>We'd love to hear from you! Reach out to us using the details below.</p>
        </div>
      </div>
      
      <div className="details-container">
        <div className="contact-details">
          <h3>Contact Details:</h3>
          <ul>
            <li><span className="material-icons">location_on</span> 123 Gold Street, Pebble City</li>
            <li><span className="material-icons">email</span> contact@goldpebbles.com</li>
            <li><span className="material-icons">phone</span> +1 (555) 123-4567</li>
          </ul>
          <hr />
        </div>
        
        <div className="call-hours">
          <h3>Business Hours:</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
          <hr />
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
