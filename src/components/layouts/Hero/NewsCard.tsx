import React from "react";

// next
import Link from "next/link";

// icon

// props
export type NewsCardProps = {
  id: string;
  link: string;
  tag: string;
  date: string;
  text: string;
};

const NewsCard = ({ id, link, tag, date, text }: NewsCardProps) => {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center w-full z-10">
      <Link
        key={id}
        href={link}
        className="group w-5/12 h-[60px] bg-white/40 backdrop-blur-md rounded-lg flex items-center justify-between px-4 md:px-6"
      >
        <div className="flex items-center">
          <p className="block px-3 mr-2 py-1 bg-blue-600 text-white text-xs rounded-full">
            {tag}
          </p>
          <p className="text-sm">{date}</p>
        </div>
        <p className="">{text}</p>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <path
            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default NewsCard;
