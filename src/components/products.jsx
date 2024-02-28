import "../styles/products.css";
import img3 from "../assets/3.png";

const Products = () => {
  return (
    <section className="products-container">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="products">
        <img src={img3} alt="img2" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <div className="line"></div>
        <div className="list">
          <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
          <p>
            CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA
            SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING
            FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
