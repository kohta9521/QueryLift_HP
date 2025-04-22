// Contents.tsx
"use client";
import React from "react";

// hooks
import useAOS from "@/hooks/useAOS";

const Contents: React.FC = () => {
  // What QueryLift リンククリック時のスクロール処理
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // URL送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const urlInput = form.elements.namedItem("url") as HTMLInputElement;

    if (urlInput && urlInput.value) {
      console.log("URL submitted:", urlInput.value);
      // ここにURL処理ロジックを追加
    }
  };

  // hooks
  useAOS();

  return (
    <div
      data-aos="fade-up"
      className="absolute inset-0 flex items-center justify-start lg:justify-center pointer-events-none"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl ml-4 lg:mx-auto mb-12 lg:mb-0 pointer-events-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white mb-4">
            Dominate{" "}
            <span className="text-[var(--primary)]">AI Search Results</span>
          </h1>

          <p className="text-medium md:text-lg text-white mb-6 tracking-wide">
            生成AI時代の検索可視性を支配する。QueryLiftが、SEOとGEOの両面から&quot;選ばれる情報&quot;を設計します。
          </p>

          {/* SEOチェッカー */}
          <form
            onSubmit={handleSubmit}
            className="mb-6 max-w-xl mx-auto text-left md:text-center"
          >
            <div className="flex flex-row">
              <div className="relative flex-grow">
                <input
                  type="url"
                  name="url"
                  placeholder="Enter your URL"
                  className="w-full px-4 py-3 rounded-l-xl backdrop-blur-lg bg-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--primary)] backdrop-blur-lg text-white font-medium rounded-r-xl hover:bg-[var(--primary)] transition-colors duration-300 shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>

          {/* What QueryLift テキストリンク */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80 group transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span
              className="border-b font-semibold border-transparent pb-1 transition-all duration-300"
              style={
                {
                  borderColor: "transparent",
                  "--hover-border-color": "var(--primary)",
                } as React.CSSProperties
              }
            >
              What QueryLift
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contents;
