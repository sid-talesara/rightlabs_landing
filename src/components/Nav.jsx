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
          {/* <li className="hamburger" onClick={() => setSideNav(true)}>
            <Image src={hamburger} alt="hamburger-icon" />
          </li> */}
        </ul>

        {/* Side menu in navigation */}
        <div
          className={sideNav ? "nav__menu--sideNav open" : "nav__menu--sideNav"}
        >
          <div className="sideNav--close" onClick={() => setSideNav(false)}>
            <Image src={close} alt="close-icon" />
          </div>
          <ul>
            <li>Services</li>
            <li>Projects</li>
            <li>About Us</li>
            <li>
              <a href="https://tally.so#tally-open=wvMPP4&tally-layout=modal&tally-width=650&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=1000">
                <button className="btn btn--nav--pri">Start a Project</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
