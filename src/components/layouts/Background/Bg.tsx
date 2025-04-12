"use client";
import React from "react";

// spline
import Spline from "@splinetool/react-spline/next";

// props
export type BgProps = {
  id: string;
  children: React.ReactNode;
};

const Bg = ({ id, children }: BgProps) => {
  return (
    <div key={id} className="relative w-full min-h-screen overflow-hidden">
      {/* Spline背景コンテナ - 固定位置で後ろに配置 */}
      <div className="fixed inset-0 w-full h-full -z-20">
        <Spline
          scene="https://prod.spline.design/GgkxH0N7RjQFgazq/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ブラー効果を持つ半透明レイヤー - 背景とコンテンツの間に配置 */}
      <div className="fixed inset-0 w-full h-full bg-white/30 backdrop-blur-sm -z-10"></div>

      {/* メインコンテンツ */}
      <div className="relative z-0 w-full min-h-screen">{children}</div>
    </div>
  );
};

export default Bg;
