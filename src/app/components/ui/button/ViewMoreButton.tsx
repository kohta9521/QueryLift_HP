import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

// hooks
import useAOS from "@/hooks/useAOS";

type ViewMoreButtonProps = {
  children: ReactNode;
  href: string;
};

export default function ViewMoreButton({
  children,
  href,
}: ViewMoreButtonProps) {
  useAOS();
  return (
    <Link
      href={href}
      data-aos="fade-up"
      className="relative inline-block overflow-hidden border border-[var(--primary)] text-[var(--primary)] px-6 py-2 rounded-md font-medium group"
    >
      {/* 背景アニメーション */}
      <span className="absolute inset-0 bg-[var(--primary)] transition-transform duration-300 ease-out transform -translate-x-full group-hover:translate-x-0 z-0"></span>

      {/* テキスト & アイコン */}
      <span className="relative flex items-center gap-2 z-10 text-sm group-hover:text-white transition-colors duration-300">
        {children}
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
