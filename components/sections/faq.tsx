import { FAQ_ITEMS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function FAQ() {
  return (
    <SectionWrapper id="faq" className="bg-muted/30">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about Team Suzie.
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll direction="up" delay={100}>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
