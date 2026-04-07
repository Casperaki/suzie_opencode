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
    <SectionWrapper id="faq">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know.
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll direction="up" delay={100}>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
