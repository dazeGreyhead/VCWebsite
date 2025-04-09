"use client";
import React, { useEffect, useRef, useState } from "react";
import "./componentStyles.scss";
import ImageSlider from "./imageSlider";

const heroImages = [
  {
    alt: "Landsilde Image 1",
    url: "/Landslide-Img-1.jpg",
  },
  {
    alt: "Landslide Image 2",
    url: "/Landslide-Img-2.jpg",
  },

  {
    alt: "Landslide Image 3",
    url: "/Landslide-Img-3.jpg",
  },

  {
    alt: "Landslide Image 4",
    url: "/Landslide-Img-4.jpg",
  },

  {
    alt: "Landslide Image 5",
    url: "/Landslide-Img-5.jpg",
  },
];

type HeroContextProps = {
  className: string;
  playVideo: boolean;
};

export default function HeroContent({
  className,
  playVideo,
}: HeroContextProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [removeImageSlider, setRemoveImageSlider] = useState(false);

  useEffect(() => {
    if (playVideo) {
      setRemoveImageSlider(true);
    }

    if (videoRef.current) {
      if (playVideo) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playVideo]);

  return (
    <>
      <div className="slider-video-container">
        <div
          className={`image-slider-container slider-video-content ${
            removeImageSlider ? "" : "active-content"
          }`}
        >
          <ImageSlider
            className={className}
            heroImages={heroImages}
            sliderDuration={4000}
          />
        </div>
        <video
          className={`${className} slider-video-content ${
            removeImageSlider ? "active-content" : ""
          }`}
          ref={videoRef}
          loop
        >
          <source src="/FEB27.mp4" type="video/mp4" />
          Is this working?
        </video>
      </div>
    </>
  );
}
