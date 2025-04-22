import React from "react";

// props
export type SubPageTitleProps = {
  id: string;
  size: "h1" | "h2" | "h3";
  text: string;
};

const SubPageTitle = ({ id, size, text }: SubPageTitleProps) => {
  // サイズに応じたスタイルの設定
  const titleStyles = {
    h1: "text-2xl md:text-3xl lg:text-4xl font-bold",
    h2: "text-xl md:text-2xl lg:text-3xl font-bold",
    h3: "text-lg md:text-xl lg:text-2xl font-bold",
  };

  // コンポーネントのレンダリング
  const renderTitle = () => {
    const baseStyle =
      'text-white relative before:content-[""] before:absolute before:top-0 before:left-0 before:w-12 before:h-[2px] before:bg-[var(--primary)] pt-10';
    const combinedStyle = `${baseStyle} ${titleStyles[size]} relative w-full block`;
    const containerStyle = "relative w-full block mb-8 mt-24";

    switch (size) {
      case "h1":
        return (
          <div className={containerStyle}>
            <h1 id={id} className={combinedStyle}>
              {text}
            </h1>
          </div>
        );
      case "h2":
        return (
          <div className={containerStyle}>
            <h2 id={id} className={combinedStyle}>
              {text}
            </h2>
          </div>
        );
      case "h3":
        return (
          <div className={containerStyle}>
            <h3 id={id} className={combinedStyle}>
              {text}
            </h3>
          </div>
        );
      default:
        return (
          <div className={containerStyle}>
            <h2 id={id} className={combinedStyle}>
              {text}
            </h2>
          </div>
        );
    }
  };

  return <div className="w-full relative">{renderTitle()}</div>;
};

export default SubPageTitle;
