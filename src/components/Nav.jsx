import Image from "next/image";

import hamburger from "../../public/assets/icons/hamburger.svg";

const Nav = () => {
  return (
    <nav className="nav row">
      <div className="nav__logo">
        <h2>Rightlabs.</h2>
      </div>
      <div className="nav__menu">
        <ul>
          <li className="nav--cta">Connect With Us</li>
          <li className="hamburger">
            <Image src={hamburger} alt="hamburger-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
