import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeatureCards } from "@/components/landing/feature-cards";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
      </main>
      <Footer />
    </>
  );
}