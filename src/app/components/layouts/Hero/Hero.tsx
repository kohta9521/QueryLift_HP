// Hero.tsx
import React from "react";
// import Spline from "@splinetool/react-spline/next";
import Contents from "@/components/layouts/Hero/Contents";
import NewsCard from "@/components/layouts/Hero/NewsCard";

const Hero: React.FC = () => {
  return (
    <div
      data-scroll-section
      className="relative w-full h-screen overflow-hidden"
    >
      {/* <div className="fixed inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/GgkxH0N7RjQFgazq/scene.splinecode"
          className="w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div> */}

      {/* コンテンツ部分 */}
      <Contents />
      {/* ニュース部分 */}
      <div className="hidden md:block">
        <NewsCard
          id="hero-news-1"
          link="/news"
          tag="NEWS"
          date="2025.04.01"
          text="新しいフロントエンドのメンバーが参画しました。"
        />
      </div>
    </div>
  );
};

export default Hero;
