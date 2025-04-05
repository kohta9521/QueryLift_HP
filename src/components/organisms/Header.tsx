import React from "react";
import TextScramble from "../atoms/TextScramble";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  return (
    <header className="flex justify-between w-full h-1/7 sm:h-1/3 sm:pt-12">
      {/* logo */}
      <div className="w-5/10 sm:w-3/10 h-full sm:pl-12">
        <h1 className="block text-3xl">QueryLift</h1>
      </div>
      {/* top text */}
      <div className="hidden sm:block sm:w-1/10 h-full">
        <TextScramble text="TOP" />
      </div>
      {/* menu text */}
      <div className="hidden sm:block sm:w-1/10 h-full sm:pr-12">
        <div className="text-right">
          <TextScramble text="MENU" />
        </div>
      </div>
      {/* menu items */}
      <div className="hidden sm:block sm:w-1/10  h-full">
        <TextScramble text="TOP" />
        <TextScramble text="ABOUT" />
        <TextScramble text="PRODUCT" />
        <TextScramble text="MEMBER" />
        <TextScramble text="NEWS" />
        <TextScramble text="CONTACT" />
      </div>
      {/* sns items */}
      <div className="hidden sm:block sm:w-1/10 h-full">
        <TextScramble text="X" />
        <TextScramble text="Instagram" />
        <TextScramble text="note" />
        <TextScramble text="Discord" />
      </div>
      {/* lang and dark mode */}
      <div className="sm:w-2/10 h-10 pr-12 flex items-center justify-end">
        <Link
          href="/"
          className="inline-flex items-center mr-8 py-2 px-4 border-[1px] border-gray-300 rounded-full"
        >
          <p className="text-sm">ENGLISH</p>
        </Link>
        <CgMenuRight size={30} />
      </div>
      {/* hamburger menu */}
      <div className="block w-5/10 sm:hidden"></div>
    </header>
  );
};

export default Header;
