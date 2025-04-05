"use client";

import React from "react";
import { useScramble } from "use-scramble";

type Props = {
  text: string;
};

const TextScramble: React.FC<Props> = ({ text }) => {
  const { ref, replay } = useScramble({
    text,
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 0,
  });

  return (
    <span
      ref={ref}
      onMouseEnter={replay}
      className="block mb-2 text-medium font-mono text-white whitespace-nowrap cursor-pointer"
    />
  );
};

export default TextScramble;
