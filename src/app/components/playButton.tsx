"use client";

import { useEffect, useRef, useState } from "react";
import { rect1, rect2, tri1, tri2 } from "./playButtonPaths";
import { interpolate } from "flubber";
import { motion, animate, useMotionValue, useTransform } from "motion/react";

type PlayButtonProps = {
  className: string;
  playVideo: boolean;
  onClick: () => void;
};

export default function PlayButton({
  className,
  playVideo,
  onClick,
}: PlayButtonProps) {
  return (
    <>
      <svg
        width="173"
        height="173"
        viewBox="0 0 173 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <g className={className}>
          <SVGMorph paths={[tri1, rect1, tri1]} playVideo={playVideo} />
          <SVGMorph paths={[tri2, rect2, tri2]} playVideo={playVideo} />
        </g>
      </svg>
    </>
  );
}

function SVGMorph({
  paths,
  playVideo,
}: {
  paths: string[];
  playVideo: boolean;
}) {
  const [indexOfPath, setIndexOfPath] = useState(0);
  const progress = useMotionValue(0);
  const getIndex = paths.map((_, i) => i);
  const path = useTransform(progress, getIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    animate(progress, indexOfPath, {
      duration: 0.3,
      ease: "easeInOut",
      onComplete: () => {
        if (indexOfPath === paths.length - 1) {
          setIndexOfPath(1);
          progress.set(0);
        } else {
          setIndexOfPath(indexOfPath + 1);
        }
      },
    });
  }, [playVideo]);

  return <motion.path d={path} />;
}
