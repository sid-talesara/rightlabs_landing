import icon_logo from "../../public/assets/icons/icon_logo.svg";
import icon_digital from "../../public/assets/icons/icon_digital.svg";
import icon_graphic from "../../public/assets/icons/icon_graphic.svg";
import icon_web from "../../public/assets/icons/icon_web.svg";

const services = () => {
  return [
    {
      name: "Logo and branding",
      icon: icon_logo,
      description:
        "We create logos and branding that are unique and memorable. We also create brand guidelines that help you to maintain your brand identity.",
    },

    {
      name: "Website and App Development",
      icon: icon_web,
      description:
        "We create websites and apps that are unique and memorable. We also create brand guidelines that help you to maintain your brand identity.",
    },
    {
      name: "Brochure and Graphic design",
      icon: icon_graphic,
      description:
        "We create logos and branding that are unique and memorable. We also create brand guidelines that help you to maintain your brand identity.",
    },
    {
      name: "digital marketing and social media",
      icon: icon_digital,
      description:
        "We create logos and branding that are unique and memorable. We also create brand guidelines that help you to maintain your brand identity.",
    },
  ];
};

export default services;
