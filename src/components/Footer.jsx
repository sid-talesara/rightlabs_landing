import Image from "next/image";

import icon_email from "../../public/assets/icons/icon_email.svg";
import icon_location from "../../public/assets/icons/icon_location.svg";
import icon_phone from "../../public/assets/icons/icon_phone.svg";

const Footer = () => {
  return (
    <div className="footer row">
      <div className="footer__top">
        <div className="logo">
          <h3>Rightlabs</h3>
          <p className="subheading">
            Crafting Innovative Solutions for a Digital World
          </p>
        </div>

        <div className="contact">
          <h3 className="heading">Contact Us</h3>

          <div className="list">
            <ul>
              <li>
                <span className="icon">
                  <Image src={icon_email} />
                </span>
                <span className="text">connect@rightlabs.co</span>
              </li>
              <li>
                <span className="icon">
                  <Image src={icon_phone} />
                </span>
                <span className="text">(+91) 8875562170</span>
              </li>
              <li>
                <span className="icon">
                  <Image src={icon_location} />
                </span>
                <span className="text">5A-501 MVL Coral</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="copyright">Copyright &#169; 2023 Rightlabs</p>
        <p className="right">All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
