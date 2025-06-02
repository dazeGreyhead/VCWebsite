import React from "react";
import { VcnStatsType } from "../utils/types";
import AnimatedNumberCounter from "./animatedNumberCounter";

export default function VcnStatsBox(props: VcnStatsType) {
  // Following to calculate what number the stats should count up from.
  // Trying to make it so that it doesn't count too far off from the number.
  const length = (Math.log(props.number) * Math.LOG10E + 1) | 0;
  const negative = Math.pow(10, length - 1);
  const from = props.number - negative;
  // This is so that the words describing the stat are on separate lines.
  const words = props.descriptor.trim().split(/\s+/);
  return (
    <div className="vcn-stats-container">
      <div className="icon-container">
        <props.icon className="our-impact-icons" />
      </div>
      <div className="text-container">
        <p className="stats-numbers cyan">
          <AnimatedNumberCounter from={from} to={props.number} />
        </p>
        <p className="stats cyan wrap">
          {words.map((word, index) => {
            if (index === words.length - 1) {
              return word;
            }
            return (
              <span key={word}>
                {word}
                <br />
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
