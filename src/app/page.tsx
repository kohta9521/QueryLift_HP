import About from "./components/layouts/About/About";
import Header from "./components/layouts/Header/Header";
import Hero from "./components/layouts/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <div className="w-full h-[300px] bg-red-400"></div>
    </>
  );
}
