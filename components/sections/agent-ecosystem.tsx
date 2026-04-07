import { AGENTS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function AgentEcosystem() {
  return (
    <SectionWrapper id="agents" className="bg-muted/30">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Meet Your <span className="gradient-text">AI Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Specialized agents working together — each with unique skills, memory, and personality.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {AGENTS.map((agent, index) => (
          <AnimateOnScroll key={agent.name} direction="up" delay={index * 150}>
            <Card className="group relative h-full overflow-hidden border bg-card/50 transition-all hover:shadow-xl hover:shadow-brand/10">
              {/* Gradient accent */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${agent.color}`} />

              <CardContent className="pt-8">
                {/* Agent avatar */}
                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${agent.color} shadow-lg`}>
                  <span className="text-3xl">{agent.emoji}</span>
                </div>

                {/* Agent info */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">{agent.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand">{agent.role}</p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-center">
                  {agent.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {agent.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-brand/10 text-brand hover:bg-brand/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                {agent.name !== "Your Agent" && (
                  <div className="mt-6 text-center">
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:underline">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Connection visualization */}
      <AnimateOnScroll direction="up" delay={200}>
        <div className="mt-16 rounded-2xl border bg-card/50 p-8 text-center">
          <p className="text-lg font-semibold">
            All agents are connected through the{" "}
            <span className="gradient-text">OpenClaw Runtime</span>
          </p>
          <p className="mt-2 text-muted-foreground">
            Share memory, delegate tasks, and collaborate seamlessly across your entire AI workforce.
          </p>
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand/50" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
              <span className="text-sm">⚡</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand/50" />
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
