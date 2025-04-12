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
    { name: "Product", href: "/services" },
    { name: "Price", href: "/services" },
    { name: "Member", href: "/services" },
    { name: "News", href: "/services" },
    { name: "Company", href: "/services" },
    { name: "Contact", href: "/contact", isButton: true },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 flex justify-center items-center w-full z-50">
      <div className="w-11/12 h-[60px]  rounded-lg flex items-center justify-between px-4 md:px-6">
        {/* logo */}
        <div className="text-2xl font-semibold black">QueryLift</div>

        {/* デスクトップナビゲーション - lg以上で表示 */}
        <nav className="hidden lg:block bg-[#f0f0f3] rounded-2xl p-4 shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff] border border-[#f0f0f3] backdrop-blur-sm">
          <ul className="flex items-center gap-6 text-[#2e2e2e] font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isButton ? (
                  <Link
                    href={item.href}
                    className="bg-[#3A66FF] hover:bg-blue-700 text-white text-xs py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-xs cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#3A66FF] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* mobile menu */}
        <div className="lg:hidden bg-[#f0f0f3] rounded-2xl p-3 shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff] border border-[#f0f0f3] backdrop-blur-sm">
          <MobileNavigation navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default HeaderNew;
