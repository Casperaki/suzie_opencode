import { Check } from "lucide-react";
import { PLANS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Plans That <span className="gradient-text">Scale With You</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From startup teams to enterprise organizations.
          </p>
        </div>
      </AnimateOnScroll>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan, index) => (
          <AnimateOnScroll key={plan.name} direction="up" delay={index * 100}>
            <Card
              className={cn(
                "relative flex flex-col h-full border bg-card/50",
                plan.highlighted && "border-brand shadow-xl shadow-brand/10"
              )}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white hover:bg-brand">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className={cn(
                    "w-full",
                    plan.highlighted && "bg-brand text-white hover:bg-brand/90"
                  )}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
