// Contents.tsx
"use client";

import React from "react";

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

  return (
    <div className="absolute inset-0 flex md:items-center z-[1] pointer-events-none">
      <div className="container mx-auto px-4 lg:px-8 flex md:block">
        <div className="max-w-xl ml-4 md:ml-16 lg:ml-32 xl:ml-40 md:mt-0 mt-auto mb-12 md:mb-0 pointer-events-auto">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Dominate <span className="text-blue-600">AI Search Results</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Generative AI is shaping brand discovery. AthenaHQ ensures your
            brand{" "}
            <span className="font-medium text-blue-600">
              leads the conversation
            </span>
            .
          </p>

          {/* SEOチェッカー */}
          <form onSubmit={handleSubmit} className="mb-6">
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
                className="px-6 py-3 bg-blue-600/90 backdrop-blur-lg text-white font-medium rounded-r-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg"
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
            className="inline-flex items-center text-blue-600 hover:text-blue-800 group transition-all duration-300"
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
            <span className="border-b border-transparent group-hover:border-blue-600 pb-1 transition-all duration-300">
              What QueryLift
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contents;
