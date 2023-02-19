import Image from "next/image";

import underline from "../../../public/assets/images/sec_underline.svg";

const Services = () => {
  return (
    <section className="services row">
      <div className="services__top">
        <div className="services__top--heading">
          <h2>
            Our Services
            <span className="underline">
              <Image src={underline} alt="underline" />
            </span>
          </h2>

          {/* <h3>Expert services tailored to meet your unique needs</h3> */}
        </div>

        <div className="services__top--btnWrap">
          <button className="btn btn--pri btn--pri--body">Contact Now</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
