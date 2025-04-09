import { motion as m } from "motion/react";

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
        width="130"
        height="151"
        viewBox="0 0 130 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          d="M130 75.4998L0.250115 150.411L0.250122 0.588617L130 75.4998Z"
          className={className}
        />
      </svg>
    </>
  );
}
