import One from "../assets/one.jpg";
import Two from "../assets/two.jpg";
import Three from "../assets/three.jpg";

function Product() {
  return (
    <div className="products">
      <div className="box">
        <img
          src={One}
          alt="Fogg Wood Extreme perfume bottle"
        />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img
          src={Two}
          alt="Fogg Wood Extreme perfume variant"
        />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img
          src={Three}
          alt="Designer Club Be Spoke men's perfume"
        />
        <p>
          Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long
          Lasting Perfume
        </p>
      </div>
    </div>
  );
}

export default Product;