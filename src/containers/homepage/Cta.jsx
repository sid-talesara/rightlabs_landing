import Image from "next/image";
import underline from "../../../public/assets/images/line2-white.svg";
const Cta = () => {
  return (
    <section className="cta">
      <div className="cta__content">
        <h3>
          Let’s talk about you🫵
          <span className="underline">
            <Image src={underline} alt="underline" />
          </span>
        </h3>
        <p>Please get in touch here to discuss how we can help</p>
      </div>

      <div className="cta__btn">
        <button
          className="btn btn--pri btn--pri--body"
          data-tally-open="wvMPP4"
          data-tally-layout="modal"
          data-tally-width="500"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
        >
          Let's Chat
        </button>
      </div>
    </section>
  );
};

export default Cta;
