"use client";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import SecTitle from "../../ui/text/SecTitle";
import ViewMoreButton from "../../ui/button/ViewMoreButton";

// icon
import { PiStarFourFill } from "react-icons/pi";

// next
import Image from "next/image";

export default function About() {
  useAOS();
  return (
    <section
      id="about"
      className="w-11/12 mx-auto pt-30 pb-16 md:pt-40 md:pb-20 md:w-7/12"
    >
      <SecTitle
        id="about"
        icon={
          <>
            <PiStarFourFill />
          </>
        }
        jatitle="GEO時代の伴走者"
        entitle="What's QueryLift"
      />
      <p data-aos="fade-up" className="main-text mb-10">
        我々はGEO（生成エンジン最適化）時代に、価値あるブランドが正しく可視化されることを目的として分析ツールを開発しています。
        <br />
        検索は「能動」から「受動」へ変化を遂げています。AI検索型の時代ではユーザーは情報を選べません。AIに選ばれるどうかが全てであり、選ばれない情報は存在していないと同義です。これからはSEO以上の熾烈な争いの時代に変化します。
        <br />
        我々とGEO時代の全く新しいアプローチでの伴奏者を実現します。
      </p>
      <div className="mb-7 flex md:justify-end">
        <ViewMoreButton href="/about">もっと見る</ViewMoreButton>
      </div>
      {/* Image */}
      <div
        data-aos="fade-up"
        className="w-full h-auto bg-gray-100 shadow-lg rounded-xl overflow-hidden"
      >
        <Image
          className="w-full h-[250px] md:h-[700px] object-cover"
          src="/images/about-2.png"
          width={800}
          height={500}
          quality={100}
          alt="about-section-image"
        />
      </div>
    </section>
  );
}
