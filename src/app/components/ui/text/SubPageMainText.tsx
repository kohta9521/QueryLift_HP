import React from "react";

// props
export type SubPageMainTextProps = {
  id: string;
  text: string;
  variant?: "normal" | "large" | "small";
};

const SubPageMainText = ({
  id,
  text,
  variant = "normal",
}: SubPageMainTextProps) => {
  // バリアントに基づいたスタイルの設定
  const textStyles = {
    large: "text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide",
    normal: "text-base md:text-lg leading-7 md:leading-8 tracking-normal",
    small: "text-sm md:text-base leading-6 md:leading-7 tracking-normal",
  };

  const baseStyle =
    "text-white/90 font-normal mb-6 last:mb-0 relative w-full block";
  const combinedStyle = `${baseStyle} ${textStyles[variant]}`;

  return (
    <div className="w-full relative">
      <div className="prose prose-invert prose-p:my-0 prose-p:text-white/90 max-w-none">
        <p key={id} id={`#${id}`} className={combinedStyle}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default SubPageMainText;
