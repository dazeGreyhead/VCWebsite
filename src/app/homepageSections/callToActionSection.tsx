import Image from "next/image";
import "./ctaStyles.scss";
import SocialMediaLinks from "../components/socialMediaLinks";

export default function CallToActionSection() {
  const ctaTitle = "Jajarkot Needs Your Help!";
  const words = ctaTitle.split(" ");

  return (
    <section className="hero-section">
      <figure className="hero-content-container hero-content-container-mask">
        <video className="hero-content" loop autoPlay controls>
          <source src="/FEB27.mp4" type="video/mp4" />
          Is this working?
        </video>
        {/* <Image
          src="/Main-Content-Placeholder.jpg"
          width={1600}
          height={1200}
          alt="Hero Image"
          className="hero-content"
        /> */}
      </figure>
      <div className="hero-overlay">
        <div className="call-to-action">
          <h1 className="cta-title">
            {words.slice(0, -1).join(" ")}{" "}
            <span className="vcn-red-text">{words[words.length - 1]}</span>
          </h1>
          <p className="paragraph1 cta-paragraph white-text">
            Jajarkot urgently needs food and shelter because of the earthquake
            that ravaged it. We urge you to do your part.
          </p>
          <button className="primary-button black-text-100">
            WHAT CAN I DO?
          </button>
        </div>
        <div className="hero-socials">
          <SocialMediaLinks
            color="var(--white)"
            size="1.31rem"
            showEmailIcon={false}
            className="social-media-links"
          />
        </div>
        <figure className="hero-play-button">
          <Image
            src="/Play-button-img.svg"
            width={173}
            height={173}
            alt="Play button"
          />
        </figure>
      </div>
    </section>
  );
}
