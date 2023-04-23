import Image from "next/image";

const ServicesCard = ({ service }) => {
  return (
    <div className="servicesCard">
      <div className="servicesCard_Img">
        <Image src={service.img} className="bg-img" />
      </div>
      <div className="servicesCard_content">
        <div className="servicesCard--top">
          <h2 className="title">{service.name}</h2>
        </div>
        <div className="description">
          <p>{service.description}</p>
        </div>
        <a className="btnWrapper " href="#work">
          <button className="btn  btn--pri btn--pri--body btn--work">
            Our Works
          </button>
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
