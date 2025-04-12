import React from "react";

// props
export type SecTitleProps = {
  id: string;
  icon: React.ReactNode;
  jatitle: string;
  entitle: string;
};

const SecTitle = ({ id, icon, jatitle, entitle }: SecTitleProps) => {
  return (
    <div key={id} className="inline-block mb-6">
      <div className="flex items-center mb-1">
        <div className="text-blue-600 mr-2">{icon}</div>
        <p className="text-sm md:text-base text-blue-600 font-bold">
          {jatitle}
        </p>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold">{entitle}</h1>
    </div>
  );
};

export default SecTitle;
