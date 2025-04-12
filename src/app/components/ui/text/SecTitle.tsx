"use client";
import React from "react";

// hooks
import useAOS from "@/hooks/useAOS";

// props
export type SecTitleProps = {
  id: string;
  icon: React.ReactNode;
  jatitle: string;
  entitle: string;
};

const SecTitle = ({ id, icon, jatitle, entitle }: SecTitleProps) => {
  useAOS();
  return (
    <div key={id} data-aos="fade-up" className="inline-block mb-14">
      <div className="flex items-center mb-1">
        <div className="text-blue-600 mr-1">{icon}</div>
        <p className="text-sm md:text-base text-blue-600 font-bold">
          {jatitle}
        </p>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">{entitle}</h1>
    </div>
  );
};

export default SecTitle;
