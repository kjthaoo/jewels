import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Customdesign from './pages/Customdesign';
import Contactus from './pages/Contactus';
import Faqs from './pages/Faqs';
import Nopage from './pages/Nopage';
import ProductPage from './pages/ProductPage';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="customdesign" element={<Customdesign />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="*" element={<Nopage/>} />
          <Route path="product" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);