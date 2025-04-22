import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// types
type SocialLink = {
  id: string;
  url: string;
  icon: React.ReactNode;
};

// props
export type MemberCardProps = {
  id: string;
  post: string;
  janame: string;
  enname: string;
  image: string;
  socialLinks: SocialLink[];
  desc: string;
};

const MemberCard = ({
  id,
  post,
  janame,
  enname,
  image,
  socialLinks,
  desc,
}: MemberCardProps) => {
  return (
    <div
      key={id}
      className="w-full bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* 画像 */}
        <div className="w-[45%] h-full bg-gray-100">
          <Image src={image} alt={janame} fill className="object-cover" />
        </div>

        {/* 情報 */}
        <div className="flex-1">
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--primary)] mb-1">{post}</p>
            <p className="text-sm text-white/60">{enname}</p>
            <h3 className="text-2xl font-bold text-white mb-3">{janame}</h3>
            <p className="text-sm text-white/80 mb-4">{desc}</p>

            {/* SNSリンク */}
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
