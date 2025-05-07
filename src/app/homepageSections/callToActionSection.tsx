"use client";

import "./homepage.scss";
import SocialMediaLinks from "../components/socialMediaLinks";
import HeroContent from "../components/heroContent";
import PlayButton from "../components/playButton";
import { useState } from "react";
import ContentAndTextSBS from "../components/contentAndTextSBS";
import DestructedBackgroundSVGComp from "../components/svgComponents/DestructedBackgroundSVGComp";

export default function CallToActionSection() {
  const ctaTitle = "Jajarkot Needs Your Help!";
  const words = ctaTitle.split(" ");
  const [playHeroVideo, setPlayHeroVideo] = useState(false);

  function handlePlayHeroVideo() {
    setPlayHeroVideo(!playHeroVideo);
  }

  return (
    <section className="hero-section">
      <div>
        <figure className="hero-content-container hero-content-container-mask">
          <HeroContent className="hero-content" playVideo={playHeroVideo} />
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
              className="cta-social-media-links"
            />
          </div>
          <figure className="hero-play-button">
            <PlayButton
              className="play-button"
              playVideo={playHeroVideo}
              onClick={handlePlayHeroVideo}
            />
          </figure>
        </div>
      </div>
      <div className="cta-catsbs-container">
        <ContentAndTextSBS />
        <DestructedBackgroundSVGComp
          className="cta-catsbs-background"
          preserveAspectRatio="none"
        />
      </div>
    </section>
  );
}
