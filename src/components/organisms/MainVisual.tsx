import React from "react";

// props
export type MainVisualProps = {
  id: string;
  children: React.ReactNode;
};

const MainVisual = ({ id, children }: MainVisualProps) => {
  return (
    <div key={id} className="w-full h-screen">
      {children}
    </div>
  );
};

export default MainVisual;
