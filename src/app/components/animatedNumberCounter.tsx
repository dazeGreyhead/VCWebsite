"use client";

import { KeyframeOptions } from "motion";
import { animate, useInView, useIsomorphicLayoutEffect } from "motion/react";
import React, { useRef } from "react";

type AnimatedNumberCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

export default function AnimatedNumberCounter({
  from,
  to,
  animationOptions,
}: AnimatedNumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeInOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
}
