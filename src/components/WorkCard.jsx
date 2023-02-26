import Image from "next/image";

const WorkCard = ({ work }) => {
  return (
    <div className="workCard">
      <div className="workCard__top">
        <p className="tag">{work.tag}</p>
        <h2 className="title">{work.name}</h2>
        <p className="desp">{work.description}</p>
      </div>
      <div className="workCard__pic">
        <Image src={work.icon} alt="project-desp" />
      </div>
    </div>
  );
};

export default WorkCard;
