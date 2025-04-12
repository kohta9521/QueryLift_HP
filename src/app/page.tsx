import HeaderNew from "./components/layouts/Header/HeaderNew";

import Spline from "@splinetool/react-spline/next";
import Hero from "./components/layouts/Hero/Hero";
import About from "./components/layouts/About/About";

export default function Home() {
  return (
    <div className="relative w-full h-auto">
      <div className="fixed inset-0 w-full h-full -z-0">
        <Spline
          scene="https://prod.spline.design/GgkxH0N7RjQFgazq/scene.splinecode"
          className="w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* blue bg */}
      {/* <div className="fixed inset-0 w-full h-full bg-white/40 backdrop-blur-sm -z-10"></div> */}

      {/* Main Contents */}
      <div className="relative z-10">
        <HeaderNew />
        <Hero />
        <About />
      </div>
    </div>
  );
}
