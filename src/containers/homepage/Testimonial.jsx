import Image from "next/image";

import TestimonialCard from "@/components/TestimonialCard";
import testimonial from "@/data/testomonial";
import underline from "../../../public/assets/images/line2.svg";

const Testimonial = () => {
  return (
    <section className="row testimonial">
      <div className="testimonial__heading">
        <h2>
          Let our customers Speak
          <span className="underline">
            <Image src={underline} alt="underline" />
          </span>
        </h2>
      </div>
      <div className="testimonial__cards">
        {testimonial().map((testimonial, i) => (
          <TestimonialCard testimonial={testimonial} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
