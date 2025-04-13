"use client";

import { RefObject, useEffect } from "react";

// handles what happens when clicked outside of the given ref.
export default function useOutsideClick(
  ref: RefObject<HTMLDivElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}
