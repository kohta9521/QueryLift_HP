import React from "react";

// spline
import Spline from "@splinetool/react-spline/next";
import Contents from "@/components/layouts/Hero/Contents";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/IKDO7hQSCOh2FLHB/scene.splinecode"
          className="w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <Contents />
    </div>
  );
};

export default Hero;
