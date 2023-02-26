import Image from "next/image";

const ServicesCard = ({ service }) => {
  return (
    <div className="servicesCard">
      <div className="servicesCard--top">
        <span className="icon">
          <Image src={service.icon} />
        </span>
        <h2 className="title">{service.name}</h2>
      </div>
      <div className="description">
        <p>{service.description}</p>
      </div>
      <a className="btnWrapper" href="#work">
        <button className="btn btn--pri btn--pri--body">Our Works</button>
      </a>
    </div>
  );
};

export default ServicesCard;
