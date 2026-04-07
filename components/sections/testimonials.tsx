import { TESTIMONIALS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function Testimonials() {
  return (
    <SectionWrapper className="bg-muted/30">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by teams everywhere
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our customers have to say.
          </p>
        </div>
      </AnimateOnScroll>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, index) => (
          <AnimateOnScroll key={t.author} direction="up" delay={index * 100}>
            <Card className="border bg-background h-full">
              <CardContent className="pt-6">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
