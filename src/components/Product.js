import One from "../assets/one.jpg"
import Two from "../assets/two.jpg"
import Three from "../assets/three.jpg"




function Product() {
  return (
    <div className="products">
      <div className="box">
        <img src={One} />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img src={Two} alt="villain" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>

      </div>
      <div className="box">
        <img src={Three} alt="Designs Club" />
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>


    </div>
  )
}

export default Product