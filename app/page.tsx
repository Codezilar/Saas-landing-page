import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Marketing from "@/components/Marketing";
import Solution from "@/components/Solution";
import FAQ from "@/components/FAQ";
import Help from "@/components/Help";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Pricing />
        <Features />
        <Marketing />
        <Solution />
        <FAQ />
        <Help />
      </main>
      <Footer />
    </>
  );
}
