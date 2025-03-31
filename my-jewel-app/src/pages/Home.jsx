import './css/Home.css';
import {Outlet, Link} from "react-router-dom";

function Home() {
  return (
    <>
      <main id="main-content">
        <div id="main-top">
          <h2>WELCOME TO GOLD PEBBLES</h2>
          <img src={`${process.env.PUBLIC_URL}/images/jewerly2.jpg`} alt="Jewelry" />
          <Link to="/shop">
            <button id="shop-btn">SHOP</button>
          </Link>
        </div>

        <div className="intro">
          <h2>"Sustainable Elegance: Jewelry with a Story"</h2>
          <p>We are a sustainable jewelry company that specializes in creating unique and beautiful pieces using recycled materials. Our mission is to reduce waste and promote eco-friendly practices in the jewelry industry.</p>
          <p>Our collections are designed to be timeless and versatile, perfect for any occasion. We believe that jewelry should not only look good, but also do good for the planet.</p>
          <p>At Gold Pebbles, every piece of jewelry is crafted with purpose, blending sustainability with artistry. Using recycled metals, 3D-printed materials, and repurposed elements like spoons and gold, we create one-of-a-kind accessories that honor both style and sustainability. Whether you're looking for a bold statement piece or a custom-fit ring, we believe jewelry should be as unique as the person wearing it—no waste, just beauty reimagined.</p>
        </div>

        <h2>CURRENT INVENTORY</h2>
        <div className="flex-container">
          <div id="card1">
          <img src={`${process.env.PUBLIC_URL}/images/bracelet1.jpg`} alt="Jewelry" />
            <h2><Link to="/shop">Collections</Link></h2>
          </div>
          <div id="card2">
          <img src={`${process.env.PUBLIC_URL}/images/3d1.jpg`} alt="Jewelry" />
            <h2><Link to="/customdesign">Customized Designs</Link></h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
