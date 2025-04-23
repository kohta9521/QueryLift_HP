"use client";

import React from "react";

// next
import Link from "next/link";

// components
import MobileNavigation from "@/components/layouts/Header/MobileNavigation";

// Navigation items types
export interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}

const HeaderNew = () => {
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Price", href: "/price" },
    { name: "Q&A", href: "/questions" },
    { name: "Member", href: "/member" },
    { name: "News", href: "/news" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact", isButton: true },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 flex justify-center items-center w-full z-50">
      <div className="w-11/12 h-[60px] rounded-lg flex items-center justify-between px-4 md:px-6">
        {/* logo */}
        <div className="text-2xl font-semibold text-white">QueryLift</div>

        {/* デスクトップナビゲーション - lg以上で表示 */}
        <nav className="hidden lg:block bg-black/70 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/20 backdrop-blur-xl">
          <ul className="flex items-center gap-6 text-white/90 font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isButton ? (
                  <Link
                    href={item.href}
                    className="bg-[var(--primary)] hover:opacity-90 text-white text-xs py-2 px-4 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_6px_16px_rgba(var(--primary-rgb),0.4)]"
                    style={
                      {
                        "--primary-shadow": "rgba(var(--primary-rgb), 0.8)",
                        "--primary-shadow-hover":
                          "rgba(var(--primary-rgb), 0.4)",
                      } as React.CSSProperties
                    }
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-xs cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full hover:text-[var(--primary)]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* mobile menu */}
        <div className="lg:hidden bg-white/10 rounded-2xl p-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/20 backdrop-blur-xl">
          <MobileNavigation navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default HeaderNew;
