"use client";

import Image from "next/image";
import "./componentStyles.scss";
import { useEffect, useState } from "react";

type ImageSliderProps = {
  className: string;
  heroImages: { alt: string; url: string }[];
  sliderDuration: number;
};

export default function ImageSlider({
  className,
  heroImages,
  sliderDuration = 3000,
}: ImageSliderProps) {
  const [imgIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, sliderDuration);

    return () => clearInterval(timer); // cleanup on unmount
  }, [heroImages.length, sliderDuration]);

  return (
    <div className="image-slider">
      {heroImages &&
        heroImages.length &&
        heroImages.map((images, index) => {
          return (
            <Image
              key={index}
              src={images.url}
              width={1600}
              height={1200}
              alt={images.alt}
              className={`${className} fade-image ${
                index === imgIndex ? "active" : ""
              }`}
            />
          );
        })}
    </div>
  );
}
