"use client";

import React, { useEffect, useRef, useState } from "react";
import PlayButton from "./playButton";

type VideoContentProps = {
  videoClassName: string;
  videoSrc: string;
};

export default function VideoContent({
  videoClassName,
  videoSrc,
}: VideoContentProps) {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlayHeroVideo() {
    setPlayVideo(!playVideo);
  }

  useEffect(() => {
    async function playOrPause() {
      if (videoRef.current) {
        if (playVideo) {
          await videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
    playOrPause();
  }, [playVideo]);

  return (
    <div className={`video-content-container ${videoClassName}`}>
      <PlayButton
        className="video-content-play-button"
        onClick={handlePlayHeroVideo}
        playVideo={playVideo}
      />
      <video ref={videoRef} className="video-content">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
