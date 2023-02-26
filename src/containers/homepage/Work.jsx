import WorkCard from "@/components/WorkCard";
import Image from "next/image";

import work from "../../data/work.js";

import underline from "../../../public/assets/images/sec_underline.svg";

const Work = () => {
  return (
    <section className="row">
      <div className="services__top work__top">
        <div className="services__top--heading work__top--heading">
          <h2>
            Our Work
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

      <div className="services__content work__content">
        {work().map((work, i) => (
          <WorkCard work={work} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Work;
