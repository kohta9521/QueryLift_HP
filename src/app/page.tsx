// components
import MainVisual from "@/components/organisms/MainVisual";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <>
      <MainVisual id="top">
        <Header />
        <Hero />
      </MainVisual>
      <div className="w-full h-[300px] bg-red-200">sample</div>
    </>
  );
}
