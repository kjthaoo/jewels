import {Link } from "react-router-dom";
import "./css/Customdesign.css";
import HousePlans from '../components/HousePlans';

function Customdesign() {
    return (
        <main id="main-content">
            <hr className="divider" />
            <h2>CUSTOM DESIGN</h2>
            <div className="flex-container">
                <div className="image-container">
                    <img src="images/crafts.jpg" alt="Craft 1" />
                    <img src="images/craft2.jpg" alt="Craft 2" />
                </div>
                <div id="card1" className="card">
                    <div className="card-text">
                        <h2>Personalized Jewelry, Made Just for You</h2>
                        <p>
                            At Gold Pebbles, we believe jewelry should be as unique as the person wearing it. That’s why we offer custom design services that allow you to bring your vision to life. Whether you have a specific idea in mind or need guidance in creating something special, we work closely with you to design a piece that reflects your personality, style, and story.
                        </p>
                        <p>
                            From reworking sentimental jewelry into modern designs to crafting one-of-a-kind statement pieces, our custom process ensures that every detail is thoughtfully considered. With a focus on sustainability, we can also incorporate recycled metals, repurposed materials, or eco-friendly filaments into your design. Your jewelry should be meaningful, and with Gold Pebbles, you’ll have a piece that is truly yours.
                        </p>
                    </div>
                </div>
                <div id="card2" className="card">
                    <div className="card-text">
                        <h2>Upcycled & Remade Jewelry</h2>
                        <p>
                            Jewelry holds memories, and instead of letting old, broken, or forgotten pieces collect dust, why not transform them into something new? At Gold Pebbles, we specialize in upcycling vintage and pre-loved jewelry into fresh, modern designs. Whether it’s an old spoon turned into a bold statement ring or a broken necklace reimagined into a delicate charm, we breathe new life into treasured materials.
                        </p>
                        <p>
                            Not only does upcycling reduce waste, but it also allows you to hold onto the sentimental value of your original jewelry in a form that better suits your style. If you have a piece you no longer wear but aren’t ready to part with, we can work together to redesign it into something you’ll love for years to come.
                        </p>
                    </div>
                </div>
                <div id="card3" className="card">
                    <div className="card-text">
                        <h2>Made-To-Fit, Inclusive Sizing</h2>
                        <p>
                            Finding the perfect jewelry shouldn’t be a struggle, no matter your size. At Gold Pebbles, we offer customizable sizing to ensure that every customer gets a comfortable and flattering fit. Many traditional brands overlook larger sizes, but we believe that everyone deserves to wear jewelry that makes them feel confident and stylish.
                        </p>
                        <p>
                            Whether it’s rings, bracelets, or statement pieces, our custom sizing options mean you no longer have to settle for designs that don’t quite fit. We take precise measurements and tailor each piece to your needs, so you can enjoy high-quality, beautifully crafted jewelry without compromise.
                        </p>
                        <img src="images/craft3.jpg" alt="Craft 3" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Customdesign;
