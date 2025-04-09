// MobileNavigation.tsx (クライアントコンポーネント)
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavItem } from "@/app/components/layouts/Header/Header";

interface MobileNavigationProps {
  navItems: NavItem[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* ハンバーガーアイコン */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* モバイルメニュー - アニメーション付き */}
      <div
        className={`absolute top-20 right-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 transform -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="py-4 px-6">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="transform transition-transform duration-300 hover:translate-x-2"
              >
                {item.isButton ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
