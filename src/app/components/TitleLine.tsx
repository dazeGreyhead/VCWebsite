import React from "react";

type TitleLineProps = {
  color: "swed-blue" | "swed-yellow" | "vcn-red";
};

export default function TitleLine({ color }: TitleLineProps) {
  return (
    <div
      style={{
        backgroundColor: `var(--${color})`,
        width: "100px",
        height: "8px",
      }}
    ></div>
  );
}
