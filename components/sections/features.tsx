import { FEATURES } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function Features() {
  return (
    <SectionWrapper id="features">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Enterprise-Grade{" "}
            <span className="gradient-text">AI Capabilities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything your organization needs to deploy, manage, and scale intelligent AI agents.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <AnimateOnScroll key={feature.title} direction="up" delay={index * 100}>
            <Card className="group h-full border bg-card/50 transition-all hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5">
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
                  <feature.icon className="h-7 w-7" />
                </div>
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
