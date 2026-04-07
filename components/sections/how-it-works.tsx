import { HOW_IT_WORKS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Up and Running in{" "}
            <span className="gradient-text">Three Steps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Deploy your AI team in minutes, not months.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {HOW_IT_WORKS.map((item, index) => (
          <AnimateOnScroll key={item.step} direction="up" delay={index * 150}>
            <div className="group relative">
              {/* Connector line (hidden on last item) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="absolute top-12 left-[60%] hidden h-px w-[80%] bg-gradient-to-r from-brand/50 to-transparent lg:block" />
              )}

              <div className="relative rounded-2xl border bg-card/50 p-8 transition-all hover:shadow-lg hover:shadow-brand/5">
                {/* Step number */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand/80 text-lg font-bold text-white shadow-lg shadow-brand/25">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
