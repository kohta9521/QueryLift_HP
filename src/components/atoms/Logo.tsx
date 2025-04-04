// import Image from "next/image";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type LogoProps = {
  id: string;
  href: string;
  size?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
};

const Logo = ({ id, href, size = "medium" }: LogoProps) => {
  return (
    <Link
      key={id}
      href={href}
      className={clsx(
        "inline-block",
        size === "xxsmall" && "w-12 h-auto",
        size === "xsmall" && "w-16 h-auto",
        size === "small" && "w-20 h-auto",
        size === "medium" && "w-24 h-auto",
        size === "large" && "w-28 h-auto",
        size === "xlarge" && "w-32 h-auto",
        size === "xxlarge" && "w-36 h-auto"
      )}
    >
      {/* <Image
        src="/images/logo-nova.webp"
        className="block w-full h-auto"
        width={750}
        height={50}
        alt="logo"
      /> */}
      <p className="block">QueryLift</p>
    </Link>
  );
};

export default Logo;
