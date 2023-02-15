import Image from "next/image";

import arrow from "../../../public/assets/images/arrow.png";
import star from "../../../public/assets/images/star.png";
import underline from "../../../public/assets/images/line.png";
import heading from "../../../public/assets/images/heading.png";
import headingPhone from "../../../public/assets/images/heading-phone.png";

const Header = () => {
  return (
    <header className="header ">
      <div className="header__box">
        <div className="header__box--heading">
          <Image src={heading} alt="heading" className="laptop" />
          <Image src={headingPhone} alt="heading-phone" className="phone" />
        </div>
        <h3>
          Welcome to Rightlabs, a premier creative design and development agency
          where innovation meets expertise.
        </h3>
      </div>
    </header>
  );
};

export default Header;
