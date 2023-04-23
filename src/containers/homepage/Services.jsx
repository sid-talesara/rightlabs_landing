import Image from "next/image";

import services from "../../data/services.js";

import underline from "../../../public/assets/images/sec_underLine.svg";
import ServicesCard from "@/components/ServicesCard";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
const Services = () => {
  const [width, setWidth] = useState(0);
  const carousal = useRef();
  useEffect(() => {
    console.log(carousal.current.scrollWidth, carousal.current.offsetWidth);
    setWidth(carousal.current.scrollWidth - carousal.current.offsetWidth);
  }, []);

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

      <motion.div
        ref={carousal}
        className="services__carousal"
        whileTap={{ cursor: "grabbing " }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousal"
        >
          {services().map((service, i) => (
            <motion.div>
              <ServicesCard service={service} key={i} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
