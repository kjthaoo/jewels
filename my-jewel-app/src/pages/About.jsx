import {Outlet, Link} from "react-router-dom";
import './css/About.css';

function About() {
  return (
    <>
      <main id="main-content">
        <div id="main-top">
          <h2>ABOUT US</h2>
        </div>

        <div className="flex-container">
          <div id="card1">
            <img src={`${process.env.PUBLIC_URL}/images/resin.jpg`} alt="Our Story" />
            <div className="card-text">
              <h2>Our Story</h2>
              <p>
                Gold Pebbles was born from a passion for creativity, sustainability, and the art of transformation. What started as a love for jewelry design evolved into a vision for something greater—turning forgotten materials into wearable art. Each piece is designed to stand out, blending modern aesthetics with the beauty of handmade craftsmanship. By incorporating elements like clay, recycled metals, and even eco-friendly 3D printing filaments, Gold Pebbles redefines what jewelry can be: a statement of both style and sustainability.
              </p>
              <p>
                Jewelry should be as meaningful as it is beautiful, and that’s what drives our designs. Whether it’s repurposing old silverware into bold rings or crafting unique pieces from salvaged materials, every creation tells a story of renewal. Gold Pebbles isn’t just about accessories—it’s about bringing purpose to overlooked materials and offering customers a way to express themselves through sustainable fashion.
              </p>
            </div>
          </div>

          <div id="card2">
            <img src={`${process.env.PUBLIC_URL}/images/jewerly3.jpg`} alt="Mission" />
            <div className="card-text">
              <h2>Mission</h2>
              <p>
                At Gold Pebbles, our mission is simple: to create distinctive, high-quality jewelry while championing sustainability. We believe that fashion should be both expressive and responsible, which is why our designs prioritize recycled materials and conscious craftsmanship. By breathing new life into old metals, broken jewelry, and forgotten scraps, we hope to shift perspectives on waste and inspire a more thoughtful approach to accessorizing.
              </p>
              <p>
                Beyond aesthetics, inclusivity is at the heart of our brand. We recognize that jewelry should be for everyone, which is why we offer customizable sizing options, including larger sizes that are often overlooked in the industry. Gold Pebbles is more than just a jewelry studio—it’s a movement toward a more sustainable and inclusive future.
              </p>
            </div>
          </div>

          <div id="card3">
            <img src={`${process.env.PUBLIC_URL}/images/recycled2.jpg`} alt="Sustainability Goals" />
            <div className="card-text">
              <h2>Sustainability Goals</h2>
              <p>
                Sustainability isn’t just a buzzword for us—it’s the foundation of Gold Pebbles. Our goal is to reduce waste in the jewelry industry by repurposing materials that would otherwise be discarded. From sourcing recycled metals to experimenting with biodegradable or eco-friendly 3D printing filaments, we are constantly exploring new ways to make our designs as environmentally conscious as they are beautiful.
              </p>
              <p>
                We also aim to minimize our carbon footprint by using ethical sourcing practices and ensuring our production process is as waste-free as possible. As we grow, we plan to introduce take-back programs where customers can send in old, broken jewelry to be transformed into something new. By making sustainability a core part of our business, we hope to encourage a shift toward more mindful consumption in the fashion and jewelry space.
              </p>
            </div>
          </div>

          <div id="card4">
            <img src={`${process.env.PUBLIC_URL}/images/ring3.jpg`} alt="Eco-friendly Packaging" />
            <div className="card-text">
              <h2>Eco-friendly Packaging</h2>
              <p>
                Sustainability doesn’t stop at our jewelry—it extends to every part of our brand, including packaging. We are committed to using eco-friendly, minimal-waste packaging that protects our products without harming the environment. Instead of plastic, our packaging will feature recyclable, biodegradable, or reusable materials, ensuring that every order aligns with our commitment to sustainability.
              </p>
              <p>
                From compostable mailers to reusable jewelry pouches, every packaging choice is made with the planet in mind. Our goal is to create a fully sustainable shopping experience, where customers can feel good knowing their purchase supports both ethical craftsmanship and a greener future. Gold Pebbles is about making sustainability effortless, stylish, and accessible—down to the last detail.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
