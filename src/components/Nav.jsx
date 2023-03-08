import Image from "next/image";

import hamburger from "../../public/assets/icons/hamburger.svg";
import close from "../../public/assets/icons/cross.svg";

const Nav = ({ sideNav, setSideNav }) => {
  return (
    <nav className="nav row">
      <div className="nav__logo">
        <h2>Rightlabs.</h2>
      </div>
      <div className="nav__menu">
        <ul className="nav__menu--menuList">
          <li
            className="nav--cta"
            data-tally-open="wvMPP4"
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Connect With Us
          </li>
          <li className="hamburger" onClick={() => setSideNav(true)}>
            <Image src={hamburger} alt="hamburger-icon" />
          </li>
        </ul>

        {/* Side menu in navigation */}
        <div
          className={sideNav ? "nav__menu--sideNav open" : "nav__menu--sideNav"}
        >
          <div className="sideNav--close" onClick={() => setSideNav(false)}>
            <Image src={close} alt="close-icon" />
          </div>
          <ul>
            <li>
              <a href="#services" onClick={() => setSideNav(false)}>
                Our Services
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => setSideNav(false)}>
                Our Work
              </a>
            </li>
            <li>
              <a href="#testimonial" onClick={() => setSideNav(false)}>
                Client Reviews
              </a>
            </li>
            <li>
              <a
                // href="#"
                className="nav--cta"
                data-tally-open="wvMPP4"
                data-tally-layout="modal"
                data-tally-width="500"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                <button className="btn btn--nav--sec">Start a Project</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
