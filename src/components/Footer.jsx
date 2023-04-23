import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

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
                <AiOutlineMail className="icon" />
                <a className="text" href="mailto: connect@rightlabs.co">
                  connect@rightlabs.co
                </a>
              </li>
              <li>
                <BsTelephone className="icon" />
                <a className="text" href="tel: 917073232505">
                  (+91) 8875562170
                </a>
              </li>
              <li>
                <HiOutlineLocationMarker className="icon" />
                <a
                  className="text"
                  href="https://goo.gl/maps/iBed9z1uiftju58b8"
                  target="_blank"
                >
                  5A-501 MVL Coral
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        {/* <p className="copyright">Copyright &#169; 2023 Rightlabs</p> */}
        <p className="right">
          Copyright &#169; 2023 Rightlabs | All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
