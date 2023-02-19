import Image from "next/image";

import heading from "../../../public/assets/images/heading.png";
import headingPhone from "../../../public/assets/images/heading-phone.png";
import project0 from "../../../public/assets/images/project0.png";
import project1 from "../../../public/assets/images/project1.png";
import project2 from "../../../public/assets/images/project2.png";
import project3 from "../../../public/assets/images/project3.png";
import project4 from "../../../public/assets/images/project4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = ({ setSideNav }) => {
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <header className="header" onClick={() => setSideNav(false)}>
      <div className="header__box">
        <div className="header__box--heading">
          <Image src={heading} alt="heading" className="laptop" />
          <Image src={headingPhone} alt="heading-phone" className="phone" />
        </div>
        {/* <h3>
          Welcome to Rightlabs, a premier creative design and development agency
          where innovation meets expertise.
        </h3> */}
        <div className="btnWrapper">
          <button className="btn btn--pri">See our Work</button>
        </div>
      </div>

      <div className="header__projectGallery">
        <Slider {...settings} className="gallery--slider">
          <div>
            <Image src={project0} alt="project-0" />
          </div>
          <div>
            <Image src={project1} alt="project-1" />
          </div>
          <div>
            <Image src={project2} alt="project-2" />
          </div>
          <div>
            <Image src={project3} alt="project-3" />
          </div>
          <div>
            <Image src={project4} alt="project-4" />
          </div>
        </Slider>
      </div>
    </header>
  );
};

export default Header;
