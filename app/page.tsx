import { AppSection } from "./_components/AppSection";
import { CTA } from "./_components/CTA";
import { FAQ } from "./_components/FAQ";
import { Features } from "./_components/Features";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { HowItWorks } from "./_components/HowItWorks";
import { Nav } from "./_components/Nav";
import { PainPoint } from "./_components/PainPoint";
import { Reveal } from "./_components/Reveal";
import { Stats } from "./_components/Stats";
import { TrustedBy } from "./_components/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav />
      <Hero />
      {/* <Reveal variant="up-sm">
        <TrustedBy />
      </Reveal> */}
      <HowItWorks />
      <PainPoint />
      <Features />
      <AppSection />
      <Stats />
      <FAQ />
      <Reveal>
        <CTA />
      </Reveal>
      <Footer />
    </div>
  );
}
