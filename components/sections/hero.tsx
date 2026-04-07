import Link from "next/link";
import {
  HERO_BADGE,
  HERO_TITLE,
  HERO_SUBTITLE,
  HERO_CTA_PRIMARY,
  HERO_CTA_SECONDARY,
} from "@/lib/constants";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 hero-gradient-bg">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 animate-grid-pulse dark:opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.6 0.18 260 / 0.08) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.6 0.18 260 / 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-brand/20 blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full from-cyan-500/20 to-blue-500/20 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full from-violet-500/20 to-purple-500/20 blur-3xl animate-float-slow" />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-[15%] h-8 w-8 rotate-45 border border-brand/20 animate-rotate-slow" />
        <div className="absolute top-40 left-[10%] h-6 w-6 rounded-full border border-cyan-500/20 animate-float" />
        <div className="absolute bottom-32 right-[20%] h-10 w-10 rounded-lg border border-violet-500/20 animate-float-delayed" />
        <div className="absolute top-1/2 left-[20%] h-4 w-4 rounded-full bg-brand/30 animate-pulse-glow" />
        <div className="absolute bottom-20 left-[15%] h-5 w-5 rotate-12 border border-teal-500/20 animate-float-slow" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <AnimateOnScroll direction="up" delay={0}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-brand" />
            <span className="text-sm font-medium text-muted-foreground">
              {HERO_BADGE}
            </span>
          </div>
        </AnimateOnScroll>

        {/* Main headline */}
        <AnimateOnScroll direction="up" delay={100}>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-foreground">{HERO_TITLE[0]}</span>
            <span className="block gradient-text">{HERO_TITLE[1]}</span>
          </h1>
        </AnimateOnScroll>

        {/* Subtitle */}
        <AnimateOnScroll direction="up" delay={200}>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
            {HERO_SUBTITLE}
          </p>
        </AnimateOnScroll>

        {/* CTA Buttons */}
        <AnimateOnScroll direction="up" delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#pricing"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-brand px-8 text-base font-semibold text-brand-foreground shadow-lg transition-all hover:shadow-xl hover:shadow-brand/25"
            >
              <span className="relative z-10">{HERO_CTA_PRIMARY}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
                {HERO_CTA_PRIMARY}
              </span>
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-base font-semibold transition-all hover:bg-muted hover:shadow-md"
            >
              {HERO_CTA_SECONDARY}
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Stats bar */}
        <AnimateOnScroll direction="up" delay={400}>
          <div className="mx-auto mt-20 flex max-w-2xl flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { value: "6+", label: "Platforms" },
              { value: "24/7", label: "Always On" },
              { value: "100ms", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
