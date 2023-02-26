import Image from "next/image";

import services from "../../data/services.js";

import underline from "../../../public/assets/images/sec_underLine.svg";
import ServicesCard from "@/components/ServicesCard";

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

          <h3>
            We understand that every business is unique. That's why we take the
            time to listen to your needs and create customized solutions that
            work for you.{" "}
          </h3>
        </div>

        <div className="services__top--btnWrap">
          <button className="btn btn--pri btn--pri--body">Contact Now</button>
        </div>
      </div>

      <div className="services__content">
        {services().map((service, i) => (
          <ServicesCard service={service} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Services;
