"use client";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import SecTitle from "../../ui/text/SecTitle";

// icon
import { AiFillProduct } from "react-icons/ai";

// next
// import Image from "next/image";

const Products = () => {
  useAOS();
  return (
    <section id="products" className="w-11/12 mx-auto py-30 md:py-40 md:w-7/12">
      <SecTitle
        id="products"
        icon={<AiFillProduct />}
        jatitle="プロダクト紹介"
        entitle="Product"
      />
      <p data-aos="fade-up" className="main-text mb-10">
        我々はGEO（生成エンジン最適化）時代に、価値あるブランドが正しく可視化されることを目的として分析ツールを開発しています。
        <br />
        検索は「能動」から「受動」へ変化を遂げています。AI検索型の時代ではユーザーは情報を選べません。AIに選ばれるどうかが全てであり、選ばれない情報は存在していないと同義です。これからはSEO以上の熾烈な争いの時代に変化します。
        <br />
        我々とGEO時代の全く新しいアプローチでの伴奏者を実現します。
      </p>
    </section>
  );
};

export default Products;
