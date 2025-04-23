"use client";
import React from "react";

// components
import SubPageTemp from "@/app/components/layouts/templates/SubPageTemp";
import SubPageTitle from "@/app/components/ui/text/SubPageTitle";
// import SubPageMainText from "@/app/components/ui/text/SubPageMainText";

export default function AboutPage() {
  return (
    <SubPageTemp
      id="about"
      title="会社概要"
      description="生成AI時代の検索可視性を革新する、QueryLiftの企業理念と目指す未来"
      heroImage="/images/about-hero.jpg"
      heroHeight="medium"
      accentColor="purple"
    >
      {/* 会社概要セクション */}
      <div className="max-w-4xl mx-auto">
        <SubPageTitle id="about-title-1" size="h1" text="はじめに" />
        <p className="text-base md:text-lg leading-7 md:leading-8 trancking-normal">
          情報の入り口が変われば、選ばれる企業も変わる。
          <br />
          ChatGPTやPerplexityのような生成AIは、ただの道具ではなく、 今や人々の
          意思決定の前提 になり始めています。
          <br />
          これまで私たちは、Googleで検索し、上位にあるページから答えを探してきました。
          <br />
          けれど今、多くの人が 〇〇に最適なサービスは？ とAIに問いかけ、最初から
          選択肢 を提示される世界へと変わり始めています。
          <br />
          この新しい意思決定プロセスにおいて重要なのは、その 選択肢
          の中に、自分たちが含まれているかどうか。
          <br />
        </p>
        {/* Mission */}
        <SubPageTitle id="about-title-1" size="h1" text="MISSION" />
        <h2 className="text-3xl font-semibold text-[var(--primary)] my-20">
          生成AI時代に、正しく価値ある情報を届ける。
        </h2>
        <p className="text-base md:text-lg leading-7 md:leading-8 tracking-normal">
          ユーザーが何を信じ、何を選ぶかは、これから AIの答え
          に大きく左右される時代になります。
          <br />
          その中で、良いサービスが選ばれない、社会にとって必要な情報が届かない。
          <br />
          そんな不公平を少しでも減らしたい。
          <br />
          QueryLiftは、情報の設計と配置によって、AIの中に価値を届ける仕組みをつくります。
        </p>
        {/* Value */}
        <SubPageTitle id="about-title-3" size="h1" text="VALUE" />
        <div className="space-y-12 my-8">
          <div className="bg-black/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--primary)]">
              1. Design for Intelligence
            </h3>
            <p className="text-base md:text-lg leading-7 md:leading-8 tracking-normal text-white/80">
              人に読まれるためではなく、
              <br />
              理解され、引用され、知識として扱われるために設計する。
              <br />
              私たちは、あらゆる情報を知性に届く構造で整える。
            </p>
          </div>

          <div className="bg-black/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--primary)]">
              2. Visible in the Answer
            </h3>
            <p className="text-base md:text-lg leading-7 md:leading-8 tracking-normal text-white/80">
              存在しないものは、選ばれない。
              <br />
              私たちは、生成AIの答えの中に現れるという新しい可視性を、マーケティングの優位性に変えていく。
            </p>
          </div>

          <div className="bg-black/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--primary)]">
              3. Truth in Structure
            </h3>
            <p className="text-base md:text-lg leading-7 md:leading-8 tracking-normal text-white/80">
              コンテンツの力は、見えない構造に宿る。
              <br />
              誰に、何を、どの順番で届けるか。
              <br />
              それは情報ではなく、戦略であり、意志だ。
            </p>
          </div>
        </div>
      </div>
    </SubPageTemp>
  );
}
