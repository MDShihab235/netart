import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import world from "../assets/world.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={phone} alt="phone" />
        <p>Toll free 1800 200 1234</p>
      </div>
      <div>
        <img src={facebook} alt="facebook" />
        <p>www.facebook.com/cripumps</p>
      </div>
      <div>
        <img src={world} alt="world" />
        <p>www.crigroups.com</p>
      </div>
    </footer>
  );
};

export default Footer;
