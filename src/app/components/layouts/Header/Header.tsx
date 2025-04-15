// Header.tsx (サーバーコンポーネント)
import React from "react";
import MobileNavigation from "@/components/layouts/Header/MobileNavigation";
import Link from "next/link";

// ナビゲーション項目の型定義
export interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}

const Header: React.FC = () => {
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/services" },
    { name: "Price", href: "/services" },
    { name: "Member", href: "/services" },
    { name: "News", href: "/services" },
    { name: "Company", href: "/services" },
    { name: "Contact", href: "/contact", isButton: true },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 flex justify-center items-center w-full z-10">
      <div className="w-11/12 h-[60px] bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-between px-4 md:px-6">
        {/* logo */}
        <div className="font-semibold text-xl">
          <p className="text-white">QueryLift</p>
        </div>

        {/* デスクトップナビゲーション - lg以上で表示 */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isButton ? (
                  <Link
                    href={item.href}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイルナビゲーション - lg未満で表示 */}
        <div className="lg:hidden">
          <MobileNavigation navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
