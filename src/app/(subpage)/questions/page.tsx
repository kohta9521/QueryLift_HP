import React from "react";

// components
import SubPageTemp from "@/app/components/layouts/templates/SubPageTemp";
import SubPageTitle from "@/app/components/ui/text/SubPageTitle";

const Questions = () => {
  return (
    <SubPageTemp
      id="questions"
      title="QUESTIONS"
      description="生成AI時代の検索可視性を革新する、QueryLiftの企業理念と目指す未来"
      heroImage="/images/about-hero.jpg"
      heroHeight="medium"
      accentColor="purple"
    >
      {/* 質問セクション */}
      <div className="max-w-4xl mx-auto">
        <SubPageTitle id="questions-title-1" size="h1" text="よくある質問" />
      </div>
    </SubPageTemp>
  );
};

export default Questions;
