import HeaderNew from "./components/layouts/Header/HeaderNew";

import Spline from "@splinetool/react-spline/next";
import Hero from "./components/layouts/Hero/Hero";
import About from "./components/layouts/About/About";
import Contact from "./components/layouts/Contact/Contact";
import Products from "./components/layouts/Product/Products";
import Company from "./components/layouts/Company/Company";

export default function Home() {
  return (
    <div className="relative w-full h-auto">
      <div className="fixed inset-0 w-full h-full -z-0">
        <Spline
          scene="https://prod.spline.design/7I2ng5jCiUGfTDl3/scene.splinecode"
          className="w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* blue bg */}
      {/* <div className="fixed inset-0 w-full h-full bg-white/10 backdrop-blur-sm z-3"></div> */}

      {/* Main Contents */}
      <div className="relative z-10">
        <HeaderNew />
        <Hero />
        <About />
        <Products />
        <Company />
        <Contact />
      </div>
    </div>
  );
}
