import { TESTIMONIALS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-muted/30">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Trusted by <span className="gradient-text">Forward-Thinking Teams</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how organizations are transforming their operations with Team Suzie.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, index) => (
          <AnimateOnScroll key={t.author} direction="up" delay={index * 100}>
            <Card className="group h-full border bg-card/50 transition-all hover:shadow-lg hover:shadow-brand/5">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-brand/30" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-border/50 pt-4">
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} at {t.company}
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
