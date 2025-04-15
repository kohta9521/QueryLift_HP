"use client";

import React from "react";
import SubPageTemp from "@/app/components/layouts/templates/SubPageTemp";
import Image from "next/image";

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
        <div className="mb-12 md:mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8 border border-purple-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-800 border-b border-purple-200 pb-2">
            企業理念
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            QueryLiftは、生成AI時代における検索可視性の革新を目指しています。私たちは、SEOとGEOの両面から「選ばれる情報」を設計し、企業や組織がデジタル空間で適切に発見されるためのソリューションを提供します。
          </p>
          <p className="text-gray-700 leading-relaxed">
            データ駆動型のアプローチと最先端のAI技術を活用し、検索エンジンのアルゴリズム変化に対応しながら、持続可能な検索可視性を実現します。
          </p>
        </div>

        {/* ミッションとビジョン */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 text-purple-800">
              ミッション
            </h3>
            <p className="text-gray-700 leading-relaxed">
              生成AI時代において、企業や組織が検索結果で適切に発見され、価値ある情報がユーザーに届くための技術とサービスを提供します。
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">ビジョン</h3>
            <p className="text-gray-700 leading-relaxed">
              検索エンジンと生成AIの進化に合わせて、常に最適な検索可視性を提供するプラットフォームとなり、デジタル情報の民主化に貢献します。
            </p>
          </div>
        </div>

        {/* 会社情報 */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-800 border-b border-purple-200 pb-2">
            会社情報
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800">会社名</h3>
                <p className="text-gray-700">株式会社QueryLift</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800">設立</h3>
                <p className="text-gray-700">2023年4月</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800">代表者</h3>
                <p className="text-gray-700">山田 太郎（代表取締役）</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800">所在地</h3>
                <p className="text-gray-700">東京都渋谷区代々木1-2-3</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800">事業内容</h3>
                <p className="text-gray-700">
                  SEO分析・最適化、GEO分析、AI検索可視性向上サービス
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800">連絡先</h3>
                <p className="text-gray-700">info@querylift.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* チーム紹介 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-800 border-b border-purple-200 pb-2">
            チーム紹介
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            QueryLiftは、SEO、データ分析、AI、マーケティングの専門家で構成された多様なチームです。私たちは、技術と創造性を組み合わせて、革新的なソリューションを提供しています。
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* チームメンバーカード */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-indigo-200 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300">
                <Image
                  src="/images/team/member1.jpg"
                  alt="山田 太郎"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-purple-800">山田 太郎</h3>
              <p className="text-sm text-gray-600">代表取締役</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-indigo-200 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300">
                <Image
                  src="/images/team/member2.jpg"
                  alt="佐藤 花子"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-purple-800">佐藤 花子</h3>
              <p className="text-sm text-gray-600">CTO</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-indigo-200 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300">
                <Image
                  src="/images/team/member3.jpg"
                  alt="鈴木 一郎"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-purple-800">鈴木 一郎</h3>
              <p className="text-sm text-gray-600">
                マーケティングディレクター
              </p>
            </div>
          </div>
        </div>
      </div>
    </SubPageTemp>
  );
}
