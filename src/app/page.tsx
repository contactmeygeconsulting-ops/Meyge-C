import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Logos } from "@/components/site/logos";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Approach } from "@/components/site/approach";
import { Results } from "@/components/site/results";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Logos />
        <About />
        <Services />
        <Approach />
        <Results />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
