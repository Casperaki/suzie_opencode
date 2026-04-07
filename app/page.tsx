import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { AgentEcosystem } from "@/components/sections/agent-ecosystem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AgentEcosystem />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <ContactForm />
    </>
  );
}
