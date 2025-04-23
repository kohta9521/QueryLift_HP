import React from "react";
import { FaTwitter } from "react-icons/fa";

// components
import SubPageTemp from "../../components/layouts/templates/SubPageTemp";
import SubPageTitle from "../../components/ui/text/SubPageTitle";
import SubPageMainText from "../../components/ui/text/SubPageMainText";
import MemberCard from "../../components/ui/card/MemberCard";

// icon

function page() {
  return (
    <SubPageTemp
      id="Member"
      title="MEMBER"
      description="生成AI時代の検索可視性を革新するメンバーをご紹介します"
      heroImage="/images/about-hero.jpg"
      heroHeight="medium"
      accentColor="purple"
    >
      {/* メンバー紹介 */}
      <div className="max-w-4xl mx-auto">
        <SubPageTitle id="member-title-1" size="h1" text="はじめに" />
        <SubPageMainText
          id="member-text-1"
          variant="normal"
          text="QueryLiftは、生成AI時代における検索可視性の革新を目指しています。私たちは、SEOとGEOの両面から「選ばれる情報」を設計し、企業や組織がデジタル空間で適切に発見されるためのソリューションを提供します。"
        />
        <SubPageTitle id="member-title-2" size="h1" text="メンバー一覧" />
        <SubPageMainText
          id="member-text-2"
          variant="normal"
          text="メンバー一覧です。それぞれのメンバーの個性豊かなプロフィールをご覧ください。"
        />
        <div className="w-full flex flex-col gap-3">
          <MemberCard
            id="member-card-1-souta"
            post="CEO"
            janame="野口 聡太"
            enname="Souta Noguchi"
            image="/images/member/souta.jpg"
            socialLinks={[
              {
                id: "member-card-1-souta-link-1",
                url: "https://www.google.com",
                icon: <FaTwitter />,
              },
              {
                id: "member-card-1-souta-link-1",
                url: "https://www.google.com",
                icon: <FaTwitter />,
              },
            ]}
            desc="慶應義塾大学 環境情報学部4年生。慶應SFCおよび交換留学先のミュンヘン工科大学にてコンピュータサイエンスを専攻。Yahoo! JAPAN株式会社 Merket Intelligence室にて3年間、研究インターンとしてビックデータ（検索クエリ・GPSデータ等）の解析に従事してきた。"
          />
          <MemberCard
            id="member-card-2-komatsu"
            post="COO"
            janame="小松 修介"
            enname="Shusuke Komatsu"
            image="/images/member/komatsu.jpg"
            socialLinks={[
              {
                id: "member-card-1-souta-link-1",
                url: "https://www.google.com",
                icon: <FaTwitter />,
              },
              {
                id: "member-card-1-souta-link-1",
                url: "https://www.google.com",
                icon: <FaTwitter />,
              },
            ]}
            desc="NAIST（奈良先端科学技術大学院大学）博士前期課程1年。2024年に慶應義塾大学環境情報学部を卒業。現在はNAIST・理研GRPで自然言語処理・音声言語処理・ロボットヒューマンインタラクションの研究を行っている。"
          />
          <MemberCard
            id="member-card-1-souta"
            post="CTO"
            janame="河内 光太"
            enname="Kochi Kohta"
            image="/images/member/souta.jpg"
            socialLinks={[
              {
                id: "member-card-1-souta-link-1",
                url: "https://www.google.com",
                icon: <FaTwitter />,
              },
              {
                id: "member-card-1-souta-link-1",
                url: "https://www.google.com",
                icon: <FaTwitter />,
              },
            ]}
            desc="学習院大学 法学部法学科学部4年生。フルスタックエンジニアとして複数社にて業務委託を行う。Webサービスを個人で複数リリースし合計5000人を超える利用ユーザーを獲得。エンジニアの知見と大学での法学の知見など幅広い知識をもとに現在は株式会社MercariでPdMを行っている。"
          />
        </div>
      </div>
    </SubPageTemp>
  );
}

export default page;
