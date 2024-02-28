import logo from "../assets/logo.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-container">
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <h1>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h1>
          <div>
            <ul>
              <li>
                C.R.I.&apos;s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={img2} alt="img2" />
          </div>
          <p>
            Government of India has awarded the
            <span> &quot;National Energy Conservation Award 2018&quot;</span>.
            Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
