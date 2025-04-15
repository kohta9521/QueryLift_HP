"use client";

import React from "react";
// コンポーネントのインポートパスは実際のプロジェクト構造に合わせて調整してください
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { Contact } from "@/components/layout/Contact";

import HeaderNew from "../Header/HeaderNew";

// next
// import Link from 'next/link';
// import Image from 'next/image';

// props
export type SubPageTempProps = {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  heroImage?: string;
  heroHeight?: "small" | "medium" | "large";
  showContact?: boolean;
  accentColor?: string;
};

const SubPageTemp = ({
  id,
  title,
  description,
  children,
  heroImage = "/images/hero-bg.jpg",
  heroHeight = "medium",
  showContact = true,
  accentColor = "blue",
}: SubPageTempProps) => {
  // ヒーローセクションの高さを設定
  const heroHeightClass = {
    small: "h-[30vh] md:h-[40vh]",
    medium: "h-[40vh] md:h-[50vh]",
    large: "h-[50vh] md:h-[60vh]",
  }[heroHeight];

  // アクセントカラーの設定
  const accentColorClass = {
    blue: "from-blue-600 to-indigo-700",
    purple: "from-purple-600 to-indigo-700",
    green: "from-green-600 to-teal-700",
    red: "from-red-600 to-rose-700",
    amber: "from-amber-500 to-orange-600",
  }[accentColor];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <HeaderNew />

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* ヒーローセクション */}
        <section
          className={`relative ${heroHeightClass} w-full overflow-hidden`}
          id={id}
        >
          {/* 背景画像 */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${accentColorClass} opacity-80`}
            />
          </div>

          {/* ヒーローコンテンツ */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
                  {title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 drop-shadow-sm">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* コンテンツセクション */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {children}
          </div>
        </section>

        {/* お問い合わせセクション */}
        {showContact && (
          <section
            className={`py-12 md:py-16 bg-gradient-to-br ${accentColorClass} text-white`}
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              {/* <Contact /> */}
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  お問い合わせ
                </h2>
                <p className="mb-6">
                  ご質問やご相談がございましたら、お気軽にお問い合わせください。
                </p>
                <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md">
                  お問い合わせフォーム
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* フッター */}
      {/* <Footer /> */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold">QueryLift</p>
              <p className="text-sm text-gray-400">
                © 2023 QueryLift. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SubPageTemp;
