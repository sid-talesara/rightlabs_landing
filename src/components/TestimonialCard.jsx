import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial__card">
      <div className="testimonial__card--content">
        <h3>{testimonial.quote}</h3>
        <p>{testimonial.description}</p>
      </div>

      <div className="testimonial__card--cus">
        <div className="image">
          <Image src={testimonial.icon} alt="user-pic" />
        </div>

        <div className="name--details">
          <p className="name">{testimonial.name}</p>
          <p className="designnation">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
