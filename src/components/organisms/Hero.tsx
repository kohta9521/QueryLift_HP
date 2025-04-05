import React from "react";

// next
import Image from "next/image";

// components

const Hero = () => {
  return (
    <div className="relative flex w-full h-6/7 sm:h-2/3">
      {/* sidebar */}
      <div className="sm:w-1/6 h-full flexflex-col items-start">
        <div className="rotate-90 mt-29 ml-[-60]  text-sm">
          <p className="whitespace-nowrap mb-8">https://querylift.co.jp</p>
          <p className="whitespace-nowrap">
            We are QueryLift
            <br />- Continue to create a whole new world
          </p>
        </div>
      </div>
      <div className="sm:w-5/6 h-full bg-gray-900">
        <Image
          src="/images/hero.png"
          width={1280}
          height={900}
          alt="hero-image"
          className="w-full h-full"
        />
      </div>
      {/* bottom box (absolute position) */}
      {/* <div className="absolute bottom-0 left-12">
        <h1 className="text-7xl">We are QueryLift Company</h1>
      </div> */}
    </div>
  );
};

export default Hero;
