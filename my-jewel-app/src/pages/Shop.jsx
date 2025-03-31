import './css/Shop.css';
import Item from '../components/Item';
function Shop() {
  return (
    <>
      <section className="columns">
        <Item 
          image="images/bracelet1.jpg"
          name="Gold Bracelet"
          price="$49.99"
          material="gold"
          category="bracelet" />
        <Item 
          image="images/3d1.jpg"
          name="3D Jewelry"
          price="$105.99"
          material="recycled-material"
          category="ring" />
        <Item 
          image="images/ring2.jpg"
          name="Gold Starlight"
          price="$59.99"
          material="gold"
          category="ring" />
        <Item 
          image="images/secondchance.jpg"
          name="Powder Moon"
          price="$79.99"
          material="gold"
          category="ring" />
        <Item 
          image="images/recycled1.jpg"
          name="Recycled Metal Jasmine"
          price="$69.99"
          material="recycled-metals"
          category="ring" />
        <Item 
          image="images/ring3.jpg"
          name="Silver Feathered"
          price="$89.99"
          material="silver"
          category="earrings" />
        <Item 
          image="images/bracelet2.jpg"
          name="Gold Twist"
          price="$54.99"
          material="gold"
          category="necklace" />
        <Item 
          image="images/repurposedradiance.jpg"
          name="Iridescent Bloom"
          price="$40.99"
          material="resin"
          category="earrings" />
        <Item 
          image="images/ecoluxe.jpg"
          name="TerraLace"
          price="$30.99"
          material="recycled-material"
          category="earrings" />
        <Item 
          image="images/ceramic.jpg"
          name="Ceramic Whisper"
          price="$20.99"
          material="ceramic"
          category="earrings" />
        <Item 
          image="images/clay.jpg"
          name="Timeless Green"
          price="$60.00"
          material="clay"
          category="earrings" />
        <Item 
          image="images/glassbead.jpg"
          name="Starlit Shards"
          price="$15.99"
          material="glass"
          category="earrings" />
        <Item 
          image="images/glassgarden.jpg"
          name="Gossamer Garden"
          price="$45.99"
          material="glass"
          category="earrings" />
        <Item 
          image="images/linkluxe.jpg"
          name="Ethereal Links"
          price="$66.00"
          material="gold"
          category="bracelet" />
        <Item 
          image="images/moonlitpearls.jpg"
          name="Moonlit Pearls"
          price="$120.00"
          material="pearl"
          category="earrings" />
      </section>
    </>
  );
}

export default Shop;