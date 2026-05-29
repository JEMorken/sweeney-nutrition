import { Hero } from "@/components/site/hero";
import { IsThisYou } from "@/components/site/is-this-you";
import { DifferentWay } from "@/components/site/different-way";
import { HowItWorks } from "@/components/site/how-it-works";
import { AboutPreview } from "@/components/site/about-preview";
import { PortalPreview } from "@/components/site/portal-preview";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <IsThisYou />
      <DifferentWay />
      <HowItWorks />
      <AboutPreview />
      <PortalPreview />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
