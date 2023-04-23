import Sdevelopment from "/public/assets/images/services_development.jpg";
import Sdesigning from "/public/assets/images/services_designing.jpg";
import Sbranding from "/public/assets/images/services_branding.jpg";
import SsocialMedia from "/public/assets/images/services_socialMedia.jpg";
const services = () => {
  return [
    {
      name: "Logo and branding",
      img: Sbranding,
      description:
        "We create logos and branding that are unique and memorable. We also create brand guidelines that help you to maintain your brand identity.",
    },
    {
      name: "digital marketing and social media",
      img: SsocialMedia,
      description:
        "We create logos and branding that are unique and memorable. We also create brand guidelines that help you to maintain your brand identity.",
    },

    {
      name: "Website and App Development",
      img: Sdevelopment,
      description:
        "We create websites and apps that are unique and memorable. We also create brand guidelines that help you to maintain your brand identity.",
    },
    {
      name: "Brochure and Graphic design",
      img: Sdesigning,
      description:
        "We create logos and branding that are unique and memorable. We also create brand guidelines that help you to maintain your brand identity.",
    },
  ];
};

export default services;
